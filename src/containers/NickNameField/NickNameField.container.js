import { connect } from 'react-redux';

import NickNameField from 'src/components/NickNameField/NickNameField';

import { getUserPseudo, submitUserPseudo } from 'src/actions/chat';

const mapStateToProps = (state) => ({
  userPseudo: state.userPseudo,
});

const mapDispatchToProps = (dispatch) => ({
  setValue: (inputPseudo) => {
    dispatch(getUserPseudo(inputPseudo));
  },
  submitValue: () => {
    dispatch(submitUserPseudo());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NickNameField);
