import { connect } from 'react-redux';
import Message from 'src/components/Message/Message';

const mapStateToProps = (state) => ({
  pseudo: state.pseudo,
});

export default connect(
  mapStateToProps,
  null,
)(Message);
