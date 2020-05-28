import { combineReducers } from 'redux';
import homePage from '../containers/Homepage/reducer';
import navigation from '../components/Navigation/reducer'
import qualification from '../containers/Qualifications/reducer'
import universities from '../components/SelectUniversity/reducer'

export default combineReducers({
  user: homePage,
  navigation,
  qualification,
  universities
});
