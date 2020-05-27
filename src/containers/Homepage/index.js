import { connect } from 'react-redux';
import Homepage from './Homepage'
import { setName } from './reducer'

const mapStateToProps = ({ user }, { history }) => ({
  userName: user.name,
  history
})

const mapDispatchToProps = dispatch => ({
  setUserName: (name) => dispatch(setName(name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
