import React from 'react';

const OrderSummary = ({ subtotal, shipping, taxes, total }) => {
    return (
        <div className="lg:col-span-1">
            <div className="sticky top-24">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col gap-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Order Summary</h3>

                    {/* Promo Code */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="promo-code">Promotional Code</label>
                        <div className="flex gap-2">
                            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary focus:ring-inset border-gray-300 dark:border-gray-700 bg-transparent h-10 placeholder:text-gray-500 dark:placeholder:text-gray-400 px-3 text-sm" id="promo-code" placeholder="Enter code" type="text" />
                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white text-sm font-bold tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-gray-700">Apply</button>
                        </div>
                    </div>

                    {/* Price Breakdown */}
                    <div className="flex flex-col gap-3 border-t border-gray-200 dark:border-gray-800 pt-4">
                        <div className="flex justify-between text-base">
                            <p className="text-gray-600 dark:text-gray-400">Subtotal</p>
                            <p className="font-medium text-gray-900 dark:text-white">${subtotal.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between text-base">
                            <p className="text-gray-600 dark:text-gray-400">Estimated Shipping</p>
                            <p className="font-medium text-gray-900 dark:text-white">${shipping.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between text-base">
                            <p className="text-gray-600 dark:text-gray-400">Estimated Taxes</p>
                            <p className="font-medium text-gray-900 dark:text-white">${taxes.toFixed(2)}</p>
                        </div>
                    </div>

                    {/* Grand Total */}
                    <div className="flex justify-between items-center border-t border-gray-200 dark:border-gray-800 pt-4">
                        <p className="text-xl font-bold text-gray-900 dark:text-white">Total</p>
                        <p className="text-2xl font-black text-gray-900 dark:text-white">${total.toFixed(2)}</p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col gap-4 mt-2">
                        <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90">
                            <span className="truncate">Proceed to Checkout</span>
                        </button>
                        <a className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-transparent text-primary text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/10" href="#">
                            <span>Continue Shopping</span>
                        </a>
                    </div>

                    {/* Security Info */}
                    <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 mt-2">
                        <span className="material-symbols-outlined text-base!">lock</span>
                        <p className="text-xs font-medium">Secure payments by Stripe</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;