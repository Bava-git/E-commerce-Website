import React from 'react';
import ProductCard from './components/reusables/ProductCard';
import FilterSidebar from './FilterSidebar';

const productData = [
    { id: 9, brand: 'Nike', name: 'Air Zoom Pegasus', price: 120.00, rating: 4, reviews: 124 },
    { id: 10, brand: 'Adidas', name: 'Ultraboost 22', price: 180.00, rating: 5, reviews: 302 },
    { id: 11, brand: 'New Balance', name: 'Fresh Foam 1080', price: 150.00, rating: 5, reviews: 98 },
    { id: 12, brand: 'Puma', name: 'RS-X³', price: 110.00, rating: 4, reviews: 215 },
    { id: 13, brand: 'ASICS', name: 'Gel-Kayano 28', price: 160.00, rating: 5, reviews: 450 },
    { id: 14, brand: 'Reebok', name: 'Classic Leather', price: 75.00, rating: 4, reviews: 188 },
];

const ProductListingPage = () => {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
            <div className="relative flex min-h-screen w-full flex-col">
                {/* Top Navigation Bar */}
                <header className="sticky top-0 z-50 w-full border-b border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
                    <div className="container mx-auto px-4">
                        <div className="flex h-16 items-center justify-between whitespace-nowrap">
                            <div className="flex items-center gap-8">
                                <div className="flex items-center gap-2 text-text-light dark:text-text-dark">
                                    <span className="material-symbols-outlined text-primary text-3xl"> store </span>
                                    <h2 className="text-xl font-bold tracking-tight">E-Commerce</h2>
                                </div>
                                <nav className="hidden md:flex items-center gap-8">
                                    <a className="text-sm font-medium hover:text-primary dark:hover:text-primary" href="#">Men</a>
                                    <a className="text-sm font-semibold text-primary dark:text-primary" href="#">Women</a>
                                    <a className="text-sm font-medium hover:text-primary dark:hover:text-primary" href="#">Home</a>
                                    <a className="text-sm font-medium hover:text-primary dark:hover:text-primary" href="#">Sale</a>
                                </nav>
                            </div>
                            <div className="flex flex-1 justify-end items-center gap-4">
                                <div className="hidden sm:block w-full max-w-xs">
                                    <label className="relative">
                                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark pointer-events-none"> search </span>
                                        <input className="w-full rounded-lg border-none bg-border-light dark:bg-border-dark py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Search products..." type="search" />
                                    </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-background-light dark:bg-background-dark hover:bg-border-light dark:hover:bg-border-dark">
                                        <span className="material-symbols-outlined"> shopping_cart </span>
                                    </button>
                                    <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-background-light dark:bg-background-dark hover:bg-border-light dark:hover:bg-border-dark">
                                        <span className="material-symbols-outlined"> account_circle </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="container mx-auto flex flex-1 flex-col px-4 py-8">
                    <div className="flex flex-col gap-4">
                        {/* Breadcrumbs */}
                        <nav className="flex items-center gap-2 text-sm">
                            <a className="font-medium text-muted-light dark:text-muted-dark hover:text-primary" href="#">Home</a>
                            <span className="text-muted-light dark:text-muted-dark">/</span>
                            <a className="font-medium text-muted-light dark:text-muted-dark hover:text-primary" href="#">Men</a>
                            <span className="text-muted-light dark:text-muted-dark">/</span>
                            <span className="font-medium text-text-light dark:text-text-dark">Running Shoes</span>
                        </nav>
                        {/* Page Heading */}
                        <h1 className="text-4xl font-black tracking-tighter">Men's Running Shoes</h1>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-4">
                        {/* Filters Sidebar */}
                        <FilterSidebar />

                        {/* Product Grid Area */}
                        <div className="col-span-1 lg:col-span-3">
                            {/* Toolbar */}
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-lg bg-card-light dark:bg-card-dark p-4 border border-border-light dark:border-border-dark">
                                <p className="text-sm text-muted-light dark:text-muted-dark">
                                    Showing <span className="font-semibold text-text-light dark:text-text-dark">48</span> of <span className="font-semibold text-text-light dark:text-text-dark">200</span> products
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <label className="text-sm" htmlFor="sort">Sort by:</label>
                                        <select className="rounded-lg border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-sm focus:border-primary focus:ring-primary pr-8" id="sort">
                                            <option>Featured</option>
                                            <option>Price: Low to High</option>
                                            <option>Price: High to Low</option>
                                            <option>Newest Arrivals</option>
                                        </select>
                                    </div>
                                    <div className="hidden sm:flex items-center gap-1 rounded-lg bg-border-light dark:bg-border-dark p-1">
                                        <button className="h-8 w-8 flex items-center justify-center rounded-md bg-primary text-white"><span className="material-symbols-outlined text-base">grid_view</span></button>
                                        <button className="h-8 w-8 flex items-center justify-center rounded-md text-muted-light dark:text-muted-dark hover:bg-background-light dark:hover:bg-background-dark"><span className="material-symbols-outlined text-base">view_list</span></button>
                                    </div>
                                </div>
                            </div>

                            {/* Product Grid */}
                            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                                {productData.map(product => (
                                    <ProductCard
                                        key={product.id}
                                        brand={product.brand}
                                        name={product.name}
                                        price={product.price}
                                        rating={product.rating}
                                        reviews={product.reviews}
                                        imageId={product.id}
                                    />
                                ))}
                            </div>

                            {/* Pagination */}
                            <nav className="mt-8 flex items-center justify-center gap-2">
                                <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-border-light dark:hover:bg-border-dark disabled:opacity-50" disabled>
                                    <span className="material-symbols-outlined">chevron_left</span>
                                </button>
                                <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white text-sm font-semibold">1</button>
                                <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-border-light dark:hover:bg-border-dark text-sm font-medium">2</button>
                                <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-border-light dark:hover:bg-border-dark text-sm font-medium">3</button>
                                <span className="flex h-10 w-10 items-center justify-center text-sm">...</span>
                                <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-border-light dark:hover:bg-border-dark text-sm font-medium">9</button>
                                <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-border-light dark:hover:bg-border-dark">
                                    <span className="material-symbols-outlined">chevron_right</span>
                                </button>
                            </nav>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="border-t border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark">
                    <div className="container mx-auto px-4 py-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="flex flex-col gap-4">
                                <h3 className="font-bold">E-Commerce</h3>
                                <p className="text-sm text-muted-light dark:text-muted-dark">Quality products for a modern lifestyle.</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className="font-semibold">Shop</h4>
                                <a className="text-sm text-muted-light dark:text-muted-dark hover:text-primary" href="#">Men</a>
                                <a className="text-sm text-muted-light dark:text-muted-dark hover:text-primary" href="#">Women</a>
                                <a className="text-sm text-muted-light dark:text-muted-dark hover:text-primary" href="#">Home</a>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className="font-semibold">Support</h4>
                                <a className="text-sm text-muted-light dark:text-muted-dark hover:text-primary" href="#">Contact Us</a>
                                <a className="text-sm text-muted-light dark:text-muted-dark hover:text-primary" href="#">FAQs</a>
                                <a className="text-sm text-muted-light dark:text-muted-dark hover:text-primary" href="#">Shipping</a>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className="font-semibold">Company</h4>
                                <a className="text-sm text-muted-light dark:text-muted-dark hover:text-primary" href="#">About Us</a>
                                <a className="text-sm text-muted-light dark:text-muted-dark hover:text-primary" href="#">Careers</a>
                                <a className="text-sm text-muted-light dark:text-muted-dark hover:text-primary" href="#">Press</a>
                            </div>
                        </div>
                        <div className="mt-8 border-t border-border-light dark:border-border-dark pt-6 text-center text-sm text-muted-light dark:text-muted-dark">
                            <p>© 2024 E-Commerce. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default ProductListingPage;