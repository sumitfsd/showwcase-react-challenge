import { connect } from 'react-redux';
import Homepage from './Homepage'
import { setName } from './reducer'

const mapStateToProps = state => ({
  userName: state.user.name
})

const mapDispatchToProps = dispatch => ({
  setUserName: (name) => dispatch(setName(name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
