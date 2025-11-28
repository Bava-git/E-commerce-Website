import React from 'react';

const FilterSidebar = () => {
    return (
        <aside className="col-span-1 lg:pr-8">
            <div className="sticky top-24">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <button className="text-sm font-medium text-primary hover:underline">Clear All</button>
                </div>
                <div className="mt-4 flex flex-col divide-y divide-border-light dark:divide-border-dark">
                    
                    {/* Category Filter */}
                    <details className="py-3 group" open>
                        <summary className="flex cursor-pointer items-center justify-between">
                            <p className="font-medium">Category</p>
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180"> expand_more </span>
                        </summary>
                        <div className="mt-4 space-y-3 pl-2">
                            <label className="flex items-center gap-3">
                                <input defaultChecked className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
                                <span className="text-sm">Running</span>
                            </label>
                            <label className="flex items-center gap-3">
                                <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
                                <span className="text-sm">Lifestyle</span>
                            </label>
                            <label className="flex items-center gap-3">
                                <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
                                <span className="text-sm">Basketball</span>
                            </label>
                        </div>
                    </details>

                    {/* Price Filter */}
                    <details className="py-3 group" open>
                        <summary className="flex cursor-pointer items-center justify-between">
                            <p className="font-medium">Price</p>
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180"> expand_more </span>
                        </summary>
                        <div className="mt-4 space-y-4 px-1">
                            {/* Note: Range input requires custom CSS in index.css */}
                            <input className="w-full h-2 bg-border-light dark:bg-border-dark rounded-lg appearance-none cursor-pointer" max="500" min="0" type="range" defaultValue="250" />
                            <div className="flex justify-between text-sm text-muted-light dark:text-muted-dark">
                                <span>$0</span>
                                <span>$500</span>
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
                            <label className="flex items-center gap-3"><input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" /> <span className="text-sm">Nike</span></label>
                            <label className="flex items-center gap-3"><input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" /> <span className="text-sm">Adidas</span></label>
                        </div>
                    </details>

                    {/* Rating Filter */}
                    <details className="py-3 group">
                        <summary className="flex cursor-pointer items-center justify-between">
                            <p className="font-medium">Rating</p>
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180"> expand_more </span>
                        </summary>
                        <div className="mt-4 space-y-3 pl-2">
                            <label className="flex items-center gap-3"><input className="h-4 w-4 border-gray-300 text-primary focus:ring-primary" name="rating" type="radio" /> <span className="text-sm">4 Stars & Up</span></label>
                            <label className="flex items-center gap-3"><input className="h-4 w-4 border-gray-300 text-primary focus:ring-primary" name="rating" type="radio" /> <span className="text-sm">3 Stars & Up</span></label>
                        </div>
                    </details>
                </div>
                <button className="mt-6 w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-white hover:bg-primary/90">Apply Filters</button>
            </div>
        </aside>
    );
};

export default FilterSidebar;