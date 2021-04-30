import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productReducer from './reducers/product';

const rootReducer = combineReducers({
  products: productReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
