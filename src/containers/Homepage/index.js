import { connect } from "react-redux";
import Homepage from './Homepage'


const mapStateToProps = state => {
  return {
    state
  };
};


const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
