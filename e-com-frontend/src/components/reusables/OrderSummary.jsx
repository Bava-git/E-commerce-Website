import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const OrderSummary = ({ orderPrices, isPage, handleFinalProcess, handlePromoPercentage }) => {

    const Navigate = useNavigate();
    const { subtotal, deliveryFee, marketPlaceFee, total } = orderPrices;
    const deliveryText = (deliveryFee === 0) ? Number(40).toFixed(2) : Number(100).toFixed(2)
    const [promoCode, setPromoCode] = useState('');

    return (
        <div className="lg:col-span-1">
            <div className="sticky top-24 md:mt-33">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col gap-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Order Summary</h3>

                    {/* Price Breakdown */}
                    <div className="flex flex-col gap-3 border-t border-gray-200 dark:border-gray-800 pt-4">
                        <div className="flex justify-between text-base">
                            <p className="font-sm text-gray-600 dark:text-gray-400">Subtotal</p>
                            <p className="font-sm text-gray-900 dark:text-white">₹{subtotal.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between text-base">
                            <p className="font-sm text-gray-600 dark:text-gray-400">Marketplace fee</p>
                            <p className="font-sm text-gray-900 dark:text-white">₹{marketPlaceFee.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between text-base">
                            <p className="font-sm text-gray-600 dark:text-gray-400">Delivery fee {(deliveryFee != 0) ? "(Overnight Express)" : ""}</p>
                            <p className="font-sm  text-gray-900 dark:text-white">₹{deliveryText}</p>
                        </div>
                    </div>
                    {(subtotal > 100 && deliveryFee === 0) &&
                        <div className="flex justify-between text-base">
                            <p className="font-sm text-lime-300 text-base">Free Delivery</p>
                            <p className="font-sm  text-lime-300 text-base"> - ₹{Number(40).toFixed(2)}</p>
                        </div>
                    }

                    {/* Promo Code */}
                    {isPage.isReviewPage &&
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="promo-code">Promo Code</label>
                            <div className="flex gap-2">
                                <input
                                    autoComplete="off"
                                    className="flex-grow block w-full rounded-md border-slate-300 dark:border-slate-700 shadow-sm focus:border-primary focus:ring-primary text-sm bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                    id="promo-code" placeholder="Enter code" type="text"
                                    onChange={(e) => setPromoCode(e.target.value)}
                                />
                                <button
                                    onClick={() => handlePromoPercentage(promoCode)}
                                    className="cursor-pointer px-4 py-2 rounded-lg bg-slate-200/80 dark:bg-slate-800/80 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-300/80 dark:hover:bg-slate-700/80 transition-colors">
                                    Apply
                                </button>
                            </div>
                        </div>
                    }

                    {/* Grand Total */}
                    <div className="flex justify-between items-center border-t border-gray-200 dark:border-gray-800 pt-4">
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">Total</p>
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">₹{total.toFixed(2)}</p>
                    </div>

                    {/* CTAs */}
                    {isPage.isCheckoutPage &&
                        <div className="flex flex-col gap-4 mt-2">
                            <button
                                onClick={() => Navigate("/checkout")}
                                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90">
                                <span className="truncate">Proceed to Checkout</span>
                            </button>
                            <a className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-transparent text-primary text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/10"
                                href="/">
                                <span>Continue Shopping</span>
                            </a>
                        </div>
                    }

                    {/* Security Info */}
                    {isPage.isPaymentPage &&
                        <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 mt-2">
                            <span className="material-symbols-outlined text-base!">lock</span>
                            <p className="text-xs font-medium">Secure payments by Stripe</p>
                        </div>
                    }

                    {/* Primary CTA Button */}
                    {isPage.isReviewPage &&
                        <>
                            <button
                                onClick={() => handleFinalProcess()}
                                className="cursor-pointer w-full flex items-center justify-center gap-2 h-12 px-6 bg-primary text-white rounded-lg text-base font-bold hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark">
                                <span className="material-symbols-outlined text-xl">orders</span>
                                Place Order
                            </button>

                            <p className="text-xs text-slate-500 dark:text-slate-400 text-center">By placing your order, you agree to our Terms of Service and Privacy Policy.</p>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};