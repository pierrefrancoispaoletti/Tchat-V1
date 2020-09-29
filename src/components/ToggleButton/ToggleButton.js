import React from 'react';
import PropTypes from 'prop-types';

import './togglebutton.scss';

const ToggleButton = ({ children, toggleNicknameField, showNickNameField }) => (
  <button
    className="toggleButton"
    type="button"
    onClick={() => toggleNicknameField(showNickNameField)}
  > {children}
  </button>
);

ToggleButton.propTypes = {
  children: PropTypes.element.isRequired,
  toggleNicknameField: PropTypes.func.isRequired,
  showNickNameField: PropTypes.bool.isRequired,
};

export default ToggleButton;
