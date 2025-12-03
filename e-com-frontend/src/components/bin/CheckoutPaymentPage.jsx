// import React, { useState } from 'react';

// // --- Mock Data & Constants ---

// const mockOrderSummary = {
//     subtotal: 249.00,
//     shipping: 10.00,
//     taxes: 20.75,
//     total: 279.75,
// };

// const cardLogos = [
//     { alt: "Visa logo", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmPm45SqF22XPCVP1gaWqVYaGyssFJre8gXFulj9jhGNnqMHnKeCc4JKJEFtsr4ya4eeW8xdzNEaSy_UqDQct7K996dPuAW5D9V5RPsm52dau2koqH3_2NunGMuSYjmAohl0V8ZOoSUIyjJMzx4Wn1CbkktRHmPnbk2kgkuuVALjwYoRwsy_R3rGYPGxbn3hFYujBLm0wSEmRcupNOxfjBbFcoNFiPxh__nAw1OQWFLcQ5iPz4TAg3Og8AnlN0DmMxF_njRBLKtyo" },
//     { alt: "Mastercard logo", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuApOrN6MhfX6yvrkyfjSRqCHoTvyFco3ESDpYfIxNWj6YXnicinW8GpRMfmwTtDUtXtgQqHxUJSyO3jRdZ1FqYoVmK79hiYcp1VfkfMvjKprcOMiK2E58EVcNwd6vuNcFzbNQMv5Ea-xx5iQCBrjWdzgnXMsJhLOs-OwNNVHpHe9AguPdK09jiuZ00GmVUwIs1F3QqW_VjpFVlK0joqbJ9pK32PVbmyH8GuTAYt_o7yUJCdCDG8xMgKFljBlW81BLBpHDkPaM7sWJ4" },
//     { alt: "American Express logo", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQzyW2fqxW9QidrYzetJdDCoCWIGQi54T1FcnhekMghcbKKb__SPzh_-S5-J8ndY8VQRvYxDZ15HEmAJGOu_RzNAnDFkjeGwwykyHzRD3qnAJWocGFYImY4bT3SxhmmfVWABf-B6Y0TNdK5nTFOMHr2TMwdvRqsEDbslMMsb61e6pzdfsIwv8zZPmnKBj5Z8-DXCGWWblfOXbitNotZ13XZJE__4VnB8zXBrG5BJm5EeMXR6k1oeNPdzp3eiafhOAxiF-bkEbV22w" },
// ];

// // --- Sub-Components ---

// const Header = () => (
//     <header className="flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-gray-800 px-4 sm:px-6 lg:px-10 py-3 bg-white dark:bg-background-dark/50">
//         <div className="flex items-center gap-4 text-gray-900 dark:text-white">
//             <div className="size-6 text-primary">
//                 <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
//                 </svg>
//             </div>
//             <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">E-Commerce</h2>
//         </div>
//         <div className="flex items-center gap-6">
//             <button className="relative flex cursor-pointer items-center justify-center rounded-full size-10 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
//                 <span className="material-symbols-outlined text-2xl">favorite</span>
//             </button>
//             <button className="relative flex cursor-pointer items-center justify-center rounded-full size-10 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
//                 <span className="material-symbols-outlined text-2xl">shopping_cart</span>
//                 <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">2</div>
//             </button>
//             <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User avatar placeholder" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNOfk8r6z55cP79KFW0pREG0YNqRS7hNoIVZhTtkoysHfdgqFfDeCe_P1bNElHlJo05Xzp-7RlVgWCdISA0aBepsyQtfjQ_NaESRig_oNi7ZUZ9JbSfD9bZOPSfrT0tFNhEU5NBzX6kvPpp-ONsO0WJLiyr3eSR9mOXxb0yQCu1zp4d3G6lyEEspzkRsTEg5lf40PtKtnyhC2AKVMIOcETwdxdF6FiFMAp1Y7eQnxaciZgCwodE5VmpJ5tY9BBOcRnEQYtsMPMRZE")' }}></div>
//         </div>
//     </header>
// );

// const PaymentSummary = ({ summary }) => (
//     <div className="lg:col-span-1">
//         <div className="sticky top-24">
//             <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
//                 <h2 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] mb-4">Order Summary</h2>
//                 <div className="space-y-4">
//                     <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
//                         <span>Subtotal</span>
//                         <span>${summary.subtotal.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
//                         <span>Shipping</span>
//                         <span>${summary.shipping.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
//                         <span>Taxes</span>
//                         <span>${summary.taxes.toFixed(2)}</span>
//                     </div>
//                     <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>
//                     <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white">
//                         <span>Total</span>
//                         <span>${summary.total.toFixed(2)}</span>
//                     </div>
//                 </div>
//                 <button className="mt-6 flex w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-primary text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
//                     Pay Now
//                 </button>
//                 <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
//                     <span className="material-symbols-outlined text-sm">lock</span>
//                     <span>Your payment is safe and secure</span>
//                 </div>
//             </div>
//         </div>
//     </div>
// );

// const PaymentForm = ({ selectedMethod, setSelectedMethod, selectedBilling, setSelectedBilling }) => {
//     const inputClasses = "block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary text-sm";
//     const labelClasses = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1";

//     return (
//         <div className="space-y-8">
//             {/* Payment Method Selector */}
//             <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
//                 <h2 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] pb-4">Payment Method</h2>
//                 <div className="flex h-12 flex-1 items-center justify-center rounded-lg bg-background-light dark:bg-background-dark p-1 border border-gray-200 dark:border-gray-800">
//                     {['Credit Card', 'PayPal', 'Google Pay'].map(method => (
//                         <label
//                             key={method}
//                             className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-medium leading-normal transition-all ${selectedMethod === method
//                                     ? 'bg-white dark:bg-gray-800 shadow-sm text-gray-900 dark:text-white'
//                                     : 'text-gray-500 dark:text-gray-400'
//                                 }`}
//                         >
//                             <span className="truncate">{method}</span>
//                             <input
//                                 className="invisible w-0"
//                                 name="payment_method"
//                                 type="radio"
//                                 value={method}
//                                 checked={selectedMethod === method}
//                                 onChange={() => setSelectedMethod(method)}
//                             />
//                         </label>
//                     ))}
//                 </div>
//                 <div className="flex items-center justify-center gap-4 mt-4">
//                     {cardLogos.map((logo, index) => (
//                         <img key={index} alt={logo.alt} className="h-6" src={logo.url} />
//                     ))}
//                 </div>
//             </div>

//             {/* Card Information */}
//             {selectedMethod === 'Credit Card' && (
//                 <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
//                     <h2 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] mb-4">Card Information</h2>
//                     <div className="grid grid-cols-1 gap-4">
//                         <div>
//                             <label className={labelClasses} htmlFor="card-number">Card Number</label>
//                             <div className="relative">
//                                 <input className={inputClasses} id="card-number" placeholder="0000 0000 0000 0000" type="text" />
//                                 <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">credit_card</span>
//                             </div>
//                         </div>
//                         <div>
//                             <label className={labelClasses} htmlFor="card-name">Name on Card</label>
//                             <input className={inputClasses} id="card-name" placeholder="John Doe" type="text" />
//                         </div>
//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className={labelClasses} htmlFor="expiry-date">Expiration Date</label>
//                                 <input className={inputClasses} id="expiry-date" placeholder="MM / YY" type="text" />
//                             </div>
//                             <div>
//                                 <label className={labelClasses} htmlFor="cvv">
//                                     CVV
//                                     <span className="material-symbols-outlined text-xs align-middle text-gray-400 cursor-help" title="3-4 digit code on the back of your card">help</span>
//                                 </label>
//                                 <input className={inputClasses} id="cvv" placeholder="123" type="text" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Billing Address */}
//             <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
//                 <h2 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] mb-4">Billing Address</h2>
//                 <div className="space-y-4">
//                     <div className="flex items-center">
//                         <input
//                             className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
//                             id="same-as-shipping"
//                             name="billing-address"
//                             type="radio"
//                             checked={selectedBilling === 'same'}
//                             onChange={() => setSelectedBilling('same')}
//                         />
//                         <label className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="same-as-shipping">Same as shipping address</label>
//                     </div>
//                     <div className="flex items-center">
//                         <input
//                             className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
//                             id="different-billing"
//                             name="billing-address"
//                             type="radio"
//                             checked={selectedBilling === 'different'}
//                             onChange={() => setSelectedBilling('different')}
//                         />
//                         <label className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="different-billing">Use a different billing address</label>
//                     </div>
//                     {/* Add form fields for different billing address here if selectedBilling === 'different' */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// const Footer = () => (
//     <footer className="w-full border-t border-gray-200 dark:border-gray-800 mt-12 bg-white dark:bg-background-dark/50">
//         <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500 dark:text-gray-400">
//             <div className="flex justify-center gap-6">
//                 <a className="hover:text-primary" href="#">Privacy Policy</a>
//                 <a className="hover:text-primary" href="#">Terms of Service</a>
//                 <a className="hover:text-primary" href="#">Help/Contact</a>
//             </div>
//             <p className="mt-4">© 2024 E-Commerce. All rights reserved.</p>
//         </div>
//     </footer>
// );

// // --- Main Component ---

// const CheckoutPaymentPage = () => {
//     const [selectedMethod, setSelectedMethod] = useState('Credit Card');
//     const [selectedBilling, setSelectedBilling] = useState('same');

//     return (
//         <div className="font-display bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 min-h-screen">
//             <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
//                 <Header />
//                 <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

//                     {/* Breadcrumbs */}
//                     <div className="flex flex-wrap gap-2 pb-8">
//                         <a className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary" href="#">Shipping</a>
//                         <span className="text-gray-400 dark:text-gray-500 text-sm font-medium leading-normal">/</span>
//                         <a className="text-primary dark:text-primary/90 text-sm font-bold leading-normal" href="#">Payment</a>
//                         <span className="text-gray-400 dark:text-gray-500 text-sm font-medium leading-normal">/</span>
//                         <span className="text-gray-900 dark:text-white text-sm font-medium leading-normal">Confirmation</span>
//                     </div>

//                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
//                         {/* Left Column: Payment Details */}
//                         <div className="lg:col-span-2">
//                             <div className="flex min-w-72 flex-col gap-2 mb-8">
//                                 <p className="text-gray-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Secure Payment</p>
//                                 <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">All transactions are secure and encrypted.</p>
//                             </div>
//                             <PaymentForm
//                                 selectedMethod={selectedMethod}
//                                 setSelectedMethod={setSelectedMethod}
//                                 selectedBilling={selectedBilling}
//                                 setSelectedBilling={setSelectedBilling}
//                             />
//                         </div>

//                         {/* Right Column: Order Summary */}
//                         <PaymentSummary summary={mockOrderSummary} />
//                     </div>
//                 </main>
//                 <Footer />
//             </div>
//         </div>
//     );
// };

// export default CheckoutPaymentPage;