import React from 'react';
import { useState } from 'react';
import camaraImg from '../assets/camara.jpg';
import tripieImg from '../assets/tripie.jpg';
import lenteImg from '../assets/lente.jpg';
import microfonoImg from '../assets/microfono.jpg';
import { Catalogo } from './Catalogo';
import { Carrito } from './Carrito';
import { NewProduct } from './newproduct';
export const CatCar = () => {
    const [products, setProducts] = useState([
        {name: "camara", id: 1, quantity: 3, description: "Camara ultima generacion", image: camaraImg}, 
        {name: "tripie", id: 2, quantity: 6, description: "Tripie para camara", image: tripieImg}, 
        {name: "lente", id: 3, quantity: 5, description: "Lente para camara", image: lenteImg}, 
        {name: "microfono", id: 4, quantity: 12, description: "Microfono para camara", image: microfonoImg}
    ]);

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const productInStock = products.find((item) => item.id === product.id);
        if (!productInStock || productInStock.quantity 
            == 0) return;

        setProducts((prevProducts) =>
            prevProducts.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
            )
        );

        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (product) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );

        setProducts((prevProducts) =>
            prevProducts.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };
   
    return (
        <div>
            <NewProduct setProducts={setProducts} />
            <Catalogo products={products} addToCart={addToCart} />
            <Carrito cart={cart} removeFromCart={removeFromCart} />
        </div>
    );
};