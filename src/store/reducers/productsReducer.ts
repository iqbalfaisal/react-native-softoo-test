import {FETCH_PRODUCTS} from '../actions';
import {Product} from '../../types';

const initialState: Product[] = [];

const productsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload;

    default:
      return state;
  }
};

export default productsReducer;
