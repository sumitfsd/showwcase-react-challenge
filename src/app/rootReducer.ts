import { combineReducers } from 'redux';
import homePage from '../containers/Homepage/reducer';
import navigation from '../components/Navigation/reducer';
import qualifications from '../containers/Qualifications/reducer';
import universities from '../components/SelectUniversity/reducer';

export default combineReducers({
  user: homePage,
  navigation,
  qualifications,
  universities,
});
