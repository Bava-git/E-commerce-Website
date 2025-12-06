import React from 'react';
import ProductCard from './components/reusables/ProductCard';
import FilterSidebar from './components/reusables/FilterSidebar';

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

                {/* Main Content */}
                <main className="container mx-auto flex flex-1 flex-col px-4 py-8">
                    <div className="flex flex-col gap-4">
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

                        </div>
                    </div>
                </main>

            </div>
        </div>
    );
};

export default ProductListingPage;