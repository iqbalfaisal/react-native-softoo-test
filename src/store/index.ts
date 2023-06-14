import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './reducers/productsReducer';
import basketReducer from './reducers/basketReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  basket: basketReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
