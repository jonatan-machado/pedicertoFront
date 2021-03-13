import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('userData'));
  const token = JSON.parse(localStorage.getItem('userToken'));

  const [cartItems, setCartItems] = useState([]);

  const addOrderToCart = (order) => {
    const newItem = { ...order, id: cartItems.length + 1 };
    cartItems.unshift(newItem);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addOrderToCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);

  if (!context) throw new Error('useCart must be used within a CartContextProvider');
  const { cartItems, setCartItems, addOrderToCart } = context;

  return { cartItems, setCartItems, addOrderToCart };
}

export default CartContextProvider;
