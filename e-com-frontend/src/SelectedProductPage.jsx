import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
import { faqItems } from "./components/general/HelpCenterPage";
import { cartList, myWishlist, products } from './utilities/rawData';
import * as connectTo from './utilities/reusables';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
//-- Main Components --
const SelectedProductPage = () => {

    const [allProducts, setAllProducts] = useState(products);
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id");
    const [productId, setProductId] = useState(id);
    const productData = connectTo.oneItemFromArray(allProducts, "id", productId);
    productData.color.selected = true;

    useEffect(() => {
        const groupId = productData.groupId;
        const localData = allProducts.filter(product => product?.groupId === groupId);
        setAllProducts(localData);
    }, []);

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark min-h-screen">
            <div className="relative flex h-auto min-h-screen w-full flex-col">
                <main className="container mx-auto px-4 py-8 sm:py-12">
                    <div className="flex flex-col gap-8">

                        {/* Product Section: Gallery + Details */}
                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                            <ProductGallery images={productData.images} />
                            <ProductDetails product={productData} allProducts={allProducts} setProductId={setProductId} />
                        </div>

                        {/* Customer Reviews Section */}
                        <ReviewSection
                            averageRating={productData.averageRating}
                            totalReviews={productData.reviewCount}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default SelectedProductPage;
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
//-- Sub Components --
const ProductInfoTabs = ({ product }) => {
    const tabs = ['Specifications', 'Shipping & Returns'];
    const [activeTab, setActiveTab] = useState('Specifications');

    return (
        <div className="pt-12">
            <div className="border-b border-gray-200 dark:border-gray-700">
                <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium transition-colors cursor-pointer select-none
                                ${tab === activeTab
                                    ? 'border-primary text-primary'
                                    : 'border-transparent text-text-secondary-light dark:text-text-secondary-dark hover:border-gray-300 dark:hover:border-gray-600 hover:text-text-light dark:hover:text-text-dark'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>

            <div className="py-5">
                {activeTab === "Specifications" && (
                    <div className="space-y-0">
                        <div className="my-5 flex flex-wrap gap-2 flex-col">
                            <div className={`flex gap-2 px-6 py-4 w-full bg-white dark:bg-background-dark border-b border-gray-200 dark:border-gray-700 last:border-b-0`}
                            >
                                <span className="break-words whitespace-normal font-medium text-text-light dark:text-text-dark min-w-[200px]">
                                    Product Name
                                </span>
                                <span className="break-words whitespace-normal text-text-secondary-light dark:text-text-secondary-dark">
                                    {product?.name}
                                </span>
                            </div>
                            <div className={`flex gap-2 px-6 py-4 w-full bg-white dark:bg-background-dark border-b border-gray-200 dark:border-gray-700 last:border-b-0`}
                            >
                                <span className="break-words whitespace-normal font-medium text-text-light dark:text-text-dark min-w-[200px]">
                                    Brand
                                </span>
                                <span className="break-words whitespace-normal text-text-secondary-light dark:text-text-secondary-dark">
                                    {product?.brand}
                                </span>
                            </div>
                            <div className={`flex gap-2 px-6 py-4 w-full bg-white dark:bg-background-dark border-b border-gray-200 dark:border-gray-700 last:border-b-0`}
                            >
                                <span className="break-words whitespace-normal font-medium text-text-light dark:text-text-dark min-w-[200px]">
                                    Color
                                </span>
                                <span className="break-words whitespace-normal text-text-secondary-light dark:text-text-secondary-dark">
                                    {product?.color.name}
                                </span>
                            </div>
                            <div className={`flex gap-2 px-6 py-4 w-full bg-white dark:bg-background-dark border-b border-gray-200 dark:border-gray-700 last:border-b-0`}
                            >
                                <span className="break-words whitespace-normal font-medium text-text-light dark:text-text-dark min-w-[200px]">
                                    Customer Review
                                </span>
                                <span className="break-words whitespace-normal text-text-secondary-light dark:text-text-secondary-dark">
                                    <div className="flex gap-1">

                                        {product?.averageRating.toFixed(1)}
                                        {renderStars(product?.averageRating)}
                                        {` (${product?.reviewCount})`}
                                    </div>
                                </span>
                            </div>
                            {product?.specifications.slice(0, (product?.specifications.length - 1)).map((spec, index) => (
                                <div
                                    key={index}
                                    className="flex gap-2 px-6 py-4 w-full bg-white dark:bg-background-dark border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                                >
                                    <span className="break-words whitespace-normal font-medium text-text-light dark:text-text-dark min-w-[200px]">
                                        {spec.label}
                                    </span>
                                    <span className="break-words whitespace-normal text-text-secondary-light dark:text-text-secondary-dark">
                                        {spec.value}
                                    </span>
                                </div>

                            ))}
                        </div>
                        <details
                            className="group border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                        >
                            <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-4 bg-gray-50 dark:bg-surface-dark font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="text-text-light dark:text-text-dark">About this product</span>
                                <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="px-6 py-4 bg-white dark:bg-background-dark text-text-secondary-light dark:text-text-secondary-dark">
                                {product?.specifications.slice(-1)[0].value.map((item) => (
                                    <p key={item} className="mb-2">• {item}</p>
                                ))
                                }
                            </div>
                        </details>
                    </div>
                )}

                {activeTab === "Shipping & Returns" && (
                    <div className="space-y-3">
                        {faqItems.slice(0, 2).map((item, index) => (
                            <details
                                key={index}
                                className="group border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                            >
                                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-4 bg-gray-50 dark:bg-surface-dark font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <span className="text-text-light dark:text-text-dark">{item.category}</span>
                                    <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark transition-transform group-open:rotate-180">expand_more</span>
                                </summary>
                                <div className="px-6 py-4 bg-white dark:bg-background-dark text-text-secondary-light dark:text-text-secondary-dark">
                                    {item.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const ProductGallery = ({ images }) => {
    // In a real application, you'd manage the selected image index here
    const [selectedImageId, setSelectedImageId] = useState(images[0]?.id);
    const mainImage = images.find(img => img.id === selectedImageId) || images[0];

    return (
        <div className="flex flex-col gap-4 lg:sticky lg:top-5 self-start">

            {/* Main Image */}
            <div
                className="w-full h-100 bg-center bg-no-repeat aspect-square bg-cover rounded-xl bg-gray-100 dark:bg-surface-dark"
                // style={{ backgroundImage: `url("${getImageUrl(mainImage.id)}")` }}
                style={{ backgroundImage: `url("${mainImage.href}")` }}
                data-alt={mainImage.alt}
            />

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-4">
                {images.map((image) => (
                    <div key={image.id} className="flex flex-col">
                        <div
                            className={`w-full cursor-pointer bg-center bg-no-repeat aspect-square bg-cover rounded-lg transition-all bg-gray-100 dark:bg-surface-dark 
                                ${image.id === selectedImageId
                                    ? 'ring-2 ring-primary'
                                    : 'hover:ring-2 hover:ring-primary/50'
                                }`}
                            // style={{ backgroundImage: `url("${getImageUrl(image.id)}")` }}
                            style={{ backgroundImage: `url("${image.href}")` }}
                            data-alt={image.alt}
                            onClick={() => setSelectedImageId(image.id)}
                        />
                    </div>
                ))}
            </div>

        </div>
    );
};
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const ProductDetails = ({ product, allProducts, setProductId }) => {

    const [quantity, setQuantity] = useState(1);
    const colors = allProducts.map(pro => pro.color);
    const sizes = product?.sizes;
    const [selectedColor, setSelectedColor] = useState(product?.color.selected ? product.color.name : "");
    const [selectedSize, setSelectedSize] = useState(sizes.find(s => s.selected)?.value);
    const Navigate = useNavigate();

    const handleQuantityChange = (delta) => {
        setQuantity(prev => Math.max(1, prev + delta));
    };

    const handleAddWishlist = (product) => {
        const wishlistItem = {
            id: myWishlist?.length + 1,
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0].href,
            color: selectedColor,
            size: selectedSize || "",
        }
        connectTo.addToArray(myWishlist, wishlistItem);
        toast.success("Product added in wishlist");
        Navigate("/wishlist")
    };

    const handleAddCart = (product) => {
        const cartItem = {
            id: cartList?.length + 1,
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0].href,
            color: selectedColor,
            size: selectedSize || "",
            quantity
        }
        connectTo.addToArray(cartList, cartItem);
        toast.success("Product added in cart");
    };

    const [isDiscount, setIsDiscount] = useState(false);
    useEffect(() => {
        if (product.price > 1000) {
            setIsDiscount(true);
        }
    }, [product.price]);

    const generaterandomdiscount = (price) => {
        const discount = Math.floor(Math.random() * 201) + 50; // Random discount between 50 and 250
        const discountedPrice = price - discount;
        if (discountedPrice < 0) {
            price -= 1;
            return price.toFixed(2);
        }
        return discountedPrice.toFixed(2);
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-md font-bold tracking-tight text-text-light dark:text-text-dark sm:text-4xl">
                    {product.name}
                </h1>
                <p className="text-base text-text-secondary-light dark:text-text-secondary-dark">
                    {product.tagline}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 pt-2">
                    <p className="text-text-secondary-light dark:text-text-secondary-dark">
                        {product.averageRating.toFixed(1)}
                    </p>
                    {renderStars(product.averageRating)}
                    <a
                        href="#reviews"
                        className="text-sm cursor-pointer font-medium text-text-secondary-light dark:text-text-secondary-dark hover:underline"
                    >
                        ({product.reviewCount} reviews)
                    </a>
                </div>

            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
                <p className={`text-xl text-text-light dark:text-text-dark ${isDiscount ? 'line-through decoration-red-500 font-base' : 'font-semibold'}`}>
                    ₹{product.price.toFixed(2)}
                </p>
                {isDiscount && <p className={`text-xl font-semibold text-text-light dark:text-text-dark`}>
                    ₹{generaterandomdiscount(product.price)}
                </p>}
            </div>

            <div className="flex flex-col gap-4">

                {/* Color Selection */}
                {colors?.length > 1 &&
                    (<div>
                        <label className="text-sm font-medium text-text-light dark:text-text-dark" htmlFor="color">
                            Color
                        </label>
                        <div className="mt-2 flex items-center gap-3" id="color">
                            {colors.map(color => (
                                <button
                                    key={color.id}
                                    className={`cursor-pointer size-8 rounded-full ${color.hex} ${selectedColor === color.name
                                        ? 'ring-2 ring-primary ring-offset-2 ring-offset-background-light dark:ring-offset-background-dark'
                                        : 'hover:ring-2 hover:ring-primary/50'
                                        }`}
                                    onClick={() => {
                                        setSelectedColor(color.name);
                                        setProductId(color.id);
                                    }}
                                    aria-label={`Select color ${color.name}`}
                                ></button>
                            ))}
                        </div>
                    </div>)
                }

                {/* Size Selection */}
                {sizes?.length > 1 &&
                    (<div>
                        <label className="text-sm font-medium text-text-light dark:text-text-dark" htmlFor="size">Size</label>
                        <select
                            className="cursor-pointer mt-2 block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-surface-light dark:bg-surface-dark py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                            id="size"
                            value={selectedSize}
                            onChange={(e) => setSelectedSize(e.target.value)}
                        >
                            {sizes.map(size => (
                                <option key={size.value} value={size.value}>{size.label}</option>
                            ))}
                        </select>
                    </div>)
                }

            </div>

            {/* Quantity and CTA */}
            <div className="flex flex-col gap-4 sm:flex-row">
                {/* Quantity Control */}
                <div className="flex items-center rounded-lg border border-gray-300 dark:border-gray-600">
                    <button
                        className="cursor-pointer px-3 py-2 text-text-secondary-light dark:text-text-secondary-dark hover:text-text-light dark:hover:text-text-dark rounded-l-lg"
                        onClick={() => handleQuantityChange(-1)}
                    >-</button>
                    <input
                        className="w-12 border-0 bg-transparent text-center focus:ring-0"
                        type="text"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, Number(e.target.value) || 1))}
                    />
                    <button
                        className="cursor-pointer px-3 py-2 text-text-secondary-light dark:text-text-secondary-dark hover:text-text-light dark:hover:text-text-dark rounded-r-lg"
                        onClick={() => handleQuantityChange(1)}
                    >+</button>
                </div>

                {/* Add to Cart Button */}
                <button
                    onClick={() => handleAddCart(product)}
                    className="cursor-pointer flex flex-1 items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors">
                    Add to cart
                </button>

                {/* Wishlist Button */}
                <button
                    onClick={() => handleAddWishlist(product)}
                    className="cursor-pointer flex h-[52px] w-[52px] items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-surface-dark transition-colors">
                    <span className="material-symbols-outlined">favorite</span>
                </button>

            </div>
            {/* Detailed Info Section (Tabs) */}
            <ProductInfoTabs
                product={product}
            />
        </div>
    );
};
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const reviews = [
    { id: 1, name: 'Sarah L.', rating: 5, comment: "Absolutely stunning watch! The quality is top-notch and it looks even better in person. I've received so many compliments on it.", avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTaE6RxuvoENwHaMNhnqPmUhvgSRjqxh0ZwliYOmk2HzvDeCQ1bGZYRyaj3dpmqs-9hhSzwmadNH4vA9Umitu_P65pMyj2nmZLb3i1oWCJhBWfwCKEMnQAZI3UitQX15Z64NDsXYZuvLWks6n4JVK1d1nQXTykn3URHt_nXcY6zR7JZ04_4tCR7aPmkDxaPdk4Qx-_UJ_lmXGxRsubsRP2Sov0DnqPofpVC73hel4KgWTb87HyMQYP3e82Fi3yMaXhjoLUL-GgrRI' },
    { id: 2, name: 'Mark C.', rating: 4, comment: "Great watch for the price. The leather is a bit stiff at first but softens up nicely. Very happy with my purchase.", avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrlbxrYt6y-rmPfxN0bxHaWO-jhrUp6IDUrH5XXYB09xad0buEuQ9gC3_GehAaj_sUzs0H36o1OAoXHOkBS2kYIXktTy_sX6mhPqUCAUIaQbR6D0uRasn8nRBU26ZyCCF_JJvJvNiMul3lok1tjHLEY4uSYmimmBDZGWc6-DMqQ_axqRFW4XRjRF-ScaRoY5RfajpfbV4rJi4eM0B25-u4b4Ox5gbylj9meuoA19SLJhG6Wu0p5gbMhK_uKn2sglbDFBxoIZ4fKHg' },
];
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const renderStars = (rating) => {

    return (
        <div className="flex items-center text-amber-400">
            {/* Full Stars */}
            {[...Array(Math.floor(rating))].map((_, i) => (
                <span
                    key={`full-${i}`}
                    className="material-symbols-outlined text-yellow-500 !text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                >
                    star
                </span>
            ))}

            {/* Half Star */}
            {rating % 1 >= 0.5 && (
                <span
                    className="material-symbols-outlined text-yellow-500 !text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                >
                    star_half
                </span>
            )}

            {/* Empty Stars */}
            {[...Array(5 - Math.round(rating))].map((_, i) => (
                <span
                    key={`empty-${i}`}
                    className="material-symbols-outlined text-yellow-500 !text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                >
                    star
                </span>
            ))}
        </div>
    );
};
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const ReviewSection = ({ averageRating, totalReviews }) => {
    return (
        <div className="pt-12" id="reviews">
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight">Reviews</h2>
                    <button className="rounded-lg bg-primary/10 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/20 transition-colors">
                        Write a review
                    </button>
                </div>

                {/* Summary Card */}
                <div className="flex flex-col gap-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-surface-light dark:bg-surface-dark p-6 sm:flex-row sm:items-center sm:gap-8">
                    <div className="flex flex-col items-center">
                        <p className="text-4xl font-bold">{averageRating.toFixed(1)}</p>
                        <div className="flex items-center text-amber-400">
                            {renderStars(averageRating)}
                        </div>
                        <p className="mt-1 text-sm text-text-secondary-light dark:text-text-secondary-dark">Based on {totalReviews} reviews</p>
                    </div>
                    {/* Progress bars for ratings would go here (omitted for brevity) */}
                    <div className="w-full flex-1 space-y-2">
                        {/* Example: <RatingProgressBar rating={5} count={50} total={121} /> */}
                        <p className='text-xs text-text-secondary-light dark:text-text-secondary-dark'>[Rating distribution chart placeholder]</p>
                    </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-8">
                    {reviews.map(review => (
                        <div key={review.id} className="flex gap-4">
                            <img alt={`${review.name}'s avatar`} className="h-10 w-10 rounded-full" src={review.avatar} />
                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <h4 className="font-semibold">{review.name}</h4>
                                    {renderStars(review.rating)}
                                </div>
                                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-2">
                                    {review.comment}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};