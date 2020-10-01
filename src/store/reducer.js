import {
  SEND_MESSAGE,
  SEND_PSEUDO,
  TOGGLE_NICKNAME_FIELD,
  USER_INPUT,
  USER_PSEUDO,
} from '../actions/chat';

const initialState = {
  showNickNameField: false,
  pseudo: 'Utilisateur_anonyme',
  userPseudo: '',
  messages: [],
  userInput: '',
};
function reducer(state = initialState, action = {}) {
  const newState = { ...state };
  switch (action.type) {
    case SEND_MESSAGE: {
      const ids = state.messages.map((message) => message.id);
      let idMax = 0;
      if (ids.length > 0) {
        idMax = Math.max(...ids);
      }
      const message = {
        id: idMax + 1,
        author: state.pseudo,
        message: state.userInput,
        isMine: true,
      };
      const newMessagesArray = [
        ...state.messages,
        message,
      ];
      newState.messages = newMessagesArray;
      newState.userInput = '';
    }
      break;
    case USER_INPUT:
      newState.userInput = action.userInput;
      break;
    case SEND_PSEUDO: {
      const newMessages = state.messages.map((message) => {
        if (message.isMine) {
          return {
            ...message,
            author: state.userPseudo,
          };
        }
        return message;
      });
      newState.pseudo = state.userPseudo;
      newState.messages = newMessages;
      newState.userPseudo = '';
    }
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
