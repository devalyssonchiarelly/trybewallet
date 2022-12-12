import ACTION_EMAIL from './actionsTypes';

const actionEmail = (email) => ({
  type: ACTION_EMAIL,
  payload: email,
});

export default actionEmail;
