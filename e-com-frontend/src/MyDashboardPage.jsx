import { useState } from "react";
import { toast } from "sonner";
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
import { myWishlist, cartList, totalSummarys } from "./utilities/rawData";
import * as connectTo from './utilities/reusables';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// --- Main Page Component ---
const MyDashboardPage = () => {

    const [myWichlistCopy, setMyWichlistCopy] = useState(myWishlist);
    const [cartListCopy, setCartListCopy] = useState(cartList);
    const [totalSummarysCopy, setTotalSummarysCopy] = useState(totalSummarys);

    const handleToggleW_C = (product) => {

        let ifAvaiable = false;
        cartListCopy.forEach(item => {
            if (item.productId === product.productId) {
                item.quantity = item.quantity + 1;
                ifAvaiable = true;
            }
        });

        if (ifAvaiable) {
            setMyWichlistCopy(connectTo.delFromArray(myWichlistCopy, "productId", product.productId));
            toast.success("Product added in cart");
            return;
        }

        const cartItem = {
            id: cartList?.length + 1,
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            color: product.color,
            size: product.size || "",
            quantity: 1
        };
        setCartListCopy(connectTo.addToArray(cartListCopy, cartItem));
        setMyWichlistCopy(connectTo.delFromArray(myWichlistCopy, "productId", product.productId));
        toast.success("Product added in cart");
    }

    const handleToggleC_W = (product) => {

        let ifAvaiable = false;
        myWichlistCopy.forEach(item => {
            if (item.productId === product.productId) {
                ifAvaiable = true;
            }
        });

        if (ifAvaiable) {
            setCartListCopy(connectTo.delFromArray(cartListCopy, "productId", product.productId));
            toast.success("Product added in wishlist");
            return;
        }

        const wishlistItem = {
            id: myWishlist?.length + 1,
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            color: product.color,
            size: product.size || "",
        };
        setMyWichlistCopy(connectTo.addToArray(myWichlistCopy, wishlistItem));
        setCartListCopy(connectTo.delFromArray(cartListCopy, "productId", product.productId));
        toast.success("Product added in wishlist");
    }

    return (
        <main className="flex-1 w-full m-1">
            <div className="m-5 p-2 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
                <header className="flex gap-2 dark:bg-neutral-900/50 p-4 shadow-sm">
                    <span className="material-symbols-outlined dark:text-white">favorite</span>
                    <p className="dark:text-white font-medium">My Wishlist ({myWichlistCopy?.length})</p>
                </header>
                <section className="flex flex-1 flex-wrap justify-center items-center flex-row gap-5 overflow-hidden">
                    {myWichlistCopy?.length != 0 ?
                        (myWichlistCopy.map((item) => (
                            <div key={item.id} className="flex flex-col m-3 justify-between">
                                <div className="rounded-lg overflow-hidden size-40">
                                    <img
                                        src={item.image}
                                        alt={`A photo of a ${item.name}`}
                                        className="size-40 object-contain"
                                    />
                                </div>
                                <p className="dark:text-white mt-2">{item.name}</p>
                                <div className="flex justify-between items-end flex-row">
                                    <div className="flex flex-col">
                                        <p className="dark:text-white my-1">₹{item.price}</p>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
                                            <strong className="text-gray-300">Color:</strong> <span>{item?.color}</span>
                                            <br />
                                            {item?.size && <><strong className="text-gray-300">Size:</strong> <span>{item?.size}</span></>}
                                        </p>
                                    </div>
                                    <div className="relative">
                                        <button
                                            onClick={() => handleToggleW_C(item)}
                                            className="m-2 flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                            <span className="material-symbols-outlined text-xl">shopping_cart</span>
                                            <span className="absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">+</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )))
                        :
                        (
                            <div className="flex-1 text-center py-6 px-6">
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">You have no wish item</h2>
                                <p className="text-slate-600 dark:text-slate-400">Looks like you haven't made any plans yet. <a href="/" className="text-blue-500 cursor-pointer">Let's change that!</a></p>
                            </div>
                        )
                    }
                </section>
            </div>
            <div className="m-5 p-2 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
                <header className="flex gap-2 dark:bg-neutral-900/50 p-4 shadow-sm">
                    <span className="material-symbols-outlined dark:text-white">shopping_cart</span>
                    <p className="dark:text-white font-medium">My Cart ({cartListCopy?.length})</p>
                </header>
                <section className="flex flex-1 flex-wrap justify-center items-center flex-row gap-5 overflow-hidden">
                    {cartListCopy?.length != 0 ?
                        (cartListCopy.map((item) => (
                            <div key={item.id} className="flex flex-col m-3 justify-between">
                                <div className="rounded-lg overflow-hidden size-40">
                                    <img
                                        src={item.image}
                                        alt={`A photo of a ${item.name}`}
                                        className="size-40 object-contain"
                                    />
                                </div>
                                <p className="dark:text-white mt-2">{item.name}</p>
                                <div className="flex justify-between items-end flex-row">
                                    <div className="flex flex-col">
                                        <p className="dark:text-white my-1">₹{item.price} Q-{item.quantity}</p>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
                                            <strong className="text-gray-300">Color:</strong> <span>{item?.color}</span>
                                            <br />
                                            {item?.size && <><strong className="text-gray-300">Size:</strong> <span>{item?.size}</span></>}
                                        </p>
                                    </div>
                                    <div className="relative">
                                        <button
                                            onClick={() => handleToggleC_W(item)}
                                            className="m-2 flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                            <span className="material-symbols-outlined text-xl">favorite</span>
                                            <span className="absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">+</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )))
                        :
                        (
                            <div className="flex-1 text-center py-6 px-6">
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">You have no cart item</h2>
                                <p className="text-slate-600 dark:text-slate-400">Looks like you haven't made any plans yet. <a href="/" className="text-blue-500 cursor-pointer">Let's change that!</a></p>
                            </div>
                        )
                    }
                </section>
            </div>
        </main>
    );
};

export default MyDashboardPage;