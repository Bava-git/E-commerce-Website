import { useState } from 'react';
import { useProducts } from '../../utilities/context/ProductContext';

function applyFilters(products, filters) {
    return products.filter(p => {
        // Brand: allow multiple selections
        const matchBrand = filters.brand.length > 0 ? filters.brand.includes(p.brand) : true;

        // Price: range [min, max]
        const matchPrice = p.price >= filters.priceRange[0] &&
            (filters.priceRange[1] === "" || p.price <= filters.priceRange[1]);

        // Rating: allow multiple thresholds (e.g. [3,4,5])
        const matchRating =
            filters.rating.length > 0
                ? filters.rating.some(r => p.averageRating >= r)
                : true;

        // Color: multiple selections
        const matchColor =
            filters.color.length > 0
                ? filters.color.includes(p.color.name)
                : true;

        // Size: multiple selections
        const matchSize =
            filters.size.length > 0
                ? p.sizes.some(s => filters.size.includes(s.label))
                : true;

        // console.log(
        //     "matchBrand - ", matchBrand,
        //     "matchPrice - ", matchPrice,
        //     "matchRating - ", matchRating,
        //     "matchColor - ", matchColor,
        //     "matchSize - ", matchSize,
        // );

        return matchBrand && matchPrice && matchRating && matchColor && matchSize;
    });
}


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

const FilterSidebar = ({ setTableData }) => {

    const { products } = useProducts();
    const initialFilterValue = {
        brand: [], priceRange: [0, ""], rating: [], color: [], size: []
    };
    const [filters, setFilters] = useState(initialFilterValue);

    const filterOptions = getFilterOptions(products);
    const ratingArr = [...new Set(filterOptions.ratings.sort((a, b) => b - a))];

    const handleApplyFilter = () => {
        setTableData(applyFilters(products, filters));
    };
    const handleResetFilter = () => {
        setFilters(initialFilterValue);
        setTableData(applyFilters(products, initialFilterValue));
    };

    return (
        <aside className="col-span-1 lg:pr-8">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                    onClick={() => { handleResetFilter(); }}
                    className="cursor-pointer text-sm font-medium text-primary hover:underline">Clear All</button>
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
                        <input
                            onChange={e => setFilters({ ...filters, priceRange: [0, Number(e.target.value)] })}
                            className="w-full h-2 bg-border-light dark:bg-border-dark rounded-lg appearance-none cursor-pointer" max={filterOptions.priceRange[1]} min={filterOptions.priceRange[0]} type="range" defaultValue={filterOptions.priceRange[1]} />
                        <div className="flex justify-between text-sm text-muted-light dark:text-muted-dark">
                            <span>₹{filterOptions.priceRange[0]}</span>
                            <span>{filters.priceRange[1]}</span>
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
                                <input
                                    onChange={e => {
                                        if (e.target.checked) {
                                            // add brand
                                            setFilters({
                                                ...filters,
                                                brand: [...(filters.brand || []), i]
                                            });
                                        } else {
                                            // remove brand
                                            setFilters({
                                                ...filters,
                                                brand: filters.brand.filter(b => b !== i)
                                            });
                                        }
                                    }}
                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" /> <span className="text-sm">{i}</span></label>
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
                        {filterOptions?.colors.map((i, index) => (
                            <label
                                key={i}
                                className="flex items-center gap-3">
                                <input
                                    onChange={e => {
                                        if (e.target.checked) {
                                            // add color
                                            setFilters({
                                                ...filters,
                                                color: [...(filters.color || []), i]
                                            });
                                        } else {
                                            // remove color
                                            setFilters({
                                                ...filters,
                                                color: filters.color.filter(b => b !== i)
                                            });
                                        }
                                    }}
                                    checked={filters.color.includes(i)}
                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" /> <span className="text-sm">{i}</span></label>
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
                                <input
                                    onChange={e => {
                                        if (e.target.checked) {
                                            // add size
                                            setFilters({
                                                ...filters,
                                                size: [...(filters.size || []), i]
                                            });
                                        } else {
                                            // remove size
                                            setFilters({
                                                ...filters,
                                                size: filters.size.filter(b => b !== i)
                                            });
                                        }
                                    }}
                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" /> <span className="text-sm">{i}</span></label>
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
                                <input
                                    onChange={e => {
                                        if (e.target.checked) {
                                            // add rating
                                            setFilters({
                                                ...filters,
                                                rating: [...(filters.rating || []), i]
                                            });
                                        } else {
                                            // remove rating
                                            setFilters({
                                                ...filters,
                                                rating: filters.rating.filter(b => b !== i)
                                            });
                                        }
                                    }}
                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" /> <span className="text-sm">{i} Stars & Up</span></label>
                        ))}
                    </div>
                </details>
            </div>
            <button
                onClick={() => handleApplyFilter()}
                className="mt-6 w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-white hover:bg-primary/90">Apply Filters</button>
        </aside >
    );
};

export default FilterSidebar;