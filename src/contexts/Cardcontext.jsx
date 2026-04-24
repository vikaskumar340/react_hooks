import { createContext, useContext, useState } from "react";
const CartContxt = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prev) => {
            let existing = prev.find((item) => item.id === product.id);
            if(existing) {
                return prev.map((item) => item.id === product.id ? {...item, qty: item.qty + 1 } : {...item} );
            }
            return [...prev, {...product, qty : 1}];
        });
    }

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    }

    const updateQty = (id, qty) => {
        console.log({id, qty});
        setCart((prev) => 
            prev.map((item) => (item.id === id ? {...item, qty} : item ))
        );
    }

    const grandTotal = cart.reduce(( sum, item) => sum + item.price * item.qty, 0);

    return (
        <CartContxt.Provider value={{cart, setCart, addToCart, removeFromCart, updateQty, grandTotal}}>
            {children}
        </CartContxt.Provider>
    )
}

// custom hook 
export const useCart = () => useContext(CartContxt);