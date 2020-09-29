import React from 'react';
import PropTypes from 'prop-types';
import './nicknamefield.scss';

const NickNameField = ({ getUserPseudo, userPseudo }) => (
  <div className="nickNameField">
    <input className="nickNameField__input" size="10" placeholder="pseudo" value={userPseudo} onChange={getUserPseudo} />
  </div>
);

NickNameField.propTypes = {
  getUserPseudo: PropTypes.func.isRequired,
  userPseudo: PropTypes.string.isRequired,
};

export default NickNameField;
