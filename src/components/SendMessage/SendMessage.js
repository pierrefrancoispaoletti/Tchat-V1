import React from 'react';
import PropTypes from 'prop-types';
import { Send } from 'react-feather';
import './sendmessage.scss';
import SendMessageButton from './SendMessageButton';

const SendMessage = ({
  submitMessage,
  getUserInput,
  userInput,
  pseudo,
}) => (
  <form
    className="sendMessage"
    onSubmit={(e) => {
      e.preventDefault();
      // eslint-disable-next-line no-unused-expressions
      (userInput !== '' && pseudo !== '') && submitMessage();
    }}
  >
    <input
      className="sendMessage__input"
      type="text"
      placeholder="Envoyer un message..."
      name="sendMessage"
      value={userInput}
      onChange={(e) => getUserInput(e.target.value)}
    />
    <SendMessageButton><Send className="sendMessage__icon" /></SendMessageButton>
  </form>
);

SendMessage.propTypes = {
  pseudo: PropTypes.string.isRequired,
  submitMessage: PropTypes.func.isRequired,
  getUserInput: PropTypes.func.isRequired,
  userInput: PropTypes.string.isRequired,
};

export default SendMessage;
