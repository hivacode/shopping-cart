import { createContext, useContext, useEffect, useReducer } from "react";
import CartReducer from "../reducers/CartReducer";
import axios from "axios";

const cartContext = createContext();
const cartContextDispatcher = createContext();

const initialState = {
  cart: [],
  total: 0,
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer,initialState);
  return (
    <div>
      <cartContext.Provider value={cart}>
        <cartContextDispatcher.Provider value={dispatch}>
          {children}
        </cartContextDispatcher.Provider>
      </cartContext.Provider>
    </div>
  );
};
export const useCart = () => useContext(cartContext);
export const useCartActions = () => useContext(cartContextDispatcher);

export default CartProvider;
