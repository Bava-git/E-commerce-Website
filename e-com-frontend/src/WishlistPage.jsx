import React from 'react';

// --- Mock Data ---
const mockWishlistItems = [
    { id: 1, name: 'Classic Chronograph', brand: 'Timex', price: 199.99, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaPH6zliViADtd9ToA6kgkyZFgzgindTyZycA2sFLF08IoP7LWibvt7J8SAv_uzqY5OM8DSW4x38MDtAljmVdNaWNGq8by55vgmraTwSgKwYNi4_POVmBx2zO3lQEEjHD7azXuKF-dZnfYZCCWqV2cOz8uouo2X-rjUNsByTYB9CzgzMNwwNGYGcKynnQ90W_1GOqxV4L2bWSH-YiA93NL89l9Mh7AVhqxqGy00IeLavCupGnyxXIQtOt82P6ALD86RLjnHhEn48k' },
    { id: 2, name: 'Aura Wireless Headphones', brand: 'Sony', price: 249.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD37nof7xGnPnrNvi6H7Spstk81ShWMqHupCNThmjo1dEN557n7dbYRorhUgWj9vCt_QQvRDK7aLIqz9ov-XH0JK795t2tz9wQkbnbnn5ISIp9wxtQad8u8ZvV3Kk_1HWXQF0DWE-WvJshIB76_CFrYAJ1Cgc8hv1_SoJvSkB4WzyCiuOu4_DtWcsg_F1T3v0URcrhvqzBb7r3cczlxn6lKKUtjhEQs753w53OVdSgn-13Lyie2rJy7bN30cxq3fYSCe_9bpvBVx8A' },
    { id: 3, name: 'Smart Home Hub', brand: 'Google', price: 129.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUi1TfHacX3pI2xJSgxa5utZUXnE3yrTiHRrvqLThLiKMBn_8L2T--XEVPxgwzUGF_IxlMo8a3KCh7IDmh4AZUHK-7CoV9pXk2aJ6a9cvCrtjUM_RwKmDHKrHYdEdDiJRP6Z_ujRBNNS7a6-09U8N24-NaKvDMGDtHziWHIKAuYES4qCo5PrwXWKmllbaUoDZ5y9Q-HtMRo_Bf140KGlR0eMp-3l77OphhUXwPJYIUgD3iA4d2LyX3fAYJ5WlI13I_zteS0uBeIoA' },
    { id: 4, name: 'Aviator Sunglasses', brand: 'Ray-Ban', price: 149.50, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZQBfJS0hqt4LVCkYU74CCWy-xBAqCmM0pnf2XnDHy4CPwydHRPjn9eVX4iey6CsrIjCGMKbuhgdVHxxP9vPrhszfqrDonbY90Lh59wfwq3Cu65p6qw9IKI-oiKvui_hx2BdSFrBl3RyAqticetSKa8eyuEd6Foz04vXHk_cLHmeRY7lf8F2NilL1W8Ib9pKayy--1Wiy_pJWd6qpa53FeJxcR0zh17eVLRmPzOr5CZgpywmmdcZmp-8f-Xf17i5G4iSPsCHmVF9Y' },
    { id: 5, name: 'Espresso Machine', brand: 'Breville', price: 499.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwmSJ8tSKleZbiooCwmQA_eL6zMuvwJUeIju7W7XnkpvxGcNugknbKq5z-UEeZnAzaMj2zMd9pbHw0K-Nc8eWfcNuUeYfjVBxDuS2GmQMUBmoQp4EjE2aEpvhkNYXZ8J6axUEFIOm3T0ZbknXnHJtgLieajYY2t_HLph4zZXNhmUFxUFbnw2xOKpBL-UyWJSTdHj3Gaesoo532Unsq78VxsutMJpGcVEEqVZH09SWkYMKq8yjqsUHxIBnMsLnkbCSKoTcaxaOQoAY' },
    { id: 6, name: 'React Running Shoes', brand: 'Nike', price: 160.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGDtOh85EYp3IxsXRHd86G_rwSKCzeTPGNHOrIziYuJ6fisJ9dtaabRnLesWvaJNs6gLzVlHMctSJxDC3JMl2HXtjDPllWSakweKryILxWPB0yFE_jxtbHYXJj3MjvwRgF-shSrJ8-1ZvUZjV5rpMVemGgNUtHBHoCKTVVYKVKbJJN4peAeJjs6HumJzE8p0IdcbdJ_VdrrnmvW2eWnIdlbEX6XSdUQWCQKq-M3qeAiIi3Z4haBMvzC_y-SFizeuPjQbuGX_Rzi4U' },
];

// --- Sub-Components ---

const Header = () => (
    <header className="sticky top-0 z-10 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between whitespace-nowrap px-4 py-3">
            <div className="flex items-center gap-8">
                {/* Logo */}
                <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
                    <span className="material-symbols-outlined text-primary text-3xl">storefront</span>
                    <h2 className="text-lg font-bold">Brand</h2>
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

const WishlistItemCard = ({ item }) => (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 shadow-sm transition-all hover:shadow-lg dark:hover:shadow-slate-800/60">
        <div
            className="relative w-full bg-center bg-no-repeat aspect-square bg-cover"
            data-alt={item.name}
            style={{ backgroundImage: `url("${item.image}")` }}
        >
            <button className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined">delete</span>
            </button>
        </div>
        <div className="flex flex-col gap-4 p-4 flex-grow">
            <div className="flex-grow">
                <h3 className="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal">{item.name}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">{item.brand}</p>
            </div>
            <div className="flex items-center justify-between">
                <p className="text-slate-900 dark:text-white text-lg font-bold">${item.price.toFixed(2)}</p>
                <button className="flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary text-white gap-2 text-sm font-bold min-w-0 px-4 hover:bg-primary/90 transition-colors">
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    </div>
);

const Pagination = () => {
    const pages = [1, 2, 3];
    return (
        <div className="flex items-center justify-center p-4">
            <a className="flex size-10 items-center justify-center text-slate-500 dark:text-slate-400 hover:text-primary" href="#">
                <span className="material-symbols-outlined">chevron_left</span>
            </a>
            {pages.map(page => (
                <a
                    key={page}
                    className={`text-sm leading-normal flex size-10 items-center justify-center rounded-full transition-colors ${page === 1
                            ? 'font-bold text-white bg-primary'
                            : 'font-normal text-slate-600 dark:text-slate-300 hover:bg-slate-200/80 dark:hover:bg-slate-800/80'
                        }`}
                    href="#"
                >
                    {page}
                </a>
            ))}
            <span className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-slate-600 dark:text-slate-300 rounded-full">...</span>
            <a className="flex size-10 items-center justify-center text-slate-500 dark:text-slate-400 hover:text-primary" href="#">
                <span className="material-symbols-outlined">chevron_right</span>
            </a>
        </div>
    );
};

// --- Main Page Component ---

const WishlistPage = () => {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 min-h-screen">
            <div className="relative flex min-h-screen w-full flex-col">

                {/* Sticky Header */}
                <Header />

                <main className="flex-grow">
                    <div className="container mx-auto px-4 py-8 sm:py-12">
                        <div className="flex flex-col gap-8">

                            {/* Page Header and Sorting */}
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex flex-col gap-1">
                                    <h1 className="text-slate-900 dark:text-white text-4xl font-black tracking-tighter">My Wishlist</h1>
                                    <p className="text-slate-500 dark:text-slate-400 text-base font-normal">A collection of products you've saved for later.</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-200/80 dark:bg-slate-800/80 px-4 hover:bg-slate-300/80 dark:hover:bg-slate-700/80 transition-colors">
                                        <p className="text-slate-700 dark:text-slate-300 text-sm font-medium">Sort by Price</p>
                                        <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-lg">arrow_drop_down</span>
                                    </button>
                                    <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-200/80 dark:bg-slate-800/80 px-4 hover:bg-slate-300/80 dark:hover:bg-slate-700/80 transition-colors">
                                        <p className="text-slate-700 dark:text-slate-300 text-sm font-medium">Date Added</p>
                                        <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-lg">arrow_drop_down</span>
                                    </button>
                                </div>
                            </div>

                            {/* Wishlist Items Grid */}
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {mockWishlistItems.map(item => (
                                    <WishlistItemCard key={item.id} item={item} />
                                ))}
                            </div>

                            {/* Pagination */}
                            <Pagination />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default WishlistPage;