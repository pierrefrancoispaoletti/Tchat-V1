import { connect } from 'react-redux';
import ChatZone from 'src/components/ChatZone/ChatZone';

const mapStateToProps = (state) => ({
  messages: state.messages,
});

export default connect(
  mapStateToProps,
  null,
)(ChatZone);
