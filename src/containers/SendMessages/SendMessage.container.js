import { connect } from 'react-redux';

import SendMessage from 'src/components/SendMessage/SendMessage';

import { submitMessage, getUserInput } from 'src/actions/gradient';

const mapStateToProps = (state) => ({
  userInput: state.userInput,
  userPseudo: state.userPseudo,
});

const mapDispatchToProps = {
  submitMessage,
  getUserInput,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SendMessage);
