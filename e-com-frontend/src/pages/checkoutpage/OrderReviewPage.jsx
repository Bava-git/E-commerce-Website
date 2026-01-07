import { format } from "date-fns";

// --- Sub-Components ---
const ShippingInfoCard = ({ congineeDetail, shippingMethod, setSelectedScreen, buttonOptions }) => (
    <div className="bg-white dark:bg-slate-900/50 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
        <div className="p-6 flex justify-between items-start">
            <div>
                <h2 className="text-slate-900 dark:text-slate-50 text-lg font-bold tracking-tight mb-4">Shipping Information</h2>
                <div className="text-slate-600 dark:text-slate-400 text-sm space-y-1">
                    <p className="font-medium text-slate-800 dark:text-slate-200">{congineeDetail.name}</p>
                    {congineeDetail.address.map((line, index) => <p key={index}>{line}</p>)}
                </div>
                <div className="mt-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-xl text-slate-500">local_shipping</span>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{shippingMethod.name} estimated date of arrival <strong className='text-white'>{format(new Date(shippingMethod.eta) || 0, "dd MMM yyyy")}</strong></p>
                </div>
            </div>
            <button
                onClick={() => setSelectedScreen(buttonOptions.find(o => o.id === 'shippingInfo'))}
                className="cursor-pointer text-primary dark:text-primary/90 text-sm font-medium hover:underline">
                Change
            </button>
        </div>
    </div>
);
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const PaymentInfoCard = ({ paymentMethod, setSelectedScreen, buttonOptions }) => (
    <div className="bg-white dark:bg-slate-900/50 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
        <div className="p-6 flex justify-between items-start">
            <div>
                <h2 className="text-slate-900 dark:text-slate-50 text-lg font-bold tracking-tight mb-4">Payment Method</h2>
                {paymentMethod.paymentType === "Credit Card" &&
                    (<div className="flex items-center gap-3">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEBUlEQVR4nO1Za0gUURT2Xz/62c72tIjQgopKiooeEPWjokiKHlD+iGYmy970sLKyl1ZEL4vK6AVpQQ8hKS3LmfHRaqZu2sO02tLemtZmmrrOiXN3586MrrKwC7vlfHDY2e/eOfd895577jATFGTAgAEDBgwYcI8evDDaxIpxDCecDSQzsWKciZfCgjwBwwr7GE6QGU6EwDRBZlhxT+cilolz/R+o6JGZ2cw5HQoxcWK6vwNkPDVWuNuZkAq/B8h5Zhhrx0JY0fbPCGFFmyGECSAzGUK4f1BIcOQ9CIlK1ZmZF9o5G7AqG6btKyQ2de8Twk3c+Zhy2K7t32u5BKO2WGDirgIIXpnlNsBR0Xn0frz2WkhUfAyU3Q4FkLoRq73PwOLdB3XONieVg4Ksl7WEq7Y3U27kFgvhxmzLh7Tiamh2yKBFyftfYOZVf2ZehNdfGmi79KLWN6nVk8+ExOTDIFuCiZiSlKE6Z7mv6uigXOJzCFmbQ//X/3GQwIZsyIWvP5vAHYrf2XX+Fh0v0bXX/W7RCfVqj2AgclMNgHUKOMTu0C/yPuGHbXwEra4JrrE3Q98VEsyIL6JBWF1Bbr9WQbm8ih8wfsdjIjj8sBVWXyzTjfWg9Hs7sbiaPtvsz6vqAVobwVE0BebvOU+46GQ1wFP3KgmHgSm4bvlCuLiUt5RLt9ZAn0jJbWDjYvJBllXB2pX2mZAzGVVOr01fIenmEcJZyp2D4eA4y8idSKukAaAA5GYdLNbNsO1bA0See9EuZRIffnAO0SLDdM3Knkyv9J2QiJOl1PEtKQ+Gb1LTKqesjva7W1xN+y09rc4kinIoN2hWB9MR2weuzgZ7o4PwqYXfiEjlf7bGv9dCBq3JoYHgBt12VU0rnF2l36tPvymPJVbrY3JsAQleC6x62LZV429xQqmukPxsaIGevA8PxCKb3bX0rVD41nldW98M/VznQe/lEkkLREurTGe7rV0QPtKgMZ20JVeWAZJyPsNl6RNUfFYnBfePz4Ro81/B6Ywq3WZVgIEhh4fapivlMCm2AELX5ZLfzGdqZYo49QwWHtOXXHfQrrrXQha4GXDCTucmR1uSoO6jNGsN4Q7dtkFHuCR+JH0ySlRhya7VQMOq527CvBaCjxtK6iCwamnbY2+8oW0Jrkpz9M57kmZalFb+ooVg7PZ8WjQwXRndYSySQxXxqM1YXglBm3mgCOYdeUqs7UGFqaW04fOUwvePyiIphSV18Ppc3T0jNlvoPe72wYx453hYwn0qJJDMZAjhAstMXUMI97+8DuL+kxd0Zl4I93uAnGfWY5k4O6gz4AvigH+JzQmxnYqgKcZLYQwn7Pf3ZwSmreGXAlYY6ZEIAwYMGDBgoCviL0TtZIzGdHmCAAAAAElFTkSuQmCC" alt="visa" />
                        <div className="text-slate-600 dark:text-slate-400 text-sm">
                            <p className="font-medium text-slate-800 dark:text-slate-200">{paymentMethod?.paymentType}</p>
                            <p>{paymentMethod?.cardNumber.substring(12, 16)}</p>
                        </div>
                    </div>)
                }
                {paymentMethod.paymentType === "UPI Pay" &&
                    (<div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M440-360h60v-80h100q17 0 28.5-11.5T640-480v-80q0-17-11.5-28.5T600-600H440v240Zm240 0h60v-240h-60v240ZM500-500v-40h80v40h-80ZM240-360h120q17 0 28.5-11.5T400-400v-200h-60v180h-80v-180h-60v200q0 17 11.5 28.5T240-360Zm-80 200q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z" /></svg>
                        <div className="text-slate-600 dark:text-slate-400 text-sm">
                            <p className="font-medium text-slate-800 dark:text-slate-200">{paymentMethod?.paymentType}</p>
                            <p>{paymentMethod?.upiId}</p>
                        </div>
                    </div>)
                }
                {paymentMethod.paymentType === "COD" &&
                    (<div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z" /></svg>
                        <div className="text-slate-600 dark:text-slate-400 text-sm">
                            <p className="font-medium text-slate-800 dark:text-slate-200">{paymentMethod?.paymentType}</p>
                        </div>
                    </div>)
                }
            </div>
            <button
                onClick={() => setSelectedScreen(buttonOptions.find(o => o.id === 'payment'))}
                className="cursor-pointer text-primary dark:text-primary/90 text-sm font-medium hover:underline">
                Change
            </button>
        </div>
    </div>
);
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const OrderItemsCard = ({ items }) => (
    <div className="bg-white dark:bg-slate-900/50 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
        <div className="p-6">
            <h2 className="text-slate-900 dark:text-slate-50 text-lg font-bold tracking-tight mb-4">Items in Order ({items?.length})</h2>
            <div className="divide-y divide-slate-200 dark:divide-slate-800">
                {items.map(item => (
                    <div key={item.cartlistId} className="flex items-center gap-4 py-4">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 flex-shrink-0"
                            data-alt={item.name}
                            style={{ backgroundImage: `url("${item.image}")` }}
                        ></div>
                        <div className="flex-grow">
                            <p className="text-slate-900 dark:text-slate-50 text-base font-medium line-clamp-1">{item.name}</p>
                            <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-1">Color: {item.color} {item.size ? `\nSize : ${item.size}` : ""}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-slate-900 dark:text-slate-50 text-base font-medium">₹{item.price.toFixed(2)}</p>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Qty: {item.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// --- Main Page Component ---
const OrderReviewPage = ({ totalSummery, cartItems, setSelectedScreen, buttonOptions }) => {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark min-h-screen">
            <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <main className="flex-grow container mx-auto px-4 py-4 md:py-1">
                    <div className="max-w-5xl mx-auto">

                        {/* Page Heading */}
                        <div className="flex flex-wrap justify-between gap-3 my-8">
                            <h1 className="text-slate-900 dark:text-slate-50 text-2xl font-black tracking-tighter">Review Your Order</h1>
                        </div>

                        {/* Left Column: Review Cards */}
                        <div className="lg:col-span-2 flex flex-col gap-8">
                            <ShippingInfoCard
                                congineeDetail={totalSummery.congineeDetail}
                                shippingMethod={totalSummery.shippingMethod}
                                setSelectedScreen={setSelectedScreen}
                                buttonOptions={buttonOptions}
                            />
                            <PaymentInfoCard
                                paymentMethod={totalSummery.paymentMethod}
                                setSelectedScreen={setSelectedScreen}
                                buttonOptions={buttonOptions}
                            />
                            <OrderItemsCard
                                items={cartItems}
                            />
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default OrderReviewPage;