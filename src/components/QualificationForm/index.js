import { connect } from 'react-redux';
import QualificationForm from './QualificationForm';

const mapStateToProps = ({ universities }) => ({
  universities: universities.list,
  loading: universities.isLoading,
});

export default connect(mapStateToProps, null)(QualificationForm);
