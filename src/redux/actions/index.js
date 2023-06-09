import {
  ACTION_EMAIL, ACTION_CURRENCIES, ACTION_ADDINFO, ACTION_DELETE,
  ACTION_EDIT, ACTION_SAVE,
} from './actionsTypes';

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

export const actionDeleteInfo = (info) => ({
  type: ACTION_DELETE,
  payload: info,
});

export const actionEditInfo = (info) => ({
  type: ACTION_EDIT,
  payload: info,
});

export const actionSaveInfo = (info) => ({
  type: ACTION_SAVE,
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
