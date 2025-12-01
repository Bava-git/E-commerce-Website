import { OrderSummary } from './ShoppingCartPage';

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

const CheckoutShippingInfoPage = () => {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark min-h-screen">
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <main className="flex flex-1 justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">

                        {/* Form and Progress */}
                        <div className="flex flex-col">

                            {/* Heading */}
                            <div className="mt-10">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <a className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary" href="#">Shipping Info</a>
                                    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary">/</span>
                                    <a className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary" href="#">Shipping Method</a>
                                    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary">/</span>
                                    <a className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary" href="#">Payment</a>
                                    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary">/</span>
                                    <a className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary" href="#">Review</a>
                                    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary">/</span>
                                    <a className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary" href="#">Confirmation</a>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Shipping Information</p>
                                    <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-normal">Please enter your shipping details below.</p>
                                </div>
                            </div>

                            {/* Shipping Form */}
                            <ShippingForm />

                        </div>

                        {/* Order Summary */}
                        <OrderSummary subtotal={1000} marketPlaceFee={5} total={1005} />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default CheckoutShippingInfoPage;