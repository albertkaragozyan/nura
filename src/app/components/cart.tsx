"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "./CartContext";

export default function Cart() {
    const [isOpen, setIsOpen] = useState(false);
    const { cart, cartNumber, removeFromCart, updateQuantity } = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return (
        <>
            <button onClick={() => setIsOpen(true)} className="relative text-white">Cart<span className="absolute -top-3 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs">{cartNumber}</span></button>
            <div onClick={() => setIsOpen(false)} className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`} />
            <div className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-[400px] flex-col bg-[#111] text-white shadow-2xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex items-center justify-between border-b border-white/10 p-5">
                    <h2 className="text-2xl font-bold">Your Cart ({cartNumber})</h2>
                    <button onClick={() => setIsOpen(false)} className="text-2xl text-gray-400 hover:text-white">✕</button>
                </div>
                <div className="flex-1 space-y-5 overflow-y-auto p-5">
                    {cart.length === 0 ? (
                        <p className="mt-10 text-center text-gray-400">Your cart is empty.</p>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className="flex gap-4 border-b border-white/10 pb-5">
                                <Image src={item.image} alt={item.title} width={85} height={85} className="h-[85px] w-[85px] rounded-xl object-cover" />
                                <div className="flex flex-1 flex-col gap-2">
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <p className="text-blue-400">${item.price}</p>
                                    <div className="flex items-center gap-3">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="rounded bg-white/10 px-2">-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="rounded bg-white/10 px-2">+</button>
                                        <button onClick={() => removeFromCart(item.id)} className="ml-auto text-sm text-red-400">Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="border-t border-white/10 p-5">
                    <div className="mb-4 flex justify-between text-lg">
                        <span>Total</span>
                        <span className="font-bold">
                            ${totalPrice.toFixed(2)}
                        </span>
                    </div>
                    <button disabled={cart.length === 0} className="w-full rounded-full bg-[#3333F5] py-3 font-semibold transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-40">Checkout →</button>
                </div>
            </div>
        </>
    );
}