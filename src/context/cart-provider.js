import { useReducer } from "react";
import CartContext from "./cart-context";

const initialState = {
  items: [],
  totalAmount: 0,
};

const CartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItem = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingCartIndex = state.items.findIndex((item) => item.id === action.item.id);
    const existingItem = state.items[existingCartIndex];
    let updatedItems;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
      const existingCartIndex = state.items.findIndex((item) => item.id === action.id);
      const existingItem = state.items[existingCartIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;
      if(existingItem.amount === 1) {
          updatedItems = state.items.filter(item => item.id !== action.id)
      } else {
          const updatedItem = {...existingItem, amount: existingItem.amount - 1 }
          updatedItems = [...state.items];
          updatedItems[existingCartIndex] = updatedItem
      }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return initialState;
};
const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(CartReducer, initialState);
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};

export default CartProvider;
