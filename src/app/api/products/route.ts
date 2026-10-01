import { NextResponse } from "next/server";

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

const products: Product[] = [
    { id: 1, price: 399.99, name: "Nuraphone", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" },
    { id: 2, price: 249.99, name: "NuraTrue Pro", image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600" },
    { id: 3, price: 199.99, name: "NuraTrue", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600" },
    { id: 4, price: 199.99, name: "NuraBuds", image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600" },
    { id: 5, price: 199.99, name: "NuraLoop", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" },
    { id: 6, price: 429.99, name: "Nuraphone G2", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" },
    { id: 7, price: 279.99, name: "NuraTrue Pro Black", image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600" },
    { id: 8, price: 279.99, name: "NuraTrue Pro White", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600" },
    { id: 9, price: 219.99, name: "NuraTrue Black", image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600" },
    { id: 10, price: 219.99, name: "NuraTrue White", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600" },
    { id: 11, price: 229.99, name: "NuraBuds Black", image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600" },
    { id: 12, price: 229.99, name: "NuraBuds White", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600" },
    { id: 13, price: 219.99, name: "NuraLoop Black", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" },
    { id: 14, price: 219.99, name: "NuraLoop White", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" },
    { id: 15, price: 449.99, name: "Nuraphone Limited Edition", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" },
    { id: 16, price: 39.99, name: "Nura Ear Tips", image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600" },
    { id: 17, price: 29.99, name: "Nura Silicone Tips", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600" },
    { id: 18, price: 34.99, name: "Nura Foam Tips", image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600" },
    { id: 19, price: 49.99, name: "Nura Charging Case", image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600" },
    { id: 20, price: 59.99, name: "Nura Protective Case", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" },
    { id: 21, price: 24.99, name: "Nura USB-C Cable", image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600" },
    { id: 22, price: 19.99, name: "Nura Charging Cable", image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600" },
    { id: 23, price: 69.99, name: "Nura Travel Case", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600" },
    { id: 24, price: 79.99, name: "Nura Premium Case", image: "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?w=600" },
    { id: 25, price: 89.99, name: "Nura Headphone Stand", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600" },
    { id: 26, price: 499.99, name: "Nura Audio Bundle", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" },
    { id: 27, price: 329.99, name: "NuraTrue Pro Bundle", image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600" },
    { id: 28, price: 269.99, name: "NuraTrue Bundle", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600" },
    { id: 29, price: 289.99, name: "NuraBuds Bundle", image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600" },
    { id: 30, price: 289.99, name: "NuraLoop Bundle", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" },
    { id: 31, price: 459.99, name: "Nura Ultimate Headphones", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" },
    { id: 32, price: 299.99, name: "Nura Premium Earbuds", image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600" },
    { id: 33, price: 249.99, name: "Nura Everyday Earbuds", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600" },
    { id: 34, price: 379.99, name: "Nura Wireless Headphones", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" },
    { id: 35, price: 319.99, name: "Nura Sport Earbuds", image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600" },
    { id: 36, price: 429.99, name: "Nura Studio Headphones", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" },
    { id: 37, price: 259.99, name: "Nura Compact Earbuds", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600" },
    { id: 38, price: 349.99, name: "Nura Wireless Audio Set", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" },
    { id: 39, price: 299.99, name: "Nura Music Edition", image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600" },
    { id: 40, price: 389.99, name: "Nura Premium Audio Set", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" },
    { id: 41, price: 44.99, name: "Nura Replacement Cable", image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600" },
    { id: 42, price: 54.99, name: "Nura Replacement Ear Tips", image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600" },
    { id: 43, price: 64.99, name: "Nura Carrying Pouch", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600" },
    { id: 44, price: 74.99, name: "Nura Travel Kit", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600" },
    { id: 45, price: 99.99, name: "Nura Premium Travel Kit", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600" },
    { id: 46, price: 499.99, name: "Nura Complete Audio Package", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" },
    { id: 47, price: 399.99, name: "Nura Pro Audio Package", image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600" },
    { id: 48, price: 349.99, name: "Nura Everyday Package", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600" },
    { id: 49, price: 549.99, name: "Nura Ultimate Package", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" },
    { id: 50, price: 599.99, name: "Nura Collector Package", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" },
];

export async function GET() {
    return NextResponse.json(products);
}