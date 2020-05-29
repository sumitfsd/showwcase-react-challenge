import { connect } from 'react-redux';
import SelectUniversity from './selectUniversity';
import { getUniversities } from './reducer';

const mapStateToProps = ({ history, universities }) => ({
  history,
  universities: universities.list,
  loading: universities.loading,
});

const mapDispatchToProps = {
  getUniversities,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectUniversity);
