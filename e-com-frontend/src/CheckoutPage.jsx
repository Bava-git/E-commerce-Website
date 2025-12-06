import { addDays, format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
import { OrderSummary } from './components/reusables/OrderSummary';
import OrderReviewPage from './ReviewPage';
import { cartList, products, paymentInfo, shippingInfo, totalSummarys, promoCodes } from './utilities/rawData';
import * as connectTo from './utilities/reusables';
import { useNavigate } from 'react-router-dom';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const cardLogos = [
    { alt: "Visa logo", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmPm45SqF22XPCVP1gaWqVYaGyssFJre8gXFulj9jhGNnqMHnKeCc4JKJEFtsr4ya4eeW8xdzNEaSy_UqDQct7K996dPuAW5D9V5RPsm52dau2koqH3_2NunGMuSYjmAohl0V8ZOoSUIyjJMzx4Wn1CbkktRHmPnbk2kgkuuVALjwYoRwsy_R3rGYPGxbn3hFYujBLm0wSEmRcupNOxfjBbFcoNFiPxh__nAw1OQWFLcQ5iPz4TAg3Og8AnlN0DmMxF_njRBLKtyo" },
    { alt: "Mastercard logo", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuApOrN6MhfX6yvrkyfjSRqCHoTvyFco3ESDpYfIxNWj6YXnicinW8GpRMfmwTtDUtXtgQqHxUJSyO3jRdZ1FqYoVmK79hiYcp1VfkfMvjKprcOMiK2E58EVcNwd6vuNcFzbNQMv5Ea-xx5iQCBrjWdzgnXMsJhLOs-OwNNVHpHe9AguPdK09jiuZ00GmVUwIs1F3QqW_VjpFVlK0joqbJ9pK32PVbmyH8GuTAYt_o7yUJCdCDG8xMgKFljBlW81BLBpHDkPaM7sWJ4" },
    { alt: "American Express logo", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQzyW2fqxW9QidrYzetJdDCoCWIGQi54T1FcnhekMghcbKKb__SPzh_-S5-J8ndY8VQRvYxDZ15HEmAJGOu_RzNAnDFkjeGwwykyHzRD3qnAJWocGFYImY4bT3SxhmmfVWABf-B6Y0TNdK5nTFOMHr2TMwdvRqsEDbslMMsb61e6pzdfsIwv8zZPmnKBj5Z8-DXCGWWblfOXbitNotZ13XZJE__4VnB8zXBrG5BJm5EeMXR6k1oeNPdzp3eiafhOAxiF-bkEbV22w" },
];
// ---------------------------------------------------------------------------
const shippingOptions = [
    { id: 'standard', name: 'Standard Delivery', price: 0, eta: format(addDays(new Date, 10), "MMM-dd"), isPopular: true },
    { id: 'express', name: 'Overnight Express', price: 100.00, eta: format(addDays(new Date, 1), "MMM-dd"), isPopular: false },
];
// ---------------------------------------------------------------------------
const buttonOptions = [
    { id: "shippingInfo", leftButtonText: "hide", leftButtonHref: "hide", rightButtonText: "Continue to Delivery Option", rightButtonHref: "shippingMethod" },
    { id: "shippingMethod", leftButtonText: "Return to Shipping info", leftButtonHref: "shippingInfo", rightButtonText: "Continue to Payment", rightButtonHref: "payment" },
    { id: "payment", leftButtonText: "Return to Shipping method", leftButtonHref: "shippingMethod", rightButtonText: "Continue to Review", rightButtonHref: "review", buttonDisable: true },
    { id: "review", leftButtonText: "Return to Payment", leftButtonHref: "payment", rightButtonText: "hide", rightButtonHref: "hide" },
];
// ---------------------------------------------------------------------------
const loadingTime = 200;
// ---------------------------------------------------------------------------
function calculateOrderPrices(cartItems, selectedShippingMethod) {

    cartItems.forEach(item => {
        let tempProduct = connectTo.oneItemFromArray(products, "id", item.id);
        item.price = tempProduct.price;
    });

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    let deliveryFee = (subtotal > 100 || subtotal === 0) ? 0 : 40;
    deliveryFee += selectedShippingMethod?.price || 0;
    const marketPlaceFee = (subtotal === 0) ? 0 : 5;
    const total = Math.round(subtotal + marketPlaceFee + deliveryFee);

    return { subtotal, deliveryFee, marketPlaceFee, total };
}

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const CheckoutShippingInfoPage = () => {

    const Navigate = useNavigate();

    const [selectedShippingMethod, setSelectedShippingMethod] = useState(shippingOptions.find(o => o.id === 'standard'));
    const [cartItems, setCartItems] = useState(cartList);
    const orderPrices = calculateOrderPrices(cartItems, selectedShippingMethod);
    console.log(orderPrices);
    const [total, setTotal] = useState(orderPrices.total);
    const originalPrice = orderPrices.total;

    const [selectedScreen, setSelectedScreen] = useState(buttonOptions.find(o => o.id === 'shippingInfo'));
    const breadcrumbItems = [
        { id: "shippingInfo", label: "Shipping Info", href: "#" },
        { id: "shippingMethod", label: "Shipping Method", href: "#" },
        { id: "payment", label: "Payment", href: "#" },
        { id: "review", label: "Review", href: "#" },
    ];

    const [selectedPaymentDetails, setSelectedPaymentDetails] = useState(paymentInfo.find(o => o.id === 1));
    const [selectedShippingAddress, setSelectedShippingAddress] = useState(shippingInfo.find(o => o.id === 1));

    const totalSummary = {
        congineeDetail: selectedShippingAddress,
        shippingMethod: selectedShippingMethod,
        paymentMethod: selectedPaymentDetails,
        items: cartItems,
        totalSummary: orderPrices,
    };

    const handleFinalProcess = () => {
        const id = crypto.randomUUID();
        connectTo.addToArray(totalSummarys, { id, ...totalSummary })
        console.log(totalSummarys);
        Navigate(`/confirmation?id=${id}`);
    };

    const handlePromoPercentage = (promoCode) => {
        setTotal(originalPrice);
        promoCodes.forEach((c) => {
            if (c.code === promoCode) {
                let totalAfterPercentage = total - (total * c.percentage);
                console.log("originalPrice-", originalPrice, "\ntotal-", total, "\ntotalAfterPercentage-", totalAfterPercentage);
                setTotal(Math.round(totalAfterPercentage));
            };
        });

    };

    useEffect(() => {
        let filterButtonOptions = buttonOptions.find(o => o.id === 'payment');
        filterButtonOptions.buttonDisable = true;
        setTotal(originalPrice);
    }, [selectedScreen]);

    return (
        <div className="font-display bg-background-light dark:bg-background-dark min-h-screen">
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <main className="justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">

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
                                selectedShippingAddress={selectedShippingAddress}
                                setSelectedShippingAddress={setSelectedShippingAddress}
                            />
                        }

                        {/* Shipping Method */}
                        {(selectedScreen?.id === "shippingMethod") &&
                            <ShippingMethodOption
                                selectedShippingMethod={selectedShippingMethod}
                                setSelectedShippingMethod={setSelectedShippingMethod}
                            />
                        }

                        {/* Payment Form */}
                        {(selectedScreen?.id === "payment") &&
                            <PaymentForm
                                selectedPaymentDetails={selectedPaymentDetails}
                                setSelectedPaymentDetails={setSelectedPaymentDetails}
                                setSelectedScreen={setSelectedScreen}
                            />
                        }

                        {/* Review Page */}
                        {(selectedScreen?.id === "review") &&
                            <OrderReviewPage
                                totalSummery={totalSummary}
                                setSelectedScreen={setSelectedScreen}
                                buttonOptions={buttonOptions}
                            />
                        }

                        {/* Loading Screen */}
                        {(selectedScreen?.id === "loading") &&
                            <LoadingScreen />
                        }


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
                                    onClick={(e) => {

                                        if (selectedScreen?.buttonDisable) {
                                            e.preventDefault();
                                            toast.error("Confirm payment method..!");
                                            return;
                                        }

                                        setSelectedScreen({ id: "loading" });
                                        setTimeout(() => {
                                            setSelectedScreen(buttonOptions.find(o => o.id === selectedScreen.rightButtonHref));
                                        }, loadingTime);
                                    }}
                                    className={`${selectedScreen?.buttonDisable ? "bg-gray-500 cursor-not-allowed" : "bg-primary hover:bg-primary/90 cursor-pointer"}  flex items-center justify-center gap-2 rounded-lg  px-6 py-3 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}
                                    href="#">
                                    {selectedScreen.rightButtonText}
                                </a>
                            }
                        </div>

                    </div>

                    {/* Order Summary */}
                    <OrderSummary
                        orderPrices={orderPrices}
                        isPage={{
                            isCheckoutPage: false,
                            isPaymentPage: selectedScreen?.id === "payment",
                            isReviewPage: selectedScreen?.id === "review",
                        }}
                        handleFinalProcess={handleFinalProcess}
                        handlePromoPercentage={handlePromoPercentage}
                    />

                </main>
            </div >
        </div >
    );
};
export default CheckoutShippingInfoPage;
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const ShippingForm = ({ selectedShippingAddress, setSelectedShippingAddress }) => {

    const [shippingInfoData, setShippingInfoData] = useState(shippingInfo);

    const handleSubmit = (e) => {
        e.preventDefault();
        const tempFormData = new FormData(e.target);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;
        let formData = Object.fromEntries(tempFormData.entries());

        if (formData?.emailId === "") {
            const { emailId, ...rest } = formData;
            formData = rest;
        } else if (!emailRegex.test(formData?.emailId)) {
            toast.error("Invaild email id..!");
            return;
        }

        if (formData?.telephoneNumber === "") {
            const { telephoneNumber, ...rest } = formData;
            formData = rest;
        } else if (!phoneRegex.test(formData?.telephoneNumber)) {
            toast.error("Invaild telephone number..!");
            return;
        }

        const hasErrors = Object.keys(formData).some((key) => formData[key] === '');
        if (hasErrors) {
            toast.error('Please fill the form correctly');
            return;
        } else {
            const sendData = {
                id: shippingInfo?.length + 1,
                name: formData.fullName,
                address: [
                    formData.houseNumber + ", " + formData.streetName,
                    formData.cityName + ", " + formData.stateName,
                    formData.postalCode,
                ],
                nearByLandmark: formData.nearByLandmark,
                emailId: formData.emailId,
                telephoneNumber: formData.telephoneNumber,
            };
            console.log(sendData);

            setShippingInfoData(connectTo.addToArray(shippingInfo, sendData));
            setSelectedShippingAddress(sendData);
            toast.success("Shipping saved successfully..!");
        }

    };

    const inputClasses = "block w-full rounded-lg border-0 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm sm:leading-6";
    const labelClasses = "block text-sm font-medium leading-6 text-slate-900 dark:text-slate-200";

    return (
        <>
            {/* Shipping Form Heading */}
            < div className="flex flex-col gap-3" >
                <p className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Shipping Information</p>
                <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-normal mb-5">Please enter your shipping details below.</p>
            </ div>

            {/* Billing Address */}
            < div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800" >
                <h2 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] mb-4">Shipping Address</h2>
                <div className="space-y-4">
                    {shippingInfoData.map((address) =>
                    (
                        <div
                            key={address.id}
                            className="flex items-center justify-center w-full bg-white dark:bg-slate-900/50 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                            <label
                                className={`p-6 flex justify-between items-start size-full cursor-pointer rounded-xl
                                ${(address.id === selectedShippingAddress.id) ? 'border-2 border-primary bg-primary/5 dark:bg-primary/10'
                                        : 'border border-border-light dark:border-border-dark bg-neutral-light dark:bg-neutral-dark'}`}>
                                <input
                                    className="absolute size-20 hidden cursor-pointer border-gray-300 text-primary focus:ring-primary"
                                    id="same-as-shipping"
                                    name="billing-address"
                                    type="radio"
                                    checked={address.id === selectedShippingAddress.id}
                                    onChange={() => setSelectedShippingAddress(address)}
                                />
                                <div>
                                    <div className="text-slate-600 dark:text-slate-400 text-sm space-y-1">
                                        <p className="font-medium text-slate-800 dark:text-slate-200">{address.name}</p>
                                        {address.address.map((line, index) => <p key={index}>{line}</p>)}
                                        <p className="font-medium text-slate-800 dark:text-slate-400">near by landmark -{address.nearByLandmark}</p>
                                    </div>
                                </div>
                            </label>
                        </div>
                    ))
                    }
                    <div className="flex items-center">
                        <input
                            className="cursor-pointer h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                            id="different-billing"
                            name="billing-address"
                            type="radio"
                            checked={selectedShippingAddress === 'different'}
                            onChange={() => setSelectedShippingAddress('different')}
                        />
                        <label className=" cursor-pointer ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="different-billing">Use a different shipping address</label>
                    </div>
                    {(selectedShippingAddress === 'different') &&
                        (<form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-8">
                            {/* Shipping Address */}
                            <div className="space-y-6">
                                <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Shipping Address</h2>
                                <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                                    <div className="sm:col-span-6">
                                        <label className={labelClasses} htmlFor="full-name">Full Name</label>
                                        <div className="mt-2">
                                            <input autoComplete="name" className={inputClasses} id="full-name" name="fullName" type="text" required />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-6">
                                        <label className={labelClasses} htmlFor="address-line1">Door No./Building No./Flat No.</label>
                                        <div className="mt-2">
                                            <input autoComplete="address-line1" className={inputClasses} id="address-line1" name="houseNumber" type="text" required />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-6">
                                        <label className={labelClasses} htmlFor="street-address">Street Address</label>
                                        <div className="mt-2">
                                            <input autoComplete="address-line2" className={inputClasses} id="street-address" name="streetName" type="text" />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className={labelClasses} htmlFor="city">City</label>
                                        <div className="mt-2">
                                            <input autoComplete="address-line3" className={inputClasses} id="city" name="cityName" type="text" required />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className={labelClasses} htmlFor="state-province">State</label>
                                        <div className="mt-2">
                                            <input autoComplete="off" className={inputClasses} id="state-province" name="stateName" type="text" required />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className={labelClasses} htmlFor="postal-code">ZIP / Postal code</label>
                                        <div className="mt-2">
                                            <input autoComplete="postal-code" className={inputClasses} id="postal-code" name="postalCode" type="text" required />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-6">
                                        <label className={labelClasses} htmlFor="near-by-landmark">Near by landmark</label>
                                        <div className="mt-2">
                                            <input autoComplete="additional-name" className={inputClasses} id="near-by-landmark" name="nearByLandmark" type="text" />
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
                                                className={inputClasses} id="email" name="emailId" type="email" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className={labelClasses} htmlFor="tel">Phone Number</label>
                                        <div className="mt-2">
                                            <input
                                                autoComplete="mobile tel"
                                                className={inputClasses} id="tel" name="telephoneNumber" type="tel" />
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
const ShippingMethodOption = ({ selectedShippingMethod, setSelectedShippingMethod }) => {

    return (
        <div className="flex flex-col gap-4">

            {/* Shipping Options Heading */}
            <h1 className="text-3xl lg:text-3xl font-black text-white tracking-tighter mx-2 my-10" > Choose a Delivery Option</h1 >
            {shippingOptions.map(option => (
                <label key={option.id}
                    className={`flex cursor-pointer items-start gap-4 rounded-xl p-4 ring-offset-background-light dark:ring-offset-background-dark focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 transition-all 
                        ${(selectedShippingMethod.id === option.id)
                            ? 'border-2 border-primary bg-primary/5 dark:bg-primary/10'
                            : 'border border-border-light dark:border-border-dark bg-neutral-light dark:bg-neutral-dark'
                        }`}
                >
                    <input
                        className="mt-1 h-5 w-5 appearance-none rounded-full border-2 border-text-muted-light dark:border-text-muted-dark bg-transparent text-transparent 
                        checked:border-primary checked:bg-primary checked:bg-[image:--radio-dot-svg] focus:outline-none"
                        name="shipping_method"
                        type="radio"
                        checked={selectedShippingMethod.id === option.id}
                        onChange={() => setSelectedShippingMethod(option)}
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
const PaymentForm = ({ selectedPaymentDetails, setSelectedPaymentDetails, setSelectedScreen }) => {
    const inputClasses = "block w-full rounded-lg border-gray-300 dark:border-gray-700 dark:text-white bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary text-sm";
    const labelClasses = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1";

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('UPI Pay');
    const [paymentInfoCopy, setPaymentInfoCopy] = useState(paymentInfo);

    const handleSubmit = (e) => {
        e.preventDefault();
        const tempFormData = new FormData(e.target);
        let formData = Object.fromEntries(tempFormData.entries());
        const cardNumberRegex = /^\d{16}$/;
        const expirationDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        const cardCVVRegex = /^\d{3}$/;
        const upiIdRegex = /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/;
        let sendData = {};

        switch (selectedPaymentMethod) {
            case 'Credit Card':

                if (!cardNumberRegex.test(formData?.cardNumber)) {
                    toast.error("Invaild card number..!");
                    return;
                }
                if (!expirationDateRegex.test(formData?.cardExpirationDate)) {
                    toast.error("Invaild Expiration Date..!");
                    return;
                }
                if (!cardCVVRegex.test(formData?.cardCVVNumber)) {
                    toast.error("Invaild CVV number..!");
                    return;
                }

                sendData = {
                    id: paymentInfo?.length + 1,
                    cardNumber: formData?.cardNumber,
                    cardHolderName: formData?.cardHolderName,
                    cardExpirationDate: formData?.cardExpirationDate,
                    cardCVVNumber: formData?.cardCVVNumber,
                    paymentType: 'Credit Card',
                };
                break;
            case 'UPI Pay':

                if (!upiIdRegex.test(formData?.upiId)) {
                    toast.error("Invaild UPI Id..!");
                    return;
                }

                sendData = {
                    id: paymentInfo?.length + 1,
                    upiId: formData?.upiId,
                    paymentType: 'UPI Pay',
                };
                break;
            default:

                sendData = {
                    id: paymentInfo?.length + 1,
                    paymentType: 'COD',
                };

                break;
        }

        const hasErrors = Object.keys(sendData).some((key) => sendData[key] === '');
        if (hasErrors) {
            toast.error('Please fill the form correctly');
            return;
        }

        setPaymentInfoCopy(connectTo.addToArray(paymentInfo, sendData));
        setSelectedPaymentDetails(sendData);
        setShowFrom(!showFrom);
        buttonOptions.find(o => o.id === 'payment').buttonDisable = false;
    };

    const [showFrom, setShowFrom] = useState(false);

    const handleRester = (method) => {

        if (method === 'Credit Card') {
            setShowFrom(false);
            const filteredPaymentInfo = paymentInfo.filter(card => card.paymentType === "Credit Card");
            setPaymentInfoCopy(filteredPaymentInfo);
            setSelectedPaymentDetails(filteredPaymentInfo[0]);
            let filterButtonOptions = buttonOptions.find(o => o.id === 'payment');
            filterButtonOptions.buttonDisable = false;
            setSelectedScreen(filterButtonOptions);
        } else {
            let filterButtonOptions = buttonOptions.find(o => o.id === 'payment');
            filterButtonOptions.buttonDisable = true;
            setSelectedScreen(filterButtonOptions);
        }
        setSelectedPaymentMethod(method);

    }

    return (
        <div className="space-y-8">
            <h1 className="text-3xl lg:text-3xl font-black text-white tracking-tighter mx-2 my-8" > Choose a Payment Option</h1 >
            {/* Payment Method Selector */}
            <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                <h2 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] pb-4">Payment Method</h2>
                <div className="flex h-12 flex-1 items-center justify-center rounded-lg bg-background-light dark:bg-background-dark p-1 border border-gray-200 dark:border-gray-800">
                    {['Credit Card', 'UPI Pay', 'COD'].map(method => (
                        <label
                            key={method}
                            className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-medium leading-normal transition-all ${selectedPaymentMethod === method
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
                                checked={selectedPaymentMethod === method}
                                onChange={() => handleRester(method)}
                            />
                        </label>
                    ))}
                </div>
            </div>

            {/* Card Information */}
            {selectedPaymentMethod === 'Credit Card' && (
                <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                    <div className='mb-12'>
                        <div className="flex items-center justify-between mx-2 my-5 gap-4">
                            <p className='font-medium text-xl text-slate-800 dark:text-slate-200'>Saved cards</p>
                            <button
                                onClick={() => setShowFrom(!showFrom)}
                                className='text-primary cursor-pointer hover:underline'>New</button>
                        </div>
                        {paymentInfoCopy.map(card => (
                            <label key={card.id} className={`flex items-center gap-3 my-4 p-2 border rounded-xl cursor-pointer
                        ${(card.id === selectedPaymentDetails.id) ? 'border-2 border-primary bg-primary/5 dark:bg-primary/10'
                                    : 'border border-border-light dark:border-border-dark bg-neutral-light dark:bg-neutral-dark'}`}>
                                <input
                                    className="absolute size-15 hidden cursor-pointer border-gray-300 text-primary focus:ring-primary"
                                    id="payment-card"
                                    name="payment-card"
                                    type="radio"
                                    checked={card.id === selectedPaymentDetails.id}
                                    onChange={() => setSelectedPaymentDetails(card)}
                                />
                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEBUlEQVR4nO1Za0gUURT2Xz/62c72tIjQgopKiooeEPWjokiKHlD+iGYmy970sLKyl1ZEL4vK6AVpQQ8hKS3LmfHRaqZu2sO02tLemtZmmrrOiXN3586MrrKwC7vlfHDY2e/eOfd895577jATFGTAgAEDBgwYcI8evDDaxIpxDCecDSQzsWKciZfCgjwBwwr7GE6QGU6EwDRBZlhxT+cilolz/R+o6JGZ2cw5HQoxcWK6vwNkPDVWuNuZkAq/B8h5Zhhrx0JY0fbPCGFFmyGECSAzGUK4f1BIcOQ9CIlK1ZmZF9o5G7AqG6btKyQ2de8Twk3c+Zhy2K7t32u5BKO2WGDirgIIXpnlNsBR0Xn0frz2WkhUfAyU3Q4FkLoRq73PwOLdB3XONieVg4Ksl7WEq7Y3U27kFgvhxmzLh7Tiamh2yKBFyftfYOZVf2ZehNdfGmi79KLWN6nVk8+ExOTDIFuCiZiSlKE6Z7mv6uigXOJzCFmbQ//X/3GQwIZsyIWvP5vAHYrf2XX+Fh0v0bXX/W7RCfVqj2AgclMNgHUKOMTu0C/yPuGHbXwEra4JrrE3Q98VEsyIL6JBWF1Bbr9WQbm8ih8wfsdjIjj8sBVWXyzTjfWg9Hs7sbiaPtvsz6vqAVobwVE0BebvOU+46GQ1wFP3KgmHgSm4bvlCuLiUt5RLt9ZAn0jJbWDjYvJBllXB2pX2mZAzGVVOr01fIenmEcJZyp2D4eA4y8idSKukAaAA5GYdLNbNsO1bA0See9EuZRIffnAO0SLDdM3Knkyv9J2QiJOl1PEtKQ+Gb1LTKqesjva7W1xN+y09rc4kinIoN2hWB9MR2weuzgZ7o4PwqYXfiEjlf7bGv9dCBq3JoYHgBt12VU0rnF2l36tPvymPJVbrY3JsAQleC6x62LZV429xQqmukPxsaIGevA8PxCKb3bX0rVD41nldW98M/VznQe/lEkkLREurTGe7rV0QPtKgMZ20JVeWAZJyPsNl6RNUfFYnBfePz4Ro81/B6Ywq3WZVgIEhh4fapivlMCm2AELX5ZLfzGdqZYo49QwWHtOXXHfQrrrXQha4GXDCTucmR1uSoO6jNGsN4Q7dtkFHuCR+JH0ySlRhya7VQMOq527CvBaCjxtK6iCwamnbY2+8oW0Jrkpz9M57kmZalFb+ooVg7PZ8WjQwXRndYSySQxXxqM1YXglBm3mgCOYdeUqs7UGFqaW04fOUwvePyiIphSV18Ppc3T0jNlvoPe72wYx453hYwn0qJJDMZAjhAstMXUMI97+8DuL+kxd0Zl4I93uAnGfWY5k4O6gz4AvigH+JzQmxnYqgKcZLYQwn7Pf3ZwSmreGXAlYY6ZEIAwYMGDBgoCviL0TtZIzGdHmCAAAAAElFTkSuQmCC" alt="visa" />
                                <div className="text-slate-600 dark:text-slate-400 text-sm">
                                    <p className="font-medium text-slate-800 dark:text-slate-200">{card?.paymentType}</p>
                                    <p>{card?.cardNumber.substring(12, 16)}</p>
                                </div>
                            </label>
                        ))
                        }
                    </div>
                    {showFrom &&
                        <>
                            <h2 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] mb-4">Card Information</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 gap-4">
                                    <div>
                                        <label className={labelClasses} htmlFor="card-number">Card Number</label>
                                        <div className="relative">
                                            <input className={inputClasses} id="card-number" placeholder="0000 0000 0000 0000" type="number" name='cardNumber' />
                                            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">credit_card</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className={labelClasses} htmlFor="card-name">Name on Card</label>
                                        <input className={inputClasses} id="card-name" placeholder="John Doe" type="text" name='cardHolderName' />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className={labelClasses} htmlFor="expiry-date">Expiration Date</label>
                                            <input className={inputClasses} id="expiry-date" placeholder="MM/YY" type="text" name='cardExpirationDate' />
                                        </div>
                                        <div>
                                            <label className={labelClasses} htmlFor="cvv">
                                                CVV
                                                <span className="material-symbols-outlined text-xs align-middle text-gray-400 cursor-help" title="3-4 digit code on the back of your card">help</span>
                                            </label>
                                            <input className={inputClasses} id="cvv" placeholder="123" type="password" name='cardCVVNumber' />
                                        </div>
                                    </div>
                                    <button
                                        className="cursor-pointer px-4 py-2 my-3 rounded-lg bg-slate-200/80 dark:bg-slate-800/80 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-300/80 dark:hover:bg-slate-700/80 transition-colors"
                                        type='submit'
                                    >
                                        Verify
                                    </button>
                                </div>
                            </form>
                        </>
                    }
                </div>
            )
            }

            {/* UPI Pay */}
            {selectedPaymentMethod === 'UPI Pay' && (
                <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                    {/* UPI valitation */}
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="promo-code">UPI id</label>
                            <div className="flex gap-2">
                                <input className="flex-grow block w-full rounded-md border-slate-300 dark:border-slate-700 shadow-sm focus:border-primary focus:ring-primary text-sm bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500" id="upiId" name='upiId' placeholder="Enter UPI id" type="text" />
                                <button
                                    type='submit'
                                    className="cursor-pointer px-4 py-2 rounded-lg bg-slate-200/80 dark:bg-slate-800/80 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-300/80 dark:hover:bg-slate-700/80 transition-colors">
                                    Verify
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            )
            }

            {/* COD */}
            {selectedPaymentMethod === 'COD' && (
                <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                    {/* COD Confirmation*/}
                    <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-1 gap-4'>
                            <label
                                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                                htmlFor="promo-code">
                                To proceed with shipping, Please confirm you will be available to receive the package and pay in cash during this period.
                            </label>
                            <button
                                type='submit'
                                className="cursor-pointer px-4 py-2 rounded-lg bg-slate-200/80 dark:bg-slate-800/80 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-300/80 dark:hover:bg-slate-700/80 transition-colors">
                                Confirm
                            </button>
                        </div>
                    </form>
                </div>
            )
            }

        </div >
    );
};
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const LoadingScreen = () => {
    return (
        <div className="space-y-8">
            <div className="h-100 flex items-center justify-center bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                <div className="loader">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                    <div className="bar4"></div>
                    <div className="bar5"></div>
                    <div className="bar6"></div>
                    <div className="bar7"></div>
                    <div className="bar8"></div>
                    <div className="bar9"></div>
                    <div className="bar10"></div>
                    <div className="bar11"></div>
                    <div className="bar12"></div>
                </div>
                <span className='text-white text-3xl'>Loading ...</span>
            </div>
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
                                    }, loadingTime);
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