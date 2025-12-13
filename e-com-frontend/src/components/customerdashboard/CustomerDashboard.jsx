import { useState } from "react";
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
import MyOrdersPage from "./MyOrdersPage";
import MyDashboardPage from "./MyDashboardPage";
import MyAddressPage from "./MyAddressPage";
import MyPreferencePage from "./MyPreferencePage";
import GiftCardPurchasePage from "./MyGiftCardPage";
import { useSearchParams } from "react-router-dom";
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// --- Sub-Components ---
const Sidebar = ({ activeTab, setActiveTab }) => {
    const navItems = [
        { id: "dashboard", icon: "dashboard", label: "Dashboard", href: "#" },
        { id: "orders", icon: "package_2", label: "Orders", href: "#" },
        { id: "addresses", icon: "pin_drop", label: "Addresses", href: "#" },
        { id: "giftcard", icon: "payment_card", label: "Gift Card", href: "#" },
        { id: "profile", icon: "person", label: "Profile", href: "#" },
        { id: "preferences", icon: "settings", label: "Preferences", href: "#" },
    ];

    return (
        <aside className="sticky top-0 h-screen w-64 flex-shrink-0 bg-white dark:bg-neutral-900/50 p-4 shadow-sm">
            <div className="flex h-full flex-col justify-between">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        {/* User Info */}
                        <div className="flex gap-3 items-center">
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD46-7tuzu92XDP9nSQ6QCRdYxH5OBxrIOzyomqK4zmrByvhje4uC4VpT7MBBchEooTXQYLBj3ELpCTw0wPUp5r4zquVG3rurTaE7HWM5978U6OYG9wxzI7xN6p4ModrFS4Q7g0-AGi9vwr4Ww7hJVvnNAwXeuud_qKjoOcwB_yZa2Je4iVXaE0beqQxriKcSbt5ZMT6uvE3I_FpjoQXndVcuO-8axyPOyvquM3_0H37V2T4IOicn5xY-5MQlIqdsXiLeZUtZCfzrc")',
                                }}
                            ></div>
                            <div className="flex flex-col">
                                <h2 className="text-neutral-900 dark:text-white text-base font-medium leading-normal">
                                    Taylor Swift
                                </h2>
                                <p className="text-neutral-800 dark:text-neutral-600 text-sm font-normal leading-normal">
                                    taylor.s@email.com
                                </p>
                            </div>
                        </div>

                        {/* Navigation */}
                        <nav className="flex flex-col gap-2 mt-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`cursor-pointer flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 
                                        ${activeTab === item.id
                                            ? "bg-primary/10 text-primary"
                                            : "text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                        }`}
                                >
                                    <span className="material-symbols-outlined">{item.icon}</span>
                                    <p className="text-sm font-medium leading-normal">
                                        {item.label}
                                    </p>
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Logout */}
                <div className="flex flex-col gap-1">
                    <a
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
                        href="#"
                    >
                        <span className="material-symbols-outlined">logout</span>
                        <p className="text-sm font-medium leading-normal">Logout</p>
                    </a>
                </div>
            </div>
        </aside>
    );
};

// --- Main Page Component ---
const CustomerDashboard = ({ section }) => {
    const [activeTab, setActiveTab] = useState(section);

    return (
        <div className="font-display bg-background-light dark:bg-background-dark min-h-screen">
            <main className="relative flex min-h-screen w-full">

                <main className="flex w-full">

                    {/* Side Navigation Bar */}
                    <Sidebar
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />

                    {activeTab === "dashboard" &&
                        <MyDashboardPage />
                    }

                    {activeTab === "orders" &&
                        <MyOrdersPage />
                    }

                    {activeTab === "giftcard" &&
                        <GiftCardPurchasePage />
                    }

                    {activeTab === "addresses" &&
                        <MyAddressPage />
                    }

                    {activeTab === "preferences" &&
                        <MyPreferencePage />
                    }
                </main>

            </main>
        </div>
    );
};

export default CustomerDashboard;
