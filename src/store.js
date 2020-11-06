import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import reducers from './reducers';

export const history = createBrowserHistory();

export default createStore(
  reducers(history),
  compose(applyMiddleware(routerMiddleware(history)))
);
