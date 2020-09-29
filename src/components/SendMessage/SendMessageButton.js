import React from 'react';
import PropTypes from 'prop-types';

const SendMessageButton = ({ children }) => (
  <button className="sendMessage__button" type="submit">
    {children}
  </button>
);

SendMessageButton.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SendMessageButton;
