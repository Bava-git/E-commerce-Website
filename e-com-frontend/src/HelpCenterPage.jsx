import React from 'react';

// --- Mock Data ---
const faqItems = [
    {
        category: 'Shipping & Delivery',
        answer: "Your order will typically be dispatched within 1-2 business days. Standard shipping takes 5-7 business days, while express shipping takes 2-3 business days. You can track your order from the 'My Account' page."
    },
    {
        category: 'Returns & Refunds',
        answer: "We offer a 30-day return policy on all items. To initiate a return, please visit our Returns Center and enter your order number. Once your return is approved, we will provide a shipping label. Refunds are processed within 5-7 business days after we receive the returned item."
    },
    {
        category: 'Payments & Pricing',
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All prices are listed in USD and are inclusive of taxes where applicable. We do not store your credit card information on our servers."
    },
    {
        category: 'Account & Security',
        answer: "You can reset your password by clicking the \"Forgot Password\" link on the login page. We take your security very seriously and use SSL encryption to protect your personal data. We recommend using a strong, unique password for your account."
    },
    {
        category: 'Ordering',
        answer: "To place an order, simply add items to your cart and proceed to checkout. You will receive an order confirmation email shortly after your purchase. You can view your order history and status in the 'My Account' section."
    },
    {
        category: 'Product Information',
        answer: "Detailed product information, including dimensions, materials, and care instructions, can be found on each product page. If you have any specific questions about a product, feel free to contact our support team."
    },
];

const Header = () => (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
                <svg className="size-6 text-slate-900 dark:text-slate-50" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path>
                </svg>
                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-50">E-Commerce</h2>
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

const HeroSection = () => (
    <section className="relative py-20 sm:py-24 md:py-32">
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCbEbbvFlIf3uni3yjx16d2FxqFSoPf34cUC_jJr42zq408HV4aZdc27ckQ7vgSCuLwDuAHQxPF4koS4ver6As9PmzQNdI6rfWYCzRtSTTGt6Bkb1GSq_DJbnPqNWrNtzi9hSANKON-Pb2wDcLSXLzVdJHAQro7615jWZiJGEHnJStS8K9Ribzw5dQMc6nj5TVLbLLHRXxckMkp-nyzyYqD2_b3DyfvuPNFu5LxJsyhJeiLUkvBZwDJTin7H5GPUVIZ1_QZUA88VVM')" }}
        ></div>
        <div className="absolute inset-0 bg-background-dark/30 dark:bg-background-dark/50"></div>
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl font-black tracking-tighter text-white sm:text-5xl md:text-6xl">How can we help?</h1>
                <p className="mt-4 text-lg text-slate-200">Find answers to your questions, fast.</p>
                <label className="mt-8 flex flex-col h-14 w-full sm:h-16">
                    <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-lg">
                        <div className="flex items-center justify-center rounded-l-xl border-y border-l border-slate-300/20 bg-white/10 pl-5 pr-3 text-white/80 dark:border-slate-700/50 dark:bg-white/5">
                            <span className="material-symbols-outlined text-2xl">search</span>
                        </div>
                        <input
                            className="form-input h-full w-full min-w-0 flex-1 resize-none overflow-hidden border-y border-slate-300/20 bg-white/10 text-base text-white placeholder:text-white/80 focus:border-primary/50 focus:outline-0 focus:ring-0 dark:border-slate-700/50 dark:bg-white/5 sm:text-lg"
                            placeholder="Search for answers..."
                            type="text"
                        />
                        <div className="flex items-center justify-center rounded-r-xl border-y border-r border-transparent bg-primary p-2">
                            <button className="flex h-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold text-white transition-colors hover:bg-primary/90">
                                <span className="truncate">Search</span>
                            </button>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    </section>
);

const FAQAccordion = ({ items }) => (
    <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Frequently Asked Questions</h2>

            <div className="mt-12 flex flex-col gap-3">
                {items.map((item, index) => (
                    <details
                        key={index}
                        className="group rounded-xl border border-slate-200 bg-white p-2 dark:border-slate-800 dark:bg-background-dark"
                    >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-3 font-medium">
                            <span className="text-slate-900 dark:text-slate-200">{item.category}</span>
                            <span className="material-symbols-outlined text-slate-500 transition-transform group-open:rotate-180">expand_more</span>
                        </summary>
                        <div className="px-3 pb-3 text-slate-600 dark:text-slate-400">
                            {item.answer}
                        </div>
                    </details>
                ))}
            </div>
        </div>
    </div>
);

const ContactCTA = () => (
    <section className="border-t border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-background-dark/50">
        <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">Can't find the answer you're looking for?</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">Our customer support team is here to help.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <button className="rounded-lg bg-primary px-5 py-3 text-base font-bold text-white shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Contact Us</button>
                </div>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-slate-100 dark:bg-slate-900">
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                <div className="flex items-center gap-4">
                    <svg className="size-6 text-slate-900 dark:text-slate-50" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path>
                    </svg>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-slate-50">E-Commerce</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-600 dark:text-slate-400">
                    {['About', 'Careers', 'Press', 'Policies', 'Contact'].map(link => (
                        <a key={link} className="hover:text-primary" href="#">{link}</a>
                    ))}
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-500">© 2024 E-Commerce, Inc.</p>
            </div>
        </div>
    </footer>
);

// --- Main Page Component ---

const HelpCenterPage = () => (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-200 min-h-screen">
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">

            {/* Top Navigation Bar */}
            <Header />

            <main className="flex-grow">

                {/* Hero Section with Search */}
                <HeroSection />

                {/* Main Content / FAQs */}
                <FAQAccordion items={faqItems} />

                {/* CTA Section */}
                <ContactCTA />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    </div>
);

export default HelpCenterPage;