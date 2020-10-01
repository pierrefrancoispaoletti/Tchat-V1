// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { PlusCircle, XCircle } from 'react-feather';
import ToggleButton from '../../containers/ToggleButton/ToggleButton.container';
import ChatZone from '../../containers/ChatZone/ChatZone.container';
import SendMessage from '../../containers/SendMessages/SendMessage.container';
import NickNameField from '../../containers/NickNameField/NickNameField.container';

import './styles.css';

// == Composant
const App = ({ showNickNameField }) => (
  <div className="app">
    <ChatZone />
    <ToggleButton>
      { !showNickNameField ? <PlusCircle /> : <XCircle /> }
    </ToggleButton>
    {showNickNameField
      && <NickNameField />}
    <SendMessage />
  </div>
);

App.propTypes = {
  showNickNameField: PropTypes.bool.isRequired,
};

export default App;
