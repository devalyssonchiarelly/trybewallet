import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestApi, actionAddInfo, actionSaveInfo } from '../redux/actions';
import fetchApi from '../fetchApi';

class WalletForm extends Component {
  state = {
    id: 0,
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    exchangeRates: {},
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(requestApi());
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(({
      [name]: value,
    }));
  };

  handleIdValue = async () => {
    const { dispatch } = this.props;
    const data = await fetchApi();
    this.setState((prevState) => ({
      id: prevState.id,
      exchangeRates: data,
    }), () => {
      dispatch(actionAddInfo(this.state));
      this.setState((prevState) => ({
        id: prevState.id + 1,
        value: '',
        description: '',
      }));
    });
  };

  editValues = () => {
    const { expenses, dispatch, idEdit } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const objectInfo = expenses.map((expense) => {
      if (expense.id === idEdit) {
        return {
          ...expense,
          value,
          description,
          currency,
          method,
          tag,
        };
      }
      return expense;
    });
    dispatch(actionSaveInfo(objectInfo));
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies, editing } = this.props;
    return (
      <div>
        <input
          type="number"
          name="value"
          id="value"
          value={ value }
          data-testid="value-input"
          placeholder="Valor da despesa"
          onChange={ this.handleChange }
        />
        <input
          type="text"
          name="description"
          id="description"
          value={ description }
          data-testid="description-input"
          placeholder="Descrição da despesa"
          onChange={ this.handleChange }
        />
        <select
          name="currency"
          id="currency"
          value={ currency }
          data-testid="currency-input"
          onChange={ this.handleChange }
        >
          {
            currencies.map((currencie, index) => (
              <option key={ index }>{currencie}</option>
            ))
          }
        </select>
        <select
          name="method"
          id="method"
          value={ method }
          data-testid="method-input"
          onChange={ this.handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select
          name="tag"
          id="tag"
          value={ tag }
          data-testid="tag-input"
          onChange={ this.handleChange }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
        <button
          type="button"
          onClick={ (editing ? this.editValues : this.handleIdValue) }
        >
          {editing ? 'Editar despesa' : 'Adicionar despesa'}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  editing: state.wallet.editor,
  idEdit: state.wallet.idToEdit,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf().isRequired,
  idEdit: PropTypes.number.isRequired,
  editing: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
