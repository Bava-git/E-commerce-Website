import { addDays, format } from 'date-fns';
import React, { useState } from 'react';
import { toast } from 'sonner';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
import { OrderSummary } from './components/reusables/OrderSummary';
import OrderReviewPage from './OrderReviewPage';
import { cartList, products } from './utilities/rawData';
import * as connectTo from './utilities/reusables';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const cardLogos = [
    { alt: "Visa logo", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmPm45SqF22XPCVP1gaWqVYaGyssFJre8gXFulj9jhGNnqMHnKeCc4JKJEFtsr4ya4eeW8xdzNEaSy_UqDQct7K996dPuAW5D9V5RPsm52dau2koqH3_2NunGMuSYjmAohl0V8ZOoSUIyjJMzx4Wn1CbkktRHmPnbk2kgkuuVALjwYoRwsy_R3rGYPGxbn3hFYujBLm0wSEmRcupNOxfjBbFcoNFiPxh__nAw1OQWFLcQ5iPz4TAg3Og8AnlN0DmMxF_njRBLKtyo" },
    { alt: "Mastercard logo", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuApOrN6MhfX6yvrkyfjSRqCHoTvyFco3ESDpYfIxNWj6YXnicinW8GpRMfmwTtDUtXtgQqHxUJSyO3jRdZ1FqYoVmK79hiYcp1VfkfMvjKprcOMiK2E58EVcNwd6vuNcFzbNQMv5Ea-xx5iQCBrjWdzgnXMsJhLOs-OwNNVHpHe9AguPdK09jiuZ00GmVUwIs1F3QqW_VjpFVlK0joqbJ9pK32PVbmyH8GuTAYt_o7yUJCdCDG8xMgKFljBlW81BLBpHDkPaM7sWJ4" },
    { alt: "American Express logo", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQzyW2fqxW9QidrYzetJdDCoCWIGQi54T1FcnhekMghcbKKb__SPzh_-S5-J8ndY8VQRvYxDZ15HEmAJGOu_RzNAnDFkjeGwwykyHzRD3qnAJWocGFYImY4bT3SxhmmfVWABf-B6Y0TNdK5nTFOMHr2TMwdvRqsEDbslMMsb61e6pzdfsIwv8zZPmnKBj5Z8-DXCGWWblfOXbitNotZ13XZJE__4VnB8zXBrG5BJm5EeMXR6k1oeNPdzp3eiafhOAxiF-bkEbV22w" },
];
// ---------------------------------------------------------------------------
const shippingOptions = [
    { id: 'standard', name: 'Standard Ground', price: 0, eta: format(addDays(new Date, 10), "MMM-dd"), isPopular: true },
    { id: 'express', name: 'Overnight Express', price: 100.00, eta: format(addDays(new Date, 1), "MMM-dd"), isPopular: false },
];
// ---------------------------------------------------------------------------
const buttonOptions = [
    { id: "shippingInfo", leftButtonText: "hide", leftButtonHref: "hide", rightButtonText: "Continue to Delivery Option", rightButtonHref: "shippingMethod" },
    { id: "shippingMethod", leftButtonText: "Return to Shipping info", leftButtonHref: "shippingInfo", rightButtonText: "Continue to Payment", rightButtonHref: "payment" },
    { id: "payment", leftButtonText: "Return to Shipping method", leftButtonHref: "shippingMethod", rightButtonText: "Continue to Review", rightButtonHref: "review" },
    { id: "review", leftButtonText: "Return to Payment", leftButtonHref: "payment", rightButtonText: "hide", rightButtonHref: "hide" },
];
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const CheckoutShippingInfoPage = () => {

    const [selectedShipping, setSelectedShipping] = useState(shippingOptions.find(o => o.id === 'standard'));
    const [cartItems, setCartItems] = useState(cartList);

    cartList.forEach(item => {
        let tempProduct = connectTo.oneItemFromArray(products, "id", item.id);
        item.price = tempProduct.price;
    });

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    let deliveryFee = (subtotal > 100 || subtotal === 0) ? 0 : 40;
    deliveryFee = deliveryFee + selectedShipping?.price
    const marketPlaceFee = (subtotal === 0) ? 0 : 5;
    const total = Math.round(subtotal + marketPlaceFee + deliveryFee);
    const orderPrices = { subtotal, deliveryFee, marketPlaceFee, total };

    const [selectedScreen, setSelectedScreen] = useState(buttonOptions.find(o => o.id === 'shippingInfo'));
    const breadcrumbItems = [
        { id: "shippingInfo", label: "Shipping Info", href: "#" },
        { id: "shippingMethod", label: "Shipping Method", href: "#" },
        { id: "payment", label: "Payment", href: "#" },
        { id: "review", label: "Review", href: "#" },
    ];

    const [selectedMethod, setSelectedMethod] = useState('Credit Card');
    const [selectedBilling, setSelectedBilling] = useState('same');

    return (
        <div className="font-display bg-background-light dark:bg-background-dark min-h-screen">
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <main className="flex flex-1 justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">

                        {/* Form and Progress */}
                        <div className="flex flex-col">

                            {/* Breadcrumb Component */}
                            <Breadcrumb
                                items={breadcrumbItems}
                                current={selectedScreen?.id}
                                setSelectedScreen={setSelectedScreen}
                            />

                            {/* Shipping Form */}
                            {(selectedScreen?.id === "shippingInfo") &&
                                <ShippingForm
                                    selectedBilling={selectedBilling}
                                    setSelectedBilling={setSelectedBilling}
                                />
                            }

                            {/* Shipping Method */}
                            {(selectedScreen?.id === "shippingMethod") &&
                                <ShippingMethodOption
                                    selectedShipping={selectedShipping}
                                    setSelectedShipping={setSelectedShipping}
                                />
                            }

                            {/* Payment Form */}
                            {(selectedScreen?.id === "payment") &&
                                <PaymentForm
                                    selectedMethod={selectedMethod}
                                    setSelectedMethod={setSelectedMethod}
                                />
                            }

                            {/* Review Page */}
                            {(selectedScreen?.id === "review") &&
                                <OrderReviewPage
                                    selectedMethod={selectedMethod}
                                    setSelectedMethod={setSelectedMethod}
                                    selectedBilling={selectedBilling}
                                    setSelectedBilling={setSelectedBilling}
                                />
                            }

                            {/* Loading Screen */}
                            {(selectedScreen?.id === "loading") &&
                                <LoadingScreen />
                            }

                        </div>

                        {/* Order Summary */}
                        <OrderSummary
                            orderPrices={orderPrices}
                            disableCheckout={false}
                        />


                        {/* Action Buttons */}
                        <div className="mt-6 flex items-center justify-between">
                            {selectedScreen?.leftButtonText != "hide" ?
                                (<a
                                    onClick={() => {
                                        setSelectedScreen(buttonOptions.find(o => o.id === selectedScreen.leftButtonHref));
                                    }}
                                    className="text-sm font-semibold leading-6 text-primary hover:text-primary/80 flex items-center gap-2"
                                    href="#">
                                    <span className="material-symbols-outlined text-base">arrow_back</span>
                                    {selectedScreen.leftButtonText}
                                </a>)
                                :
                                (<a></a>)
                            }
                            {selectedScreen?.rightButtonText != "hide" &&
                                <a
                                    onClick={() => {
                                        setSelectedScreen({ id: "loading" });
                                        setTimeout(() => {
                                            setSelectedScreen(buttonOptions.find(o => o.id === selectedScreen.rightButtonHref));
                                        }, 200);
                                    }}
                                    className="cursor-pointer flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    href="#">
                                    {selectedScreen.rightButtonText}
                                </a>
                            }
                        </div>

                    </div>
                </main>
            </div >
        </div >
    );
};
export default CheckoutShippingInfoPage;
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const ShippingForm = ({ selectedBilling, setSelectedBilling }) => {
    // In a real app, this would use form state management (e.g., useState/useReducer or a library like Formik)
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            console.log(data);
            toast.error("Error");
        }


    };

    const inputClasses = "block w-full rounded-lg border-0 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm sm:leading-6";
    const labelClasses = "block text-sm font-medium leading-6 text-slate-900 dark:text-slate-200";

    return (
        <>
            {/* Shipping Form Heading */}
            < div className="flex flex-col gap-3" >
                <p className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Shipping Information</p>
                <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-normal">Please enter your shipping details below.</p>
            </ div>

            {/* Billing Address */}
            < div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800" >
                <h2 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] mb-4">Billing Address</h2>
                <div className="space-y-4">
                    <div className="flex items-center cursor-pointer">
                        <input
                            className="cursor-pointer h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                            id="same-as-shipping"
                            name="billing-address"
                            type="radio"
                            checked={selectedBilling === 'same'}
                            onChange={() => setSelectedBilling('same')}
                        />
                        <label className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="same-as-shipping">Same as shipping address</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            className="cursor-pointer h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                            id="different-billing"
                            name="billing-address"
                            type="radio"
                            checked={selectedBilling === 'different'}
                            onChange={() => setSelectedBilling('different')}
                        />
                        <label className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="different-billing">Use a different billing address</label>
                    </div>
                    {(selectedBilling === 'different') &&
                        (<form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-8">
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
                                        <label className={labelClasses} htmlFor="address-line1">Door No./Building No./Flat No.</label>
                                        <div className="mt-2">
                                            <input autoComplete="address-line1" className={inputClasses} id="address-line1" name="address-line1" type="text" required />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-6">
                                        <label className={labelClasses} htmlFor="street-address">Street Address</label>
                                        <div className="mt-2">
                                            <input autoComplete="address-line2" className={inputClasses} id="street-address" name="street-address" type="text" />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className={labelClasses} htmlFor="city">City</label>
                                        <div className="mt-2">
                                            <input autoComplete="address-line3" className={inputClasses} id="city" name="city" type="text" required />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className={labelClasses} htmlFor="state-province">State / Province</label>
                                        <div className="mt-2">
                                            <input autoComplete="off" className={inputClasses} id="state-province" name="state-province" type="text" required />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className={labelClasses} htmlFor="postal-code">ZIP / Postal code</label>
                                        <div className="mt-2">
                                            <input autoComplete="postal-code" className={inputClasses} id="postal-code" name="postal-code" type="text" required />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-6">
                                        <label className={labelClasses} htmlFor="near-by-landmark">Near by landmark</label>
                                        <div className="mt-2">
                                            <input autoComplete="additional-name" className={inputClasses} id="near-by-landmark" name="near-by-landmark" type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Alternate Contact Information */}
                            <div className="space-y-6">
                                <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Alternate Contact Information</h2>
                                <div className="grid grid-cols-1 gap-x-6 gap-y-4">
                                    <div>
                                        <label className={labelClasses} htmlFor="email">Email Address</label>
                                        <div className="mt-2">
                                            <input
                                                autoComplete="email"
                                                className={inputClasses} id="email" name="email" type="email" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className={labelClasses} htmlFor="tel">Phone Number</label>
                                        <div className="mt-2">
                                            <input
                                                autoComplete="mobile tel"
                                                className={inputClasses} id="tel" name="tel" type="tel" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-6 flex items-center justify-between">
                                <div></div>
                                <button
                                    onClick={() => {
                                    }}
                                    className="cursor-pointer flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    type='submit'
                                >
                                    Save
                                </button>
                            </div>

                        </form >)
                    }
                </div >
            </ div >
        </ >
    );
};
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const ShippingMethodOption = ({ selectedShipping, setSelectedShipping }) => {

    return (
        <div className="flex flex-col gap-4">

            {/* Shipping Options Heading */}
            <h1 className="text-3xl lg:text-3xl font-black text-white tracking-tighter mx-2 my-10" > Choose a Delivery Option</h1 >
            {shippingOptions.map(option => (
                <label key={option.id}
                    className={`flex cursor-pointer items-start gap-4 rounded-xl p-4 ring-offset-background-light dark:ring-offset-background-dark focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 transition-all 
                        ${(selectedShipping.id === option.id)
                            ? 'border-2 border-primary bg-primary/5 dark:bg-primary/10'
                            : 'border border-border-light dark:border-border-dark bg-neutral-light dark:bg-neutral-dark'
                        }`}
                >
                    <input
                        className="mt-1 h-5 w-5 appearance-none rounded-full border-2 border-text-muted-light dark:border-text-muted-dark bg-transparent text-transparent 
                        checked:border-primary checked:bg-primary checked:bg-[image:--radio-dot-svg] focus:outline-none"
                        name="shipping_method"
                        type="radio"
                        checked={selectedShipping.id === option.id}
                        onChange={() => setSelectedShipping(option)}
                    />
                    <div className="flex grow flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-col">
                            <p className="font-bold text-text-light dark:text-text-dark">{option.name}</p>
                            <p className="text-sm text-white text-text-muted-light dark:text-text-muted-dark">Arrives by {option.eta}</p>
                        </div>
                        <p className="mt-1 text-sm font-bold text-text-light dark:text-text-dark sm:mt-0">{(option.price === 0) ? '' : `₹${option.price.toFixed(2)}`}</p>
                    </div>
                    {option.isPopular && (
                        <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
                            <span className="material-symbols-outlined !text-[16px]">star</span>
                            <span>Most Popular</span>
                        </div>
                    )}
                </label>
            ))}
        </div>
    );
};
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
export const Breadcrumb = ({ items, current, setSelectedScreen }) => {
    return (
        <div className="flex flex-wrap gap-2 mb-4">
            {items.map((item, index) => {
                const isCurrentOrPast = items.findIndex(i => i.id === current) >= index;

                return (
                    <React.Fragment key={index}>
                        {isCurrentOrPast ? (
                            <a
                                onClick={() => {
                                    setSelectedScreen({ id: "loading" });
                                    setTimeout(() => {
                                        setSelectedScreen(buttonOptions.find(o => o.id === item.id));
                                    }, 2000);
                                }}
                                href={item.href}
                                className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary"
                            >
                                {item.label}
                            </a>
                        ) : (
                            <span className="text-gray-400 dark:text-gray-600 text-sm font-medium leading-normal">
                                {item.label}
                            </span>
                        )}
                        {index < items.length - 1 && (
                            <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">
                                /
                            </span>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const PaymentForm = ({ selectedMethod, setSelectedMethod }) => {
    const inputClasses = "block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary text-sm";
    const labelClasses = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1";

    return (
        <div className="space-y-8">
            <h1 className="text-3xl lg:text-3xl font-black text-white tracking-tighter mx-2 my-10" > Choose a Payment Option</h1 >
            {/* Payment Method Selector */}
            <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                <h2 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] pb-4">Payment Method</h2>
                <div className="flex h-12 flex-1 items-center justify-center rounded-lg bg-background-light dark:bg-background-dark p-1 border border-gray-200 dark:border-gray-800">
                    {['Credit Card', 'UPI Pay', 'COD'].map(method => (
                        <label
                            key={method}
                            className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-medium leading-normal transition-all ${selectedMethod === method
                                ? 'bg-white dark:bg-gray-800 shadow-sm text-gray-900 dark:text-white'
                                : 'text-gray-500 dark:text-gray-400'
                                }`}
                        >
                            <span className="truncate">{method}</span>
                            <input
                                className="invisible w-0"
                                name="payment_method"
                                type="radio"
                                value={method}
                                checked={selectedMethod === method}
                                onChange={() => setSelectedMethod(method)}
                            />
                        </label>
                    ))}
                </div>
            </div>

            {/* Card Information */}
            {selectedMethod === 'Credit Card' && (
                <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                    <div className="flex items-center justify-center gap-4">
                        {cardLogos.map((logo, index) => (
                            <img key={index} alt={logo.alt} className="h-6" src={logo.url} />
                        ))}
                    </div>
                    <h2 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] mb-4">Card Information</h2>
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <label className={labelClasses} htmlFor="card-number">Card Number</label>
                            <div className="relative">
                                <input className={inputClasses} id="card-number" placeholder="0000 0000 0000 0000" type="text" />
                                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">credit_card</span>
                            </div>
                        </div>
                        <div>
                            <label className={labelClasses} htmlFor="card-name">Name on Card</label>
                            <input className={inputClasses} id="card-name" placeholder="John Doe" type="text" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className={labelClasses} htmlFor="expiry-date">Expiration Date</label>
                                <input className={inputClasses} id="expiry-date" placeholder="MM / YY" type="text" />
                            </div>
                            <div>
                                <label className={labelClasses} htmlFor="cvv">
                                    CVV
                                    <span className="material-symbols-outlined text-xs align-middle text-gray-400 cursor-help" title="3-4 digit code on the back of your card">help</span>
                                </label>
                                <input className={inputClasses} id="cvv" placeholder="123" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* UPI Pay */}
            {selectedMethod === 'UPI Pay' && (
                <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                    {/* UPI valitation */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="promo-code">UPI id</label>
                        <div className="flex gap-2">
                            <input className="flex-grow block w-full rounded-md border-slate-300 dark:border-slate-700 shadow-sm focus:border-primary focus:ring-primary text-sm bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500" id="promo-code" placeholder="Enter UPI id" type="text" />
                            <button className="cursor-pointer px-4 py-2 rounded-lg bg-slate-200/80 dark:bg-slate-800/80 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-300/80 dark:hover:bg-slate-700/80 transition-colors">Verify</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const LoadingScreen = () => {
    return (
        <div className="space-y-8">
            <div className="h-100 flex items-center justify-center bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                <span className='text-white text-3xl'>Loading ...</span>
            </div>
        </div>
    );
};
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------