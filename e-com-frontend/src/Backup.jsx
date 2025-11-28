const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'About Us', href: '#', current: true },
    { name: 'Contact', href: '#' },
];

const initialCart = [
    { id: 1, name: 'Classic Crewneck Tee', details: 'Color: Charcoal, Size: Large', price: 25.00, quantity: 1, imageId: 16 },
    { id: 2, name: 'Slim-Fit Denim Jeans', details: 'Color: Indigo, Size: 32x32', price: 60.00, quantity: 1, imageId: 17 },
    { id: 3, name: 'Leather Ankle Boots', details: 'Color: Brown, Size: 9', price: 120.00, quantity: 1, imageId: 18 },
];

const Header1 = ({ links }) => (
    <header className="z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl h-16">
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 text-slate-900 dark:text-slate-50">
                    <span className="material-symbols-outlined text-primary text-2xl">diamond</span>
                    <h2 className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-tight tracking-[-0.015em]">Header1</h2>
                </div>
                <div className="hidden md:flex items-center gap-8">
                    {links.map(link => (
                        <a
                            key={link.name}
                            className={`${link.current ? 'text-primary dark:text-primary text-sm font-bold' : 'text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium'} leading-normal`}
                            href={link.href}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-end gap-2">
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                    <span className="material-symbols-outlined text-xl">search</span>
                </button>
                <button className="hidden sm:flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                    <span className="material-symbols-outlined text-xl">shopping_cart</span>
                </button>
                <div className="hidden md:flex items-center gap-2">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                        <span className="truncate">Sign Up</span>
                    </button>
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User avatar image" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLZUDA295YEqzHaUNfHZssSI5JR5fuuc87dJjvTX1p9y_DZbhKNCLLxPbrjuxUZwkwlnK4EpaNAfMBh6VG8vm4UoNO5zZCDwvz8GNrjorXdE1j7vAZEqUHLSTSNRVXOIUsZD1DxBYlgDsUxw36vUv0Hg9hSQfrCe35xr3RQXrcxfgMfcGAwDyTeYK0HbXgonJpF9A0ya03Ht0d-L3LP97FMdz-0M6x_lZAY8hTgnU2u4vou63j-iAPd1CtPxLIFjKksGEhYzzg-6k")' }}></div>
                </div>
            </div>
        </div>
    </header>
);

const Header2 = () => (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-gray-800 px-4 sm:px-6 lg:px-10 py-3 bg-white dark:bg-background-dark/50">
        <div className="flex items-center gap-4 text-gray-900 dark:text-white">
            <div className="size-6 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Header2</h2>
        </div>
        <div className="flex items-center gap-6">
            <button className="relative flex cursor-pointer items-center justify-center rounded-full size-10 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                <span className="material-symbols-outlined text-2xl">favorite</span>
            </button>
            <button className="relative flex cursor-pointer items-center justify-center rounded-full size-10 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                <span className="material-symbols-outlined text-2xl">shopping_cart</span>
                <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">2</div>
            </button>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User avatar placeholder" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNOfk8r6z55cP79KFW0pREG0YNqRS7hNoIVZhTtkoysHfdgqFfDeCe_P1bNElHlJo05Xzp-7RlVgWCdISA0aBepsyQtfjQ_NaESRig_oNi7ZUZ9JbSfD9bZOPSfrT0tFNhEU5NBzX6kvPpp-ONsO0WJLiyr3eSR9mOXxb0yQCu1zp4d3G6lyEEspzkRsTEg5lf40PtKtnyhC2AKVMIOcETwdxdF6FiFMAp1Y7eQnxaciZgCwodE5VmpJ5tY9BBOcRnEQYtsMPMRZE")' }}></div>
        </div>
    </header>
);

const Header3 = () => (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 px-4 sm:px-8 md:px-12 py-3 bg-white dark:bg-background-dark">
        <div className="flex items-center gap-4 text-slate-900 dark:text-white">
            <div className="size-6 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_6_319)">
                        <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_6_319">
                            <rect fill="white" height="48" width="48"></rect>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Header3</h2>
        </div>
        <div className="flex flex-1 justify-end gap-2">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">favorite</span>
            </button>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">shopping_cart</span>
            </button>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User avatar image" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJIjnrBoDmHMHw25FnbzjLI2A7zyVTkwQ0PKxTEUsrOJH1WktYfNhlfRqiY73Hm6VV2JY79-j8veS1TYhmCIX2krGQngI_Q_bQ3rL1CcO6VAkOF4Vp7P1fY7IODcryKRDnkpCyHyAetOv_Yp3jGGU4tNaURAhD1DwY3VImjVqlMFRxPdBKIEBc6MOB7XT_tvai7DLJMwP_K0D68yqfUhccuP3m6-qMKNwDKws_TFYc0RcydrOPbzDzz3CzpBoySnpqHJ8ivTY9jMk")' }}></div>
        </div>
    </header>
);

const Header4 = () => (
    <header className="w-full border-b border-border-light dark:border-border-dark bg-neutral-light dark:bg-neutral-dark/50">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between whitespace-nowrap py-4">
                <div className="flex items-center gap-3">
                    <svg className="size-6 text-text-light dark:text-text-dark" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                    </svg>
                    <h2 className="text-lg font-bold tracking-tight">Header4</h2>
                </div>
                <div className="flex items-center gap-4">
                    <a className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark" href="#">Need help?</a>
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User avatar" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBi-tWWTU0Gj0ZCL8HBosQhfHXxmG785dFGqd8Q63g-nSYHBQd0x59Ebq6FpoLQKD6QnWB4cK1Z2MI4q7P_EYL9Lh8cJ6vPWVd8U0JDbOyzCdkAyY61wwYoLDBKwyQKElPQ4a1hIbD_WMHOmEChkJ2A3N-wUEzI6n1Cl4SHXy7oJImNpXbi-xGlSlra6Meii2GQtNunzxN6sSncyp_ZvwdQ8QZ_W8TrZWF1r9BTVsI-UcSl5uUkZvDwL4s0RxtjguUE2eRkmAguQPI')" }}></div>
                </div>
            </div>
        </div>
    </header>
);

const Header5 = ({ links }) => (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 lg:px-10 py-3 bg-white dark:bg-background-dark">
        <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                <div className="size-6 text-primary">
                    <span className="material-symbols-outlined !text-3xl">storefront</span>
                </div>
                <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Header5</h2>
            </div>
        </div>
        <nav className="hidden md:flex items-center gap-9">
            {links.map(link => (
                <a
                    key={link.name}
                    className={`${link.current ? 'text-primary dark:text-primary text-sm font-bold' : 'text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium'} leading-normal`}
                    href={link.href}
                >
                    {link.name}
                </a>
            ))}
        </nav>
        <div className="flex flex-1 justify-end items-center gap-2">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Sign In</span>
            </button>
            <button className="hidden sm:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Sign Up</span>
            </button>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <span className="material-symbols-outlined text-xl">shopping_cart</span>
            </button>
        </div>
    </header>
);

const Header6 = () => (
    <div className="w-full p-4">
        <header className="flex items-center justify-between whitespace-nowrap px-6 py-3 mx-auto max-w-7xl">
            {/* Logo */}
            <div className="flex items-center gap-4 text-[#0d131b] dark:text-slate-50">
                <div className="size-6 text-primary">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                    </svg>
                </div>
                <h2 className="text-[#0d131b] dark:text-slate-50 text-lg font-bold leading-tight tracking-[-0.015em]">Header6</h2>
            </div>
            {/* Log In Button (Desktop/Tablet) */}
            <div className="flex items-center gap-2">
                <p className="text-sm text-[#4c6c9a] dark:text-slate-400 hidden sm:block">Already have an account?</p>
                <a className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors" href="#">
                    <span className="truncate">Log In</span>
                </a>
            </div>
        </header>
    </div>
);

const Header7 = () => (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 lg:px-10 py-3 bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm z-50">
        <div className="flex items-center gap-4 text-slate-900 dark:text-white">
            <div className="size-6 text-primary">
                {/* Brand Icon SVG */}
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="currentColor"></path>
                </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Header7</h2>
        </div>
        <div className="hidden md:flex flex-1 justify-end items-center gap-8">
            <div className="flex items-center gap-9">
                {['Shop', 'New Arrivals', 'Deals', 'About'].map(item => (
                    <a key={item} className="text-sm font-medium leading-normal text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">{item}</a>
                ))}
            </div>
            <div className="flex items-center gap-2">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                    <span className="truncate">Sign In</span>
                </button>
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    <span className="material-symbols-outlined text-xl">favorite</span>
                </button>
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    <span className="material-symbols-outlined text-xl">shopping_cart</span>
                </button>
            </div>
        </div>
    </header>
);

const Header8 = () => (
    <header className="z-50 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
                <svg className="size-6 text-slate-900 dark:text-slate-50" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path>
                </svg>
                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-50">Header8</h2>
            </div>
            <nav className="hidden items-center gap-8 md:flex">
                {['Home', 'Shop', 'Account'].map(item => (
                    <a key={item} className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary" href="#">{item}</a>
                ))}
                <a className="text-sm font-bold text-primary dark:text-primary" href="#">Help</a>
            </nav>
            <div className="flex items-center gap-4">
                <div className="flex gap-2">
                    <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-slate-200/80 text-slate-600 hover:bg-slate-300/80 dark:bg-slate-800/80 dark:text-slate-400 dark:hover:bg-slate-700/80">
                        <span className="material-symbols-outlined text-xl">favorite</span>
                    </button>
                    <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-slate-200/80 text-slate-600 hover:bg-slate-300/80 dark:bg-slate-800/80 dark:text-slate-400 dark:hover:bg-slate-700/80">
                        <span className="material-symbols-outlined text-xl">shopping_bag</span>
                    </button>
                </div>
                <div className="aspect-square size-10 rounded-full bg-cover bg-center bg-no-repeat" data-alt="User avatar image" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAIRtxLYlEE8kfTlo378USPpP6deFSekT2zvPvRWyzpBYkqlfMa77M4m0k71XapYz56OMj0dXyR5mrmi9eiLrwxFUdWKIMxxMm1oHPMLvp8f_BVEayaSOp_ONjAbuiif2ydH8oSUlLz77gjfCLyCPnpma_nwGwPjha6xzHymdb3yr2o5Ljb4F0Z07QNHtVb9Q6nKQ7rr1hKG4Ff7kbGM-89tNHlwr-1tVQzAO8Vp9M5xINENqV4dcGfCRcLpTqYIVUBG7oSRcDzM8k")' }}></div>
            </div>
        </div>
    </header>
);

const Header9 = () => (
    <header className="z-50 flex items-center justify-center whitespace-nowrap border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="flex items-center justify-between w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-3 text-slate-900 dark:text-slate-50">
                    <div className="w-6 h-6 text-slate-900 dark:text-slate-50">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-bold leading-tight tracking-tighter">Header9</h2>
                </div>
            </div>
            <div className="hidden md:flex flex-1 justify-center gap-8">
                <div className="flex items-center gap-9">
                    <a className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Shop</a>
                    <a className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">New Arrivals</a>
                    <a className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Sale</a>
                    <a className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Men</a>
                    <a className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Women</a>
                    <a className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Accessories</a>
                </div>
            </div>
            <div className="flex flex-1 md:flex-none justify-end gap-2">
                <label className="hidden lg:flex flex-col min-w-40 h-10 max-w-64">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                        <div className="text-slate-500 dark:text-slate-400 flex border-none bg-slate-200 dark:bg-slate-800 items-center justify-center pl-3 rounded-l-lg border-r-0">
                            <span className="material-symbols-outlined text-xl">search</span>
                        </div>
                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-slate-900 dark:text-slate-100 focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-slate-200 dark:bg-slate-800 h-full placeholder:text-slate-500 dark:placeholder:text-slate-400 px-4 text-sm font-normal leading-normal" placeholder="Search" defaultValue="" />
                    </div>
                </label>
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 transition-colors">
                    <span className="material-symbols-outlined">favorite</span>
                </button>
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 transition-colors">
                    <span className="material-symbols-outlined">shopping_bag</span>
                </button>
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 transition-colors">
                    <span className="material-symbols-outlined">person</span>
                </button>
            </div>
        </div>
    </header>
);

const Header10 = () => (
    <header className=" z-10 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
                <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl">store</span>
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold">Header10</h2>
                </div>
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {['Home', 'Shop', 'Deals', 'New Arrivals'].map((link, index) => (
                        <a
                            key={link}
                            className={`transition-colors ${index === 1 ? 'text-primary font-semibold' : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary'}`}
                            href="#"
                        >
                            {link}
                        </a>
                    ))}
                </nav>
                <div className="flex items-center gap-3">
                    <button className="flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined text-xl">search</span>
                    </button>
                    <button className="flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined text-xl">shopping_cart</span>
                    </button>
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User profile picture" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCPziZgTZ8eZod93aPlA-xn6Q1xs4oOkJHq6EcyXATbRdFfHbHSeC503zDnJf4fxMWNaEFRvyiKTta06DbaKzBTXSxktFIR1n_S9LqBUB5l770cPe-91npU4z7ytP0KIs7Dmhoc9FYH3joUcO7bnAngbo1SS3CNwC2Il39fPYj14s1SdQI-cBJhSipE-oAxUPrA1Wwhaf8zqIzPv3eqHzJN17kS-Ukw4I3XtBRmF0h1RCew2cT8h8EmJZhaKIJxCo_ah8koo973hiw")' }}></div>
                </div>
            </div>
        </div>
    </header>
);

const Header11 = ({ links }) => (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-10 lg:px-20 py-4  bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm z-10">
        <div className="flex items-center gap-4 text-slate-900 dark:text-slate-50">
            <div className="size-6">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                </svg>
            </div>
            <h2 className="text-xl font-bold tracking-[-0.015em]">Header11</h2>
        </div>
        <div className="hidden md:flex items-center gap-9">
            {links.map(link => (
                <a key={link.name} className="text-sm font-medium leading-normal hover:text-primary" href={link.href}>{link.name}</a>
            ))}
        </div>
        <div className="flex items-center gap-2">
            <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-slate-200/60 dark:bg-slate-800/60 text-slate-900 dark:text-slate-50 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0">
                <span className="material-symbols-outlined text-xl">search</span>
            </button>
            <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-slate-200/60 dark:bg-slate-800/60 text-slate-900 dark:text-slate-50 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0">
                <span className="material-symbols-outlined text-xl">person</span>
            </button>
            <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-slate-200/60 dark:bg-slate-800/60 text-slate-900 dark:text-slate-50 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0">
                <span className="material-symbols-outlined text-xl">shopping_cart</span>
            </button>
        </div>
    </header>
);

const Header12 = () => (
    <header className="w-full bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800  z-50">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center gap-4 text-[#0d131b] dark:text-white">
                    <svg className="text-primary size-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H9.33333V9.33333H14.6667V14.6667H20V20H4V4Z"></path>
                    </svg>
                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Header12</h2>
                </div>
                <nav className="hidden md:flex items-center gap-9">
                    {['Home', 'Shop', 'Categories', 'My Account'].map(link => (
                        <a key={link} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary" href="#">{link}</a>
                    ))}
                </nav>
                <div className="flex items-center gap-2">
                    <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
                        <span className="material-symbols-outlined text-xl">favorite</span>
                    </button>
                    <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
                        <span className="material-symbols-outlined text-xl">shopping_cart</span>
                    </button>
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ml-2" data-alt="User avatar image" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCuydhoRxeCA-InsiB6MO39y44n6Q_AipYbRotDEnAOek4aWmKjmY6gmi8CK4T6xcYknbaH_BOWiNx-Hmrh24wi25MA9UgyMLE1__w-K-9xRfGYuHZ9oqaJvzFYHzICljAbxp46jDGj70UKLBhMAzjSuDGfV6T1I25NuzgD1WcVraoD_9W7dWtWAuLdczgt-SvdYwjMiCC9K6xtGWbdkOKYLl4zUvDaIf3473PuTRqU1J36OdgvcyrDAr-qHFAatawlB11gfgz9_j0")' }}></div>
                </div>
            </div>
        </div>
    </header>
);

const Header13 = () => (
    <header className=" z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between whitespace-nowrap py-3">
                <div className="flex items-center gap-4 text-slate-900 dark:text-slate-100">
                    <div className="size-6 text-primary">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <h2 className="text-lg font-bold tracking-tight">Header13</h2>
                </div>
                <nav className="hidden md:flex items-center gap-9">
                    {['Home', 'Shop', 'Deals', 'Contact'].map(link => (
                        <a key={link} className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium" href="#">{link}</a>
                    ))}
                </nav>
                <div className="flex flex-1 justify-end items-center gap-3">
                    <button className="flex items-center justify-center rounded-lg h-10 bg-slate-200/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-slate-300/60 dark:hover:bg-slate-700/60 transition-colors min-w-0 px-2.5">
                        <span className="material-symbols-outlined text-xl">favorite</span>
                    </button>
                    <button className="flex items-center justify-center rounded-lg h-10 bg-slate-200/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-slate-300/60 dark:hover:bg-slate-700/60 transition-colors min-w-0 px-2.5">
                        <span className="material-symbols-outlined text-xl">shopping_cart</span>
                    </button>
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User avatar image" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDLWeUh4RyiHNxgMaV8n4kwZUdL6kSSZlDzd2Q3TIusyaRLEabaSSIy7eyEg8ll6wD8QPAF7yAEf9U3EHwNn6_Rq5am-xy7JsL7vOvsCF2wYeFZchqaGijgd5t7x_dMTIc6wkzvKBY6TKt-maqo5TWrdPRoVUpvmKv9puikTD8tQOR9KKvEA-wMctOQaTAerr6pE-2ks1ityfDOtaAazjITEZv6fdLEcwqeQdiQCcOoRin-9CyAszXome9laTtNkvUkmbrDueiWlOQ")' }}></div>
                </div>
            </div>
        </div>
    </header>
);

const Header14 = () => (
    <header className=" z-50 w-full border-b border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between whitespace-nowrap">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2 text-text-light dark:text-text-dark">
                        <span className="material-symbols-outlined text-primary text-3xl"> store </span>
                        <h2 className="text-xl font-bold tracking-tight">Header14</h2>
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
);

const Header15 = () => (
    <header className=" z-50 w-full border-b border-gray-200/80 dark:border-gray-700/80 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between whitespace-nowrap px-4 py-3">
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-3 text-text-light dark:text-text-dark">
                    <div className="size-6 text-primary">
                        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.62 14.37c-1.25.34-2.53.53-3.87.53-1.42 0-2.8-.21-4.12-.62-.19-.06-.38.03-.45.22-.07.19.02.4.22.46 1.4.44 2.86.66 4.35.66 1.41 0 2.78-.2 4.09-.59.2-.05.32-.24.27-.44-.05-.19-.24-.32-.44-.27zM17 11c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-10 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
                        </svg>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight">Header15</h2>
                </div>
            </div>
            <div className="hidden md:flex flex-1 items-center justify-center gap-8">
                {/* Navigation links */}
                <a className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary transition-colors" href="#">New Arrivals</a>
                <a className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary transition-colors" href="#">Apparel</a>
                <a className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary transition-colors" href="#">Accessories</a>
                <a className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary transition-colors" href="#">Sale</a>
            </div>
            <div className="flex items-center gap-3">
                {/* Icon Buttons */}
                <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"><span className="material-symbols-outlined">search</span></button>
                <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"><span className="material-symbols-outlined">favorite</span></button>
                <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"><span className="material-symbols-outlined">shopping_bag</span></button>
                <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"><span className="material-symbols-outlined">person</span></button>
            </div>
        </div>
    </header>
);

const Header16 = () => (
    <header className=" z-50 flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-gray-700 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm px-6 lg:px-10 py-3">
        <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-gray-900 dark:text-white">
                <div className="size-6 text-primary">
                    {/* Brand Icon SVG */}
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
                    </svg>
                </div>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Header16</h2>
            </div>
            <nav className="hidden lg:flex items-center gap-8">
                <a className="text-sm font-medium hover:text-primary dark:hover:text-primary" href="#">New Arrivals</a>
                <a className="text-sm font-medium hover:text-primary dark:hover:text-primary" href="#">Categories</a>
                <a className="text-sm font-medium hover:text-primary dark:hover:text-primary" href="#">Sale</a>
                <a className="text-sm font-medium hover:text-primary dark:hover:text-primary" href="#">About Us</a>
            </nav>
        </div>
        <div className="flex flex-1 justify-end gap-4 items-center">
            <div className="hidden md:flex flex-1 justify-end max-w-xs">
                <label className="flex flex-col w-full">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-10">
                        <div className="text-gray-500 dark:text-gray-400 flex items-center justify-center pl-3 bg-gray-100 dark:bg-gray-800 rounded-l-lg">
                            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>search</span>
                        </div>
                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-gray-100 dark:bg-gray-800 h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-2 text-sm font-normal" placeholder="Search" type="text" />
                    </div>
                </label>
            </div>
            <div className="flex gap-2">
                <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>favorite</span>
                </button>
                <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>shopping_bag</span>
                </button>
            </div>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User profile picture" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqzpAHHoBz83wkKY5NrhOqQ0TNsla3AxdY16XoitCvVkPYiQaytSO2QnxuCRujyQswAz50MfayE2jxEhnyJl1iDJx-b1bs9Ky6LGB6Ws7PK73Nce8KXG3dBwFCT1iqJ2Zrpqeduw0U3Qq7inp1vHWQ_S2DVKKLninEN-BIIl2nchuxGYeq1NxZAjP5dXFKsjr6Q9oOPfflFs2NnCeJe_ETjAhst8NiK9WPHorgF3m5ObQofGgpZ3fqrfNyr_SMVehIMlVp75IYnGs")' }}></div>
        </div>
    </header>
);

const Header17 = () => (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-gray-700 px-6 sm:px-10 lg:px-20 py-3 bg-white dark:bg-background-dark  z-10">
        <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="material-symbols-outlined text-primary text-3xl"> local_shipping </span>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Header17</h2>
            </div>
            <nav className="hidden md:flex items-center gap-9">
                <a className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="#">Home</a>
                <a className="text-primary dark:text-primary text-sm font-bold leading-normal" href="#">Orders</a>
                <a className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="#">Account</a>
            </nav>
        </div>
        <div className="flex flex-1 justify-end items-center gap-4">
            <div className="hidden sm:flex relative min-w-40 max-w-64">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"> search </span>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-gray-100 dark:bg-gray-800 h-10 placeholder:text-gray-500 dark:placeholder:text-gray-400 pl-10 pr-4 text-sm font-normal leading-normal" placeholder="Search orders..." type="text" />
            </div>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 aspect-square bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                <span className="material-symbols-outlined text-xl"> notifications </span>
            </button>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 aspect-square bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                <span className="material-symbols-outlined text-xl"> shopping_cart </span>
            </button>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User avatar image" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMEOq4smOXOBQ5VGCM3pGy4dKFI1LP12dRkGglLJ8md-YSwebeNwC6ggWtOFU1iZzYtNoQo01ryMNqRuuXGwb8uS6pj2veCdT-6IlzJvdm7H9MIUQnh_z0R-50c0Flhdv_xEHdhP-bUiHWqBX4Xl2kr-CsdmMwYLIJK2gM7eRAFS3sE6RcRu_FJjwdiX6DZdvIAfwRvUt0RmpNCYL4iUfL5vz1950w_JWfEnGrnGjcdGEhHSr0AOwtQmz8mCUzc2RRQX__PTAuKVg")' }}></div>
        </div>
    </header>
);

const Header18 = () => (
    <header className="w-full bg-white dark:bg-background-dark/80 border-b border-gray-200 dark:border-gray-700  z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                        <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path>
                        </svg>
                        <h2 className="text-lg font-bold tracking-[-0.015em]">Header18</h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <a className="text-sm font-medium hover:text-primary dark:hover:text-primary" href="#">New Arrivals</a>
                        <a className="text-sm font-medium hover:text-primary dark:hover:text-primary" href="#">Men</a>
                        <a className="text-sm font-medium hover:text-primary dark:hover:text-primary" href="#">Women</a>
                        <a className="text-sm font-medium hover:text-primary dark:hover:text-primary" href="#">Sale</a>
                    </nav>
                </div>
                <div className="flex items-center justify-end gap-3">
                    <label className="hidden sm:flex flex-col min-w-40 h-10! max-w-64">
                        <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                            <div className="text-gray-500 dark:text-gray-400 flex bg-gray-100 dark:bg-gray-800 items-center justify-center pl-3 rounded-l-lg border-r-0">
                                <span className="material-symbols-outlined text-xl!">search</span>
                            </div>
                            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary focus:ring-inset border-none bg-gray-100 dark:bg-gray-800 h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal" placeholder="Search" value="" readOnly />
                        </div>
                    </label>
                    <div className="flex gap-2">
                        <button className="relative flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                            <span className="truncate">Cart</span>
                            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">{initialCart.length}</span>
                        </button>
                        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-gray-200 dark:hover:bg-gray-700">
                            <span className="material-symbols-outlined">favorite</span>
                        </button>
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User avatar image" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAqisWDWfDDv9_Y9tRebr92TkPWHUwr4A8TWTKcScnyH-r7iqtSDge9f7W6MnlYhqdLCiebDazAFewbzVEDaBsxYXXPd-fC4zSjiQVsZ2Hw7TbPlteiHHrPKF16xZ_VwPg0ohXQXJcDeWo--mvZ_Oa_BVMVHoUr9e2dGlfGXoS1t0jAC8jAC9huS83rbaJxkjcs5HXxr7TtotWsUU3vCK7cwrE_dFzuL00AUSK-SnAv0PNAQRQuQYCv1VipFoAQpVs0u6j_txBn7jw')" }}></div>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

const Header19 = () => (
    <header className=" z-10 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between whitespace-nowrap px-4 py-3">
            <div className="flex items-center gap-8">
                {/* Logo */}
                <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
                    <span className="material-symbols-outlined text-primary text-3xl">storefront</span>
                    <h2 className="text-lg font-bold">Header19</h2>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="hidden md:flex items-center gap-8">
                {['Shop', 'Categories', 'Deals', 'Account'].map(item => (
                    <a key={item} className="text-sm font-medium hover:text-primary dark:hover:text-primary" href="#">{item}</a>
                ))}
            </nav>

            {/* Utility Icons */}
            <div className="flex items-center gap-4">
                <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-slate-200/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-slate-300/60 dark:hover:bg-slate-700/60">
                    <span className="material-symbols-outlined">search</span>
                </button>
                <button className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-slate-200/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-slate-300/60 dark:hover:bg-slate-700/60">
                    <span className="material-symbols-outlined">shopping_cart</span>
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">3</span>
                </button>
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="user avatar placeholder image" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOGQ1RQDW3-5ENSUGlykCLvuqrVdDck0DgJPhJim6rqJPQr6h8i_JfeIDfuFr9VsiCcFnY6RTu6g8vHGfD9JcDpTG3LBQqwPfcID4yRzmNLBRCiZ1MHe5_A3YRjAr-B0mc3T9VM-2a9cIgxJ3kcUsZSMC_nmwLvz4PDofdbq2iUt35sNgWtj7naiQrZ5vvKMdgplcZkf6u0yUObrtMV-YgMbL7F6jFsgKDcmgt0U-64WkFbuzzLFsX2Mqi0i_aeeSRdqgX4sL6fz8")' }}></div>
            </div>
        </div>
    </header>
);