import React, { useState } from 'react';

// --- Placeholder Components ---

const Header = () => (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 px-4 sm:px-8 md:px-12 py-3 bg-white dark:bg-background-dark">
        <div className="flex items-center gap-4 text-slate-900 dark:text-white">
            <div className="size-6 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_6_319)">
                        <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_6_319">
                            <rect fill="white" height="48" width="48"></rect>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">E-Commerce Platform</h2>
        </div>
        <div className="flex flex-1 justify-end gap-2">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">favorite</span>
            </button>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">shopping_cart</span>
            </button>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User avatar image" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJIjnrBoDmHMHw25FnbzjLI2A7zyVTkwQ0PKxTEUsrOJH1WktYfNhlfRqiY73Hm6VV2JY79-j8veS1TYhmCIX2krGQngI_Q_bQ3rL1CcO6VAkOF4Vp7P1fY7IODcryKRDnkpCyHyAetOv_Yp3jGGU4tNaURAhD1DwY3VImjVqlMFRxPdBKIEBc6MOB7XT_tvai7DLJMwP_K0D68yqfUhccuP3m6-qMKNwDKws_TFYc0RcydrOPbzDzz3CzpBoySnpqHJ8ivTY9jMk")' }}></div>
        </div>
    </header>
);
// --- End Placeholder Components ---

// Mock data for Order Summary
const mockOrder = {
    items: [
        { id: 1, name: 'Velocity Runner', details: "Men's Shoe / Size 10", price: 120.00, qty: 1, imageId: 30 },
        { id: 2, name: 'Quantum Leap XT', details: "Women's Shoe / Size 8", price: 150.00, qty: 1, imageId: 31 },
    ],
    subtotal: 270.00,
    shipping: 10.00,
    taxes: 22.30,
    total: 302.30,
};

// Utility to simulate image URLs
const getImageUrl = (id) => `https://images.unsplash.com/photo-1595341144933-66236b282d8c?q=80&w=2787&auto=format&fit=crop&id=${id}`;


// --- Sub-Components ---

const ShippingForm = () => {
    // In a real app, this would use form state management (e.g., useState/useReducer or a library like Formik)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting Shipping Info...");
        // Logic to proceed to the next step (Payment)
    };

    const inputClasses = "block w-full rounded-lg border-0 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm sm:leading-6";
    const labelClasses = "block text-sm font-medium leading-6 text-slate-900 dark:text-slate-200";

    return (
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
                <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Contact Information</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-4">
                    <div>
                        <label className={labelClasses} htmlFor="email">Email Address</label>
                        <div className="mt-2">
                            <input autoComplete="email" className={inputClasses} id="email" name="email" type="email" required />
                        </div>
                    </div>
                </div>
            </div>

            {/* Shipping Address */}
            <div className="space-y-6">
                <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Shipping Address</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                        <label className={labelClasses} htmlFor="full-name">Full Name</label>
                        <div className="mt-2">
                            <input autoComplete="name" className={inputClasses} id="full-name" name="full-name" type="text" required />
                        </div>
                    </div>
                    <div className="sm:col-span-6">
                        <label className={labelClasses} htmlFor="street-address">Street Address</label>
                        <div className="mt-2">
                            <input autoComplete="street-address" className={inputClasses} id="street-address" name="street-address" type="text" required />
                        </div>
                    </div>
                    <div className="sm:col-span-6">
                        <label className={labelClasses} htmlFor="apartment-suite">Apartment, suite, etc. (Optional)</label>
                        <div className="mt-2">
                            <input className={inputClasses} id="apartment-suite" name="apartment-suite" type="text" />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label className={labelClasses} htmlFor="city">City</label>
                        <div className="mt-2">
                            <input autoComplete="address-level2" className={inputClasses} id="city" name="city" type="text" required />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label className={labelClasses} htmlFor="state-province">State / Province</label>
                        <div className="mt-2">
                            <input autoComplete="address-level1" className={inputClasses} id="state-province" name="state-province" type="text" required />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label className={labelClasses} htmlFor="postal-code">ZIP / Postal code</label>
                        <div className="mt-2">
                            <input autoComplete="postal-code" className={inputClasses} id="postal-code" name="postal-code" type="text" required />
                        </div>
                    </div>
                </div>
            </div>

            {/* Save Information Checkbox */}
            <div className="relative flex items-start">
                <div className="flex h-6 items-center">
                    <input className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary" id="save-info" name="save-info" type="checkbox" />
                </div>
                <div className="ml-3 text-sm leading-6">
                    <label className="font-medium text-slate-900 dark:text-slate-200" htmlFor="save-info">Save this information for next time</label>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex items-center justify-between">
                <a className="text-sm font-semibold leading-6 text-primary hover:text-primary/80 flex items-center gap-2" href="#">
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                    Return to cart
                </a>
                <button className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" type="submit">
                    Continue to Payment
                </button>
            </div>
        </form>
    );
};

const OrderSummary = ({ order }) => {
    return (
        <aside className="w-full lg:max-w-sm">
            <div className="rounded-xl bg-white dark:bg-slate-800/50 p-6 border border-slate-200 dark:border-slate-800 sticky top-12">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Order Summary</h2>

                {/* Item List */}
                <div className="mt-6 space-y-6">
                    {order.items.map(item => (
                        <div key={item.id} className="flex items-center gap-4">
                            <div className="relative">
                                <div
                                    className="aspect-square w-16 rounded-lg bg-cover bg-center"
                                    style={{ backgroundImage: `url('${getImageUrl(item.imageId)}')` }}
                                    data-alt={item.name}
                                />
                                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-sm font-medium text-slate-700 dark:text-slate-200">{item.qty}</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium text-slate-800 dark:text-slate-100">{item.name}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">{item.details}</p>
                            </div>
                            <p className="font-medium text-slate-900 dark:text-white">${item.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>

                {/* Price Breakdown */}
                <div className="mt-8 border-t border-slate-200 dark:border-slate-700 pt-6 space-y-3">
                    <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
                        <span>Subtotal</span>
                        <span className="font-medium text-slate-800 dark:text-slate-100">${order.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
                        <span>Shipping</span>
                        <span className="font-medium text-slate-800 dark:text-slate-100">${order.shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
                        <span>Taxes</span>
                        <span className="font-medium text-slate-800 dark:text-slate-100">${order.taxes.toFixed(2)}</span>
                    </div>
                </div>

                {/* Grand Total */}
                <div className="mt-6 border-t border-slate-200 dark:border-slate-700 pt-6">
                    <div className="flex justify-between text-base font-bold text-slate-900 dark:text-white">
                        <span>Total</span>
                        <span>${order.total.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

// --- Main Page Component ---

const CheckoutShippingInfoPage = () => {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark min-h-screen">
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <Header />
                <main className="flex flex-1 justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">

                        {/* Left Column: Form and Progress */}
                        <div className="flex flex-col">

                            {/* Breadcrumbs & Progress Bar */}
                            <div className="flex flex-wrap gap-2 text-sm">
                                <a className="text-slate-500 dark:text-slate-400 font-medium leading-normal" href="#">Cart</a>
                                <span className="text-slate-400 dark:text-slate-500 font-medium leading-normal">/</span>
                                <span className="text-slate-900 dark:text-white font-medium leading-normal">Shipping</span>
                                <span className="text-slate-400 dark:text-slate-500 font-medium leading-normal">/</span>
                                <span className="text-slate-500 dark:text-slate-400 font-medium leading-normal">Payment</span>
                            </div>

                            <div className="mt-6">
                                <div className="flex flex-col gap-3">
                                    <div className="flex gap-6 justify-between items-center">
                                        <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">Step 1 of 3: Shipping</p>
                                    </div>
                                    <div className="rounded-full bg-slate-200 dark:bg-slate-700 h-2">
                                        <div className="h-2 rounded-full bg-primary" style={{ width: '33%' }}></div>
                                    </div>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Next: Payment</p>
                                </div>
                            </div>

                            {/* Heading */}
                            <div className="mt-10">
                                <div className="flex flex-col gap-3">
                                    <p className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Shipping Information</p>
                                    <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-normal">Please enter your shipping details below.</p>
                                </div>
                            </div>

                            {/* Shipping Form */}
                            <ShippingForm />

                        </div>

                        {/* Right Column: Order Summary */}
                        <OrderSummary order={mockOrder} />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default CheckoutShippingInfoPage;