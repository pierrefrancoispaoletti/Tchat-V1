// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { PlusCircle, XCircle } from 'react-feather';
import ToggleButton from '../ToggleButton/ToggleButton';
import ChatZone from '../../containers/ChatZone/ChatZone.container';
import SendMessage from '../../containers/SendMessages/SendMessage.container';
import NickNameField from '../../containers/NickNameField/NickNameField.container';

import './styles.css';

// == Composant
const App = ({ showNickNameField, toggleNicknameField }) => (
  <div className="app">
    <ChatZone />
    <ToggleButton
      showNickNameField={showNickNameField}
      toggleNicknameField={toggleNicknameField}
    >
      { !showNickNameField ? <PlusCircle /> : <XCircle /> }
    </ToggleButton>
    {showNickNameField
      && <NickNameField />}
    <SendMessage />
  </div>
);

App.propTypes = {
  showNickNameField: PropTypes.bool.isRequired,
  toggleNicknameField: PropTypes.func.isRequired,
};

export default App;
