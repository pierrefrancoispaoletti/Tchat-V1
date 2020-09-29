import React from 'react';
import PropTypes from 'prop-types';
import Message from '../../containers/Message/Message.container';
import './chatzone.scss';

const ChatZone = ({ messages }) => (
  <div className="chatzone">
    {messages.map((message, index) => (
      <Message
        key={index}
        {...message}
      />
    ))}
  </div>
);

ChatZone.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChatZone;
