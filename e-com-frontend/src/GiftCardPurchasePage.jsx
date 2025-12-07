import React, { useEffect, useState } from 'react';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const amountOptions = [
    { value: 25, label: '₹25' },
    { value: 50, label: '₹50' },
    { value: 100, label: '₹100' },
    { value: 'custom', label: 'Custom' },
];
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const faqItems = [
    {
        question: 'How is the gift card delivered?',
        answer: "The gift card is delivered instantly to the recipient's email address provided during purchase. They will receive a beautiful email with your personalized message and the gift card code."
    },
    {
        question: 'Do gift cards expire?',
        answer: "No, our gift cards never expire! They can be used at any time towards any purchase on our platform."
    },
    {
        question: 'How do I check my balance?',
        answer: 'You can check your gift card balance by navigating to the "Redeem a Gift Card" tab on this page. Enter your gift card code in the provided field and click "Check Balance".'
    },
];
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// --- Sub-Components ---
const HeroSection = () => (
    <div className="@container">
        <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row items-center">
            <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full"
                data-alt="Abstract gradient background for a gift card banner"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDka_HViKT9uMC4LatFOm5hAHFP0iR8xdrDY1-gur3Pn6-FctFZS5o-wZZeSiWsw3iZnoyDL2T0cP1ci14tzSpNNJeLqrKPL7TcpUv1v3z1CQOBXwfoeZe82Bh6NLxvYcpVmQWXaj81Bh2h0NhZIRXjhA5SiVfRWJtUqmfEnmotk-zQkZTZn-1bOQoJUhlUPHoRBz0zck_PKw2u4TIq9LQTkrDgNHGP3bnMLo17BZzB4uin7wNIPhZRC34J75X7hWq2XOD_gHm0wKU")' }}
            ></div>
            <div className="flex flex-col gap-6 text-center @[864px]:text-left @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
                <div className="flex flex-col gap-2">
                    <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">Give the Gift of Choice</h1>
                    <h2 className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal @[480px]:text-base">The perfect gift for any occasion, delivered instantly to their inbox.</h2>
                </div>
            </div>
        </div>
    </div>
);
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const Tabs = ({ tabSwitch, setTabSwitch }) => {

    const menuList = [
        { id: "purchase", label: "Purchase a Gift Card" },
        { id: "redeem", label: "Redeem a Gift Card" },
    ];

    return (
        <div className="pb-3 pt-6">
            <div className="flex border-b border-slate-200 dark:border-slate-800 px-4 gap-8">
                {menuList.map(process => (
                    <a
                        onClick={(e) => { e.preventDefault(); setTabSwitch(process.id); }}
                        key={process.id}
                        className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4' ${process.id === tabSwitch ? 'border-primary text-slate-900 dark:text-white' : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600 transition-colors'}`}
                        href="#">
                        <p className="text-sm font-bold leading-normal tracking-[0.015em]" > {process.label}</p>
                    </a>
                ))
                }
            </div >
        </div >
    )
};
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const GiftCardForm = ({ selectedAmount, setSelectedAmount, details, setDetails }) => {

    const handleChange = (e) => {
        const { id, value } = e.target;
        setDetails(prev => ({ ...prev, [id]: value }));
    };

    return (
        <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Section 1: Amount */}
            <div>
                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">1. Choose an Amount</h3>
                <div className="flex py-3">
                    <div className="flex flex-wrap gap-2 sm:gap-0 sm:flex-nowrap h-auto sm:h-12 w-full items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800/50 p-1">
                        {amountOptions.map(option => (
                            <label
                                key={option.value}
                                className="flex cursor-pointer h-12 basis-1/2 sm:basis-auto grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-900 has-[:checked]:shadow-sm has-[:checked]:text-slate-900 dark:has-[:checked]:text-white text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal transition-colors"
                            >
                                <span className="truncate">{option.label}</span>
                                <input
                                    className="sr-only"
                                    name="gift-card-amount"
                                    type="radio"
                                    defaultValue={option.value}
                                    checked={selectedAmount === option.value}
                                    onChange={() => setSelectedAmount(option.value)}
                                />
                            </label>
                        ))}
                    </div>
                </div>
                {selectedAmount === 'custom' && (
                    <div className="pt-3">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="customAmount">Enter Custom Amount (₹10 - ₹500)</label>
                        <input
                            className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-primary focus:border-primary dark:placeholder-slate-500"
                            id="customAmount"
                            type="number"
                            min="10"
                            max="500"
                            placeholder="e.g., 75.00"
                            defaultValue={details.customAmount}
                            onChange={handleChange}
                        />
                    </div>
                )}
            </div>

            {/* Section 2: Details */}
            <div>
                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">2. Add Your Details</h3>
                <div className="space-y-4 pt-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="recipientName">Recipient's Name</label>
                            <input
                                className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-primary focus:border-primary dark:placeholder-slate-500"
                                id="recipientName"
                                placeholder="Jane Doe"
                                type="text"
                                defaultValue={details.recipientName}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="recipientEmail">Recipient's Email</label>
                            <input
                                className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-primary focus:border-primary dark:placeholder-slate-500"
                                id="recipientEmail"
                                placeholder="jane.doe@example.com"
                                type="email"
                                defaultValue={details.recipientEmail}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="senderName">Your Name</label>
                        <input
                            className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-primary focus:border-primary dark:placeholder-slate-500"
                            id="senderName"
                            placeholder="John Smith"
                            type="text"
                            defaultValue={details.senderName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="message">Personalized Message</label>
                        <textarea
                            className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-primary focus:border-primary dark:placeholder-slate-500"
                            id="message"
                            placeholder="Happy Birthday! Hope you have a great day."
                            rows="4"
                            maxLength="250"
                            defaultValue={details.message}
                            onChange={handleChange}
                        ></textarea>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-right">{details.message.length} / 250 characters</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const GiftCardPreview = ({ selectedAmount, handleCardNumber, details }) => {
    let displayAmount = typeof selectedAmount === 'number' ? selectedAmount : 0;

    if (selectedAmount === 'custom' && details.customAmount) {
        displayAmount = parseFloat(details.customAmount) || 0;
    }

    const formattedAmount = `₹${displayAmount.toFixed(2)}`;
    const displayMessage = details.message || 'Add a personal note...';
    const messageStyle = details.message ? 'text-slate-300' : 'text-slate-500';

    return (
        <div className="lg:col-span-1 space-y-6">
            <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">Gift Card Preview</h3>
            <div className="bg-slate-900 rounded-xl p-6 flex flex-col justify-between shadow-lg text-white aspect-[1.586/1]">
                <div className="flex justify-between items-start mb-3">
                    <div className="text-primary size-8">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
                        </svg>
                        <p className='underline'>Khapara</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-slate-400">GIFT CARD</p>
                        <p className="text-2xl font-bold">{formattedAmount}</p>
                    </div>
                </div>
                <div>
                    <p className={`text-sm italic ${messageStyle}`}>{displayMessage}</p>
                    <p className="text-sm text-slate-400 mt-2">To: {details.recipientName || 'Recipient Name'}</p>
                    <p className="text-sm text-slate-400">From: {details.senderName || 'Sender Name'}</p>
                    <p className="text-sm text-slate-400">Redeem: {details.giftCardNum || 'Gift Card Number'}</p>
                </div>
            </div>
            <button
                onClick={() => handleCardNumber()}
                className="w-full flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                <span className="truncate">Add to Cart - {formattedAmount}</span>
            </button>
        </div >
    );
};
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const FAQSection = ({ items }) => (
    <div className="px-4 py-12 border-t border-slate-200 dark:border-slate-800 mt-8">
        <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-8">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-4">
            {items.map((item, index) => (
                <details key={index} className="group p-4 rounded-lg bg-slate-100 dark:bg-slate-800/50 cursor-pointer">
                    <summary className="flex items-center justify-between font-medium text-slate-800 dark:text-slate-200">
                        {item.question}
                        <span className="material-symbols-outlined transition-transform duration-200 group-open:rotate-180">expand_more</span>
                    </summary>
                    <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">{item.answer}</p>
                </details>
            ))}
        </div>
    </div>
);
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const RedeemForm = ({ setRedeemCode }) => {
    return (
        <section>
            <div className="space-y-4 pt-3">
                <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                        htmlFor="giftCardCode">Gift Card Code
                    </label>
                    <input
                        className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-primary focus:border-primary dark:placeholder-slate-500"
                        id="giftCardCode"
                        placeholder="Gift Card Code"
                        type="text"
                        onChange={(e) => setRedeemCode(e.target.value)}
                    />
                </div>
            </div>
        </section>
    )
};
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// --- Main Page Component ---
const GiftCardPurchasePage = () => {
    const [selectedAmount, setSelectedAmount] = useState(25); // Default to $25
    const [details, setDetails] = useState({
        recipientName: '',
        recipientEmail: '',
        senderName: '',
        message: '',
        customAmount: '',
        giftCardNum: '',
    });

    const handleCardNumber = () => {
        setDetails(prev => ({ ...prev, giftCardNum: crypto.randomUUID(), }));
        console.log(details);
    };

    // Redeem a Gift Card
    const [tabSwitch, setTabSwitch] = useState('purchase');
    const [redeemCode, setRedeemCode] = useState('');
    useEffect(() => {
        if (tabSwitch === 'redeem') {
            setSelectedAmount(0);
        }
    }, [tabSwitch]);
    useEffect(() => {
        if (tabSwitch === 'redeem') {
            setSelectedAmount(0);
        }
    }, [redeemCode]);

    return (
        <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">

                <main className="flex flex-1 justify-center py-5 sm:py-10">
                    <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1 px-4 sm:px-6 lg:px-8">

                        {/* Hero Section */}
                        <HeroSection />

                        {/* Tabs */}
                        <Tabs tabSwitch={tabSwitch} setTabSwitch={setTabSwitch} />

                        {/* Main Content: Form and Preview */}
                        {tabSwitch === "redeem" &&
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-8">
                                {/* Left Column: Form */}

                                <RedeemForm
                                    setRedeemCode={setRedeemCode}
                                />

                                <GiftCardPreview
                                    selectedAmount={selectedAmount}
                                    handleCardNumber={handleCardNumber}
                                    details={details}
                                />
                            </div>
                        }

                        {tabSwitch === "purchase" &&
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 py-8">
                                {/* Left Column: Form */}
                                <GiftCardForm
                                    selectedAmount={selectedAmount}
                                    setSelectedAmount={setSelectedAmount}
                                    details={details}
                                    setDetails={setDetails}
                                />

                                {/* Right Column: Preview & Summary */}
                                <GiftCardPreview
                                    selectedAmount={selectedAmount}
                                    handleCardNumber={handleCardNumber}
                                    details={details}
                                />
                            </div>
                        }

                        {/* FAQ Section */}
                        <FAQSection items={faqItems} />
                    </div>
                </main>
            </div >
        </div >
    );
};

export default GiftCardPurchasePage;