import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import saga from './saga.root';
import root from './reducer.root';
import { TweetStateInterface } from './ducks/tweet/contracts/state';

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
  tweet: TweetStateInterface
}

export const store = createStore(
  root,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga);
