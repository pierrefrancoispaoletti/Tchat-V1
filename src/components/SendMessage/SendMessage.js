import React from 'react';
import PropTypes from 'prop-types';
import { Send } from 'react-feather';
import './sendmessage.scss';
import SendMessageButton from './SendMessageButton';

const SendMessage = ({
  submitMessage,
  getUserInput,
  userInput,
  userPseudo,
}) => (
  <form className="sendMessage" onSubmit={(e) => submitMessage(e, userPseudo)}>
    <input
      className="sendMessage__input"
      type="text"
      placeholder="Envoyer un message..."
      name="sendMessage"
      value={userInput}
      onChange={getUserInput}
    />
    <SendMessageButton><Send className="sendMessage__icon" /></SendMessageButton>
  </form>
);

SendMessage.propTypes = {
  userPseudo: PropTypes.string.isRequired,
  submitMessage: PropTypes.func.isRequired,
  getUserInput: PropTypes.func.isRequired,
  userInput: PropTypes.string.isRequired,
};

export default SendMessage;
