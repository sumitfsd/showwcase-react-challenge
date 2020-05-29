import { connect } from 'react-redux';
import Homepage from './Homepage'
import { setName } from './reducer'

const mapStateToProps = ({ user, navigation }, { history }) => ({
  userName: user.name,
  history,
  isCollapsed: navigation.isCollapsed
})

const mapDispatchToProps = dispatch => ({
  setUserName: (name) => dispatch(setName(name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
