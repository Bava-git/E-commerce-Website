import React from 'react';

// --- Mock Data ---
const navLinks = [
    { id: 'return-policy', label: 'Return Policy', icon: 'policy', active: true },
    { id: 'how-to-return', label: 'How to Start a Return', icon: 'assignment_return', active: false },
    { id: 'shipping', label: 'Shipping & Delivery', icon: 'local_shipping', active: false },
    { id: 'faq', label: 'FAQs', icon: 'quiz', active: false },
];

const shippingRates = [
    { method: 'Standard Shipping', cost: '$5.00 (Free on orders over $50)', delivery: '5-7 business days' },
    { method: 'Expedited Shipping', cost: '$15.00', delivery: '2-3 business days' },
    { method: 'Overnight Shipping', cost: '$25.00', delivery: '1 business day' },
];

const faqItems = [
    { question: 'Where is my order?', answer: 'Once your order has shipped, you will receive an email with a tracking number. You can use this number to track your package on the carrier\'s website. You can also find your tracking information in your account under "Order History".' },
    { question: 'How long does a refund take?', answer: 'After we receive and process your return, it typically takes 5-7 business days for the refund to appear on your original payment method. If you opted for store credit, it will be available in your account immediately upon processing.' },
    { question: 'Can I exchange an item?', answer: 'The best way to exchange an item is to initiate a return for the original item and place a new order for the item you\'d like instead. This ensures you get your new item as quickly as possible.' },
];

// --- Sub-Components ---

const TopNavBar = () => (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-gray-700 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm px-6 lg:px-10 py-3">
        <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-gray-900 dark:text-white">
                <div className="size-6 text-primary">
                    {/* Brand Icon SVG */}
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
                    </svg>
                </div>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">E-Commerce Brand</h2>
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

const StickySideNav = ({ links }) => (
    <aside className="w-full lg:w-64 lg:sticky top-24 self-start">
        <nav className="flex flex-col gap-2 p-4 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
            <p className="text-sm font-bold px-3 pt-2 pb-1 text-gray-900 dark:text-white">On This Page</p>
            {links.map(link => {
                const activeClasses = link.active
                    ? 'bg-primary/10 dark:bg-primary/20'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700/50';
                const textClasses = link.active
                    ? 'text-primary font-medium'
                    : 'text-gray-600 dark:text-gray-300 font-medium';

                return (
                    <a key={link.id} className={`flex items-center gap-3 px-3 py-2 rounded-lg ${activeClasses}`} href={`#${link.id}`}>
                        <span className={`material-symbols-outlined ${link.active ? 'text-primary' : 'text-gray-600 dark:text-gray-300'}`} style={{ fontSize: '20px' }}>{link.icon}</span>
                        <p className={`text-sm ${textClasses}`}>{link.label}</p>
                    </a>
                );
            })}
        </nav>
    </aside>
);

const ReturnPolicySection = () => (
    <section className="space-y-6 scroll-mt-24" id="return-policy">
        <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] border-b border-gray-200 dark:border-gray-700 pb-3">Our Return Policy</h2>
        <div className="space-y-4 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            <p>We want you to be completely satisfied with your purchase. If you're not, we're here to help. You can return most items for a full refund or store credit within <span className="font-bold text-gray-800 dark:text-gray-100">30 days</span> of delivery. Please note that all returned items must be in their original, unused condition with all tags and packaging intact.</p>

            <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50">
                <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">Non-Returnable Items</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Final sale items</li>
                    <li>Gift cards</li>
                    <li>Personalized or custom-made items</li>
                    <li>Perishable goods</li>
                </ul>
            </div>

            <div className="flex items-start gap-3 p-4 bg-primary/10 dark:bg-primary/20 text-primary rounded-xl">
                <span className="material-symbols-outlined mt-1">credit_score</span>
                <div>
                    <h3 className="font-bold">Refunds & Store Credit</h3>
                    <p className="text-sm">Refunds will be processed to your original payment method within 5-7 business days after we receive and inspect the returned item. Alternatively, you can opt for store credit, which will be available immediately in your account.</p>
                </div>
            </div>
        </div>
    </section>
);

const HowToReturnSection = () => (
    <section className="space-y-6 scroll-mt-24" id="how-to-return">
        <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] border-b border-gray-200 dark:border-gray-700 pb-3">How to Start a Return</h2>
        <div className="space-y-4">
            <ol className="space-y-4 text-gray-600 dark:text-gray-300">
                {['Log in to your account and go to your Order History.', 'Select the order containing the item(s) you wish to return and click the "Request Return" button.', 'Follow the on-screen instructions to select your items, reason for return, and generate your pre-paid shipping label.', 'Package your items securely and drop off the package at any authorized shipping location.'].map((step, index) => (
                    <li key={index} className="flex items-start gap-4">
                        <div className="flex items-center justify-center size-8 rounded-full bg-primary text-white font-bold text-sm flex-shrink-0">{index + 1}</div>
                        <p className="pt-1">{step.split(' ').map((word, i) => word === 'Order' || word === 'Return' ? <span key={i} className="font-bold text-gray-800 dark:text-gray-100">{word} </span> : <span key={i}>{word} </span>)}</p>
                    </li>
                ))}
            </ol>
            <div className="pt-4">
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 bg-primary text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] px-6 hover:bg-primary/90">Start Your Return</button>
            </div>
        </div>
    </section>
);

const ShippingSection = ({ rates }) => (
    <section className="space-y-6 scroll-mt-24" id="shipping">
        <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] border-b border-gray-200 dark:border-gray-700 pb-3">Shipping & Delivery</h2>
        <div className="space-y-6">
            <div>
                <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">Domestic Shipping (USA)</h3>
                <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th className="px-6 py-3 text-left font-medium text-gray-600 dark:text-gray-300 tracking-wider" scope="col">Method</th>
                                <th className="px-6 py-3 text-left font-medium text-gray-600 dark:text-gray-300 tracking-wider" scope="col">Cost</th>
                                <th className="px-6 py-3 text-left font-medium text-gray-600 dark:text-gray-300 tracking-wider" scope="col">Estimated Delivery</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800/50 divide-y divide-gray-200 dark:divide-gray-700">
                            {rates.map((rate, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-gray-100">{rate.method}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300">{rate.cost}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300">{rate.delivery}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">International Shipping</h3>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">We ship to over 50 countries worldwide! Shipping costs and delivery times vary by destination and will be calculated at checkout. Please be aware that international orders may be subject to customs duties and taxes, which are the responsibility of the recipient.</p>
            </div>
        </div>
    </section>
);

const FAQSection = ({ items }) => (
    <section className="space-y-6 scroll-mt-24" id="faq">
        <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] border-b border-gray-200 dark:border-gray-700 pb-3">Have Questions?</h2>
        <div className="space-y-4">
            {items.map((item, index) => (
                <details key={index} className="group p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                    <summary className="flex items-center justify-between cursor-pointer font-medium text-gray-800 dark:text-gray-100">
                        {item.question}
                        <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                    </summary>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">{item.answer}</p>
                </details>
            ))}
        </div>
    </section>
);

const MainContentArea = () => (
    <main className="flex-1">
        <div className="flex flex-col gap-10">
            {/* Page Heading */}
            <div className="flex flex-col gap-3">
                <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Returns & Shipping Information</p>
                <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-normal">Everything you need to know about returns, exchanges, and shipping.</p>
            </div>

            {/* Search Bar */}
            <div className="py-3">
                <label className="flex flex-col min-w-40 h-12 w-full max-w-lg">
                    <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
                        <div className="text-gray-500 dark:text-gray-400 flex border border-r-0 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 items-center justify-center pl-4 rounded-l-xl">
                            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>search</span>
                        </div>
                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 text-base font-normal" placeholder="Search for 'refund' or 'country'" type="text" />
                    </div>
                </label>
            </div>

            {/* Content Sections */}
            <ReturnPolicySection />
            <HowToReturnSection />
            <ShippingSection rates={shippingRates} />
            <FAQSection items={faqItems} />
        </div>
    </main>
);

// --- Main Page Component ---

const ReturnsAndShippingPage = () => (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 min-h-screen">
        <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">

            {/* Top Navigation Bar */}
            <TopNavBar />

            {/* Main Content Layout */}
            <div className="flex flex-1 justify-center w-full">
                <div className="flex flex-col w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Sticky SideNavBar */}
                        <StickySideNav links={navLinks} />

                        {/* Main content area */}
                        <MainContentArea />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ReturnsAndShippingPage;