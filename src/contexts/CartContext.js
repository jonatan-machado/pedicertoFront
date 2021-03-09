import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, setState] = useState({ name: 'leonam' });

  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
