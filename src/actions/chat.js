export const SEND_MESSAGE = 'SEND_MESSAGE';
export const USER_INPUT = 'USER_INPUT';
export const USER_PSEUDO = 'USER_PSEUDO';
export const SEND_PSEUDO = 'SEND_PSEUDO';
export const SET_AUTHOR = 'SET_AUTHOR';
export const TOGGLE_NICKNAME_FIELD = 'TOGGLE_NICKNAME_FIELD';

// const computeNextId = () => {
//   const idArray = messages.map((message) => message.id);
//   const max = Math.max(...idArray);
//   return max + 1;
// };

export const submitMessage = () => ({
  type: SEND_MESSAGE,
});

export const getUserInput = (userInput) => ({
  type: USER_INPUT,
  userInput,
});

export const getUserPseudo = (userPseudo) => ({
  type: USER_PSEUDO,
  userPseudo,
});

export const toggleNicknameField = (nickNameFieldValue) => ({
  type: TOGGLE_NICKNAME_FIELD,
  showNickNameField: !nickNameFieldValue,
});

export const submitUserPseudo = () => ({
  type: SEND_PSEUDO,
});
