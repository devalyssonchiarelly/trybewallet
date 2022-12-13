import { ACTION_EMAIL } from '../actions/actionsTypes';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ACTION_EMAIL:
    return action.payload;
  default:
    return state;
  }
};

export default user;
