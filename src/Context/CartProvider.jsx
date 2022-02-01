import React, { useState, useEffect, createContext } from 'react'
import Products from '../assets/static/products'

export const cartContext = createContext()

const CartProvider = ({children}) => {
    
    const products = Products;

    function alertEspacial() {
        alert('alerta desde el context')
    }
    
    return (
        <>
            <cartContext.Provider value={{alertEspacial, products}}>
                {children}
            </cartContext.Provider>
        </>
    );
}
 
export default CartProvider;