import { useState } from "react";
import { toast } from "sonner";
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
import { shippingInfo } from "../../utilities/rawData";
import * as connectTo from "../../utilities/reusables";
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
                                        {address.nearByLandmark && <p className="font-medium text-slate-800 dark:text-slate-400">near by landmark -{address.nearByLandmark}</p>}
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

export default ShippingForm;