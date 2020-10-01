import { connect } from 'react-redux';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  showNickNameField: state.showNickNameField,
});

export default connect(
  mapStateToProps,
  null,
)(App);
