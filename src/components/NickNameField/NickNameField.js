import React from 'react';
import PropTypes from 'prop-types';
import './nicknamefield.scss';

const NickNameField = ({ setValue, userPseudo, submitValue }) => (
  <form
    className="nickNameField"
    onSubmit={(e) => {
      e.preventDefault();

      // eslint-disable-next-line no-unused-expressions
      (userPseudo !== '' && submitValue());
    }}
  >
    <input
      className="nickNameField__input"
      size="10"
      placeholder="pseudo"
      value={userPseudo}
      onChange={(e) => setValue(e.target.value)}
    />
  </form>
);

NickNameField.propTypes = {
  submitValue: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  userPseudo: PropTypes.string.isRequired,
};

export default NickNameField;
