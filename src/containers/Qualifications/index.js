import { connect } from 'react-redux';
import Qualifications from './Qualifications'

const mapStateToProps = ({ user }, { history }) => ({
  userName: user.name,
  history
})


const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, null)(Qualifications);
