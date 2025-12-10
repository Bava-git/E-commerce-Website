import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
import { cartList } from '../../utilities/rawData';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const ProductCard = ({ product }) => {

    const { brand, name, price, averageRating, reviewCount } = product;
    const imageId = product?.images[0].href;
    const filledStars = Math.round(averageRating);
    const emptyStars = 5 - filledStars;
    const navigate = useNavigate();

    const handleAddCart = (product) => {
        const cartItem = {
            id: cartList?.length + 1,
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0].href,
            color: product.color.name,
            size: product?.sizes[0].value ?? "",
            quantity: 1,
        }
        // connectTo.addToArray(cartList, cartItem);
        cartList.push(cartItem);
        toast.success("Product added in cart");
    };

    return (
        <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark transition-shadow hover:shadow-lg">
            <div className="aspect-square w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                    className="cursor-pointer h-full w-full object-cover object-center transition-transform group-hover:scale-105"
                    alt={`${name} by ${brand}`}
                    src={imageId}
                    onClick={() => navigate(`/product?id=${product.id}`)}
                />
            </div>
            <div className="flex flex-1 flex-col p-4">
                <h3 className="text-sm font-medium text-muted-light dark:text-muted-dark">{brand}</h3>
                <p
                    onClick={() => navigate(`/product?id=${product.id}`)}
                    className="mt-1 font-semibold cursor-pointer hover:underline">{name}</p>
                <div className="mt-2 flex items-center gap-1">
                    {[...Array(filledStars)].map((_, i) => (
                        <span key={`filled-${i}`} className="material-symbols-outlined text-yellow-500 text-base!" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                    {[...Array(emptyStars)].map((_, i) => (
                        <span key={`empty-${i}`} className="material-symbols-outlined text-gray-300 dark:text-gray-600 text-base!" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                    <span className="ml-1 text-xs text-muted-light dark:text-muted-dark">({reviewCount})</span>
                </div>
                <p className="mt-4 text-lg font-bold">₹{price.toFixed(2)}</p>
                <div className="transform transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                    <button
                        onClick={() => handleAddCart(product)}
                        className="cursor-pointer w-max rounded-lg bg-primary p-2.5 text-sm font-semibold text-white hover:bg-primary/90
                        absolute bottom-0 right-3 translate-y-full transform transition-transform  group-hover:translate-y-0">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;