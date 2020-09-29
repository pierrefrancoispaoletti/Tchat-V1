import React from 'react';
import PropTypes from 'prop-types';
import './message.scss';

const Message = ({ userPseudo, message }) => {
  if (message !== '') {
    return (
      <div className="message">
        <span className="message__author">{userPseudo}</span>
        <p className="message__content">{message}</p>
      </div>
    );
  }
  return ('');
};

Message.defaultProps = {
  message: '',
};

Message.propTypes = {
  message: PropTypes.string,
};

export default Message;
