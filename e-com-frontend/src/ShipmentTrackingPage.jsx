import React from 'react';

// --- Mock Data ---
const mockOrders = [
    { id: '#10523', name: 'Modern Armchair', status: 'In Transit', date: 'Oct 31', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXQ3Q0OI4Wfy2Df5wKq4peU1ndLnqp3QZX-aN0pl4fSSzj09vGTL7vvl7Xn3SxnQV_L3A7vQc5uqTP7zRVoC_3dXBundkTu1qO38mFFti-gnLrKWOIZCUB7OvgjEPTJ6YMzMazLHhSD4lMk_9zSHUL3SvisTJaYWZeFweoFhksHj3JyUCWTN5PkXCIJkB0BxnN2Ozd091GGVZgvE9NHKsJL7NF9nkuejEsybtyxLKQNWix4a4KwG-dRihFgoTMkBNmy0aq5-s-gpk', statusColor: 'amber', isSelected: true },
    { id: '#10521', name: 'Bluetooth Speaker', status: 'Delivered', date: 'Oct 28', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEiR29zYp6WzeI3bT2QG7mwbMIOvNe_KNzGvlT5pDCrySE29oFbAhWqZOMsQyKQUm3DTSKSPhHFQ9ohmsjCu5yGH5tIZ-3K0wzqsDu72p3QVLX5d--GY2cE_ceo_765u4rhrV8lmTEw7ruATGV18F3i4Jx-BQeCT86iJ_p8MGfotd9VRW52oJERFneoo4kgIa6HrOfL03f6rDFl7MbObO486P-PU7a15iCZcA0NviQLzhTFKCSyVQhETlNtrgsrfk5bAYoQgeHoI0', statusColor: 'green', isSelected: false },
    { id: '#10499', name: 'Ergonomic Keyboard', status: 'Shipped', date: 'Nov 2', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoCnCshYEY0B0wAkkkGwaMnFvaeihELxjoQuXXpMTHXO0VHOOIhTOcIjvH7hETO7j3QmfGC3uiUG1FfQWQrEMD4LJwO_IIWNriv14UamXgj3gfkMNh2Gl_b4wTXnsomANP3vD_tonwiAYOHlsvzgbyqnomIbxZrmWTPFebXuhwtA9GuOiJW3CajslF0eZtVJutxZp0tNdiNR_Mp7J1bBgKC1vsKDiUs1VEGjSN1fPqDcGtoVX4BL-ZYn7W-lWPc0t1HHL_98FZx1s', statusColor: 'blue', isSelected: false },
];

const trackingHistory = [
    { status: 'Package is in transit to a UPS facility', date: 'October 30, 2023, 8:15 AM - Oakland, CA', icon: 'local_shipping', isCurrent: true },
    { status: 'Package has left the carrier facility', date: 'October 29, 2023, 11:30 PM - Los Angeles, CA', icon: 'regular_expression', isCurrent: false },
    { status: 'Package received by carrier', date: 'October 28, 2023, 4:00 PM - Los Angeles, CA', icon: 'inventory_2', isCurrent: false },
    { status: 'Order confirmed', date: 'October 26, 2023, 10:05 AM', icon: 'receipt_long', isCurrent: false },
];

const trackingSteps = [
    { label: 'Confirmed', icon: 'check', active: true, current: false },
    { label: 'Shipped', icon: 'check', active: true, current: false },
    { label: 'In Transit', icon: 'local_shipping', active: true, current: true },
    { label: 'Out for Delivery', icon: null, active: false, current: false },
    { label: 'Delivered', icon: null, active: false, current: false },
];

// --- Sub-Components ---

const TopNavBar = () => (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-gray-700 px-6 sm:px-10 lg:px-20 py-3 bg-white dark:bg-background-dark sticky top-0 z-10">
        <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="material-symbols-outlined text-primary text-3xl"> local_shipping </span>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">ShipTrackr</h2>
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

const OrderSidebar = ({ orders }) => (
    <aside className="w-full lg:w-1/3 lg:max-w-sm flex-shrink-0">
        <div className="flex flex-col gap-4 p-4 bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 h-full">
            <div className="flex items-center justify-between">
                <h1 className="text-gray-900 dark:text-white text-lg font-bold leading-normal">Current Shipments</h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">{orders.filter(o => o.status !== 'Delivered').length} Active</p>
            </div>
            <div className="flex flex-col gap-2">
                {orders.map(order => {
                    const statusStyles = {
                        amber: 'text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/50',
                        green: 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/50',
                        blue: 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50',
                    };
                    const selectedStyle = order.isSelected ? 'bg-primary/10 dark:bg-primary/20 border border-primary/50' : 'hover:bg-gray-100 dark:hover:bg-gray-800/50';

                    return (
                        <div key={order.id} className={`flex items-start gap-4 p-3 rounded-lg cursor-pointer ${selectedStyle}`}>
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-12" data-alt={order.name} style={{ backgroundImage: `url("${order.image}")` }}></div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <p className="text-gray-900 dark:text-white text-sm font-semibold leading-normal">{order.id}</p>
                                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusStyles[order.statusColor]}`}>{order.status}</span>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">{order.name}</p>
                                <p className="text-gray-500 dark:text-gray-400 text-xs">{order.status === 'Delivered' ? `Delivered: ${order.date}` : `Est. Delivery: ${order.date}`}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </aside>
);

const TrackingProgress = ({ steps }) => {
    // Calculate the width of the active progress bar (based on steps completed/total)
    const activeSteps = steps.filter(s => s.active).length;
    const totalSteps = steps.length;
    const progressWidth = (activeSteps - 1) / (totalSteps - 1) * 100; // -1 because progress starts after step 1

    return (
        <div className="bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
            <div className="flex flex-col gap-4">
                <div className="relative w-full">
                    {/* Inactive Bar */}
                    <div className="absolute left-0 top-1/2 w-full h-1 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2"></div>
                    {/* Active Bar */}
                    <div
                        className="absolute left-0 top-1/2 h-1 bg-primary transform -translate-y-1/2 transition-width duration-500"
                        style={{ width: `${progressWidth}%` }}
                    ></div>

                    <div className="relative flex justify-between items-start">
                        {steps.map((step, index) => {
                            const isCompleted = step.active;
                            const isCurrent = step.current;
                            const dotColor = isCompleted ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700';
                            const ringColor = isCompleted ? 'ring-primary/30' : 'ring-background-light dark:ring-gray-900/50';
                            const textColor = isCurrent ? 'text-primary font-bold' : (isCompleted ? 'text-gray-800 dark:text-gray-200 font-medium' : 'text-gray-500 dark:text-gray-400 font-medium');
                            const iconColor = isCompleted ? 'text-white' : 'text-gray-600 dark:text-gray-300';

                            return (
                                <div key={index} className="flex flex-col items-center gap-2 text-center w-1/5">
                                    <div className={`size-5 rounded-full ${dotColor} flex items-center justify-center ring-4 ${ringColor}`}>
                                        {step.icon && <span className={`material-symbols-outlined !text-xs ${iconColor}`}>{step.icon}</span>}
                                    </div>
                                    <p className={`text-xs ${textColor}`}>{step.label}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

const TrackingDetails = () => (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Map Placeholder */}
        <div
            className="md:col-span-3 bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden aspect-video md:aspect-auto min-h-64"
            data-alt="A map showing the package route from Los Angeles to San Francisco"
            data-location="San Francisco, CA"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDU6kwNvpqd47CZiouFCnzv2XZij5qdcAdmFGL31X3VO1MGKYIwoLpFZrde1rhe4SrijqUWPwqZ4V8gnruk2zRPLo8BzdkvF0qNCh34-CwATqgfLn_PWjD_8f3_SVcq4GTdMqgpuRRgPkrgT134lKJjiYbtkKbU9-jFcfLCAA6kcxy7imIPB1P5NptsyxmKrCMXtdmm2LEDhV1UoCp04HFW4go1mrgqlFCSW8oszDGPtzuAGyl-24IAABYUwSGYuBr2ZeKPbGZO77Y')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
        </div>

        {/* Shipment Details Card */}
        <div className="md:col-span-2 bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm flex flex-col gap-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Shipment Details</h3>
            <div className="flex flex-col gap-4 text-sm">
                <div>
                    <p className="text-gray-500 dark:text-gray-400 mb-1">Carrier</p>
                    <p className="font-medium text-gray-800 dark:text-gray-200">UPS Ground</p>
                </div>
                <div>
                    <p className="text-gray-500 dark:text-gray-400 mb-1">Tracking Number</p>
                    <div className="flex items-center gap-2">
                        <p className="font-medium text-gray-800 dark:text-gray-200">1Z9999W99999999999</p>
                        <button className="text-gray-500 dark:text-gray-400 hover:text-primary">
                            <span className="material-symbols-outlined !text-base"> content_copy </span>
                        </button>
                    </div>
                </div>
                <div>
                    <p className="text-gray-500 dark:text-gray-400 mb-1">Shipping To</p>
                    <p className="font-medium text-gray-800 dark:text-gray-200 leading-snug">Jane Doe<br />123 Market St<br />San Francisco, CA 94103</p>
                </div>
            </div>
            <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800 flex flex-col gap-2">
                <button className="w-full flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90">View Order Details</button>
                <button className="w-full flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium">Report an Issue</button>
            </div>
        </div>
    </div>
);

const TrackingHistoryLog = ({ history }) => (
    <div className="bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Tracking History</h3>
        <div className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700">
            {history.map((item, index) => {
                const dotColor = item.isCurrent ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600';
                const ringColor = 'ring-4 ring-white dark:ring-gray-900/50';
                const iconColor = item.isCurrent ? 'text-white' : 'text-gray-600 dark:text-gray-300';

                return (
                    <div key={index} className="mb-6">
                        <div className={`absolute -left-[13px] top-1 size-6 rounded-full ${dotColor} ${ringColor} flex items-center justify-center`}>
                            <span className={`material-symbols-outlined !text-sm ${iconColor}`}>{item.icon}</span>
                        </div>
                        <p className={`text-sm ${item.isCurrent ? 'font-semibold' : ''} text-gray-800 dark:text-gray-200`}>{item.status}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{item.date}</p>
                    </div>
                );
            })}
        </div>
    </div>
);

const MainTrackingContent = ({ selectedOrder }) => (
    <div className="flex-1 flex flex-col gap-8">
        {/* Page Heading */}
        <div className="flex flex-wrap justify-between items-center gap-4">
            <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-black tracking-tighter">Track Your Shipment</h1>
            <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium transition-colors">
                <span className="material-symbols-outlined text-base"> refresh </span>
                Refresh Status
            </button>
        </div>

        {/* Order Summary Card */}
        <div className="bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row items-stretch justify-between gap-6">
                <div className="flex flex-col gap-2 flex-[2_2_0px]">
                    <p className="text-primary text-sm font-semibold">Estimated Delivery: October 31, 2023</p>
                    <p className="text-gray-900 dark:text-white text-xl font-bold">{selectedOrder.id} - {selectedOrder.name}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Order Date: October 26, 2023</p>
                </div>
                <div
                    className="w-full sm:w-auto bg-center bg-no-repeat aspect-video sm:aspect-auto sm:h-24 sm:w-36 bg-cover rounded-lg flex-1"
                    data-alt={`A photo of a ${selectedOrder.name}`}
                    style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPm-xOk1RYQsXfTDxV3xsoDlMqUki7tBzIRw3z-nFBmU6JVAOUiH_P-Hje42VcXTRE49Rxsc-2zkCH4NM-XHBd2ns0bqz4EkvedTSuGdPuhhLFQr1KWOPrKmIAyZU5aHH9w9eic1ylY9PKnDDJDW3ARiFv18CEcANcTSg694sRxL-8MSPaenLRZaYol5naS3LYPuAm3KRY9EegqAb7hO9q-WIVvhu6Az2p6i816W9NqGIe-ABs0iG4Av1wI9uF-ZFwx7er9N4GlxY")` }}
                ></div>
            </div>
        </div>

        {/* Progress Bar */}
        <TrackingProgress steps={trackingSteps} />

        {/* Map & Shipment Details */}
        <TrackingDetails />

        {/* Detailed History Log */}
        <TrackingHistoryLog history={trackingHistory} />
    </div>
);

// --- Main Page Component ---

const ShipmentTrackingPage = () => {
    const selectedOrder = mockOrders.find(o => o.isSelected) || mockOrders[0];

    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 min-h-screen">
            <div className="relative flex h-auto min-h-screen w-full flex-col">

                {/* Top Navigation Bar */}
                <TopNavBar />

                <main className="flex-grow w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-2xl">
                    <div className="flex flex-col lg:flex-row gap-8 py-8">

                        {/* SideNavBar - Order List */}
                        <OrderSidebar orders={mockOrders} />

                        {/* Main Content Panel */}
                        <MainTrackingContent selectedOrder={selectedOrder} />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ShipmentTrackingPage;