import { combineReducers } from 'redux';
import homePage from '../containers/Homepage/reducer';
import navigation from '../components/Navigation/reducer'
import qualification from '../containers/Qualifications/reducer'

export default combineReducers({
  user: homePage,
  navigation,
  qualification
});
