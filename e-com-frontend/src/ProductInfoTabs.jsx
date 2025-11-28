// import { useState } from "react";

// const ProductInfoTabs = () => {
//     // In a real app, this would be stateful and switch content based on the active tab
//     const tabs = ['Description', 'Specifications', 'Shipping & Returns'];
//     const [activeTab, setActiveTab] = useState('Description');

//     return (
//         <div className="pt-12">
//             <div className="border-b border-gray-200 dark:border-gray-700">
//                 <nav aria-label="Tabs" className="-mb-px flex space-x-8">
//                     {tabs.map(tab => (
//                         <a
//                             key={tab}
//                             // href={tab === activeTab ? '#' : `/${tab.toLowerCase().replace(/\s/g, '-')}`}
//                             onClick={() => setActiveTab(tab)}
//                             className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium transition-colors 
//                                 ${tab === activeTab
//                                     ? 'border-primary text-primary'
//                                     : 'border-transparent text-text-secondary-light dark:text-text-secondary-dark hover:border-gray-300 dark:hover:border-gray-600 hover:text-text-light dark:hover:text-text-dark'
//                                 }`}
//                         >
//                             {tab}
//                         </a>
//                     ))}
//                 </nav>
//             </div>

//             {activeTab === "Description" &&
//                 <div className="py-10 text-base text-text-secondary-light dark:text-text-secondary-dark space-y-4">
//                     <p>1Discover the epitome of elegance with our Premium Leather Watch. Designed for those who appreciate fine craftsmanship, this timepiece features a genuine leather strap that develops a rich patina over time, making it uniquely yours. The stainless steel case houses a precision quartz movement, ensuring you're always on time, every time.</p>
//                     <p>With its minimalist dial, sapphire crystal glass, and water resistance up to 50 meters, this watch is as durable as it is stylish. Whether you're in a boardroom or on a weekend adventure, it's the perfect accessory to complement any outfit.</p>
//                 </div>
//             }

//             {activeTab === "Specifications" &&
//                 <div className="py-10 text-base text-text-secondary-light dark:text-text-secondary-dark space-y-4">
//                     <p>2Discover the epitome of elegance with our Premium Leather Watch. Designed for those who appreciate fine craftsmanship, this timepiece features a genuine leather strap that develops a rich patina over time, making it uniquely yours. The stainless steel case houses a precision quartz movement, ensuring you're always on time, every time.</p>
//                     <p>With its minimalist dial, sapphire crystal glass, and water resistance up to 50 meters, this watch is as durable as it is stylish. Whether you're in a boardroom or on a weekend adventure, it's the perfect accessory to complement any outfit.</p>
//                 </div>
//             }

//             {activeTab === "Shipping & Returns" &&
//                 <div className="py-10 text-base text-text-secondary-light dark:text-text-secondary-dark space-y-4">
//                     <p>3Discover the epitome of elegance with our Premium Leather Watch. Designed for those who appreciate fine craftsmanship, this timepiece features a genuine leather strap that develops a rich patina over time, making it uniquely yours. The stainless steel case houses a precision quartz movement, ensuring you're always on time, every time.</p>
//                     <p>With its minimalist dial, sapphire crystal glass, and water resistance up to 50 meters, this watch is as durable as it is stylish. Whether you're in a boardroom or on a weekend adventure, it's the perfect accessory to complement any outfit.</p>
//                 </div>
//             }
//         </div>
//     );
// };

// export default ProductInfoTabs;