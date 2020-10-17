import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import reducers from './reducers';

export const history = createBrowserHistory();

export default createStore(
  reducers(history),
  applyMiddleware(routerMiddleware(history))
);
