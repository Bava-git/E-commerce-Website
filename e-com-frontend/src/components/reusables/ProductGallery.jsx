// import React, { useState } from 'react';

// // Utility to simulate image URLs
// const getImageUrl = (id) => `https://images.unsplash.com/photo-1542496658-e3d8f6d14876?q=80&w=2940&auto=format&fit=crop&id=${id}`;

// const ProductGallery = ({ images }) => {
//     // In a real application, you'd manage the selected image index here
//     const [selectedImageId, setSelectedImageId] = useState(images[0]?.id);

//     const mainImage = images.find(img => img.id === selectedImageId) || images[0];

//     return (
//         <div className="flex flex-col gap-4">
//             {/* Main Image */}
//             <div
//                 className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl bg-gray-100 dark:bg-surface-dark"
//                 style={{ backgroundImage: `url("${getImageUrl(mainImage.id)}")` }}
//                 data-alt={mainImage.alt}
//             />

//             {/* Thumbnail Gallery */}
//             <div className="grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-4">
//                 {images.map((image) => (
//                     <div key={image.id} className="flex flex-col">
//                         <div
//                             className={`w-full cursor-pointer bg-center bg-no-repeat aspect-square bg-cover rounded-lg transition-all bg-gray-100 dark:bg-surface-dark ${image.id === selectedImageId
//                                     ? 'ring-2 ring-primary'
//                                     : 'hover:ring-2 hover:ring-primary/50'
//                                 }`}
//                             style={{ backgroundImage: `url("${getImageUrl(image.id)}")` }}
//                             data-alt={image.alt}
//                             onClick={() => setSelectedImageId(image.id)}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ProductGallery;