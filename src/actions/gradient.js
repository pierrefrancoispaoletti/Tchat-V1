export const SEND_MESSAGE = 'SEND_MESSAGE';
export const USER_INPUT = 'USER_INPUT';
export const USER_PSEUDO = 'USER_PSEUDO';
export const SET_AUTHOR = 'SET_AUTHOR';
export const TOGGLE_NICKNAME_FIELD = 'TOGGLE_NICKNAME_FIELD';

export const submitMessage = (e, userPseudo) => {
  e.preventDefault();
  const userMessage = e.target.querySelector('input').value;
  return ({
    type: SEND_MESSAGE,
    userInput: '',
    message: [{
      author: userPseudo,
      message: userMessage,
    }],
  });
};

export const getUserInput = (e) => ({
  type: USER_INPUT,
  userInput: e.target.value,
});

export const getUserPseudo = (e) => ({
  type: USER_PSEUDO,
  userPseudo: e.target.value,
});

export const toggleNicknameField = (nickNameFieldValue) => ({
  type: TOGGLE_NICKNAME_FIELD,
  showNickNameField: !nickNameFieldValue,
});
