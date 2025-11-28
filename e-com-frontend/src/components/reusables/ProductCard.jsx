import React from 'react';

// Sample function to simulate dynamic image URLs
const getImageUrl = (id) => `https://images.unsplash.com/photo-1579737153406-38d5f3088b9c?q=80&w=2670&auto=format&fit=crop&id=${id}`;

// Sample Product data (You'll replace this with state/props)
const ProductCard = ({ brand, name, price, rating, reviews, imageId }) => {
    const filledStars = Math.round(rating);
    const emptyStars = 5 - filledStars;

    return (
        <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark transition-shadow hover:shadow-lg">
            <div className="aspect-square w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                    className="h-full w-full object-cover object-center transition-transform group-hover:scale-105"
                    alt={`${name} by ${brand}`}
                    src={getImageUrl(imageId)}
                />
            </div>
            <div className="flex flex-1 flex-col p-4">
                <h3 className="text-sm font-medium text-muted-light dark:text-muted-dark">{brand}</h3>
                <p className="mt-1 font-semibold">{name}</p>
                <div className="mt-2 flex items-center gap-1">
                    {[...Array(filledStars)].map((_, i) => (
                        <span key={`filled-${i}`} className="material-symbols-outlined text-yellow-500 text-base!" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                    {[...Array(emptyStars)].map((_, i) => (
                        <span key={`empty-${i}`} className="material-symbols-outlined text-gray-300 dark:text-gray-600 text-base!" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                    <span className="ml-1 text-xs text-muted-light dark:text-muted-dark">({reviews})</span>
                </div>
                <p className="mt-4 text-lg font-bold">${price.toFixed(2)}</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 translate-y-full transform p-4 transition-transform group-hover:translate-y-0">
                <button className="w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-white">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;