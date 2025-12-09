import { useEffect } from "react";
import { cartList, myWishlist } from "./utilities/rawData";

export const Header = ({ links }) => {

    let cartItemCount = cartList?.length;
    let wishlistItemCount = myWishlist?.length;

    useEffect(() => {
        cartItemCount = cartList?.length;
        wishlistItemCount = myWishlist?.length;
    }, [cartList, myWishlist])

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
                <div className="hidden sm:block w-7xl max-w-xl">
                    <label className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark pointer-events-none"> search </span>
                        <input className="text-white w-full rounded-lg border-none bg-border-light dark:bg-border-dark py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary mx-2" placeholder="Search..." type="search" id="search" />
                    </label>
                </div>
                <div className="flex items-center gap-2 relative">
                    <button
                        onClick={() => window.location.href = "/signup"}
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                        <span className="truncate">Sign Up</span>
                    </button>
                    <button
                        onClick={() => window.location.href = "/signin"}
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                        <span className="truncate">Sign In</span>
                    </button>
                    <button
                        onClick={() => window.location.href = "/wishlist"}
                        className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined text-xl">favorite</span>
                        <span className="absolute top-0 right-25 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">{wishlistItemCount}</span>
                    </button>
                    <button
                        onClick={() => window.location.href = "/cart"}
                        className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined text-xl">shopping_cart</span>
                        <span className="absolute top-0 right-12 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">{cartItemCount}</span>
                    </button>
                    <button
                        onClick={() => window.location.href = "/dashboard"}
                        className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined text-xl">person</span>
                    </button>
                </div>
            </div>
        </div>
        {links &&
            <div className="flex items-center justify-around w-full px-1 sm:px-6 lg:px-2 py-3 border-b border-slate-200 dark:border-slate-800 ">
                {links.map(item => (
                    <a key={item.title}
                        className="text-sm font-medium text-slate-700 dark:text-slate-300 px-2
                hover:text-primary dark:hover:text-primary transition-colors" href={item.links}>
                        {item.title}
                    </a>
                ))}
            </div>
        }
    </header>)
};

export const Footer = () => (
    <footer className="w-full bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
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
                            <li><a className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary" href="#">New Arrivals</a></li>
                            <li><a className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary" href="#">Men</a></li>
                            <li><a className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary" href="#">Women</a></li>
                            <li><a className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary" href="#">Accessories</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-slate-900 dark:text-slate-50 mb-4">Company</h5>
                        <ul className="space-y-3">
                            <li><a className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary" href="/aboutus">About Us</a></li>
                            <li><a className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary" href="#">Careers</a></li>
                            <li><a className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary" href="#">Press</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-slate-900 dark:text-slate-50 mb-4">Support</h5>
                        <ul className="space-y-3">
                            <li><a className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary" href="/contactus">Contact Us</a></li>
                            <li><a className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary" href="/helpcenter">Help Center</a></li>
                            <li><a className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary" href="/returninfo">Returns & Shipping Information</a></li>
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
    </footer>
);