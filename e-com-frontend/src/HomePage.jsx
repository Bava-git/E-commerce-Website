import { toast } from "sonner";
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
import { cartList, products } from './utilities/rawData';
import * as connectTo from './utilities/reusables';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

export default function HomePage() {

    const handleAddCart = (product) => {
        const cartItem = {
            cartlistId: cartList?.length + 1,
            productId: product?.id,
            name: product?.name,
            price: product?.price,
            image: product?.images[0].href,
            color: product?.color.name,
            size: product?.sizes[0].value ?? "",
            quantity: 1,
        }
        connectTo.addToArray(cartList, cartItem);
        toast.success("Product added in cart");
    };
    const categoryItems = [
        { label: "Men's", link: "/s", keywords: ["men", "mens", "unisex"], image: "/website/mens.jpg" },
        { label: "Women's", link: "/s", keywords: ["women", "womens", "unisex"], image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2670&auto=format&fit=crop" },
        { label: "Accessories", link: "/s", keywords: ["accessories", "accessory"], image: "/website/electronic_accessories.jpg" },
        { label: "Sale", link: "/s", keywords: ["sale", "discount"], image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=2670&auto=format&fit=crop" },
    ];

    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">

                    <main className="flex flex-col items-center w-full">
                        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-5">

                            {/* HeroSection */}
                            <div className="@container mb-12">
                                <div className="@[480px]:p-0">
                                    <div
                                        className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-6 pb-12 @[480px]:px-12"
                                        style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2670&auto=format&fit=crop")' }}
                                    >
                                        <div className="flex flex-col gap-3 text-left max-w-xl">
                                            <h1 className="text-white text-4xl font-black leading-tight tracking-tighter @[480px]:text-6xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-tighter">The Summer Collection is Here</h1>
                                            <h2 className="text-slate-200 text-base font-normal leading-normal @[480px]:text-lg @[480px]:font-normal @[480px]:leading-normal">Discover the latest trends and styles for the season. Fresh looks for warm days ahead.</h2>
                                        </div>
                                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 @[480px]:h-14 @[480px]:px-8 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                                            <span className="truncate">Shop Now</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Featured Products Section */}
                            <section className="mb-12">
                                <h2 className="text-slate-900 dark:text-slate-50 text-2xl font-bold leading-tight tracking-tight px-0 pb-4 pt-5">Featured Products</h2>
                                <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                                    <div className="flex items-stretch p-1 -ml-4 gap-4 w-full flex-wrap">

                                        {products.map((product) => (
                                            <div
                                                key={product.id}
                                                className="flex flex-1 flex-col gap-4 rounded-xl bg-white dark:bg-slate-900/50 shadow-sm min-w-64 cursor-pointer"
                                            >
                                                <a
                                                    href={`/product?id=${product.id}`}
                                                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                                                    style={{ backgroundImage: `url("${product?.images[0].href}")` }}>
                                                </a>
                                                <div className="flex flex-col flex-1 justify-between max-h-xl p-4 pt-0 gap-4">
                                                    <div>
                                                        <a
                                                            href={`/product?id=${product?.id}`}
                                                            className="text-slate-900 dark:text-slate-50 text-base font-medium leading-normal hover:underline">
                                                            {product?.name}
                                                        </a>
                                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
                                                            ₹{product?.price}
                                                        </p>
                                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
                                                            <strong className="text-gray-300">Color:</strong> {product?.color?.name}
                                                            {product?.sizes?.length !== 0 && (
                                                                <>
                                                                    {" "}
                                                                    <strong className="text-gray-300">Size:</strong> {product?.sizes[0]?.label}
                                                                </>
                                                            )}
                                                        </p>
                                                    </div>
                                                    <button
                                                        onClick={() => handleAddCart(product)}
                                                        className="flex min-w-[84px] w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary hover:text-white transition-colors">
                                                        <span className="truncate">Add to Cart</span>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </section>

                            {/* Category Showcase Section */}
                            <section className="mb-12">
                                <h2 className="text-slate-900 dark:text-slate-50 text-2xl font-bold leading-tight tracking-tight px-0 pb-4 pt-5">Shop by Category</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {categoryItems.map((item, index) => (
                                        <a
                                            key={item.label}
                                            className="group relative flex h-80 items-end justify-start rounded-xl overflow-hidden text-white p-6"
                                            href={item.link + `?k=${Array.isArray(item.keywords) ? item.keywords.join("+") : item.keywords}`}
                                        >
                                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url('${item.image}')` }}></div>
                                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                                            <h3 className="relative z-10 text-2xl font-bold">{item.label}</h3>
                                        </a>
                                    ))}
                                </div>
                            </section>

                            {/* Value Proposition Section */}
                            <section className="mb-12 py-10 bg-slate-100 dark:bg-slate-900/50 rounded-xl">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-6">
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="text-primary">
                                            <span className="material-symbols-outlined text-4xl!">local_shipping</span>
                                        </div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Free Shipping</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Enjoy free shipping on all orders over ₹50. No hidden fees.</p>
                                    </div>
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="text-primary">
                                            <span className="material-symbols-outlined text-4xl!">recycling</span>
                                        </div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Sustainable Materials</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">We're committed to using eco-friendly materials in our products.</p>
                                    </div>
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="text-primary">
                                            <span className="material-symbols-outlined text-4xl!">assignment_return</span>
                                        </div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Easy Returns</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Not satisfied? Return your items within 30 days for a full refund.</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}