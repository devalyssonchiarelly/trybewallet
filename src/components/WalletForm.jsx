import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestApi } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(requestApi());
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <input
          type="number"
          name="expense-amount"
          id="expense-amount"
          data-testid="value-input"
          placeholder="Valor da despesa"
        />
        <input
          type="text"
          name="description"
          id="description"
          data-testid="description-input"
          placeholder="Descrição da despesa"
        />
        <select
          name=""
          id=""
          data-testid="currency-input"
        >
          {
            currencies.map((currencie, index) => (
              <option key={ index }>{currencie}</option>
            ))
          }
          ;
        </select>
        <select
          name=""
          id=""
          data-testid="method-input"
        >
          <option value="">Dinheiro</option>
          <option value="">Cartão de crédito</option>
          <option value="">Cartão de débito</option>
        </select>
        <select
          name=""
          id=""
          data-testid="tag-input"
        >
          <option value="">Alimentação</option>
          <option value="">Lazer</option>
          <option value="">Trabalho</option>
          <option value="">Transporte</option>
          <option value="">Saúde</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
