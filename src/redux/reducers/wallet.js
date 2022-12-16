import {
  ACTION_CURRENCIES, ACTION_ADDINFO, ACTION_DELETE, ACTION_EDIT, ACTION_SAVE,
} from '../actions/actionsTypes';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ACTION_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case ACTION_ADDINFO:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case ACTION_EDIT:
    return {
      ...state,
      idToEdit: action.payload,
      editor: true,
    };
  case ACTION_SAVE:
    return {
      ...state,
      expenses: action.payload,
      editor: false,
    };
  case ACTION_DELETE:
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
