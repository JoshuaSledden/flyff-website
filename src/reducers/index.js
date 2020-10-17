import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import themeReducer from './theme';

export default history =>
  combineReducers({
    router: connectRouter(history),
    themeReducer
  });
