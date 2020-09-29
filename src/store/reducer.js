import {
  SEND_MESSAGE,
  TOGGLE_NICKNAME_FIELD,
  USER_INPUT,
  USER_PSEUDO,
} from '../actions/gradient';

const initialState = {
  showNickNameField: false,
  userPseudo: 'AnOnYmOuS',
  messages: [{
    author: '',
    message: '',
  }],
  userInput: '',

};
function reducer(state = initialState, action = {}) {
  const newState = { ...state };
  switch (action.type) {
    case SEND_MESSAGE:
      newState.messages = newState.messages.concat(action.message);
      newState.userInput = action.userInput;
      break;
    case USER_INPUT:
      newState.userInput = action.userInput;
      break;
    case USER_PSEUDO:
      newState.userPseudo = action.userPseudo;
      break;
    case TOGGLE_NICKNAME_FIELD:
      newState.showNickNameField = action.showNickNameField;
      break;

    default:
      break;
  }
  return newState;
}

export default reducer;
