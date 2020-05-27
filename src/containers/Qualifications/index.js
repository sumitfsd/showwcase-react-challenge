import { connect } from 'react-redux';
import Homepage from './Homepage'

const mapStateToProps = ({ user }, { history }) => ({
  userName: user.name,
  history
})


const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, null)(Homepage);
