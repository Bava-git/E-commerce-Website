import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
import FilterSidebar from './components/reusables/FilterSidebar';
import ProductCard from './components/reusables/ProductCard';
import { useProducts } from './utilities/context/ProductContext';
import { Pagination, safeSortAscending, safeSortDescending } from './utilities/reusables';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const genderSynonyms = {
    women: ["women", "woman", "ladies", "lady", "girls", "girl", "female"],
    men: ["men", "man", "male", "gents", "gentlemen", "boys", "boy"],
    unisex: ["unisex", "all", "everyone"]
};
// ---------------------------------------------------------------------------
function normalizeGender(word) {
    const lower = word.toLowerCase();
    for (const [key, synonyms] of Object.entries(genderSynonyms)) {
        if (synonyms.includes(lower)) return key; // return standardized gender
    }
    return lower; // fallback
}

// ---------------------------------------------------------------------------
// --Main Component--
const ProductListingPage = () => {

    const { products } = useProducts();
    const [searchParams, setSearchParams] = useSearchParams();
    const keywords = searchParams.get("k") || "";
    const navigate = useNavigate();
    const [tableData, setTableData] = useState(products);

    function buildKeywords(product) {
        const keywords = [];

        // Core product type gets higher weight
        if (product.name) {
            const name = product.name.trim().split(/\s+/);
            name.flatMap(n => {
                keywords.push({ word: n.toLowerCase(), weight: 3 });
            });
            keywords.push({ word: product.name.toLowerCase(), weight: 3 });
        }

        // Brand/tagline moderate weight
        if (product.brand) keywords.push({ word: product.brand.toLowerCase(), weight: 2 });
        if (product.tagline) keywords.push({ word: product.tagline.toLowerCase(), weight: 2 });
        if (product?.color?.name) keywords.push({ word: product.color.name.toLowerCase(), weight: 2 });

        // Gender synonyms lower weight
        if (Array.isArray(product.gender)) {
            product.gender.forEach(g => {
                keywords.push({ word: normalizeGender(g), weight: 1 });
            });
        };

        // Other attributes moderate weight
        if (Array.isArray(product.sizes)) {
            product.sizes.forEach(s => keywords.push({ word: s.label.toLowerCase(), weight: 2 }));
        };

        if (Array.isArray(product.specifications)) {
            product.specifications.forEach(s => {
                if (s.label) keywords.push({ word: s.label.toLowerCase(), weight: 2 });
                if (Array.isArray(s.value)) {
                    s.value.forEach(v => keywords.push({ word: v.toLowerCase(), weight: 2 }));
                } else if (s.value) {
                    keywords.push({ word: s.value.toLowerCase(), weight: 2 });
                }
            });
        };

        // NormalizeGender synonyms lower weight
        if (Array.isArray(keywords)) {
            keywords.forEach(k => {
                k.word = normalizeGender(k.word);
            });
        };

        // console.log(keywords);
        return keywords;
    }


    function searchProducts(query, products) {
        const q = query.toLowerCase();

        return products.filter(product => {
            const keywords = buildKeywords(product);
            let score = 0;

            keywords.forEach(k => {
                // console.log(k);
                if (q.includes(k.word)) {
                    score += k.weight;
                }
            });

            return score > 0; // threshold for match
        });
    };

    useEffect(() => {
        if (!keywords) return;

        let searchedItems = [];
        const keywordsArray = keywords.trim().split(/\s+/);

        if (keywordsArray.length > 1) {
            console.log("Multi");
            searchedItems = keywordsArray.flatMap(kw => searchProducts(normalizeGender(kw), products));
        } else {
            console.log("Single");
            searchedItems = searchProducts(normalizeGender(keywords), products);
        }

        // Deduplicate by product id (or name if no id)
        const uniqueItems = Array.from(new Set(searchedItems.map(p => p.id)))
            .map(id => searchedItems.find(p => p.id === id));

        setTableData(uniqueItems);
    }, [keywords, products]);


    const handleSort = (e) => {
        let sortedData = [];

        if (e.target.value === 'Ascending') {
            sortedData = safeSortAscending([...products], "price");
        } else if (e.target.value === 'Descending') {
            sortedData = safeSortDescending([...products], "price");
        } else {
            sortedData = [...products]; // fallback to original
        }

        setTableData(sortedData);
    };

    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
            <div className="relative flex min-h-screen w-full flex-col">

                {/* Main Content */}
                <main className="container mx-auto flex flex-1 flex-col px-4 py-8">

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                        {/* Filters Sidebar */}
                        <FilterSidebar
                            setTableData={setTableData}
                        />

                        {/* Product Grid Area */}
                        {tableData?.length > 0 ?
                            <div className="col-span-1 lg:col-span-3">
                                {/* Toolbar */}
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-lg bg-card-light dark:bg-card-dark p-4 border border-border-light dark:border-border-dark">
                                    <p className="text-sm text-muted-light dark:text-muted-dark">
                                        Showing <span className="font-semibold text-text-light dark:text-text-dark">{tableData?.length}</span> of <span className="font-semibold text-text-light dark:text-text-dark">{products?.length}</span> products
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <label className="text-sm" htmlFor="sort">Sort by:</label>
                                            <select
                                                onChange={(e) => handleSort(e)}
                                                className="rounded-lg border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-sm focus:border-primary focus:ring-primary pr-8" id="sort">
                                                <option>Featured</option>
                                                <option value="Ascending">Price: Low to High</option>
                                                <option value="Descending">Price: High to Low</option>
                                                <option>Newest Arrivals</option>
                                            </select>
                                        </div>
                                        {/* <div className="lg:hidden md:hidden sm:hidden sm:flex items-center gap-1 rounded-lg bg-border-light dark:bg-border-dark p-1">
                                            <button className="h-8 w-8 flex items-center justify-center rounded-md bg-primary text-white"><span className="material-symbols-outlined text-base">grid_view</span></button>
                                            <button className="h-8 w-8 flex items-center justify-center rounded-md text-muted-light dark:text-muted-dark hover:bg-background-light dark:hover:bg-background-dark"><span className="material-symbols-outlined text-base">view_list</span></button>
                                        </div> */}
                                    </div>
                                </div>

                                {/* Product Grid */}
                                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                                    {tableData.map(product => (
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                        />
                                    ))}
                                </div>

                                {/* Pagination */}
                                <Pagination data={tableData} ItemPerPage={50} setTableData={setTableData} />
                            </div>
                            :
                            <div className="col-span-3 w-full text-center py-24 px-6 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
                                <div className="flex justify-center mb-4">
                                    <div className="flex items-center justify-center size-16 rounded-full bg-primary/10 text-primary">
                                        <span className="material-symbols-outlined text-4xl">inventory_2</span>
                                    </div>
                                </div>
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                    No products found
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 mb-6">
                                    We couldn`t find any products matching your search. Try adjusting your filters or keywords!
                                </p>

                                <button onClick={() => navigate("/")} className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-primary text-white gap-2 text-base font-bold leading-normal tracking-wide min-w-[160px] mx-auto px-6">Start Shopping</button>
                            </div>
                        }
                    </div>
                </main>

            </div >
        </div >
    );
};

export default ProductListingPage;