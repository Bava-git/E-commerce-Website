const dealsLinks = [
    { title: "New Arrivals", links: "#" },
    { title: "Today's Deals", links: "#" },
    { title: "Men", links: "#" },
    { title: "Women", links: "#" },
    { title: "Best Sellers", links: "#" },
    { title: "Gift Cards", links: "#" },
    { title: "Browsing History's", links: "#" },
];

const Header = ({ links }) => (
    <header>
        <div className="z-50 flex items-center justify-center whitespace-nowrap border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
            <div className="flex items-center justify-between w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3 text-slate-900 dark:text-slate-50">
                        <div className="w-6 h-6 text-slate-900 dark:text-slate-50">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold leading-tight tracking-tighter">Khapara</h2>
                    </div>
                </div>
                <div className="hidden sm:block w-7xl max-w-xs">
                    <label className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark pointer-events-none"> search </span>
                        <input className="text-white w-full rounded-lg border-none bg-border-light dark:bg-border-dark py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Search..." type="search" id="search" />
                    </label>
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
                        <span className="absolute top-1 right-20 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">3</span>
                    </button>
                    <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined text-xl">person</span>
                    </button>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-around w-full max-w-7xl px-1 sm:px-6 lg:px-2 py-3 border-b border-slate-200 dark:border-slate-800">
            {links.map(item => (
                <a key={item.title}
                    className="text-sm font-medium text-slate-700 dark:text-slate-300 px-2
                hover:text-primary dark:hover:text-primary transition-colors" href={item.links}>
                    {item.title}
                </a>
            ))}
        </div>
    </header>
);

const TestScreen = () => {
    return (
        <div className="h-1000 bg-white dark:bg-background-dark">
            <Header links={dealsLinks} />
        </div>
    )
}
export default TestScreen;