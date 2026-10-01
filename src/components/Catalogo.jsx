import React from 'react';
export const Catalogo = ({ products, addToCart }) => {
    return (
        <div className="flex flex-wrap justify-center items-center">
            {products.map((product) => (
                <div key={product.id} className="gap-1 shadow-gray-700 border border-s-gray-800 w-1/3 p-2 m-2 flex items-center flex-col justify-center">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="mb-2 h-32 w-full rounded-md object-cover"
                    />
                    <h3> {product.name} </h3>
                    <span> {product.description} </span>
                    <span> Quantity: {product.quantity} </span>
                    <button
                        onClick={() => addToCart(product)}
                        className="bg-cyan-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-cyan-800 transition-colors duration-200"
                    >
                        Agregar al carrito
                    </button>
                </div>
            ))}
        </div>
    );
};