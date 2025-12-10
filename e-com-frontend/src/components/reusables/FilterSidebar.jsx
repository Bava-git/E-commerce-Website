import { useEffect, useState } from 'react';
import { useProducts } from '../context/ProductContext';

function applyFilters(products, filters) {
    return products.filter(p => {
        const matchBrand = filters.brand ? p.brand === filters.brand : true;
        const matchPrice = p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1];
        const matchRating = p.averageRating >= filters.rating;
        const matchColor = filters.color ? p.color.name === filters.color : true;
        const matchSize = filters.size ? p.sizes.some(s => s.value === filters.size) : true;

        return matchBrand && matchPrice && matchRating && matchColor && matchSize;
    });
};

function getFilterOptions(products) {
    return {
        brands: [...new Set(products.map(p => p.brand))],
        priceRange: [
            Math.floor(Math.min(...products.map(p => p.price)) / 10) * 10,
            Math.ceil(Math.max(...products.map(p => p.price)) / 10) * 10,
        ],
        ratings: [...new Set(products.map(p => Math.floor(p.averageRating)))],
        colors: [...new Set(products.map(p => p.color.name))],
        sizes: [
            ...new Set(products.flatMap(p => p.sizes.map(s => s.label)))
        ]
    };
};

const FilterSidebar = () => {

    const { products } = useProducts();
    const [filters, setFilters] = useState({
        brand: "",
        priceRange: [0, 200],
        rating: 0,
        color: "Black",
        size: ""
    });

    const filterOptions = getFilterOptions(products);
    const ratingArr = [...new Set(filterOptions.ratings.sort((a, b) => b - a))];

    useEffect(() => {
        console.log(getFilterOptions(products));
        // console.log(applyFilters(products, filters));
    }, [products]);

    return (
        <aside className="col-span-1 lg:pr-8">
            <div className="">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <button className="text-sm font-medium text-primary hover:underline">Clear All</button>
                </div>
                <div className="mt-4 flex flex-col divide-y divide-border-light dark:divide-border-dark">

                    {/* Price Filter */}
                    <details className="py-3 group" open>
                        <summary className="flex cursor-pointer items-center justify-between">
                            <p className="font-medium">Price</p>
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180"> expand_more </span>
                        </summary>
                        <div className="mt-4 space-y-4 px-1">
                            {/* Note: Range input requires custom CSS in index.css */}
                            <input className="w-full h-2 bg-border-light dark:bg-border-dark rounded-lg appearance-none cursor-pointer" max={filterOptions.priceRange[1]} min={filterOptions.priceRange[0]} type="range" defaultValue={filterOptions.priceRange[1]} />
                            <div className="flex justify-between text-sm text-muted-light dark:text-muted-dark">
                                <span>₹{filterOptions.priceRange[0]}</span>
                                <span>₹{filterOptions.priceRange[1]}</span>
                            </div>
                        </div>
                    </details>

                    {/* Brand Filter */}
                    <details className="py-3 group">
                        <summary className="flex cursor-pointer items-center justify-between">
                            <p className="font-medium">Brand</p>
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180"> expand_more </span>
                        </summary>
                        <div className="mt-4 space-y-3 pl-2">
                            {filterOptions?.brands.map(i => (
                                <label
                                    key={i}
                                    className="flex items-center gap-3">
                                    <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" /> <span className="text-sm">{i}</span></label>
                            ))}
                        </div>
                    </details>

                    {/* Color Filter */}
                    <details className="py-3 group">
                        <summary className="flex cursor-pointer items-center justify-between">
                            <p className="font-medium">Color</p>
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180"> expand_more </span>
                        </summary>
                        <div className="mt-4 space-y-3 pl-2">
                            {filterOptions?.colors.map(i => (
                                <label
                                    key={i}
                                    className="flex items-center gap-3">
                                    <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" /> <span className="text-sm">{i}</span></label>
                            ))}
                        </div>
                    </details>

                    {/* Size Filter */}
                    <details className="py-3 group">
                        <summary className="flex cursor-pointer items-center justify-between">
                            <p className="font-medium">Size</p>
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180"> expand_more </span>
                        </summary>
                        <div className="mt-4 space-y-3 pl-2">
                            {filterOptions?.sizes.map(i => (
                                <label
                                    key={i}
                                    className="flex items-center gap-3">
                                    <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" /> <span className="text-sm">{i}</span></label>
                            ))}
                        </div>
                    </details>

                    {/* Rating Filter */}
                    <details className="py-3 group">
                        <summary className="flex cursor-pointer items-center justify-between">
                            <p className="font-medium">Rating</p>
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180"> expand_more </span>
                        </summary>
                        <div className="mt-4 space-y-3 pl-2">
                            {ratingArr?.map(i => (
                                i != 0 &&
                                <label
                                    key={i}
                                    className="flex items-center gap-3">
                                    <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" name="rating" type="radio" /> <span className="text-sm">{i} Stars & Up</span></label>
                            ))}
                        </div>
                    </details>
                </div>
                <button className="mt-6 w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-white hover:bg-primary/90">Apply Filters</button>
            </div>
        </aside>
    );
};

export default FilterSidebar;