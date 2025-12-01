import React, { useState } from 'react';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
import { OrderSummary } from './components/reusables/OrderSummary';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// Utility to simulate image URLs
const getImageUrl = (id) => `https://images.unsplash.com/photo-1595341144933-66236b282d8c?q=80&w=2787&auto=format&fit=crop&id=${id}`;

// --- Shipping Data Structure ---
const shippingOptions = [
    { id: 'standard', name: 'Standard Ground', price: 0, eta: 'Nov 28', isPopular: true },
    { id: 'expedited', name: 'Expedited 2-Day', price: 12.00, eta: 'Nov 26', isPopular: false },
    { id: 'express', name: 'Overnight Express', price: 25.00, eta: 'Nov 25', isPopular: false },
];

const mockOrder = {
    items: [
        { id: 1, name: 'Performance Runner', qty: 1, price: 129.99, imageId: 27 },
        { id: 2, name: 'Retro High Tops', qty: 1, price: 85.00, imageId: 28 },
    ],
    subtotal: 214.99,
    taxRate: 0.08, // Calculated from the HTML example: $17.20 / $214.99 ≈ 0.08
};

// --- Sub-Components ---

const ShippingMethodOption = ({ option, isSelected, onSelect }) => {
    const isFree = option.price === 0;
    const priceText = isFree ? 'FREE' : `$${option.price.toFixed(2)}`;

    return (
        <label
            className={`flex cursor-pointer items-start gap-4 rounded-xl p-4 ring-offset-background-light dark:ring-offset-background-dark focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 transition-all ${isSelected
                ? 'border-2 border-primary bg-primary/5 dark:bg-primary/10'
                : 'border border-border-light dark:border-border-dark bg-neutral-light dark:bg-neutral-dark'
                }`}
        >
            <input
                className="mt-1 h-5 w-5 appearance-none rounded-full border-2 border-text-muted-light dark:border-text-muted-dark bg-transparent text-transparent checked:border-primary checked:bg-primary checked:bg-[image:--radio-dot-svg] focus:outline-none"
                name="shipping_method"
                type="radio"
                checked={isSelected}
                onChange={() => onSelect(option)}
                // Inline style needed for radio dot SVG defined in original HTML
                style={{ '--radio-dot-svg': "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27%23ffffff%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e')" }}
            />
            <div className="flex grow flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col">
                    <p className="font-bold text-text-light dark:text-text-dark">{option.name}</p>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Arrives by {option.eta}</p>
                </div>
                <p className="mt-1 text-sm font-bold text-text-light dark:text-text-dark sm:mt-0">{priceText}</p>
            </div>
            {option.isPopular && (
                <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
                    <span className="material-symbols-outlined !text-[16px]">star</span>
                    <span>Most Popular</span>
                </div>
            )}
        </label>
    );
};

// const OrderSummary = ({ order, selectedShipping }) => {
//     // Recalculate based on currently selected shipping
//     const subtotal = order.subtotal;
//     const shippingCost = selectedShipping?.price || 0;
//     const estimatedTaxes = subtotal * order.taxRate;
//     const orderTotal = subtotal + shippingCost + estimatedTaxes;

//     const shippingText = selectedShipping?.price === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`;

//     return (
//         <aside className="lg:col-span-1">
//             <div className="sticky top-8 rounded-xl border border-border-light dark:border-border-dark bg-neutral-light dark:bg-neutral-dark p-6">
//                 <h3 className="text-xl font-bold mb-6">Order Summary</h3>

//                 {/* Item List */}
//                 <div className="space-y-4">
//                     {order.items.map(item => (
//                         <div key={item.id} className="flex items-center gap-4">
//                             <div
//                                 className="aspect-square w-16 rounded-lg bg-cover bg-center"
//                                 style={{ backgroundImage: `url('${getImageUrl(item.imageId)}')` }}
//                                 data-alt={item.name}
//                             />
//                             <div className="flex-1">
//                                 <p className="font-medium text-text-light dark:text-text-dark">{item.name}</p>
//                                 <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Qty: {item.qty}</p>
//                             </div>
//                             <p className="font-medium text-text-light dark:text-text-dark">${item.price.toFixed(2)}</p>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Price Breakdown */}
//                 <div className="mt-6 pt-6 border-t border-border-light dark:border-border-dark space-y-3 text-sm">
//                     <div className="flex justify-between">
//                         <span className="text-text-muted-light dark:text-text-muted-dark">Subtotal</span>
//                         <span className="font-medium text-text-light dark:text-text-dark">${subtotal.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between">
//                         <span className="text-text-muted-light dark:text-text-muted-dark">Shipping</span>
//                         <span className="font-medium text-text-light dark:text-text-dark">{shippingText}</span>
//                     </div>
//                     <div className="flex justify-between">
//                         <span className="text-text-muted-light dark:text-text-muted-dark">Estimated Taxes</span>
//                         <span className="font-medium text-text-light dark:text-text-dark">${estimatedTaxes.toFixed(2)}</span>
//                     </div>
//                 </div>

//                 {/* Grand Total */}
//                 <div className="mt-4 pt-4 border-t border-border-light dark:border-border-dark">
//                     <div className="flex justify-between items-center font-bold text-lg">
//                         <span>Order Total</span>
//                         <span>${orderTotal.toFixed(2)}</span>
//                     </div>
//                 </div>
//             </div>
//         </aside>
//     );
// };


// --- Main Component ---

const CheckoutShippingMethodPage = () => {

    const [selectedShipping, setSelectedShipping] = useState(shippingOptions.find(o => o.id === 'standard'));

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark min-h-screen">
            <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <main className="flex-1">
                    <div className="container mx-auto px-4 py-8 md:py-12">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
                            {/* Left Column: Shipping Method Selection */}
                            <div className="lg:col-span-2">
                                <div className="flex flex-col gap-8">

                                    {/* Page Heading */}
                                    <h1 className="text-3xl lg:text-4xl font-black tracking-tighter">Choose a Delivery Option</h1>

                                    {/* Shipping Options */}
                                    <div className="flex flex-col gap-4">
                                        {shippingOptions.map(option => (
                                            <ShippingMethodOption
                                                key={option.id}
                                                option={option}
                                                isSelected={selectedShipping?.id === option.id}
                                                onSelect={setSelectedShipping}
                                            />
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-4">
                                        <button className="flex items-center justify-center gap-2 h-12 px-5 font-bold text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark">
                                            <span className="material-symbols-outlined">arrow_back</span>
                                            <span className="truncate">Back to Shipping Info</span>
                                        </button>
                                        <button className="flex w-full sm:w-auto items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark">
                                            <span className="truncate">Continue to Payment</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Order Summary */}
                            {/* <OrderSummary
                                order={mockOrder}
                                selectedShipping={selectedShipping}
                            /> */}

                            {/* Order Summary */}
                            <OrderSummary
                                subtotal={1000}
                                marketPlaceFee={5}
                                total={1005}
                                disableCheckout={false}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default CheckoutShippingMethodPage;