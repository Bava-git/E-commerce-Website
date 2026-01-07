import React from 'react';

// --- Mock Data ---
const timelineEvents = [
    { year: '2018', title: 'The Beginning', description: 'OurBrand was founded with a simple mission: to create beautiful, high-quality products that last.', icon: 'flag' },
    { year: '2020', title: 'First Major Milestone', description: 'We reached 10,000 happy customers and launched our first sustainable product line.', icon: 'emoji_events' },
    { year: '2022', title: 'Expanding Our Horizons', description: 'Opened our first international office and began shipping to over 50 countries worldwide.', icon: 'public' },
    { year: 'Present', title: 'Today and Beyond', description: 'We continue to innovate and grow, always putting our customers and the planet first.', icon: 'trending_up' },
];

const coreValues = [
    { icon: 'verified', title: 'Quality', description: 'We are committed to the highest standards of craftsmanship and durability.' },
    { icon: 'lightbulb', title: 'Innovation', description: 'We constantly seek new ways to improve our products and processes.' },
    { icon: 'favorite', title: 'Customer-Centric', description: 'Our customers are at the heart of everything we do. Your satisfaction is our priority.' },
    { icon: 'shield', title: 'Integrity', description: 'We believe in honest, transparent, and ethical business practices.' },
    { icon: 'groups', title: 'Community', description: 'We strive to build a positive community around our brand and give back.' },
    { icon: 'eco', title: 'Sustainability', description: 'We are dedicated to minimizing our environmental impact for a better future.' },
];

// --- Sub-Components ---
const HeroSection = () => (
    <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 text-center"
                data-alt="A modern, bright and collaborative office workspace"
                style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDFswjOqYS2QZpzLpqwTe8lkBuCPL0J1WqnMgZqunzmtdMf0F3Noo-y-cRoiEQQsDnCs3_dee7RkLcnY9aEXsjx4FCmIiNQOuOHenLUNgFh5fkYWH4sYVsri4Qud8gtqBQnTgjj3UFf8UbTJc0h8FTmNQZeGu2xYdA4d2t-1uHTx6DU4EDRLD0_KnKWpRl0R3dMy9c43OdhVxqxULgnXetCSwWBKBBHC20oovf4QlnBC2VRkqvyTxXLCZTR-a5yRRATeCrhi_cb4LE")' }}
            >
                <div className="flex flex-col gap-4">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-tighter md:text-6xl">Crafting Quality, Building Trust</h1>
                    <p className="text-white/90 text-base font-normal leading-normal md:text-lg max-w-2xl mx-auto">Discover the story behind our passion and commitment to excellence. We are dedicated to creating products that not only look good but feel good, enriching your life every day.</p>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Explore Our Story</span>
                </button>
            </div>
        </div>
    </section>
);

const MissionVisionSection = () => (
    <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
                    <h2 className="text-slate-900 dark:text-slate-50 tracking-tighter text-3xl font-bold leading-tight md:text-4xl">Our Mission & Vision</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal md:text-lg">We were founded on the principle of making high-quality products accessible to everyone. Our vision is to innovate continuously while staying true to our core values of integrity and customer satisfaction.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-1 gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex-col items-start text-left">
                        <div className="bg-primary/10 text-primary p-3 rounded-lg"><span className="material-symbols-outlined">rocket_launch</span></div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-tight">Our Mission</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal">To provide exceptional products that blend style, quality, and functionality, enhancing the lives of our customers through thoughtful design and sustainable practices.</p>
                        </div>
                    </div>
                    <div className="flex flex-1 gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex-col items-start text-left">
                        <div className="bg-primary/10 text-primary p-3 rounded-lg"><span className="material-symbols-outlined">visibility</span></div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-tight">Our Vision</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal">To be the leading innovator in our industry, recognized for our commitment to sustainability, community engagement, and creating a positive global impact.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const TimelineSection = ({ events }) => (
    <section className="w-full bg-white dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="flex flex-col gap-4 text-center mb-12">
                <h2 className="text-slate-900 dark:text-slate-50 tracking-tighter text-3xl font-bold leading-tight md:text-4xl">Our Journey</h2>
                <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal md:text-lg">From a small idea to a global brand, follow the key milestones that have shaped our story.</p>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-x-4">
                {events.map((event, index) => (
                    <React.Fragment key={event.year}>
                        {/* Timeline Connector and Icon */}
                        <div className="flex flex-col items-center gap-2">
                            {index !== 0 && <div className="w-0.5 bg-slate-200 dark:bg-slate-700 h-2"></div>}
                            <div className="flex items-center justify-center size-10 rounded-full bg-primary text-white">
                                <span className="material-symbols-outlined">{event.icon}</span>
                            </div>
                            {index !== events.length - 1 && <div className="w-0.5 bg-slate-200 dark:bg-slate-700 grow"></div>}
                        </div>

                        {/* Timeline Content */}
                        <div className={`flex flex-1 flex-col pb-12 pt-1 ${index === events.length - 1 ? 'pb-0' : ''}`}>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal">{event.year}</p>
                            <p className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-normal">{event.title}</p>
                            <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal mt-1">{event.description}</p>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    </section>
);

const ValuesGridSection = ({ values }) => (
    <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="flex flex-col gap-4 text-center mb-12">
                <h2 className="text-slate-900 dark:text-slate-50 tracking-tighter text-3xl font-bold leading-tight md:text-4xl">Our Core Values</h2>
                <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal md:text-lg max-w-3xl mx-auto">The principles that guide our every decision, from product design to customer service.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((value, index) => (
                    <div key={index} className="flex flex-col gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 text-center items-center">
                        <div className="bg-primary/10 text-primary p-3 rounded-lg">
                            <span className="material-symbols-outlined">{value.icon}</span>
                        </div>
                        <h3 className="text-slate-900 dark:text-slate-50 text-lg font-bold">{value.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-base">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const CTASection = () => (
    <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="bg-primary rounded-xl p-8 md:p-16 text-center">
                <div className="flex flex-col gap-4 items-center">
                    <h2 className="text-white tracking-tighter text-3xl font-bold leading-tight md:text-4xl">Ready to Join Our Story?</h2>
                    <p className="text-white/90 text-base font-normal leading-normal md:text-lg max-w-2xl">Explore our curated collection of products, crafted with passion and purpose. Find something you'll love for years to come.</p>
                    <button
                        onClick={() => window.location.href = "/"}
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white text-primary text-base font-bold leading-normal tracking-[0.015em] mt-4">
                        <span className="truncate">Shop Our Collection</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
);


// --- Main Page Component ---

const AboutUsPage = () => (
    <div className="font-display bg-background-light dark:bg-background-dark min-h-screen">
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">

                <main className="flex-1">
                    {/* Hero Section */}
                    <HeroSection />

                    {/* Mission & Vision */}
                    <MissionVisionSection />

                    {/* Timeline */}
                    <TimelineSection events={timelineEvents} />

                    {/* Values Grid */}
                    <ValuesGridSection values={coreValues} />

                    {/* CTA Section */}
                    <CTASection />
                </main>
            </div>
        </div>
    </div>
);

export default AboutUsPage;