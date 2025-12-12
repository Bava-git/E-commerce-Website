import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
import { cartList, myWishlist } from './utilities/rawData';
import * as connectTo from './utilities/reusables';
import { Pagination, safeSortAscending, safeSortDescending } from './utilities/reusables';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

const handleDeleteWishlist = (wishlistId) => {
    connectTo.delFromArray(myWishlist, "wishlistId", wishlistId);
    window.location.href = "/cart"
};

const handleAddCart = (product) => {
    const cartItem = {
        cartlistId: cartList?.length + 1,
        productId: product?.productId,
        name: product?.name,
        price: product?.price,
        image: product?.image,
        color: product?.color,
        size: product?.size || "",
        quantity: 1,
    };
    connectTo.addToArray(cartList, cartItem);
    toast.success("Product added in cart");
    handleDeleteWishlist(product.wishlistId);
};

// --- Sub-Components ---
const WishlistItemCard = ({ item }) => (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 shadow-sm transition-all hover:shadow-lg dark:hover:shadow-slate-800/60">
        <div
            className="relative w-full bg-center bg-no-repeat aspect-square bg-cover cursor-pointer"
            data-alt={item.name}
            style={{ backgroundImage: `url("${item.image}")` }}
        >
            <button
                onClick={() => handleDeleteWishlist(item.wishlistId)}
                className="cursor-pointer absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined">delete</span>
            </button>
        </div>
        <div className="flex flex-col gap-4 p-4 flex-grow">
            <div className="flex-grow">
                <a
                    href={`/product/${item.productId}`}
                    className="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal select-none cursor-pointer hover:underline">{item.name}</a>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">{item.brand}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
                    <strong className="text-gray-300">Color:</strong> <span>{item?.color}</span>
                    <br />
                    {item?.size && <><strong className="text-gray-300">Size:</strong> <span>{item?.size}</span></>}
                </p>
            </div>
            <div className="flex items-center justify-between">
                <p className="text-slate-900 dark:text-white text-lg font-bold">₹{item.price}</p>
                <button
                    onClick={() => handleAddCart(item)}
                    className="flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary text-white gap-2 text-sm font-bold min-w-0 px-4 hover:bg-primary/90 transition-colors">
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    </div >
);

// --- Main Page Component ---
const WishlistPage = () => {

    const [myWishlistCopy, setMyWishlistCopy] = useState(myWishlist);
    const [tableData, setTableData] = useState(myWishlistCopy);
    const Navigate = useNavigate();

    const handleSort = (e) => {
        let sortedData = [];

        if (e.target.value === 'Ascending') {
            sortedData = safeSortAscending([...myWishlistCopy], "price");
        } else if (e.target.value === 'Descending') {
            sortedData = safeSortDescending([...myWishlistCopy], "price");
        } else {
            sortedData = [...myWishlistCopy]; // fallback to original
        }

        setTableData(sortedData);
    };

    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 min-h-screen">
            <div className="relative flex min-h-screen w-full flex-col">

                <main className="flex-grow">
                    <div className="container mx-auto px-4 py-8 sm:py-12">
                        <div className="flex flex-col gap-8">

                            {/* Page Header and Sorting */}
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex flex-col gap-1">
                                    <h1 className="text-slate-900 dark:text-white text-4xl font-black tracking-tighter">My Wishlist</h1>
                                    <p className="text-slate-500 dark:text-slate-400 text-base font-normal">A collection of products you've saved for later.</p>
                                </div>
                                {myWishlist?.length != 0 &&
                                    <div className="flex gap-2">
                                        <div className="flex items-center gap-2">
                                            <label className="text-sm" htmlFor="sort">Sort by:</label>
                                            <select onChange={(e) => handleSort(e)} className="rounded-lg border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-sm focus:border-primary focus:ring-primary pr-8" id="sort">
                                                <option>Featured</option>
                                                <option value='Ascending'>Price: Low to High</option>
                                                <option value='Descending'>Price: High to Low</option>
                                            </select>
                                        </div>
                                    </div>
                                }
                            </div>

                            {/* Wishlist Items Grid */}
                            {tableData?.length != 0 ?
                                (<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                    {tableData.map(item => (
                                        <WishlistItemCard key={item.wishlistId} item={item} />
                                    ))}
                                </div>)
                                :
                                (<div className="@container mb-12">
                                    <div className="@[480px]:p-0">
                                        <div
                                            className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-6 pb-12 @[480px]:px-12"
                                            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("${"/emptyWishlist.jpg"}")` }}
                                        >
                                            <div className="flex flex-col gap-3 text-left max-w-xl">
                                                <h1 className="text-white text-3xl font-black leading-tight tracking-tighter @[480px]:text-6xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-tighter">Your wishlist is empty</h1>
                                            </div>
                                            <button
                                                onClick={() => Navigate("/")}
                                                className="flex min-w-[84px] max-w-[400px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 @[480px]:h-14 @[480px]:px-8 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                                                <span className="truncate">Continue shopping</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>)
                            }

                            {/* Pagination */}
                            <Pagination data={tableData} ItemPerPage={10} setTableData={setTableData} />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default WishlistPage;