import React from 'react';

const contactInfo = [
    {
        icon: 'location_on',
        title: '123 Main Street, Anytown, USA 12345',
        subtitle: 'Address'
    },
    {
        icon: 'call',
        title: '(555) 123-4567',
        subtitle: 'Phone'
    },
    {
        icon: 'mail',
        title: 'support@ecommerce.com',
        subtitle: 'Email'
    },
];

const openingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
];

// --- Sub-Components ---
const ContactForm = () => (
    <div className="bg-white dark:bg-background-dark p-6 sm:p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
        <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-6">Send Us a Message</h2>
        <form action="#" className="space-y-6" method="POST">
            <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="name">Full Name</label>
                <input
                    className="form-input block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm focus:border-primary focus:ring-primary sm:text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    type="text"
                    autoComplete="name"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="email">Email Address</label>
                <input
                    className="form-input block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm focus:border-primary focus:ring-primary sm:text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    type="email"
                    autoComplete="email"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="subject">Subject</label>
                <input
                    className="form-input block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm focus:border-primary focus:ring-primary sm:text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500"
                    id="subject"
                    name="subject"
                    placeholder="Regarding my order..."
                    type="text"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="message">Message</label>
                <textarea
                    className="form-textarea block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm focus:border-primary focus:ring-primary sm:text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500"
                    id="message"
                    name="message"
                    placeholder="Write your message here."
                    rows="4"
                ></textarea>
            </div>
            <div>
                <button
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    type="submit"
                >
                    Send Message
                </button>
            </div>
        </form>
    </div>
);

const ContactDetails = ({ info, hours }) => (
    <div className="flex flex-col gap-10">
        {/* Our Information Section */}
        <div>
            <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-4 pt-5 border-b border-slate-200 dark:border-slate-800 mb-4">Our Information</h2>
            <div className="flex flex-col divide-y divide-slate-200 dark:divide-slate-800">
                {info.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 bg-transparent px-4 py-4 justify-between">
                        <div className="flex items-center gap-4">
                            <div className="text-slate-600 dark:text-slate-300 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0 size-12">
                                <span className="material-symbols-outlined">{item.icon}</span>
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="text-slate-900 dark:text-white text-base font-medium leading-normal line-clamp-1">{item.title}</p>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal line-clamp-2">{item.subtitle}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Opening Hours */}
        <div>
            <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-4 pt-5 border-b border-slate-200 dark:border-slate-800 mb-4">Opening Hours</h2>
            <ul className="space-y-3 px-4">
                {hours.map((item, index) => (
                    <li key={index} className="flex justify-between text-base">
                        <span className="text-slate-500 dark:text-slate-400">{item.day}</span>
                        <span className="font-medium text-slate-800 dark:text-slate-200">{item.hours}</span>
                    </li>
                ))}
            </ul>
        </div>

        {/* Map */}
        <div className="aspect-video w-full rounded-xl overflow-hidden">
            <div
                className="w-full h-full bg-cover bg-center"
                data-alt="A stylized map showing a generic city layout."
                data-location="Anytown, USA"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB2Y797UItk8jK9zM5mLFuIsVXe0KjjkITLSjFjOVXTHxXID2Yw8BBESDLzJyKbN1oTgSXoL3tn924cATY_lz1P4o8SZdsfGmi4huFXEc5tactpIO_vvrH7cBxxiXsR3J4ntvWpZtCUdxIaDhjgSdSapYbURNZmk7i1ujv_qcDtN3DRZARZA0dT0sLBd0hlecwkKH0ISWuY-i2Duy8vFBDP-RtqG3iEg1lhzT6C3-lZPmv_-M8lqVQMdcFIeCHfKN-P_JhkiMeN1nc')" }}
            ></div>
        </div>
    </div>
);

// --- Main Page Component ---
const ContactUsPage = () => (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 min-h-screen">
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">

                <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
                    {/* Page Heading */}
                    <div className="flex flex-wrap justify-between gap-3 p-4 mb-12 text-center">
                        <div className="flex w-full flex-col gap-3">
                            <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Get in Touch</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg font-normal leading-normal max-w-2xl mx-auto">We'd love to hear from you. Please fill out the form below or use our contact details to reach us. Our team is ready to assist you.</p>
                        </div>
                    </div>

                    {/* Main Content Area: Details & Form */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                        {/* Left Column: Info */}
                        <ContactDetails info={contactInfo} hours={openingHours} />

                        {/* Right Column: Form */}
                        <ContactForm />
                    </div>
                </main>

            </div>
        </div>
    </div>
);

export default ContactUsPage;