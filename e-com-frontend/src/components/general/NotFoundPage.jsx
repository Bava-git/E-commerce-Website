import React from 'react';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const suggestedLinks = [
    { title: 'New Arrivals', subtitle: 'Latest styles', href: '#' },
    { title: 'Best Sellers', subtitle: 'Most popular', href: '#' },
    { title: 'Sale', subtitle: 'Great deals', href: '#' },
    { title: 'Contact Us', subtitle: 'Get help', href: '#' },
];
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// --- Sub-Components ---
const NotFoundContent = ({ links }) => (
    <main className="flex flex-1 justify-center py-12 sm:py-20 px-4">
        <div className="layout-content-container flex flex-col max-w-4xl flex-1 items-center">
            <div className="flex flex-col items-center justify-center text-center">
                <div className="mb-6">
                    <div
                        className="bg-center bg-no-repeat bg-cover aspect-square rounded-full size-40"
                        data-alt="Stylized illustration of a magnifying glass over a map, signifying a search."
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCn5Orrw84tw5AyJRp2riAYj5Du8-D1kfc_fp7fnVClauZ-xH3DskYxLXbz1JvyWOIAkxW5rZKWcUdMSX9Xdyc2eiE-LqwQ6KqV6Q4Paewl2ejAHp2bALBRwPsjB5pccO99FiCnerSuOQZjA5L-rW_p_Q5B-rXNJhVTtCSAK42lNgHmUw7czLvl8aDyGBvOfqdT_3WPXkGDkvjUfI24GsooEr22cS59iZQ1Y3UckZPlfyACuWLeo6cbdzY5OgUDpucjl_wfMA4tQfY")' }}
                    ></div>
                </div>
                <h1 className="text-slate-900 dark:text-slate-50 tracking-tighter text-5xl md:text-6xl font-extrabold leading-tight">404 - Page Not Found</h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-normal mt-4 max-w-xl">
                    Oops! We can't seem to find the page you're looking for. It might have been moved, deleted, or maybe the URL was mistyped.
                </p>
            </div>

            <div className="w-full max-w-md my-8">
                <div className="flex px-4 py-3 justify-center w-full">
                    <button className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-slate-50 text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors">
                        <span className="truncate">Return to Homepage</span>
                    </button>
                </div>
            </div>

            <div className="w-full max-w-xl text-center border-t border-slate-200 dark:border-slate-800 pt-8 mt-4">
                <h3 className="text-slate-900 dark:text-slate-50 text-xl font-bold mb-2">Let's get you back on track.</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">Try searching for what you need, or explore some of our popular destinations:</p>

                {/* Search Bar */}
                <div className="relative mb-8">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input
                        className="w-full h-14 pl-12 pr-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-slate-900 dark:text-slate-50 placeholder-slate-400"
                        placeholder="Search for products..."
                        type="search"
                    />
                </div>

                {/* Suggested Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {links.map((link, index) => (
                        <a key={index} className="p-4 bg-slate-100 dark:bg-slate-800/50 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors group" href={link.href}>
                            <h4 className="font-bold text-slate-900 dark:text-slate-50 group-hover:text-primary">{link.title}</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{link.subtitle}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </main>
);
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// --- Main Page Component ---
const NotFoundPage = () => (
    <div className="font-display">
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">

                {/* Main 404 Content */}
                <NotFoundContent links={suggestedLinks} />

            </div>
        </div>
    </div>
);

export default NotFoundPage;