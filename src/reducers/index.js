import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../history';
import themeReducer from './theme';

export default combineReducers({
  router: connectRouter(history),
  theme: themeReducer
});
