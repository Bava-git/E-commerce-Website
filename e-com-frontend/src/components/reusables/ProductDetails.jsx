// import React, { useState } from 'react';

// // Mock data for options (would be passed via props)
// const colors = [
//     { name: 'Black', hex: 'bg-black', selected: true },
//     { name: 'Space Gray', hex: 'bg-slate-700', selected: false },
//     { name: 'Brown Leather', hex: 'bg-amber-800', selected: false },
// ];

// const sizes = [
//     { label: 'Small (160mm)', value: 'small' },
//     { label: 'Medium (180mm)', value: 'medium', selected: true },
//     { label: 'Large (200mm)', value: 'large' },
// ];

// const ProductDetails = ({ product }) => {
//     const [quantity, setQuantity] = useState(1);
//     const [selectedColor, setSelectedColor] = useState(colors.find(c => c.selected)?.name);
//     const [selectedSize, setSelectedSize] = useState(sizes.find(s => s.selected)?.value);

//     const handleQuantityChange = (delta) => {
//         setQuantity(prev => Math.max(1, prev + delta));
//     };

//     return (
//         <div className="flex flex-col gap-6">
//             <div className="flex flex-col gap-2">
//                 <h1 className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark sm:text-4xl">
//                     {product.name}
//                 </h1>
//                 <p className="text-base text-text-secondary-light dark:text-text-secondary-dark">
//                     {product.tagline}
//                 </p>

//                 {/* Rating */}
//                 <div className="flex items-center gap-2 pt-2">
//                     <div className="flex items-center text-amber-400">
//                         {/* Full Stars */}
//                         {[...Array(4)].map((_, i) => (
//                             <span key={`full-${i}`} className="material-symbols-outlined fill-1! text-[20px]!">star</span>
//                         ))}
//                         {/* Half Star */}
//                         <span className="material-symbols-outlined text-[20px]!">star_half</span>
//                     </div>
//                     <a className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:underline" href="#reviews">
//                         ({product.reviewCount} reviews)
//                     </a>
//                 </div>
//             </div>

//             {/* Price */}
//             <p className="text-3xl font-semibold text-text-light dark:text-text-dark">
//                 ${product.price.toFixed(2)}
//             </p>

//             <div className="flex flex-col gap-4">
//                 {/* Color Selection */}
//                 <div>
//                     <label className="text-sm font-medium text-text-light dark:text-text-dark" htmlFor="color">Color</label>
//                     <div className="mt-2 flex items-center gap-3">
//                         {colors.map(color => (
//                             <button
//                                 key={color.name}
//                                 className={`size-8 rounded-full ${color.hex} ${selectedColor === color.name
//                                     ? 'ring-2 ring-primary ring-offset-2 ring-offset-background-light dark:ring-offset-background-dark'
//                                     : 'hover:ring-2 hover:ring-primary/50'
//                                     }`}
//                                 onClick={() => setSelectedColor(color.name)}
//                                 aria-label={`Select color ${color.name}`}
//                             ></button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Size Selection */}
//                 <div>
//                     <label className="text-sm font-medium text-text-light dark:text-text-dark" htmlFor="size">Strap Size</label>
//                     <select
//                         className="mt-2 block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-surface-light dark:bg-surface-dark py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
//                         id="size"
//                         value={selectedSize}
//                         onChange={(e) => setSelectedSize(e.target.value)}
//                     >
//                         {sizes.map(size => (
//                             <option key={size.value} value={size.value}>{size.label}</option>
//                         ))}
//                     </select>
//                 </div>
//             </div>

//             {/* Quantity and CTA */}
//             <div className="flex flex-col gap-4 sm:flex-row">
//                 {/* Quantity Control */}
//                 <div className="flex items-center rounded-lg border border-gray-300 dark:border-gray-600">
//                     <button
//                         className="px-3 py-2 text-text-secondary-light dark:text-text-secondary-dark hover:text-text-light dark:hover:text-text-dark rounded-l-lg"
//                         onClick={() => handleQuantityChange(-1)}
//                     >-</button>
//                     <input
//                         className="w-12 border-0 bg-transparent text-center focus:ring-0"
//                         type="text"
//                         value={quantity}
//                         onChange={(e) => setQuantity(Math.max(1, Number(e.target.value) || 1))}
//                     />
//                     <button
//                         className="px-3 py-2 text-text-secondary-light dark:text-text-secondary-dark hover:text-text-light dark:hover:text-text-dark rounded-r-lg"
//                         onClick={() => handleQuantityChange(1)}
//                     >+</button>
//                 </div>

//                 {/* Add to Cart Button */}
//                 <button className="flex flex-1 items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors">
//                     Add to cart
//                 </button>

//                 {/* Wishlist Button */}
//                 <button className="flex h-[52px] w-[52px] items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-surface-dark transition-colors">
//                     <span className="material-symbols-outlined">favorite</span>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;