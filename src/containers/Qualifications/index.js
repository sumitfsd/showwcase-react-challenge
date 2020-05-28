import { connect } from 'react-redux';
import Qualifications from './Qualifications'
import { addQualification } from './reducer'

const mapStateToProps = ({ user, universities }, { history }) => ({
  userName: user.name,
  universities:universities.list,
  loading:universities.isLoading,
  history,
})


const mapDispatchToProps = {
  addQualification
}

export default connect(mapStateToProps, mapDispatchToProps)(Qualifications);
