import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { userEmail, expenses } = this.props;
    return (
      <div>
        <p data-testid="email-field">{ userEmail }</p>
        <p data-testid="total-field">
          {(expenses.reduce((acc, curr) => acc + curr.value
          * curr.exchangeRates[curr.currency].ask, 0)).toFixed(2)}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf().isRequired,
};
export default connect(mapStateToProps)(Header);
