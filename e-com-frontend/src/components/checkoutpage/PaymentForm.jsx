import { useState } from 'react';
import { toast } from 'sonner';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
import { paymentInfo } from '../../utilities/rawData';
import * as connectTo from '../../utilities/reusables';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

const PaymentForm = ({ selectedPaymentDetails, setSelectedPaymentDetails, setSelectedScreen, disabledButton, setDisabledButton }) => {
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
            case 'Card':

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
                    isDefault: false,
                };
                setPaymentInfoCopy(connectTo.addToArray(paymentInfoCopy, sendData));
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

        setSelectedPaymentDetails(sendData);
        setShowFrom(false);
        setDisabledButton(false);
    };

    const [showFrom, setShowFrom] = useState(false);
    const handleRester = (method) => {

        if (method === 'Card') {
            setShowFrom(false);
            setDisabledButton(false);
        } else {
            setDisabledButton(true);
        }
        setSelectedPaymentMethod(method);

    };

    return (
        <div className="space-y-8">
            <h1 className="text-3xl lg:text-3xl font-black text-white tracking-tighter mx-2 my-8" > Choose a Payment Option</h1 >
            {/* Payment Method Selector */}
            <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                <h2 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] pb-4">Payment Method</h2>
                <div className="flex h-12 flex-1 items-center justify-center rounded-lg bg-background-light dark:bg-background-dark p-1 border border-gray-200 dark:border-gray-800">
                    {['Card', 'UPI Pay', 'COD'].map(method => (
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
            {selectedPaymentMethod === 'Card' && (
                <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                    <div className='mb-12'>
                        <div className="flex items-center justify-between mx-2 my-5 gap-4">
                            <p className='font-medium text-xl text-slate-800 dark:text-slate-200'>Saved cards</p>
                            <button
                                onClick={() => setShowFrom(!showFrom)}
                                className='text-primary cursor-pointer hover:underline'>
                                {showFrom ? 'Close' : 'New Card'}
                            </button>
                        </div>
                        {paymentInfoCopy.map(card => (
                            <label key={card.id} className={`flex items-center gap-3 my-4 p-2 border rounded-xl cursor-pointer
                                    ${(card.id === selectedPaymentDetails.id)
                                    ? 'border-2 border-primary bg-primary/5 dark:bg-primary/10'
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
                                {card.isDefault && <span
                                    className="bg-primary/10 text-primary font-medium text-xs px-2 py-1 rounded-full">Default</span>}
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
                                            <span className="bg-background-light dark:bg-background-dark material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">credit_card</span>
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

export default PaymentForm;