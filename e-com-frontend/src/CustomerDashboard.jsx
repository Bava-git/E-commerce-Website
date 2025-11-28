import React from 'react';

// --- Mock Data ---
const mockOrders = [
    { id: '#12345', date: 'Oct 24, 2023', status: 'In Transit', total: 149.99, statusColor: 'accent' },
    { id: '#12344', date: 'Sep 15, 2023', status: 'Delivered', total: 75.50, statusColor: 'green' },
    { id: '#12343', date: 'Sep 01, 2023', status: 'Delivered', total: 299.00, statusColor: 'green' },
    { id: '#12342', date: 'Aug 20, 2023', status: 'Cancelled', total: 49.99, statusColor: 'red' },
];

const getStatusBadge = (status, color) => {
    let bgColor, textColor;
    if (color === 'accent') {
        bgColor = 'bg-accent/20';
        textColor = 'text-accent';
    } else if (color === 'green') {
        bgColor = 'bg-green-500/20';
        textColor = 'text-green-600 dark:text-green-400';
    } else if (color === 'red') {
        bgColor = 'bg-red-500/20';
        textColor = 'text-red-600 dark:text-red-400';
    }

    return (
        <span className={`${bgColor} ${textColor} font-medium text-xs px-2 py-1 rounded-full`}>
            {status}
        </span>
    );
};

// --- Sub-Components ---

const Sidebar = () => {
    const navItems = [
        { icon: 'dashboard', label: 'Dashboard', href: '#', active: true },
        { icon: 'package_2', label: 'Orders', href: '#', active: false },
        { icon: 'pin_drop', label: 'Addresses', href: '#', active: false },
        { icon: 'person', label: 'Profile', href: '#', active: false },
        { icon: 'settings', label: 'Preferences', href: '#', active: false },
    ];

    return (
        <aside className="sticky top-0 h-screen w-64 flex-shrink-0 bg-white dark:bg-neutral-900/50 p-4 shadow-sm">
            <div className="flex h-full flex-col justify-between">
                <div className="flex flex-col gap-8">
                    {/* Logo */}
                    <div className="flex items-center gap-2 p-2">
                        <span className="material-symbols-outlined text-primary text-3xl">storefront</span>
                        <h1 className="text-neutral-900 dark:text-dark-text text-xl font-bold">My Store</h1>
                    </div>

                    <div className="flex flex-col gap-4">
                        {/* User Info */}
                        <div className="flex gap-3 items-center">
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" data-alt="Profile picture of Taylor Swift" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD46-7tuzu92XDP9nSQ6QCRdYxH5OBxrIOzyomqK4zmrByvhje4uC4VpT7MBBchEooTXQYLBj3ELpCTw0wPUp5r4zquVG3rurTaE7HWM5978U6OYG9wxzI7xN6p4ModrFS4Q7g0-AGi9vwr4Ww7hJVvnNAwXeuud_qKjoOcwB_yZa2Je4iVXaE0beqQxriKcSbt5ZMT6uvE3I_FpjoQXndVcuO-8axyPOyvquM3_0H37V2T4IOicn5xY-5MQlIqdsXiLeZUtZCfzrc")' }}></div>
                            <div className="flex flex-col">
                                <h2 className="text-neutral-900 dark:text-dark-text text-base font-medium leading-normal">Taylor Swift</h2>
                                <p className="text-neutral-800 dark:text-neutral-600 text-sm font-normal leading-normal">taylor.s@email.com</p>
                            </div>
                        </div>

                        {/* Navigation */}
                        <nav className="flex flex-col gap-2 mt-4">
                            {navItems.map(item => (
                                <a
                                    key={item.label}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 ${item.active
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-neutral-900 dark:text-dark-text hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                        }`}
                                    href={item.href}
                                >
                                    <span className="material-symbols-outlined">{item.icon}</span>
                                    <p className="text-sm font-medium leading-normal">{item.label}</p>
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Logout */}
                <div className="flex flex-col gap-1">
                    <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-900 dark:text-dark-text hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200" href="#">
                        <span className="material-symbols-outlined">logout</span>
                        <p className="text-sm font-medium leading-normal">Logout</p>
                    </a>
                </div>
            </div>
        </aside>
    );
};

const SummaryCards = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Order Status Card */}
        <div className="lg:col-span-2 bg-white dark:bg-neutral-900/50 p-6 rounded-xl shadow-sm">
            <div className="flex flex-col items-stretch justify-start">
                <div
                    className="w-full bg-center bg-no-repeat aspect-[2/1] bg-cover rounded-lg mb-4"
                    data-alt="A stylized map showing a delivery route with pins"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB4_TFn2snsrWheCzVgyLkJ5pIjdzTwDrUlYVEVhBL7mptFudAZVSXMpDGAEWKszF0Pkyf_92Ypvw8TwsDA6D16GHdVNxDkFfLnNB6d1c0duazkgt2sEZC9IfyppiN3zWQ5nv_5A8mALJ7vPveE5fRvagjEluqvA6NKYzC2vQxamNP_bF6drY7ibpYRw-3mb0XjSt3RTRWrx1bzmzS_9Dp8QXQlCgtfcOt4m55Pvf4q4nesGH-5PIRKMqEovlLdhAu_OaP6Do9waLw")' }}
                ></div>
                <div className="flex w-full flex-col items-stretch justify-center gap-2">
                    <p className="text-neutral-800 dark:text-neutral-600 text-sm font-normal leading-normal">Recent Order Status</p>
                    <p className="text-neutral-900 dark:text-dark-text text-xl font-bold leading-tight tracking-[-0.015em]">
                        Order #12345 - <span className="text-accent">In Transit</span>
                    </p>
                    <div className="flex items-end gap-3 justify-between mt-2">
                        <div className="flex flex-col gap-1">
                            <p className="text-neutral-800 dark:text-neutral-600 text-base font-normal leading-normal">Your package is expected to arrive by **Friday, Oct 27**.</p>
                            <p className="text-neutral-800 dark:text-neutral-600 text-sm font-normal leading-normal">Last updated: 2 hours ago</p>
                        </div>
                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium leading-normal hover:bg-primary/90 transition-colors">
                            <span className="truncate">Track Package</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Default Address Card */}
        <div className="bg-white dark:bg-neutral-900/50 p-6 rounded-xl shadow-sm">
            <div className="flex flex-col h-full justify-between gap-4">
                <div className="flex flex-col gap-1">
                    <p className="text-neutral-900 dark:text-dark-text text-lg font-bold leading-tight">Default Address</p>
                    <p className="text-neutral-800 dark:text-neutral-600 text-sm font-normal leading-normal">**123 Melody Lane, Nashville, TN 37203, USA**</p>
                </div>
                <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg mt-4"
                    data-alt="A birds-eye view of a residential neighborhood"
                    data-location="Nashville, TN"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB4EC29jQBil-JUXPzu2OLAr9VMMJgDi2vSVos0bfwQZ4d7zzOJAFZhHlFgJz3cK6XCTvn2BHOL3lwfBjKUgaBHzFF4bKEUMIQppAtMKUhLIh9oUXo48MOg74YTg0gTM3olyCwC6Rd3UevDyrqA22LRL3NYdgGjATztLWuO1GGtK1d7E7OEkAf9WUpF9PZwcQmYvoer2W-gixsVTejVq7k4dq66bP4V1_V3j6HSu_cCiHEmWkm4H-HdkHfVEsFWHxNjw9MQKrMZu3I")' }}
                ></div>
                <button className="flex mt-auto w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-dark-text text-sm font-medium leading-normal hover:bg-neutral-200/80 dark:hover:bg-neutral-800/80 transition-colors">
                    <span className="truncate">Manage Addresses</span>
                </button>
            </div>
        </div>
    </div>
);

const OrderHistory = ({ orders }) => (
    <div className="mt-8 bg-white dark:bg-neutral-900/50 p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-bold text-neutral-900 dark:text-dark-text mb-4">Order History</h3>
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
                <thead className="border-b border-neutral-200 dark:border-neutral-700">
                    <tr>
                        <th className="p-3 text-neutral-800 dark:text-neutral-600 font-medium">Order ID</th>
                        <th className="p-3 text-neutral-800 dark:text-neutral-600 font-medium">Date</th>
                        <th className="p-3 text-neutral-800 dark:text-neutral-600 font-medium">Status</th>
                        <th className="p-3 text-neutral-800 dark:text-neutral-600 font-medium text-right">Total</th>
                        <th className="p-3"></th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={order.id} className={index < orders.length - 1 ? "border-b border-neutral-200 dark:border-neutral-700" : ""}>
                            <td className="p-3 font-medium text-neutral-900 dark:text-dark-text">{order.id}</td>
                            <td className="p-3 text-neutral-800 dark:text-neutral-600">{order.date}</td>
                            <td className="p-3 text-neutral-800 dark:text-neutral-600">
                                {getStatusBadge(order.status, order.statusColor)}
                            </td>
                            <td className="p-3 text-neutral-900 dark:text-dark-text font-medium text-right">${order.total.toFixed(2)}</td>
                            <td className="p-3 text-right">
                                <button className="text-primary hover:underline font-medium text-sm">View Details</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

// --- Main Page Component ---

const CustomerDashboard = () => {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark min-h-screen">
            <div className="relative flex min-h-screen w-full">

                {/* Side Navigation Bar */}
                <Sidebar />

                {/* Main Content */}
                <main className="flex-1 p-8">
                    <div className="mx-auto max-w-7xl">

                        {/* Breadcrumbs */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            <a className="text-neutral-800 dark:text-neutral-600 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary" href="#">Account</a>
                            <span className="text-neutral-800 dark:text-neutral-600 text-sm font-medium leading-normal">/</span>
                            <span className="text-neutral-900 dark:text-dark-text text-sm font-medium leading-normal">Dashboard</span>
                        </div>

                        {/* Page Heading */}
                        <div className="flex flex-wrap justify-between gap-3 mb-8">
                            <div className="flex min-w-72 flex-col gap-2">
                                <h1 className="text-neutral-900 dark:text-dark-text text-4xl font-black leading-tight tracking-[-0.033em]">Welcome back, Taylor!</h1>
                                <p className="text-neutral-800 dark:text-neutral-600 text-base font-normal leading-normal">Here's a quick overview of your account.</p>
                            </div>
                        </div>

                        {/* Summary Cards Grid */}
                        <SummaryCards />

                        {/* Order History Table */}
                        <OrderHistory orders={mockOrders} />

                    </div>
                </main>
            </div>
        </div>
    );
};

export default CustomerDashboard;