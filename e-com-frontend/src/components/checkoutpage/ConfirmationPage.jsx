import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
import { totalSummarys } from '../../utilities/rawData';
import * as connectTo from '../../utilities/reusables';
import { CopyButton } from '../../utilities/reusables';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const OrderConfirmationPage = () => {

    const [searchParam, setSearchParam] = useSearchParams();
    const [isCopied, setIsCopied] = useState(false);
    const orderId = searchParam.get("orderId");
    const order = connectTo.oneItemFromArray(totalSummarys, "orderId", orderId);

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200 min-h-screen">
            <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <main className="flex-1 py-10 md:py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto flex flex-col gap-8">
                            {/* Success Indicator Block */}
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center size-16 rounded-full bg-primary/20 text-primary mb-4">
                                    <span className="material-symbols-outlined !text-4xl">check</span>
                                </div>
                                <h1 className="text-[#0d131b] dark:text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight">Thank you for your order, {order?.congineeDetail?.name}!</h1>
                                <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal pt-2">Your order has been placed successfully. A confirmation email has been sent to your address.</p>
                            </div>

                            {/* Order Number Card */}
                            <div className="p-4">
                                <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-xl bg-white dark:bg-slate-900/50 p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                                    <div className="flex flex-col gap-1 text-center md:text-left">
                                        <p className="text-[#0d131b] dark:text-white text-base font-semibold leading-tight">Your Order Number is:</p>
                                        <p className="text-primary text-lg font-bold tracking-wider">{order?.orderId}</p>
                                    </div>
                                    {/* In a real app, this button would trigger a clipboard copy function */}
                                    <button
                                        onClick={() => setIsCopied(CopyButton(order?.orderId))}
                                        className="cursor-pointer flex items-center justify-center rounded-lg h-10 bg-primary/20 dark:bg-primary/30 text-primary gap-2 text-sm font-bold leading-normal tracking-[0.015em] px-4">
                                        <span className="material-symbols-outlined text-lg">content_copy</span>
                                        <span>{isCopied ? "Copied" : "Copy"}</span>
                                    </button>
                                </div>
                            </div>

                            {/* Next Steps Panel */}
                            <div className="bg-slate-100 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                                <h3 className="text-[#0d131b] dark:text-white text-lg font-bold mb-4">What happens next?</h3>
                                <ul className="space-y-3 list-inside">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-lg text-primary mt-0.5">mail</span>
                                        <span className="text-slate-600 dark:text-slate-300">You'll receive a confirmation email with your order details shortly.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-lg text-primary mt-0.5">local_shipping</span>
                                        <span className="text-slate-600 dark:text-slate-300">Your order is now being processed. Estimated delivery is within 5-7 business days.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-lg text-primary mt-0.5">location_searching</span>
                                        <span className="text-slate-600 dark:text-slate-300">Once shipped, you can <a className="font-medium text-primary underline" href="#">track your order here</a>.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* CTA Button */}
                            <div className="text-center pt-6">
                                <a
                                    href='/'
                                    className="flex max-w-sm w-full mx-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-primary text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 px-6">
                                    Continue Shopping
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default OrderConfirmationPage;