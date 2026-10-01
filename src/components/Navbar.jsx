import React from 'react';
export const Navbar = () => {
    return (
        <div className=' flex justify-center bg-cyan-800 p-1 text-white'> 
            <ul className='list-none flex gap-4 font-bold cursor-pointer '>
                <li>
                    <a>Catalago</a>
                </li>
                <li>
                    <a>Carrito</a>
                </li>
            </ul>
        </div>
    )
}