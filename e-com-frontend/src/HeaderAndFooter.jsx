import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Typo from "typo-js";
import { useProducts } from "./utilities/context/ProductContext";
import { cartList, myWishlist, products } from "./utilities/rawData";

async function loadDictionary(words) {
    const aff = await fetch("/dictionary/index.aff").then(res => res.text());
    const dic = await fetch("/dictionary/index.dic").then(res => res.text());

    const dictionary = new Typo("en_US", aff, dic, { platform: "browser" });
    // const words = "Tat Vit errors is expecte sx b";
    const wordsArr = words.split(/\s+/);
    let newSuggestions = "";
    wordsArr.forEach(word => {
        if (word && !dictionary.check(word)) {
            newSuggestions = newSuggestions + " " + dictionary.suggest(word).join(" ");
        } else {
            newSuggestions = newSuggestions + " " + word;
        }
    });

    return newSuggestions;
}

export const Header = ({ links }) => {

    const [productsCopy, setProductsCopy] = useState(products);
    let cartItemCount = cartList?.length;
    let wishlistItemCount = myWishlist?.length;

    useEffect(() => {
        cartItemCount = cartList?.length;
        wishlistItemCount = myWishlist?.length;
    }, [cartList, myWishlist]);

    function buildKeywords(product) {
        return [
            product.name,
            product.brand,
            product.tagline,
            product.color?.name,
            ...product.gender.map(g => g),
            ...product.sizes.map(s => s.label),
            ...product.specifications.map(s => s.label),
            ...product.specifications.map(s => s.value),
        ].join(" ").toLowerCase();
    }

    const { setProducts } = useProducts();
    const navigate = useNavigate();
    async function searchProducts(query) {
        // query = await loadDictionary(query);
        // console.log("query - ", query);

        const searchedItems = productsCopy.filter(p => buildKeywords(p).includes(query.toLowerCase()));
        setProducts(searchedItems);
        navigate("/s");
    }

    return (<header>
        <div className="z-50 flex items-center justify-center whitespace-nowrap border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
            <div className="flex items-center justify-between w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3 text-slate-900 dark:text-slate-50">
                        <div className="w-6 h-6 text-slate-900 dark:text-slate-50">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold leading-tight tracking-tighter cursor-pointer underline" onClick={() => window.location.href = "/"}>Khapara</h2>
                    </div>
                </div>
                <div className="w-full mx-10">
                    <label className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark pointer-events-none"> search </span>
                        <input
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    navigate(`/s?k=${e.target.value}`);
                                }
                            }}
                            spellCheck={true}
                            className="text-white w-full rounded-lg border-none bg-border-light dark:bg-border-dark py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary mx-2"
                            placeholder="Search..."
                            type="search"
                            id="search" />
                    </label>
                </div>
                <div className="flex items-center gap-2 relative">
                    <a
                        href={"/signup"}
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                        <span className="truncate">Sign Up</span>
                    </a>
                    <a
                        href={"/signin"}
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                        <span className="truncate">Sign In</span>
                    </a>
                    <a
                        href={"/wishlist"}
                        className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined text-xl">favorite</span>
                        <span className="absolute top-0 right-25 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">{wishlistItemCount}</span>
                    </a>
                    <a
                        href={"/cart"}
                        className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined text-xl">shopping_cart</span>
                        <span className="absolute top-0 right-12 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">{cartItemCount}</span>
                    </a>
                    <a
                        href={"/dashboard"}
                        className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined text-xl">person</span>
                    </a>
                </div>
            </div>
        </div>
        {links &&
            <div className="flex items-center justify-around w-full px-1 sm:px-6 lg:px-2 py-3 border-b border-slate-200 dark:border-slate-800 ">
                {links.map(item => (
                    <a key={item.label}
                        className="text-sm font-medium text-slate-700 dark:text-slate-300 px-2
                hover:text-primary dark:hover:text-primary transition-colors" href={`${item.link}?k=${item.keywords.join("+")}`}>
                        {item.label}
                    </a>
                ))}
            </div>
        }
    </header>)
};

export const Footer = ({ links }) => {

    const shopLinks = ["New Arrivals", "Men", "Women", "Accessories"].map(label => {
        const linkObj = links.find(l => l.label === label);
        return linkObj ? linkObj : { label: label, link: "#" };
    });

    const companyLinks = [
        { label: "About Us", link: "/aboutus" },
        { label: "Careers", link: "#" },
        { label: "Press", link: "#" },
    ];

    const supportLinks = [
        { label: "Contact Us", link: "/contactus" },
        { label: "Help Center", link: "/helpcenter" },
        { label: "Returns & Shipping Information", link: "/returninfo" },
    ];

    return (
        <footer className="w-full bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="w-full bg-primary/10 dark:bg-primary/20 py-1">
                <div
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 cursor-pointer flex items-center justify-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
                    <span className="material-symbols-outlined text-xl">arrow_upward</span>
                    <span>Back to top</span>
                </div>
            </div>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-3 text-slate-900 dark:text-slate-50 mb-4">
                            <div className="w-6 h-6 text-slate-900 dark:text-slate-50">
                                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-bold leading-tight tracking-tighter underline">Khapara</h2>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm">Quality apparel and accessories designed for the modern individual. Experience style that lasts.</p>
                    </div>
                    <div className="col-span-1 lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h5 className="font-bold text-slate-900 dark:text-slate-50 mb-4">Shop</h5>
                            <ul className="space-y-3">
                                {shopLinks.map((l) =>
                                (
                                    <li key={l.label}>
                                        <a className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary"
                                            href={`${l.link}?k=${l.keywords ? l.keywords.join("+") : ""}`}>
                                            {l.label}
                                        </a>
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold text-slate-900 dark:text-slate-50 mb-4">Company</h5>
                            <ul className="space-y-3">
                                {companyLinks.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary"
                                            href={item.link}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold text-slate-900 dark:text-slate-50 mb-4">Support</h5>
                            <ul className="space-y-3">
                                {supportLinks.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary"
                                            href={item.link}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold text-slate-900 dark:text-slate-50 mb-4">Newsletter</h5>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Get 10% off your first order.</p>
                            <form className="flex">
                                <input
                                    className="form-input w-full rounded-l-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100 focus:ring-primary focus:border-primary"
                                    placeholder="Your Email"
                                    autoComplete="email"
                                    name="newsletter-email"
                                    id="newsletter-email"
                                    type="email" />
                                <button className="bg-primary text-white p-2 rounded-r-md hover:bg-primary/90">
                                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-200 dark:border-slate-700 pt-8 text-center text-sm text-slate-500 dark:text-slate-400">
                    <p>© 2025 AURA. All rights reserved.</p>
                </div>
            </div>
        </footer >
    )
};