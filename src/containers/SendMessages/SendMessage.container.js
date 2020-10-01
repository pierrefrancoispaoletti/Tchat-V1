import { connect } from 'react-redux';

import SendMessage from 'src/components/SendMessage/SendMessage';

import { submitMessage, getUserInput } from 'src/actions/chat';

const mapStateToProps = (state) => ({
  userInput: state.userInput,
  pseudo: state.pseudo,
});

const mapDispatchToProps = {
  submitMessage,
  getUserInput,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SendMessage);
