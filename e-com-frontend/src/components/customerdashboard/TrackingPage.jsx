import { format } from 'date-fns';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
import { totalSummarys, trackItems } from '../../utilities/rawData';
import { CopyButton } from '../../utilities/reusables';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const history = [
    { status: 'Package is in transit to a UPS facility', date: 'October 30, 2023, 8:15 AM - Oakland, CA', icon: 'local_shipping', isCurrent: true },
    { status: 'Package has left the carrier facility', date: 'October 29, 2023, 11:30 PM - Los Angeles, CA', icon: 'regular_expression', isCurrent: false },
    { status: 'Package received by carrier', date: 'October 28, 2023, 4:00 PM - Los Angeles, CA', icon: 'inventory_2', isCurrent: false },
    { status: 'Order confirmed', date: 'October 26, 2023, 10:05 AM', icon: 'receipt_long', isCurrent: false },
];
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// --- Sub-Components ---
const OrderSidebar = ({ selectedItemsStatus, selectedItem, setSelectedItem }) => {

    const orders = selectedItemsStatus;

    const statusStyles = {
        Confirmed: 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50',
        Shipped: 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50',
        Pending: 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50',
        'In Transit': 'text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/50',
        'Out for Delivery': 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/50',
        Delivered: 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/50',
    };

    return (<aside className="w-full lg:w-1/3 lg:max-w-sm shrink-0">
        <div className="flex flex-col gap-4 p-4 bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 h-full">
            <div className="flex items-center justify-between">
                <h1 className="text-gray-900 dark:text-white text-lg font-bold leading-normal">Current Shipments</h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">{orders.filter(o => o.status !== 'Delivered').length} Active</p>
            </div>
            <div className="flex flex-col gap-2">
                {orders.map(order => {

                    const selectedStyle = (order.trackId === selectedItem.trackId) ? 'bg-primary/10 dark:bg-primary/20 border border-primary/50' : 'hover:bg-gray-100 dark:hover:bg-gray-800/50';

                    return (
                        <div
                            key={order.trackId}
                            className={`flex items-start gap-4 p-3 rounded-lg cursor-pointer ${selectedStyle}`}
                            onClick={() => setSelectedItem(order)}
                        >
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-12" data-alt={order.name} style={{ backgroundImage: `url("${order.image}")` }}></div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <p className="text-gray-900 dark:text-white text-sm font-semibold leading-normal">{order.productId}</p>
                                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusStyles[order.status]}`}>{order.status}</span>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">{order.name}</p>
                                <p className="text-gray-500 dark:text-gray-400 text-xs">{order.status === 'Delivered' ? `Delivered: ${format(order.ata || 0, "MMM-dd")}` : `Est. Delivery: ${format(order.eta || 0, "MMM-dd")}`}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </aside>)
};
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const TrackingProgress = ({ status }) => {
    // Define valid steps (excluding Pending)
    const allSteps = [
        { label: "Confirmed", icon: "check" },
        { label: "Shipped", icon: "local_shipping" },
        { label: "In Transit", icon: "directions_car" },
        { label: "Out for Delivery", icon: "delivery_dining" },
        { label: "Delivered", icon: "home" },
    ];

    // Handle Pending separately
    if (status === "Pending") {
        return (
            <div className="bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                    <div className="size-5 rounded-full text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center ring-4 ring-blue-600">
                        <span className="material-symbols-outlined !text-xs text-blue-600">star</span>
                    </div>
                    <p className="text-sm text-blue-600 font-medium">Pending</p>
                </div>
            </div>
        );
    }

    // Find current step index
    const currentIndex = allSteps.findIndex(s => s.label === status);

    // If status not found, reset (show nothing)
    if (currentIndex === -1) {
        return null;
    }

    // Build steps array with active/current flags
    const steps = allSteps.map((step, i) => ({
        ...step,
        active: i <= currentIndex,
        current: i === currentIndex,
    }));

    // Calculate progress width so bar aligns with dots
    const totalSteps = steps.length;
    const progressWidth = (currentIndex / (totalSteps - 1)) * 100;

    return (
        <div className="bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
            <div className="flex flex-col gap-4">
                <div className="relative w-full">
                    {/* Inactive Bar */}
                    <div className="absolute left-0 top-1/2 w-full h-1 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2"></div>
                    {/* Active Bar */}
                    <div
                        className="absolute left-0 top-1/2 h-1 bg-primary transform -translate-y-1/2 transition-all duration-500"
                        style={{ width: `${progressWidth}%` }}
                    ></div>

                    <div className="relative flex justify-between items-start">
                        {steps.map((step, index) => {
                            const dotColor = step.active ? "bg-primary" : "bg-gray-200 dark:bg-gray-700";
                            const ringColor = step.active ? "ring-primary/30" : "ring-background-light dark:ring-gray-900/50";
                            const textColor = step.current
                                ? "text-primary font-bold"
                                : step.active
                                    ? "text-gray-800 dark:text-gray-200 font-medium"
                                    : "text-gray-500 dark:text-gray-400 font-medium";
                            const iconColor = step.active ? "text-white" : "text-gray-600 dark:text-gray-300";

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
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const TrackingDetails = ({ orderId, congineeDetail }) => (
    <div className="grid gap-8">

        {/* Shipment Details Card */}
        <div className=" bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm flex flex-col gap-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Shipment Details</h3>
            <div className="flex flex-col gap-4 text-sm">
                <div>
                    <p className="text-gray-500 dark:text-gray-400 mb-1">Order Number</p>
                    <div className="flex items-center gap-2">
                        <p className="font-medium text-gray-800 dark:text-gray-200">{orderId}</p>
                        <button
                            onClick={() => CopyButton(orderId)}
                            className="text-gray-500 dark:text-gray-400 hover:text-primary">
                            <span className="material-symbols-outlined !text-base"> content_copy </span>
                        </button>
                    </div>
                </div>
                <div>
                    <p className="text-gray-500 dark:text-gray-400 mb-1">Shipping To</p>
                    <p className="font-medium text-gray-800 dark:text-gray-200 leading-snug">
                        {congineeDetail.name}
                        <br />
                        {congineeDetail?.address?.map((address, index) => (
                            <React.Fragment key={index}>
                                {address}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>

                </div>
            </div>
            <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800 flex flex-col gap-2">
                <button onClick={() => window.location.href = "/contactus"} className="w-full flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium">Report an Issue</button>
            </div>
        </div>
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
    </div>
);
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const MainTrackingContent = ({ selectedOrder, congineeDetail }) => (
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
                    <p className="text-primary text-sm font-semibold">Estimated Delivery: {format(selectedOrder.eta || 0, "MMM-dd")}</p>
                    <a
                        className="cursor-pointer text-gray-900 dark:text-white text-xl font-bold hover:underline"
                        href={`/product?id=${selectedOrder.productId}`}
                    >
                        {selectedOrder.productId} - {selectedOrder.name}
                    </a>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Order Date: {format(selectedOrder.orderDate || 0, "MMM-dd")}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Quantity: {selectedOrder.quantity}</p>
                </div>
                <div className="lg:h-40 rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                        src={selectedOrder.image}
                        alt={`A photo of a ${selectedOrder.name}`}
                        className="h-full w-full object-contain"
                    />
                </div>


            </div>
        </div>

        {/* Progress Bar */}
        <TrackingProgress status={selectedOrder.status} />

        {/* Map & Shipment Details */}
        <TrackingDetails orderId={selectedOrder.orderId} congineeDetail={congineeDetail} />

    </div>
);
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// --- Main Page Component ---
const ShipmentTrackingPage = () => {

    const [searchParam, setSearchParam] = useSearchParams();
    const orderId = searchParam.get("orderId");
    const trackId = searchParam.get("trackId");
    const congineeDetail = totalSummarys?.find(o => o.orderId === orderId)?.congineeDetail;
    const selectedItemsStatus = trackItems?.filter(o => o.orderId === orderId);

    if (!congineeDetail || !selectedItemsStatus) {
        window.location.href = "/orders"
    }
    const [selectedItem, setSelectedItem] = useState(trackItems?.find(o => o.trackId === trackId));

    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 min-h-screen">
            <div className="relative flex h-auto min-h-screen w-full flex-col">

                <main className="flex-grow w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-2xl">
                    <div className="flex flex-col lg:flex-row gap-8 py-8">

                        {/* SideNavBar - Order List */}
                        <OrderSidebar
                            selectedItemsStatus={selectedItemsStatus}
                            selectedItem={selectedItem}
                            setSelectedItem={setSelectedItem}
                        />

                        {/* Main Content Panel */}
                        <MainTrackingContent
                            selectedOrder={selectedItem}
                            congineeDetail={congineeDetail}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ShipmentTrackingPage;
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------