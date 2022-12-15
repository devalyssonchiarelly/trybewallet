import { ACTION_EMAIL, ACTION_CURRENCIES, ACTION_ADDINFO } from './actionsTypes';

export const actionEmail = (email) => ({
  type: ACTION_EMAIL,
  payload: email,
});

const actionCurrencies = (currencie) => ({
  type: ACTION_CURRENCIES,
  payload: currencie,
});

const actionAddInfos = (info) => ({
  type: ACTION_ADDINFO,
  payload: info,
});

export const requestApi = () => async (dispatch) => {
  const responseApi = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await responseApi.json();
  const currencies = Object.keys(data);
  const newCurrencies = currencies.filter((currencie) => currencie !== 'USDT');
  dispatch(actionCurrencies(newCurrencies));
};

export const actionAddInfo = (state) => async (dispatch) => {
  dispatch(actionAddInfos(state));
};
