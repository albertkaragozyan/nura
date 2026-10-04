
"use client";

import { createContext, useContext, useState } from "react";

interface CartItem {
    id: string | number;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

interface Product {
    id: string | number;
    title: string;
    price: number;
    image: string;
}

interface CartContextType {
    cart: CartItem[];
    cartNumber: number;
    addToCart: (product: Product) => void;
    removeFromCart: (id: string | number) => void;
    updateQuantity: (id: string | number, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    function addToCart(product: Product) {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);

            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prev, { ...product, quantity: 1 }];
        });
    }

    function removeFromCart(id: string | number) {
        setCart((prev) => prev.filter((item) => item.id !== id));
    }

    function updateQuantity(id: string | number, quantity: number) {
        if (quantity < 1) return;

        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    }

    const cartNumber = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{ cart, cartNumber, addToCart, removeFromCart, updateQuantity }}
        >
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