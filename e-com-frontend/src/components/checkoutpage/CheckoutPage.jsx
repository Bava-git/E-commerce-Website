import { addDays } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
import { cartList, paymentInfo, products, promoCodes, shippingInfo, totalSummarys, trackItems } from '../../utilities/rawData';
import * as connectTo from '../../utilities/reusables';
import { OrderSummary } from '../reusables/OrderSummary';
import OrderReviewPage from './OrderReviewPage';
import PaymentForm from './PaymentForm';
import ShippingForm from './ShippingForm';
import ShippingMethodOption from './ShippingMethodOption';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
export const shippingOptions = [
    { id: 'standard', name: 'Standard Delivery', price: 0, eta: addDays(new Date(), 10).toString().split(' (')[0], isPopular: true },
    { id: 'express', name: 'Overnight Express', price: 100.00, eta: addDays(new Date(), 1).toString().split(' (')[0], isPopular: false },
];
// ---------------------------------------------------------------------------
const buttonOptions = [
    { id: "shippingInfo", leftButtonText: "hide", leftButtonHref: "hide", rightButtonText: "Continue to Delivery Option", rightButtonHref: "shippingMethod" },
    { id: "shippingMethod", leftButtonText: "Return to Shipping info", leftButtonHref: "shippingInfo", rightButtonText: "Continue to Payment", rightButtonHref: "payment" },
    { id: "payment", leftButtonText: "Return to Shipping method", leftButtonHref: "shippingMethod", rightButtonText: "Continue to Review", rightButtonHref: "review" },
    { id: "review", leftButtonText: "Return to Payment", leftButtonHref: "payment", rightButtonText: "hide", rightButtonHref: "hide" },
];
// ---------------------------------------------------------------------------
const loadingTime = 200;
// ---------------------------------------------------------------------------
function calculateOrderPrices(cartItems, selectedShippingMethod) {

    cartItems.forEach(item => {
        let tempProduct = connectTo.oneItemFromArray(products, "id", item.productId);
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
// -- Main Component --
const CheckoutShippingInfoPage = () => {

    const Navigate = useNavigate();

    const [selectedShippingMethod, setSelectedShippingMethod] = useState(shippingOptions.find(o => o.id === 'standard'));
    const [cartItems, setCartItems] = useState(cartList);
    const orderPrices = calculateOrderPrices(cartItems, selectedShippingMethod);
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

    const trackItemsIds = [];
    let totalSummary = {
        congineeDetail: selectedShippingAddress,
        shippingMethod: selectedShippingMethod,
        paymentMethod: selectedPaymentDetails,
        trackItemsIds: trackItemsIds,
        totalSummary: orderPrices,
    };
    const handleFinalProcess = () => {
        const orderId = crypto.randomUUID();

        const updatedCartItems = cartItems.map(({ cartlistId, ...rest }) => rest);
        console.log(updatedCartItems);
        let newItemsStatus = updatedCartItems.map(item => ({
            ...item,
            trackId: crypto.randomUUID(),
            orderId: orderId,
            status: "Pending",
            orderDate: new Date().toString().split(' (')[0],
            eta: selectedShippingMethod.eta,
            ata: ""
        }));
        newItemsStatus.map(item => trackItemsIds.push(item.trackId));

        totalSummary = {
            ...totalSummary,
            orderId: orderId,
            deliveryStatus: {
                orderDate: new Date().toString().split(' (')[0],
                status: "Pending",
            },
        };

        connectTo.addToArray(totalSummarys, totalSummary);
        newItemsStatus.map(item => trackItems.push(item));

        console.log(totalSummarys);
        console.log(trackItems);
        Navigate(`/confirmation?orderId=${orderId}`);
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

    const [disabledButton, setDisabledButton] = useState(false);
    useEffect(() => {
        if (selectedScreen?.id === "payment") {
            setDisabledButton(true);
        } else {
            setDisabledButton(false);
        }
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
                                disabledButton={disabledButton}
                                setDisabledButton={setDisabledButton}
                            />
                        }

                        {/* Review Page */}
                        {(selectedScreen?.id === "review") &&
                            <OrderReviewPage
                                totalSummery={totalSummary}
                                setSelectedScreen={setSelectedScreen}
                                cartItems={cartItems}
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

                                        if (disabledButton) {
                                            e.preventDefault();
                                            toast.error("Confirm payment method..!");
                                            return;
                                        }

                                        setSelectedScreen({ id: "loading" });
                                        setTimeout(() => {
                                            setSelectedScreen(buttonOptions.find(o => o.id === selectedScreen.rightButtonHref));
                                        }, loadingTime);
                                    }}
                                    className={
                                        `${disabledButton
                                            ? "bg-gray-500 cursor-not-allowed"
                                            : "bg-primary hover:bg-primary/90 cursor-pointer"}
                                            flex items-center justify-center gap-2 rounded-lg  px-6 py-3 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}
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
// -- Loading Screen Component --
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