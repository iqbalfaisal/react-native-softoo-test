import {Product, BasketItem} from '../types';
import {fetchProducts as apiFetchProducts} from '../services/Api';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
export const ADD_ITEM_TO_BASKET = 'ADD_ITEM_TO_BASKET';
export const REMOVE_ITEM_FROM_BASKET = 'REMOVE_ITEM_FROM_BASKET';
export const EDIT_QUANTITY = 'EDIT_QUANTITY';

export const fetchProducts = () => async (dispatch: any) => {
  try {
    const products = await apiFetchProducts();
    dispatch({type: FETCH_PRODUCTS, payload: products});
  } catch (error: any) {
    dispatch({type: FETCH_PRODUCTS_ERROR, payload: error.message});
  }
};

export const addItemToBasket = (item: Product) => ({
  type: ADD_ITEM_TO_BASKET,
  payload: item,
});

export const removeItemFromBasket = (item: BasketItem) => ({
  type: REMOVE_ITEM_FROM_BASKET,
  payload: item,
});

export const editQuantity = (item: BasketItem, quantity: number) => ({
  type: EDIT_QUANTITY,
  payload: {item, quantity},
});
