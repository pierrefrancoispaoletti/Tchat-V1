import { connect } from 'react-redux';

import ToggleButton from 'src/components/ToggleButton/ToggleButton';

import { toggleNicknameField } from 'src/actions/chat';

const mapStateToProps = (state) => ({
  showNickNameField: state.showNickNameField,
});
const mapDispatchToProps = {
  toggleNicknameField,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToggleButton);
