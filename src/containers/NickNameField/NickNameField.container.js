import { connect } from 'react-redux';

import NickNameField from 'src/components/NickNameField/NickNameField';

import { getUserPseudo } from 'src/actions/gradient';

const mapStateToProps = (state) => ({
  userPseudo: state.userPseudo,
});

const mapDispatchToProps = {
  getUserPseudo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NickNameField);
