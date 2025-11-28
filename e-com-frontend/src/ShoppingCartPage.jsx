import { useState } from 'react';
import CartItem from './components/reusables/CartItem';
import OrderSummary from './components/reusables/OrderSummary';

// Mock data (replace with actual state management in a real application)
const initialCart = [
    { id: 1, name: 'Classic Crewneck Tee', details: 'Color: Charcoal, Size: Large', price: 25.00, quantity: 1, imageId: 16 },
    { id: 2, name: 'Slim-Fit Denim Jeans', details: 'Color: Indigo, Size: 32x32', price: 60.00, quantity: 1, imageId: 17 },
    { id: 3, name: 'Leather Ankle Boots', details: 'Color: Brown, Size: 9', price: 120.00, quantity: 1, imageId: 18 },
];

const Header = () => (
    <header className="w-full bg-white dark:bg-background-dark/80 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                        <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path>
                        </svg>
                        <h2 className="text-lg font-bold tracking-[-0.015em]">E-Commerce</h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <a className="text-sm font-medium hover:text-primary dark:hover:text-primary" href="#">New Arrivals</a>
                        <a className="text-sm font-medium hover:text-primary dark:hover:text-primary" href="#">Men</a>
                        <a className="text-sm font-medium hover:text-primary dark:hover:text-primary" href="#">Women</a>
                        <a className="text-sm font-medium hover:text-primary dark:hover:text-primary" href="#">Sale</a>
                    </nav>
                </div>
                <div className="flex items-center justify-end gap-3">
                    <label className="hidden sm:flex flex-col min-w-40 h-10! max-w-64">
                        <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                            <div className="text-gray-500 dark:text-gray-400 flex bg-gray-100 dark:bg-gray-800 items-center justify-center pl-3 rounded-l-lg border-r-0">
                                <span className="material-symbols-outlined text-xl!">search</span>
                            </div>
                            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary focus:ring-inset border-none bg-gray-100 dark:bg-gray-800 h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal" placeholder="Search" value="" readOnly />
                        </div>
                    </label>
                    <div className="flex gap-2">
                        <button className="relative flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                            <span className="truncate">Cart</span>
                            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">{initialCart.length}</span>
                        </button>
                        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-gray-200 dark:hover:bg-gray-700">
                            <span className="material-symbols-outlined">favorite</span>
                        </button>
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User avatar image" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAqisWDWfDDv9_Y9tRebr92TkPWHUwr4A8TWTKcScnyH-r7iqtSDge9f7W6MnlYhqdLCiebDazAFewbzVEDaBsxYXXPd-fC4zSjiQVsZ2Hw7TbPlteiHHrPKF16xZ_VwPg0ohXQXJcDeWo--mvZ_Oa_BVMVHoUr9e2dGlfGXoS1t0jAC8jAC9huS83rbaJxkjcs5HXxr7TtotWsUU3vCK7cwrE_dFzuL00AUSK-SnAv0PNAQRQuQYCv1VipFoAQpVs0u6j_txBn7jw')" }}></div>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

const Footer = () => (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-gray-900 dark:text-white">Shop</h4>
                    <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">New Arrivals</a>
                    <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">Men</a>
                    <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">Women</a>
                    <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">Sale</a>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-gray-900 dark:text-white">Help</h4>
                    <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">Customer Service</a>
                    <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">Shipping & Returns</a>
                    <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">FAQs</a>
                    <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">Contact Us</a>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-gray-900 dark:text-white">About</h4>
                    <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">Our Story</a>
                    <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">Careers</a>
                    <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">Terms & Conditions</a>
                    <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">Privacy Policy</a>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-gray-900 dark:text-white">Follow Us</h4>
                    <div className="flex gap-4">
                        {/* Social Icons Placeholder */}
                        <a className="text-gray-600 dark:text-gray-400 hover:text-primary" href="#">
                            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path></svg>
                        </a>
                        <a className="text-gray-600 dark:text-gray-400 hover:text-primary" href="#">
                            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                © 2024 E-Commerce, Inc. All rights reserved.
            </div>
        </div>
    </footer>
);

const ShoppingCartPage = () => {
    const [cartItems, setCartItems] = useState(initialCart);

    // Cart Management Handlers
    const handleUpdateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return handleDelete(id);

        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const handleDelete = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    // Calculation Logic (Based on the mock data in the original HTML)
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const estimatedShipping = 5.00; // Hardcoded
    const estimatedTaxes = subtotal * 0.08; // 8% tax rate inferred from HTML: (205 + 5 + 16.40 = 226.40, 16.40/205 = 0.08)
    const total = subtotal + estimatedShipping + estimatedTaxes;

    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 min-h-screen">
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root">
                <Header />

                {/* Main Content Area */}
                <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 grow">
                    {/* Breadcrumbs & Heading */}
                    <div className="mb-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <a className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary" href="#">Home</a>
                            <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">/</span>
                            <span className="text-gray-900 dark:text-white text-sm font-medium leading-normal">Cart ({cartItems.length})</span>
                        </div>
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
                                        key={item.id}
                                        product={item}
                                        onDelete={handleDelete}
                                        onUpdateQuantity={handleUpdateQuantity}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Order Summary */}
                        <OrderSummary
                            subtotal={subtotal}
                            shipping={estimatedShipping}
                            taxes={estimatedTaxes}
                            total={total}
                        />
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default ShoppingCartPage;