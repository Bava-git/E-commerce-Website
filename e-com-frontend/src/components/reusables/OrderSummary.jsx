import { useNavigate } from "react-router-dom";

export const OrderSummary = ({ subtotal, deliveryFee, marketPlaceFee, total, disableCheckout, isPaymentPage }) => {

    const Navigate = useNavigate();

    return (
        <div className="lg:col-span-1">
            <div className="sticky top-24">
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
                            <p className="font-sm text-gray-600 dark:text-gray-400">Delivery fee</p>
                            <p className="font-sm  text-gray-900 dark:text-white">₹{(subtotal === 0) ? Number(0).toFixed(2) : Number(40).toFixed(2)}</p>
                        </div>
                    </div>
                    {subtotal > 100 &&
                        <div className="flex justify-between text-base">
                            <p className="font-sm text-lime-300 text-base">Free Delivery</p>
                            <p className="font-sm  text-lime-300 text-base"> - ₹{Number(40).toFixed(2)}</p>
                        </div>
                    }

                    {/* Grand Total */}
                    <div className="flex justify-between items-center border-t border-gray-200 dark:border-gray-800 pt-4">
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">Total</p>
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">₹{total.toFixed(2)}</p>
                    </div>

                    {/* CTAs */}
                    {disableCheckout &&
                        <div className="flex flex-col gap-4 mt-2">
                            <button
                                onClick={() => Navigate("/checkout")}
                                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90">
                                <span className="truncate">Proceed to Checkout</span>
                            </button>
                            <a className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-transparent text-primary text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/10" href="/">
                                <span>Continue Shopping</span>
                            </a>
                        </div>
                    }

                    {/* Security Info */}
                    {isPaymentPage &&
                        <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 mt-2">
                            <span className="material-symbols-outlined text-base!">lock</span>
                            <p className="text-xs font-medium">Secure payments by Stripe</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};