import React from 'react';

// Sample function to simulate dynamic image URLs
const getImageUrl = (id) => `https://images.unsplash.com/photo-1627992921946-88062968393e?q=80&w=2670&auto=format&fit=crop&id=${id}`;

const CartItem = ({ product, onDelete, onUpdateQuantity }) => {
    // Note: In a real app, product details would come from props/state
    const { id, name, details, price, quantity, imageId } = product;
    const itemTotal = price * quantity;

    return (
        <div className="flex gap-4 bg-white dark:bg-gray-900 px-6 py-5 justify-between items-center">
            <div className="flex items-start gap-4 grow">
                {/* Product Image */}
                <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg h-24 w-24 shrink-0"
                    style={{ backgroundImage: `url('${getImageUrl(imageId)}')` }}
                />
                <div className="flex flex-1 flex-col justify-center gap-1">
                    <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">{name}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">{details}</p>
                    {/* Price for mobile view */}
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal md:hidden">${price.toFixed(2)}</p>
                </div>
            </div>

            {/* Price (Desktop) */}
            <div className="hidden md:block text-center shrink-0">
                <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">${price.toFixed(2)}</p>
            </div>

            {/* Quantity Controls */}
            <div className="shrink-0">
                <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                    <button
                        className="text-base font-medium leading-normal flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                        onClick={() => onUpdateQuantity(id, quantity - 1)}
                    >-</button>
                    <input
                        className="text-base font-medium leading-normal w-8 p-0 text-center bg-transparent focus:outline-0 focus:ring-0 focus:border-none border-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        type="number"
                        value={quantity}
                        readOnly // Quantity should be controlled by buttons
                    />
                    <button
                        className="text-base font-medium leading-normal flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                        onClick={() => onUpdateQuantity(id, quantity + 1)}
                    >+</button>
                </div>
            </div>

            {/* Total Price (Desktop) */}
            <div className="hidden md:block text-center font-bold text-lg text-gray-900 dark:text-white w-20 shrink-0">
                ${itemTotal.toFixed(2)}
            </div>

            {/* Delete Button */}
            <button
                className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-500 p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900/50 shrink-0"
                onClick={() => onDelete(id)}
            >
                <span className="material-symbols-outlined text-xl!">delete</span>
            </button>
        </div>
    );
};

export default CartItem;