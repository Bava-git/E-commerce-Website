import React from 'react';

// --- Mock Data ---
const mockOrder = {
    number: 'A1B2-C3D4-E5F6',
    customerName: 'John',
    email: 'john.doe@example.com',
    items: [
        { id: 1, name: 'Ceramic Vase', qty: 1, price: 45.00, imageId: 33 },
        { id: 2, name: 'Wooden Desk Chair', qty: 1, price: 120.00, imageId: 34 },
    ],
    subtotal: 165.00,
    shipping: 10.00,
    taxes: 13.20,
    total: 188.20,
    shippingAddress: '123 Design Lane, San Francisco, CA 94107',
    paymentMethod: 'Paid with Visa ending in 1234',
};

// Utility to simulate image URLs
const getImageUrl = (id) => `https://images.unsplash.com/photo-1595341144933-66236b282d8c?q=80&w=2787&auto=format&fit=crop&id=${id}`;

// --- Sub-Components ---

const TopNavBar = () => (
    <header className="w-full bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center gap-4 text-[#0d131b] dark:text-white">
                    <svg className="text-primary size-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H9.33333V9.33333H14.6667V14.6667H20V20H4V4Z"></path>
                    </svg>
                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Stylo</h2>
                </div>
                <nav className="hidden md:flex items-center gap-9">
                    {['Home', 'Shop', 'Categories', 'My Account'].map(link => (
                        <a key={link} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary" href="#">{link}</a>
                    ))}
                </nav>
                <div className="flex items-center gap-2">
                    <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
                        <span className="material-symbols-outlined text-xl">favorite</span>
                    </button>
                    <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
                        <span className="material-symbols-outlined text-xl">shopping_cart</span>
                    </button>
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ml-2" data-alt="User avatar image" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCuydhoRxeCA-InsiB6MO39y44n6Q_AipYbRotDEnAOek4aWmKjmY6gmi8CK4T6xcYknbaH_BOWiNx-Hmrh24wi25MA9UgyMLE1__w-K-9xRfGYuHZ9oqaJvzFYHzICljAbxp46jDGj70UKLBhMAzjSuDGfV6T1I25NuzgD1WcVraoD_9W7dWtWAuLdczgt-SvdYwjMiCC9K6xtGWbdkOKYLl4zUvDaIf3473PuTRqU1J36OdgvcyrDAr-qHFAatawlB11gfgz9_j0")' }}></div>
                </div>
            </div>
        </div>
    </header>
);

const Footer = () => (
    <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 mt-16">
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4 text-[#0d131b] dark:text-white">
                    <svg className="text-primary size-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H9.33333V9.33333H14.6667V14.6667H20V20H4V4Z"></path>
                    </svg>
                    <h2 className="text-md font-bold">Stylo</h2>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">© 2024 Stylo. All rights reserved.</p>
                <div className="flex gap-6">
                    <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary" href="#">Terms of Service</a>
                    <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary" href="#">Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>
);

const OrderConfirmationContent = ({ order }) => {
    return (
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
            {/* Success Indicator Block */}
            <div className="text-center">
                <div className="inline-flex items-center justify-center size-16 rounded-full bg-primary/20 text-primary mb-4">
                    <span className="material-symbols-outlined !text-4xl">check</span>
                </div>
                <h1 className="text-[#0d131b] dark:text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight">Thank you for your order, {order.customerName}!</h1>
                <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal pt-2">Your order has been placed successfully. A confirmation email has been sent to your address.</p>
            </div>

            {/* Order Number Card */}
            <div className="p-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-xl bg-white dark:bg-slate-900/50 p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex flex-col gap-1 text-center md:text-left">
                        <p className="text-[#0d131b] dark:text-white text-base font-semibold leading-tight">Your Order Number is:</p>
                        <p className="text-primary text-lg font-bold tracking-wider">{order.number}</p>
                    </div>
                    {/* In a real app, this button would trigger a clipboard copy function */}
                    <button className="flex items-center justify-center rounded-lg h-10 bg-primary/20 dark:bg-primary/30 text-primary gap-2 text-sm font-bold leading-normal tracking-[0.015em] px-4">
                        <span className="material-symbols-outlined text-lg">content_copy</span>
                        <span>Copy</span>
                    </button>
                </div>
            </div>

            {/* Order Summary Section */}
            <div className="flex flex-col gap-8">
                <h2 className="text-[#0d131b] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em] px-4">Order Summary</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">

                    {/* Left Column: Items */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <div className="bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 divide-y divide-slate-200 dark:divide-slate-800">
                            {order.items.map(item => (
                                <div key={item.id} className="flex items-center gap-4 p-4">
                                    <div
                                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 flex-shrink-0"
                                        style={{ backgroundImage: `url('${getImageUrl(item.imageId)}')` }}
                                        data-alt={item.name}
                                    />
                                    <div className="flex-grow">
                                        <p className="font-semibold text-slate-800 dark:text-slate-100">{item.name}</p>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Qty: {item.qty}</p>
                                    </div>
                                    <p className="font-semibold text-slate-800 dark:text-slate-100">${item.price.toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-end gap-4 text-sm mt-4">
                            <a className="font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary" href="#">Print Receipt</a>
                            <a className="font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary" href="#">Contact Support</a>
                        </div>
                    </div>

                    {/* Right Column: Cost & Info */}
                    <div className="flex flex-col gap-6">
                        {/* Cost Breakdown */}
                        <div className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-4">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-600 dark:text-slate-400">Subtotal</span>
                                <span className="font-medium text-slate-800 dark:text-slate-200">${order.subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-600 dark:text-slate-400">Shipping</span>
                                <span className="font-medium text-slate-800 dark:text-slate-200">${order.shipping.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-600 dark:text-slate-400">Taxes</span>
                                <span className="font-medium text-slate-800 dark:text-slate-200">${order.taxes.toFixed(2)}</span>
                            </div>
                            <hr className="border-slate-200 dark:border-slate-800 my-2" />
                            <div className="flex justify-between items-center text-base">
                                <span className="font-bold text-slate-800 dark:text-white">Total</span>
                                <span className="font-bold text-slate-800 dark:text-white">${order.total.toFixed(2)}</span>
                            </div>
                        </div>

                        {/* Address & Payment Info */}
                        <div className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-4 text-sm">
                            <div>
                                <p className="font-semibold text-slate-800 dark:text-white mb-1">Shipping Address</p>
                                <p className="text-slate-600 dark:text-slate-400">{order.shippingAddress}</p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-800 dark:text-white mb-1">Payment Method</p>
                                <p className="text-slate-600 dark:text-slate-400">{order.paymentMethod}</p>
                            </div>
                        </div>
                    </div>
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
                <button className="flex max-w-sm w-full mx-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-primary text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 px-6">Continue Shopping</button>
            </div>
        </div>
    );
};


// --- Main Page Component ---

const OrderConfirmationPage = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200 min-h-screen">
            <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <TopNavBar />
                <main className="flex-1 py-10 md:py-16">
                    <div className="container mx-auto px-4">
                        <OrderConfirmationContent order={mockOrder} />
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default OrderConfirmationPage;