import React, { createContext, useState, useContext, useEffect } from 'react';

const user = {
  id: '4bae133e-2e7d-4234-a357-f56ec53dad95',
  name: 'Restaurante',
  email: 'restaurante@email.com',
  created_at: '2021-03-24T23:05:34.950Z',
  updated_at: '2021-03-24T23:05:34.950Z'
};
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(user));
  });

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
