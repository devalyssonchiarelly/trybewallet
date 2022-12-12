import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actionEmail from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    senha: '',
    isDisable: true,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(({
      [name]: value,
    }), this.validationInputs);
  };

  validationInputs = () => {
    const { email, senha } = this.state;
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/i;
    const regexText = regexEmail.test(email);
    const numberValidation = 5;
    const passwordValidation = senha.length > numberValidation;
    const validation = regexText && passwordValidation;
    this.setState({
      isDisable: !validation,
    });
  };

  onClickButton = () => {
    const { history, dispatch } = this.props;
    const { email } = this.state;

    dispatch(actionEmail({ email }));
    history.push('/carteira');
  };

  render() {
    const { email, senha, isDisable } = this.state;
    return (
      <div>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          data-testid="email-input"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          type="password"
          name="senha"
          id="senha"
          placeholder="Digite sua senha"
          data-testid="password-input"
          value={ senha }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ isDisable }
          onClick={ this.onClickButton }
        >
          Entrar

        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};
export default connect()(Login);
