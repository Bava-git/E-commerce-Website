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
            <button className="cursor-pointer text-primary dark:text-primary/90 text-sm font-medium hover:underline">Change</button>
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
            <button className="cursor-pointer text-primary dark:text-primary/90 text-sm font-medium hover:underline">Change</button>
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


// --- Main Page Component ---

const OrderReviewPage = () => {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark min-h-screen">
            <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <main className="flex-grow container mx-auto px-4 py-4 md:py-1">
                    <div className="max-w-5xl mx-auto">

                        {/* Page Heading */}
                        <div className="flex flex-wrap justify-between gap-3 mb-8">
                            <h1 className="text-slate-900 dark:text-slate-50 text-2xl font-black tracking-tighter">Review Your Order</h1>
                        </div>

                        {/* Left Column: Review Cards */}
                        <div className="lg:col-span-2 flex flex-col gap-8">
                            <ShippingInfoCard shipping={mockOrder.shipping} />
                            <PaymentInfoCard payment={mockOrder.payment} />
                            <OrderItemsCard items={mockOrder.items} />
                        </div>

                    </div>
                </main>
                {/* Footer component would go here if one existed in the HTML, but based on the provided code, it's omitted. */}
            </div>
        </div>
    );
};

export default OrderReviewPage;