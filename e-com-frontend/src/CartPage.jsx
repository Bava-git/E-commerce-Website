import { useState } from 'react';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
import { OrderSummary } from './components/reusables/OrderSummary';
import { cartList, products } from './utilities/rawData';
import * as connectTo from './utilities/reusables';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const CartItem = ({ product, onDelete, onUpdateQuantity }) => {

    const { cartlistId, name, color, size, price, quantity, image } = product;
    const details = `Color: ${color} ${size ? `\nSize : ${size}` : ""}`;
    const itemTotal = price * quantity;

    return (
        <div className="flex gap-4 bg-white dark:bg-gray-900 px-6 py-5 justify-between items-center">
            <div className="flex items-start gap-4 grow">
                {/* Product Image */}
                <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg h-24 w-24 shrink-0"
                    style={{ backgroundImage: `url('${image}')` }}
                />
                <div className="flex flex-1 flex-col justify-center gap-1">
                    <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">{name}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">{details}</p>
                    {/* Price for mobile view */}
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal md:hidden">₹{price.toFixed(2)}</p>
                </div>
            </div>

            {/* Price (Desktop) */}
            <div className="hidden md:block text-center shrink-0">
                <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">₹{price.toFixed(2)}</p>
            </div>

            {/* Quantity Controls */}
            <div className="shrink-0">
                <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                    <button
                        className="text-base font-medium leading-normal flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                        onClick={() => onUpdateQuantity(cartlistId, quantity - 1)}
                    >-</button>
                    <input
                        className="text-base font-medium leading-normal w-8 p-0 text-center bg-transparent focus:outline-0 focus:ring-0 focus:border-none border-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        type="number"
                        value={quantity}
                        readOnly // Quantity should be controlled by buttons
                    />
                    <button
                        className="text-base font-medium leading-normal flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                        onClick={() => onUpdateQuantity(cartlistId, quantity + 1)}
                    >+</button>
                </div>
            </div>

            {/* Total Price (Desktop) */}
            <div className="hidden md:block text-center font-bold text-lg text-gray-900 dark:text-white w-20 shrink-0">
                ₹{itemTotal.toFixed(2)}
            </div>

            {/* Delete Button */}
            <button
                className="cursor-pointer text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-500 p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900/50 shrink-0"
                onClick={() => onDelete(cartlistId)}
            >
                <span className="material-symbols-outlined text-xl!">delete</span>
            </button>
        </div>
    );
};
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// --- Main Component ---
const ShoppingCartPage = () => {
    const [cartItems, setCartItems] = useState(cartList);

    // Cart Management Handlers
    const handleUpdateQuantity = (cartlistId, newQuantity) => {
        if (newQuantity < 1) return handleDelete(cartlistId);

        setCartItems(prevItems =>
            prevItems.map(item =>
                item.cartlistId === cartlistId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const handleDelete = (cartlistId) => {
        setCartItems(prevItems => prevItems.filter(item => item.cartlistId !== cartlistId));
    };

    cartList.forEach(item => {
        let tempProduct = connectTo.oneItemFromArray(products, "id", item.productId);
        item.price = tempProduct.price;
    });

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const deliveryFee = (subtotal > 100 || subtotal === 0) ? 0 : 40;
    const marketPlaceFee = (subtotal === 0) ? 0 : 5;
    const total = Math.round(subtotal + marketPlaceFee + deliveryFee);
    const orderPrices = { subtotal, deliveryFee, marketPlaceFee, total };

    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 min-h-screen">
            <div className="relative flex justify-center items-center h-auto min-h-screen w-full flex-col group/design-root">

                {/* Main Content Area */}
                <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 grow">
                    {/* Breadcrumbs & Heading */}
                    <div className="mb-8">
                        <div className="flex flex-wrap justify-between gap-3">
                            <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">Your Shopping Cart</p>
                        </div>
                    </div>

                    {/* Two-Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* Left Column: Cart Items */}
                        <div className="lg:col-span-2">
                            <div className="flex flex-col gap-px rounded-xl bg-gray-200 dark:bg-gray-800 overflow-hidden shadow-sm">
                                {cartItems.map(item => (
                                    <CartItem
                                        key={item.cartlistId}
                                        product={item}
                                        onDelete={handleDelete}
                                        onUpdateQuantity={handleUpdateQuantity}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Order Summary */}
                        <OrderSummary
                            orderPrices={orderPrices}
                            isPage={{
                                isCheckoutPage: true,
                            }}
                        />

                    </div>
                </main>

            </div>
        </div>
    );
};

export default ShoppingCartPage;