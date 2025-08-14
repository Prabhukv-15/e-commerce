import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);




// import { Children, createContext, useContext, useState } from "react";

// const cartContext = createContext();
// export const CartProvider = ({children})=>{
//     const[cart, setCart] = useState([]);
//     const addToCart = (item) =>{
  // console.log(addToCart);
//         setCart((prev)=> [...prev,item]);
//     }

// return(
//     <cartContext.Provider value={{cart,addToCart}}>
//         {children}
//     </cartContext.Provider>
// )}

// export const useCart = ()=> useContext(cartContext);    