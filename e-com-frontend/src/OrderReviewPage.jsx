import React from 'react';

// --- Mock Data ---
const mockOrder = {
    shipping: {
        name: 'Alex Thompson',
        address: ['123 Maple Street, Apt 4B', 'Springfield, IL, 62704', 'United States'],
        method: 'Standard Shipping (Est. 5-7 days)',
    },
    payment: {
        method: 'Visa ending in 1234',
        billing: 'Billing address same as shipping',
        logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApmJ63FDCtCCCiibvIEqhvlTPQzsHeCk1mw5hjgZ9NZeUp0merhpNd_JWeWwGyz1E62dRdpEW-AN7FctQ3S7vq1uqKHZsmCuaH3szgI7O2An0KQi3qlFhMmdmIM8PDpMi21-GK7jmJxMMB0oKDBEKvQ_LHNAQdcJgcmP_4SphYqZN6CTWqhJzhbMQe69Fb7KRRiv-Ft-Wo-kVn5Ea86A9AfhhaQaVuv4xaNy4RHWieFLqroqMMVmPGX5zXU6Qv_BR2conEwrYKeD4',
    },
    items: [
        { id: 1, name: 'Classic Leather Jacket', details: 'Size: M, Color: Black', price: 189.99, qty: 1, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZM5IsEpJRE9RKD7YDQ6h5Hcmgm2yTxM6yhlVHjymZCI5ZzBWBY15hnlyPyo795o8aZQ2NoX1Prat1J7t6bT_s9yTyy31dh9ym_pPPhGd48tpsjOFEONHcAiwiXW4oHd_nMhNrb4IbLBThsfBVMHDXfitrkXb57FlHjhz-dh2wIFYHgfo9ARjcAx3K_2DUZrKmAzi9T38l_h8COSs6RvOeEnXSiKe_W0mK2AMAfb3RBfCuZNu_vfew1H0e2IfBUWkpYRetm9yQmzw' },
        { id: 2, name: 'Urban Runner Sneakers', details: 'Size: 10, Color: White', price: 74.50, qty: 1, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcqeXKEsamCMNWJfNjZ9KGtWsmWHaBVti28IKd2D8U42DpBJ5Yjx87p2Sa89Nz1rZaYQDpEG_j_eJKlWE-zYQeUcbGNvG4B2uln_FWYoKUIWV0uDCUyHftBmUnZOKX1BaWmZYYR3Pul_tXz9FNDU9abLH4xCd3pbhDQkWT7RhEJigwtB0-YVJBu50PVcpI7jQDPL9kpzpVDzpmWOIoDepL4Zfa_IXL7y80EIISwcovfe3bs-Y0z1j_nxcYZAk0a_LgAHh3P8HyOMI' },
        { id: 3, name: 'Minimalist Chronograph Watch', details: 'Color: Midnight Black', price: 250.00, qty: 1, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmQzsvLcUoFOIzM7DzCfi2OdoSb2V_45gZWyLGSL4EGGGSHMhq4Pr3sdbqO2-qNB-SLRGY2XAFIiXU7MjoJKTW-RLM9l-v1P3bkuNAoAnyu4gGKxIb3txy61_LLIMgbCUR0VTUqj2bEg77KmWTlCIzfl6f9-vFouc748y0Q_F0SMduVqdnHCdVksrgQItr4fEMzlglJ4GtztCWs0LXFOmt_sQHQPY2noVpQ_ub0IyunwaWA0-_XXpSokbyAHR9mV-wR48ZlWswEZU' },
    ],
    summary: {
        subtotal: 514.49,
        shipping: 5.00,
        taxes: 31.32,
        total: 550.81,
    }
};

// --- Sub-Components ---

const TopNavBar = () => (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between whitespace-nowrap py-3">
                <div className="flex items-center gap-4 text-slate-900 dark:text-slate-100">
                    <div className="size-6 text-primary">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <h2 className="text-lg font-bold tracking-tight">E-Commerce</h2>
                </div>
                <nav className="hidden md:flex items-center gap-9">
                    {['Home', 'Shop', 'Deals', 'Contact'].map(link => (
                        <a key={link} className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium" href="#">{link}</a>
                    ))}
                </nav>
                <div className="flex flex-1 justify-end items-center gap-3">
                    <button className="flex items-center justify-center rounded-lg h-10 bg-slate-200/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-slate-300/60 dark:hover:bg-slate-700/60 transition-colors min-w-0 px-2.5">
                        <span className="material-symbols-outlined text-xl">favorite</span>
                    </button>
                    <button className="flex items-center justify-center rounded-lg h-10 bg-slate-200/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-slate-300/60 dark:hover:bg-slate-700/60 transition-colors min-w-0 px-2.5">
                        <span className="material-symbols-outlined text-xl">shopping_cart</span>
                    </button>
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User avatar image" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDLWeUh4RyiHNxgMaV8n4kwZUdL6kSSZlDzd2Q3TIusyaRLEabaSSIy7eyEg8ll6wD8QPAF7yAEf9U3EHwNn6_Rq5am-xy7JsL7vOvsCF2wYeFZchqaGijgd5t7x_dMTIc6wkzvKBY6TKt-maqo5TWrdPRoVUpvmKv9puikTD8tQOR9KKvEA-wMctOQaTAerr6pE-2ks1ityfDOtaAazjITEZv6fdLEcwqeQdiQCcOoRin-9CyAszXome9laTtNkvUkmbrDueiWlOQ")' }}></div>
                </div>
            </div>
        </div>
    </header>
);

const ShippingInfoCard = ({ shipping }) => (
    <div className="bg-white dark:bg-slate-900/50 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
        <div className="p-6 flex justify-between items-start">
            <div>
                <h2 className="text-slate-900 dark:text-slate-50 text-lg font-bold tracking-tight mb-4">Shipping Information</h2>
                <div className="text-slate-600 dark:text-slate-400 text-sm space-y-1">
                    <p className="font-medium text-slate-800 dark:text-slate-200">{shipping.name}</p>
                    {shipping.address.map((line, index) => <p key={index}>{line}</p>)}
                </div>
                <div className="mt-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-xl text-slate-500">local_shipping</span>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{shipping.method}</p>
                </div>
            </div>
            <button className="text-primary dark:text-primary/90 text-sm font-medium hover:underline">Change</button>
        </div>
    </div>
);

const PaymentInfoCard = ({ payment }) => (
    <div className="bg-white dark:bg-slate-900/50 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
        <div className="p-6 flex justify-between items-start">
            <div>
                <h2 className="text-slate-900 dark:text-slate-50 text-lg font-bold tracking-tight mb-4">Payment Method</h2>
                <div className="flex items-center gap-3">
                    <img alt="Visa logo" className="h-6" src={payment.logoUrl} />
                    <div className="text-slate-600 dark:text-slate-400 text-sm">
                        <p className="font-medium text-slate-800 dark:text-slate-200">{payment.method}</p>
                        <p>{payment.billing}</p>
                    </div>
                </div>
            </div>
            <button className="text-primary dark:text-primary/90 text-sm font-medium hover:underline">Change</button>
        </div>
    </div>
);

const OrderItemsCard = ({ items }) => (
    <div className="bg-white dark:bg-slate-900/50 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
        <div className="p-6">
            <h2 className="text-slate-900 dark:text-slate-50 text-lg font-bold tracking-tight mb-4">Items in Order ({items.length})</h2>
            <div className="divide-y divide-slate-200 dark:divide-slate-800">
                {items.map(item => (
                    <div key={item.id} className="flex items-center gap-4 py-4">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 flex-shrink-0"
                            data-alt={item.name}
                            style={{ backgroundImage: `url("${item.imageUrl}")` }}
                        ></div>
                        <div className="flex-grow">
                            <p className="text-slate-900 dark:text-slate-50 text-base font-medium line-clamp-1">{item.name}</p>
                            <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-1">{item.details}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-slate-900 dark:text-slate-50 text-base font-medium">${item.price.toFixed(2)}</p>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Qty: {item.qty}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const OrderSummarySidebar = ({ summary }) => (
    <aside className="lg:col-span-1 w-full lg:sticky top-24">
        <div className="bg-white dark:bg-slate-900/50 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-6">
            <h2 className="text-slate-900 dark:text-slate-50 text-lg font-bold tracking-tight">Order Summary</h2>

            {/* Price Summary Table */}
            <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Subtotal</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">${summary.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Shipping & Handling</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">${summary.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Estimated Taxes</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">${summary.taxes.toFixed(2)}</span>
                </div>
            </div>

            {/* Promo Code */}
            <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="promo-code">Promo Code</label>
                <div className="flex gap-2">
                    <input className="flex-grow block w-full rounded-md border-slate-300 dark:border-slate-700 shadow-sm focus:border-primary focus:ring-primary text-sm bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500" id="promo-code" placeholder="Enter code" type="text" />
                    <button className="px-4 py-2 rounded-lg bg-slate-200/80 dark:bg-slate-800/80 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-300/80 dark:hover:bg-slate-700/80 transition-colors">Apply</button>
                </div>
            </div>

            <div className="border-t border-slate-200 dark:border-slate-800"></div>

            {/* Order Total */}
            <div className="flex justify-between items-center">
                <span className="text-base font-bold text-slate-900 dark:text-slate-50">Order Total</span>
                <span className="text-xl font-black text-slate-900 dark:text-slate-50 tracking-tight">${summary.total.toFixed(2)}</span>
            </div>

            {/* Primary CTA Button */}
            <button className="w-full flex items-center justify-center gap-2 h-12 px-6 bg-primary text-white rounded-lg text-base font-bold hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark">
                <span className="material-symbols-outlined text-xl">lock</span>
                Place Order
            </button>

            <p className="text-xs text-slate-500 dark:text-slate-400 text-center">By placing your order, you agree to our Terms of Service and Privacy Policy.</p>
        </div>
    </aside>
);


// --- Main Page Component ---

const OrderReviewPage = () => {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark min-h-screen">
            <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <TopNavBar />
                <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
                    <div className="max-w-5xl mx-auto">

                        {/* Breadcrumbs */}
                        <div className="flex flex-wrap gap-2 items-center mb-6">
                            <a className="text-primary/80 dark:text-primary/70 text-sm font-medium hover:underline" href="#">Shipping</a>
                            <span className="text-slate-400 dark:text-slate-500 text-sm">/</span>
                            <a className="text-primary/80 dark:text-primary/70 text-sm font-medium hover:underline" href="#">Payment</a>
                            <span className="text-slate-400 dark:text-slate-500 text-sm">/</span>
                            <span className="text-slate-900 dark:text-slate-50 text-sm font-medium">Review</span>
                        </div>

                        {/* Page Heading */}
                        <div className="flex flex-wrap justify-between gap-3 mb-8">
                            <h1 className="text-slate-900 dark:text-slate-50 text-4xl font-black tracking-tighter">Review Your Order</h1>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                            {/* Left Column: Review Cards */}
                            <div className="lg:col-span-2 flex flex-col gap-8">
                                <ShippingInfoCard shipping={mockOrder.shipping} />
                                <PaymentInfoCard payment={mockOrder.payment} />
                                <OrderItemsCard items={mockOrder.items} />
                            </div>

                            {/* Right Column: Order Summary & CTA */}
                            <OrderSummarySidebar summary={mockOrder.summary} />
                        </div>
                    </div>
                </main>
                {/* Footer component would go here if one existed in the HTML, but based on the provided code, it's omitted. */}
            </div>
        </div>
    );
};

export default OrderReviewPage;