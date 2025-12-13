import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
import { shippingInfo } from "../../utilities/rawData";
import * as connectTo from '../../utilities/reusables';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// -- Main Component -- 
const MyAddressPage = () => {

    const inputClasses = "block w-full rounded-lg border-0 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm sm:leading-6";
    const labelClasses = "block text-sm font-medium leading-6 text-slate-900 dark:text-slate-200";
    const [shippingInfoData, setShippingInfoData] = useState(shippingInfo);
    const [editData, setEditData] = useState({
        address: [
            ",",
            ",",
            ""
        ],
    });
    const [showForm, setShowForm] = useState(false);

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
                id: editData?.id || shippingInfo?.length + 1,
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

            if (!!editData?.id) {
                setShippingInfoData(
                    shippingInfoData.map(item => {
                        if (item.id === sendData.id) {
                            toast.success("Saved successfully..!");
                            return sendData;
                        }
                        return item;
                    })
                );
            } else {
                setShippingInfoData(connectTo.addToArray(shippingInfo, sendData));
                toast.success("Saved successfully..!");
            };
            setShowForm(!showForm);

        };

    };

    const handleShowForm = (address) => {
        setShowForm(!showForm);
        if (address) {
            setEditData(address);
        }
        const formEl = document.getElementById("editForm");
        if (formEl) {
            formEl.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleDeleteShippingInfo = (id) => {
        setShippingInfoData(connectTo.delFromArray(shippingInfoData, "id", id));
        setShowForm(!showForm)
        toast.success("Deleted sucessfuly!");
    }

    return (
        <main className="flex-1 w-full m-1">
            <div className="m-5 p-2 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
                <header className="flex gap-2 dark:bg-neutral-900/50 p-4 shadow-sm justify-between items-center">
                    <div className='flex gap-2 justify-center items-center'>
                        <span className="material-symbols-outlined dark:text-white">pin_drop</span>
                        <p className="dark:text-white font-medium">Address ({shippingInfo?.length})</p>
                    </div>
                    <button
                        onClick={() => handleShowForm({ address: [",", ",", ""], })}
                        className="m-2 p-2 flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        New
                    </button>
                </header>
                <section className='m-3 p-3 flex overflow-hidden flex-wrap'>
                    {shippingInfoData.map((address) =>
                        <div key={address.id} className="text-slate-600 dark:text-slate-400 text-sm flex flex-col gap-2 border p-3 m-3 text-center rounded-2xl w-100 border-border-dark">
                            <span className="material-symbols-outlined dark:text-white">{address.label}</span>
                            <p className="font-medium text-slate-800 dark:text-slate-200">{address.name}</p>
                            {address.address.map((line, index) => <p key={index}>{line}</p>)}
                            <p className="font-medium text-slate-800 dark:text-slate-400">{address.nearByLandmark}</p>
                            <p className="font-medium text-slate-800 dark:text-slate-400">Email: {address.emailId} Mobile: {address.telephoneNumber}</p>
                            <button
                                onClick={() => handleShowForm(address)}
                                className="m-2 p-2 flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                {!showForm ? "Edit" : "Close"}
                            </button>
                        </div>
                    )}
                </section>
                <section className='m-3 p-3 flex' id='editForm'>
                    {showForm &&
                        (
                            <form onSubmit={handleSubmit} className="mt-8 flex flex-1 flex-col gap-8">
                                {/* Shipping Address */}
                                <div className="space-y-6">
                                    <div className='flex flex-row items-center justify-between'>
                                        <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Shipping Address</h2>
                                        <a
                                            onClick={() => setShowForm(!showForm)}
                                            href='#'
                                            className="m-2 p-2 flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                            Close
                                        </a>
                                    </div>
                                    <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                                        <div className="sm:col-span-6">
                                            <label className={labelClasses} htmlFor="full-name">Full Name</label>
                                            <div className="mt-2">
                                                <input defaultValue={editData.name || ""} autoComplete="name" className={inputClasses} id="full-name" name="fullName" type="text" required />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-6">
                                            <label className={labelClasses} htmlFor="address-line1">Door No./Building No./Flat No.</label>
                                            <div className="mt-2">
                                                <input defaultValue={editData?.address[0].split(",")[0] || ""} autoComplete="address-line1" className={inputClasses} id="address-line1" name="houseNumber" type="text" required />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-6">
                                            <label className={labelClasses} htmlFor="street-address">Street Address</label>
                                            <div className="mt-2">
                                                <input defaultValue={editData?.address[0].split(",")[1] || ""} autoComplete="address-line2" className={inputClasses} id="street-address" name="streetName" type="text" />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label className={labelClasses} htmlFor="city">City</label>
                                            <div className="mt-2">
                                                <input defaultValue={editData?.address[1].split(",")[0] || ""} autoComplete="address-line3" className={inputClasses} id="city" name="cityName" type="text" required />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label className={labelClasses} htmlFor="state-province">State</label>
                                            <div className="mt-2">
                                                <input defaultValue={editData?.address[1].split(",")[1] || ""} autoComplete="off" className={inputClasses} id="state-province" name="stateName" type="text" required />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label className={labelClasses} htmlFor="postal-code">ZIP / Postal code</label>
                                            <div className="mt-2">
                                                <input defaultValue={editData?.address[2] || ""} autoComplete="postal-code" className={inputClasses} id="postal-code" name="postalCode" type="text" required />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-6">
                                            <label className={labelClasses} htmlFor="near-by-landmark">Near by landmark</label>
                                            <div className="mt-2">
                                                <input defaultValue={editData?.nearByLandmark || ""} autoComplete="additional-name" className={inputClasses} id="near-by-landmark" name="nearByLandmark" type="text" />
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
                                                    defaultValue={editData?.emailId || ""}
                                                    className={inputClasses} id="email" name="emailId" type="email" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className={labelClasses} htmlFor="tel">Phone Number</label>
                                            <div className="mt-2">
                                                <input
                                                    autoComplete="mobile tel"
                                                    defaultValue={editData?.telephoneNumber || ""}
                                                    className={inputClasses} id="tel" name="telephoneNumber" type="tel" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="mt-6 flex items-center justify-between">
                                    <a
                                        onClick={() => handleDeleteShippingInfo(editData?.id)}
                                        className={`${editData?.name ?? "hidden"} cursor-pointer flex items-center justify-center gap-2 rounded-lg bg-red-500 px-6 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}
                                        href='#'
                                    >
                                        Delete
                                    </a>
                                    <button
                                        onClick={() => {
                                        }}
                                        className="cursor-pointer flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                        type='submit'
                                        href='#'
                                    >
                                        Save
                                    </button>
                                </div>

                            </form >
                        )
                    }
                </section>
            </ div>
        </ main >
    );
};
export default MyAddressPage;