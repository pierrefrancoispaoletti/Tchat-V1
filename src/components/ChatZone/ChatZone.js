import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Message from '../../containers/Message/Message.container';
import './chatzone.scss';

const ChatZone = ({ messages }) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(scrollToBottom, [messages]);

  return (
    <div className="chatzone">
      {messages.map((message) => (
        <Message
          key={message.id === undefined ? 0 : message.id}
          {...message}
        />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

ChatZone.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChatZone;
