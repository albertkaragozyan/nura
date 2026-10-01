"use client";

import { createContext, useContext, useState } from "react";

interface CartContextType {
    cartNumber: number;
    addToCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cartNumber, setCartNumber] = useState(0);

    function addToCart() {
        setCartNumber((prev) => prev + 1);
    }

    return (
        <CartContext.Provider value={{ cartNumber, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used inside CartProvider");
    }

    return context;
}