import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
import { format } from 'date-fns';
import { totalSummarys, trackItems } from '../../utilities/rawData';
import * as connectTo from '../../utilities/reusables';
import { Pagination } from '../../utilities/reusables';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const getStatusBadge = (status) => {
    const statusColorPanel = {
        Confirmed: { bg: 'bg-blue-100 dark:bg-blue-900/50', text: 'text-blue-700 dark:text-blue-300', dot: 'bg-blue-500' },
        Shipped: { bg: 'bg-blue-100 dark:bg-blue-900/50', text: 'text-blue-700 dark:text-blue-300', dot: 'bg-blue-500' },
        Pending: { bg: 'bg-slate-100 dark:bg-slate-700', text: 'text-slate-600 dark:text-slate-300', dot: 'bg-slate-400' },
        'In Transit': { bg: 'bg-orange-100 dark:bg-orange-900/50', text: 'text-orange-700 dark:text-orange-300', dot: 'bg-orange-500' },
        'Out for Delivery': { bg: 'bg-green-100 dark:bg-green-900/50', text: 'text-green-700 dark:text-green-300', dot: 'bg-green-500' },
        Delivered: { bg: 'bg-green-100 dark:bg-green-900/50', text: 'text-green-700 dark:text-green-300', dot: 'bg-green-500' },
    };

    const { bg, text, dot } = statusColorPanel[status] || statusColorPanel.Pending;

    return (
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium ${bg} ${text}`}>
            <span className={`size-1.5 rounded-full ${dot}`}></span>
            {status}
        </span>
    );
};
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const SearchAndFilterBar = ({ tableData, setTableData }) => {

    const statusList = [
        { id: 0, label: "All" },
        { id: 1, label: "Pending" },
        { id: 2, label: "Confirmed" },
        { id: 3, label: "Shipped" },
        { id: 4, label: "In Transit" },
        { id: 5, label: "Out for Delivery" },
        { id: 6, label: "Delivered" },
    ];
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

    const handleYearBasedFilter = (e) => {
        let filterData = [];

        if (e.target.value === "last6months") {
            filterData = [...trackItems].filter(item => {
                const sixMonthsAgo = new Date();
                sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
                const orderDate = new Date(item.orderDate);
                return orderDate >= sixMonthsAgo;
            });
        } else {
            filterData = [...trackItems].filter(item => {
                const orderDate = new Date(item.orderDate);
                return orderDate.getFullYear() === parseInt(e.target.value);
            });
        }

        setTableData(filterData);
    };

    const handleFilterer = (e) => {
        let filterData = [];
        if (e.target.value === "All") {
            filterData = [...trackItems];
        } else {
            filterData = connectTo.multipleItemFromArray([...trackItems], "status", e.target.value);
        }
        setTableData(filterData);
    };


    return (
        <div className="p-4 bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                    <label className="flex flex-col w-full">
                        <div className="flex w-full flex-1 items-stretch rounded-lg h-12">
                            <div className="text-slate-500 flex bg-slate-100 dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg h-12">
                                <span className="material-symbols-outlined text-xl">search</span>
                            </div>
                            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-slate-900 dark:text-slate-100 focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-slate-100 dark:bg-slate-800 h-12 placeholder:text-slate-500 dark:placeholder:text-slate-400 px-4 text-base font-normal" placeholder="Search by order number or product name" defaultValue="" />
                        </div>
                    </label>
                </div>
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-2">
                        <select
                            onChange={(e) => handleFilterer(e)}
                            className="text-sm font-medium px-4 h-12 rounded-lg border-border-light dark:border-border-dark bg-card-light dark:bg-slate-800 focus:border-primary focus:ring-primary pr-8" id="sort">
                            {statusList.map(s => (
                                <option key={s.id} value={s.label} className='my-1'>{s.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                        <select
                            onChange={(e) => handleYearBasedFilter(e)}
                            className="text-sm font-medium px-4 h-12 rounded-lg border-border-light dark:border-border-dark bg-card-light dark:bg-slate-800 focus:border-primary focus:ring-primary pr-8" id="sort">
                            <option className='last6months' value="last6months">Last 6 months</option>
                            {years.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
};
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const OrderRow = ({ order }) => {

    return (
        <a
            className="grid grid-cols-2 md:grid-cols-12 gap-4 px-6 py-5 items-center border-b border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
            href={`/trackingshipment?orderId=${order.orderId}&trackId=${order.trackId}`}>
            <div className="md:col-span-3 flex items-center gap-4">
                <div>
                    <img className='h-15 rounded-xl' src={order.image} alt={order.name} />
                </div>
                <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{order.name}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
                        <strong className="text-gray-300">Color:</strong> <span>{order?.color}</span>
                        {" "}
                        {order?.size && <><strong className="text-gray-300">Size:</strong> <span>{order?.size}</span></>}
                    </p>
                </div>
            </div>
            <div className="md:col-span-3">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 overflow-hidden truncate">{order.trackId}</p>
            </div>
            <div className="md:col-span-2">
                <p className="text-sm text-slate-600 dark:text-slate-300">{format(new Date(order?.eta) || 0, "MMM-dd")}</p>
            </div>
            <div className="md:col-span-2">
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200">₹{order?.price.toFixed(2)}</p>
            </div>
            <div className="md:col-span-2">
                {getStatusBadge(order?.status)}
            </div>
        </a>
    )
};
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const OrderTable = ({ orders }) => (
    <div className="bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        {/* Table Header (Desktop only) */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 border-b border-slate-200 dark:border-slate-800">
            <div className="col-span-3 text-sm font-semibold text-slate-600 dark:text-slate-400">Product</div>
            <div className="col-span-3 text-sm font-semibold text-slate-600 dark:text-slate-400">Order #</div>
            <div className="col-span-2 text-sm font-semibold text-slate-600 dark:text-slate-400">Date</div>
            <div className="col-span-2 text-sm font-semibold text-slate-600 dark:text-slate-400">Price</div>
            <div className="col-span-2 text-sm font-semibold text-slate-600 dark:text-slate-400">Status</div>
        </div>

        {/* Order Rows */}
        {orders.map((order, index) => (
            <OrderRow key={order.id} order={order} />
        ))}
    </div>
);
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// --- Main Page Component ---
const MyOrdersPage = () => {

    const [trackItemsCopy, setTrackItemsCopy] = useState([...trackItems].filter(item => {
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
        const orderDate = new Date(item.orderDate);
        return orderDate >= sixMonthsAgo;
    }));
    const Navigate = useNavigate();
    const [tableData, setTableData] = useState([]);

    return (<main className="flex-1 w-full">
        <div className="container mx-auto px-4 py-8 md:py-12">

            {/* Title */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <h1 className="text-slate-900 dark:text-white text-4xl font-black tracking-tight">My Orders</h1>
            </div>

            <div className="space-y-6">
                {totalSummarys?.length != 0 ?
                    (<>
                        {/* Search and Filter */}
                        < SearchAndFilterBar tableData={tableData} setTableData={setTableData} />

                        {/* Order List Table */}
                        < OrderTable orders={tableData} />

                        {/* Pagination */}
                        <Pagination data={trackItemsCopy} ItemPerPage={10} setTableData={setTableData} />
                    </>)
                    :
                    (<div className="text-center py-24 px-6 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
                        <div className="flex justify-center mb-4">
                            <div className="flex items-center justify-center size-16 rounded-full bg-primary/10 text-primary">
                                <span className="material-symbols-outlined text-4xl">inventory_2</span>
                            </div>
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">You have no past orders</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">Looks like you haven't made any purchases yet. Let's change that!</p>
                        <button onClick={() => Navigate("/")} className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-primary text-white gap-2 text-base font-bold leading-normal tracking-wide min-w-[160px] mx-auto px-6">Start Shopping</button>
                    </div>)
                }

            </div>
        </div>
    </main>);
};

export default MyOrdersPage;