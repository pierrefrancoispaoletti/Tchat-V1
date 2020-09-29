import { connect } from 'react-redux';

import App from 'src/components/App';

import { toggleNicknameField } from 'src/actions/gradient';

const mapStateToProps = (state) => ({
  showNickNameField: state.showNickNameField,
});
const mapDispatchToProps = {
  toggleNicknameField,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
