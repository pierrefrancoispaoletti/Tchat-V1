import { connect } from 'react-redux';
import Message from 'src/components/Message/Message';

const mapStateToProps = (state) => ({
  userPseudo: state.userPseudo,
});

export default connect(
  mapStateToProps,
  null,
)(Message);
