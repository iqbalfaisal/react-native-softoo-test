import {
  ADD_ITEM_TO_BASKET,
  REMOVE_ITEM_FROM_BASKET,
  EDIT_QUANTITY,
} from '../actions';
import {Product, BasketItem} from '../../types';

const initialState: BasketItem[] = [];

const basketReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_ITEM_TO_BASKET: {
      const item = action.payload as Product;
      const existingItem = state.find(basketItem => basketItem.id === item.id);
      if (existingItem) {
        return state.map(basketItem =>
          basketItem.id === item.id
            ? {...basketItem, quantity: basketItem.quantity + 1}
            : basketItem,
        );
      } else {
        const newItem: BasketItem = {...item, quantity: 1};
        return [...state, newItem];
      }
    }

    case REMOVE_ITEM_FROM_BASKET: {
      const item = action.payload as BasketItem;

      return state.filter(basketItem => basketItem.id !== item.id);
    }

    case EDIT_QUANTITY: {
      const item = action.payload.item as BasketItem;
      const quantity = action.payload.quantity as number;

      return state.map(basketItem =>
        basketItem.id === item.id ? {...basketItem, quantity} : basketItem,
      );
    }

    default:
      return state;
  }
};

export default basketReducer;
