// import React from 'react';

// // Mock data for reviews
// const reviews = [
//     { id: 1, name: 'Sarah L.', rating: 5, comment: "Absolutely stunning watch! The quality is top-notch and it looks even better in person. I've received so many compliments on it.", avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTaE6RxuvoENwHaMNhnqPmUhvgSRjqxh0ZwliYOmk2HzvDeCQ1bGZYRyaj3dpmqs-9hhSzwmadNH4vA9Umitu_P65pMyj2nmZLb3i1oWCJhBWfwCKEMnQAZI3UitQX15Z64NDsXYZuvLWks6n4JVK1d1nQXTykn3URHt_nXcY6zR7JZ04_4tCR7aPmkDxaPdk4Qx-_UJ_lmXGxRsubsRP2Sov0DnqPofpVC73hel4KgWTb87HyMQYP3e82Fi3yMaXhjoLUL-GgrRI' },
//     { id: 2, name: 'Mark C.', rating: 4, comment: "Great watch for the price. The leather is a bit stiff at first but softens up nicely. Very happy with my purchase.", avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrlbxrYt6y-rmPfxN0bxHaWO-jhrUp6IDUrH5XXYB09xad0buEuQ9gC3_GehAaj_sUzs0H36o1OAoXHOkBS2kYIXktTy_sX6mhPqUCAUIaQbR6D0uRasn8nRBU26ZyCCF_JJvJvNiMul3lok1tjHLEY4uSYmimmBDZGWc6-DMqQ_axqRFW4XRjRF-ScaRoY5RfajpfbV4rJi4eM0B25-u4b4Ox5gbylj9meuoA19SLJhG6Wu0p5gbMhK_uKn2sglbDFBxoIZ4fKHg' },
// ];

// const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 !== 0;
//     const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

//     return (
//         <div className="flex items-center text-amber-400">
//             {[...Array(fullStars)].map((_, i) => (
//                 <span key={`full-${i}`} className="material-symbols-outlined !fill-1 !text-[16px]">star</span>
//             ))}
//             {hasHalfStar && <span className="material-symbols-outlined !text-[16px]">star_half</span>}
//             {[...Array(emptyStars)].map((_, i) => (
//                 <span key={`empty-${i}`} className="material-symbols-outlined !text-[16px]">star</span>
//             ))}
//         </div>
//     );
// };

// const ReviewSection = ({ averageRating, totalReviews }) => {
//     return (
//         <div className="pt-12" id="reviews">
//             <div className="flex flex-col gap-4">
//                 <div className="flex items-center justify-between">
//                     <h2 className="text-2xl font-bold tracking-tight">Customer Reviews</h2>
//                     <button className="rounded-lg bg-primary/10 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/20 transition-colors">
//                         Write a review
//                     </button>
//                 </div>

//                 {/* Summary Card */}
//                 <div className="flex flex-col gap-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-surface-light dark:bg-surface-dark p-6 sm:flex-row sm:items-center sm:gap-8">
//                     <div className="flex flex-col items-center">
//                         <p className="text-4xl font-bold">{averageRating.toFixed(1)}</p>
//                         <div className="flex items-center text-amber-400">
//                             {renderStars(averageRating)}
//                         </div>
//                         <p className="mt-1 text-sm text-text-secondary-light dark:text-text-secondary-dark">Based on {totalReviews} reviews</p>
//                     </div>
//                     {/* Progress bars for ratings would go here (omitted for brevity) */}
//                     <div className="w-full flex-1 space-y-2">
//                         {/* Example: <RatingProgressBar rating={5} count={50} total={121} /> */}
//                         <p className='text-xs text-text-secondary-light dark:text-text-secondary-dark'>[Rating distribution chart placeholder]</p>
//                     </div>
//                 </div>

//                 {/* Individual Reviews */}
//                 <div className="space-y-8">
//                     {reviews.map(review => (
//                         <div key={review.id} className="flex gap-4">
//                             <img alt={`${review.name}'s avatar`} className="h-10 w-10 rounded-full" src={review.avatar} />
//                             <div className="flex-1">
//                                 <div className="flex items-center gap-2">
//                                     <h4 className="font-semibold">{review.name}</h4>
//                                     {renderStars(review.rating)}
//                                 </div>
//                                 <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-2">
//                                     {review.comment}
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ReviewSection;