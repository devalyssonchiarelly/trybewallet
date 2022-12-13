import { ACTION_EMAIL, ACTION_CURRENCIES } from './actionsTypes';

export const actionEmail = (email) => ({
  type: ACTION_EMAIL,
  payload: email,
});

const actionCurrencies = (currencie) => ({
  type: ACTION_CURRENCIES,
  payload: currencie,
});

export const requestApi = () => async (dispatch) => {
  const responseApi = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await responseApi.json();
  const currencies = Object.keys(data);
  const newCurrencies = currencies.filter((currencie) => currencie !== 'USDT');
  dispatch(actionCurrencies(newCurrencies));
};
