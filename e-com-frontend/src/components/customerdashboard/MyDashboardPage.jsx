import { useEffect, useState } from "react";
import { toast } from "sonner";
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
import { cartList, myWishlist, paymentInfo } from "../../utilities/rawData";
import * as connectTo from '../../utilities/reusables';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// --- Main Page Component ---
const MyDashboardPage = () => {

    const inputClasses = "block w-full rounded-lg border-gray-300 dark:border-gray-700 dark:text-white bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary text-sm";
    const labelClasses = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1";

    const [paymentInfoCopy, setPaymentInfoCopy] = useState(paymentInfo);
    const [myWichlistCopy, setMyWichlistCopy] = useState(myWishlist);
    const [cartListCopy, setCartListCopy] = useState(cartList);

    const handleToggleW_C = (product) => {

        let ifAvaiable = false;
        cartListCopy.forEach(item => {
            if (item.productId === product.productId) {
                item.quantity = item.quantity + 1;
                ifAvaiable = true;
            }
        });

        if (ifAvaiable) {
            setMyWichlistCopy(connectTo.delFromArray(myWichlistCopy, "productId", product.productId));
            toast.success("Product added in cart");
            return;
        }

        const cartItem = {
            id: cartList?.length + 1,
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            color: product.color,
            size: product.size || "",
            quantity: 1
        };
        setCartListCopy(connectTo.addToArray(cartListCopy, cartItem));
        setMyWichlistCopy(connectTo.delFromArray(myWichlistCopy, "productId", product.productId));
        toast.success("Product added in cart");
    };

    const handleToggleC_W = (product) => {

        let ifAvaiable = false;
        myWichlistCopy.forEach(item => {
            if (item.productId === product.productId) {
                ifAvaiable = true;
            }
        });

        if (ifAvaiable) {
            setCartListCopy(connectTo.delFromArray(cartListCopy, "productId", product.productId));
            toast.success("Product added in wishlist");
            return;
        }

        const wishlistItem = {
            id: myWishlist?.length + 1,
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            color: product.color,
            size: product.size || "",
        };
        setMyWichlistCopy(connectTo.addToArray(myWichlistCopy, wishlistItem));
        setCartListCopy(connectTo.delFromArray(cartListCopy, "productId", product.productId));
        toast.success("Product added in wishlist");
    };

    const [toggleMyWishlist, setToggleMyWishlist] = useState(false);
    const [toggleMyCart, setToggleMyCart] = useState(false);

    const handleDefault = (card) => {
        const updatedPaymentInfo = paymentInfoCopy.map(item => {
            if (item.id === card.id) {
                return { ...item, isDefault: true };
            } else {
                return { ...item, isDefault: false };
            }
        });
        setPaymentInfoCopy(updatedPaymentInfo);
    };

    const [showFrom, setShowFrom] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        id: "",
        cardNumber: "",
        cardHolderName: "",
        cardExpirationDate: "",
        cardCVVNumber: "",
        paymentType: 'Credit Card',
        isDefault: false,
    });

    const handleFormData = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const cardNumberRegex = /^\d{16}$/;
        const expirationDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        const cardCVVRegex = /^\d{3}$/;

        if (!cardNumberRegex.test(formData?.cardNumber)) {
            toast.error("Invaild card number..!");
            return;
        }
        if (!expirationDateRegex.test(formData?.cardExpirationDate)) {
            toast.error("Invaild Expiration Date..!");
            return;
        }
        if (!cardCVVRegex.test(formData?.cardCVVNumber)) {
            toast.error("Invaild CVV number..!");
            return;
        }

        let sendData = {
            id: editMode ? formData.id : paymentInfoCopy?.length + 1,
            cardNumber: formData?.cardNumber,
            cardHolderName: formData?.cardHolderName,
            cardExpirationDate: formData?.cardExpirationDate,
            cardCVVNumber: formData?.cardCVVNumber,
            paymentType: editMode ? formData.paymentType : 'Credit Card',
            isDefault: editMode ? formData.isDefault : false,
        };

        const hasErrors = Object.keys(sendData).some(
            (key) => sendData[key] === '' || sendData[key] == null
        );
        if (hasErrors) {
            toast.error('Please fill the form correctly');
            return;
        }
        if (editMode) {
            setPaymentInfoCopy(connectTo.updateToArray(paymentInfoCopy, "id", sendData.id, sendData));
            toast.success("Card information updated successfully");
        } else {
            setPaymentInfoCopy(connectTo.addToArray(paymentInfoCopy, sendData));
            toast.success("New card added successfully");
        }
        setShowFrom(false);
    };

    const handleEdit = (card) => {
        setFormData({
            id: card.id,
            cardNumber: card.cardNumber,
            cardHolderName: card.cardHolderName,
            cardExpirationDate: card.cardExpirationDate,
            paymentType: card.paymentType,
            isDefault: card.isDefault,
        });
        setShowFrom(true);
        setEditMode(true);
    };

    useEffect(() => {
        if (!showFrom) {
            setFormData({
                id: "",
                cardNumber: "",
                cardHolderName: "",
                cardExpirationDate: "",
                cardCVVNumber: "",
                paymentType: 'Credit Card',
                isDefault: false,
            });
        }
    }, [showFrom]);

    const handleDelete = (card) => {
        const deleteArr = connectTo.delFromArray(paymentInfoCopy, "id", card.id);
        setPaymentInfoCopy(deleteArr);
        toast.success("Card removed successfully");
        paymentInfoCopy.map((item) => {
            if (item.isDefault === false) {
                handleDefault(item);
                return;
            }
        });
    };

    return (
        <main className="flex-1 w-full m-1">
            <div className="mt-8 bg-white dark:bg-[#1C2A3A] dark:text-white p-6 rounded-xl shadow-sm m-5">
                <div className="flex justify-between items-center mb-4 dark:text-white">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Saved Payment Methods</h3>
                    <button
                        onClick={() => { setShowFrom(true); setEditMode(false); }}
                        className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium leading-normal hover:bg-primary/90 transition-colors">
                        <span className="material-symbols-outlined text-base">add</span>
                        <span className="truncate">Add New Card</span>
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    {paymentInfoCopy.map((card, index) => (
                        <div
                            className="flex items-center justify-between p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                            <div className="flex items-center gap-4">
                                <img
                                    className="h-10"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACOElEQVR4nO2cu24UMRRA3cB+A/AHIVS0yFd0qcBXiF+gBiSgJ7QgokRQboto47sUPKT0dECTPwAqEspFgxwUlAKJeCYrjz3nSKfclX3P7szuFHYOAAAAAAAAAAAAAAAAAJxz/qZdkWBbPsTPXuNPUevQ/ppmkmYjGp+L7q6f2eA3NhYzr/GFBPtVepNSiT7YUkLcWbv9+vzg4UuwD6U3JLUa4vtBEbzGl8U3oXXrNW4PueZz2dGBAYItr996czk7QLrhll68NKIP9iw/gMYvpRcujeiDfcoO4EM8LL1waceDHt+A4ovuWpIASoBJ6whgBJiyjgDWdoBH9x933xcXum5vdiq/2cXu4b3N/77v/NX+KB1dgDTQ0w7/2K/xEgHOKkDu8I8VAhBgTgAjAAH2CSAEIMCcANakBNDGA6zqj5g04soDpMcKORHS8B/cfVJ8MM0EQCOAjFgCKAEmrSOAEWDKOgIYAaasW3WAoY8guspfT4A9AlQ9wI4As6pfXzwAGgFkxBJACTBpHQGMAFPWrTpA7s+4ocoIhkoArUcCKAEIkEPpBUtjZg2fAEYAaUwCaH0BDkovWpox/ugRgONqpORxNX9O/yu/eGnC+LRHgN31o9P/ii/eqjbN8NqNxVp2gKMIIe6U3oDUbrAt15d05KLX+K74JrROfbC3V+98PNc7wIkI21yOLGfwy/TJHzz8k6SjF9Ppf+mOznly9o+hx8M0m3TD7X3NBwAAAAAAAAAAAAAAAHCt8RteAS9hhyrYLAAAAABJRU5ErkJggg=="
                                    alt="bank-card-front-side"></img>
                                <div className="flex flex-col">
                                    <p className="text-neutral-900 dark:text-white font-medium">Visa ending in {card.cardNumber.substring(card.cardNumber.length - 4)}</p>
                                    <p className="text-neutral-800 dark:text-neutral-600 text-sm">Expires {card.cardExpirationDate}</p>
                                </div>
                                {card.isDefault && <span
                                    className="bg-primary/10 text-primary font-medium text-xs px-2 py-1 rounded-full">Default</span>}
                            </div>
                            <div className="flex items-center gap-2">
                                {!card.isDefault && <button
                                    onClick={() => handleDefault(card)}
                                    className="text-primary hover:underline font-medium text-sm">Set as Default</button>}
                                <button
                                    onClick={() => handleEdit(card)}
                                    className="text-primary hover:underline font-medium text-sm">Edit</button>
                                <button
                                    onClick={() => handleDelete(card)}
                                    className="text-red-600 dark:text-red-400 hover:underline font-medium text-sm">Remove</button>
                            </div>
                        </div>
                    ))}
                    {showFrom &&
                        <>
                            <h2 className="mt-6 text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] mb-4">Card Information</h2>
                            <form onSubmit={handleSubmit} onReset={() => setShowFrom(false)} className="space-y-4">
                                <div className="grid grid-cols-1 gap-4">
                                    <div>
                                        <label className={labelClasses} htmlFor="card-number">Card Number</label>
                                        <div className="relative">
                                            <input
                                                onChange={handleFormData}
                                                className={inputClasses} defaultValue={formData.cardNumber} id="card-number" placeholder="0000 0000 0000 0000" type="number" name='cardNumber' />
                                            <span className="bg-background-light dark:bg-background-dark material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">credit_card</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className={labelClasses} htmlFor="card-name">Name on Card</label>
                                        <input
                                            onChange={handleFormData}
                                            className={inputClasses} defaultValue={formData.cardHolderName} id="card-name" placeholder="John Doe" type="text" name='cardHolderName' />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className={labelClasses} htmlFor="expiry-date">Expiration Date</label>
                                            <input
                                                onChange={handleFormData}
                                                className={inputClasses} defaultValue={formData.cardExpirationDate} id="expiry-date" placeholder="MM/YY" type="text" name='cardExpirationDate' />
                                        </div>
                                        <div>
                                            <label className={labelClasses} htmlFor="cvv">
                                                CVV
                                                <span className="material-symbols-outlined text-xs align-middle text-gray-400 cursor-help" title="3-4 digit code on the back of your card">help</span>
                                            </label>
                                            <input
                                                onChange={handleFormData}
                                                className={inputClasses} defaultValue={formData.cardCVVNumber} id="cvv" placeholder="123" type="password" name='cardCVVNumber' />
                                        </div>
                                    </div>
                                    <div className="flex justify-around">
                                        <button
                                            className="cursor-pointer px-4 py-2 my-3 rounded-lg bg-slate-200/80 dark:bg-gray-500 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-300/80 dark:hover:bg-gray-600 transition-colors"
                                            type='reset'
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className="cursor-pointer px-4 py-2 my-3 rounded-lg bg-slate-200/80 dark:bg-primary text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-300/80 dark:hover:bg-primary/60 transition-colors"
                                            type='submit'
                                        >
                                            {editMode ? 'Update Card' : 'Add Card'}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </>
                    }
                </div>
            </div>
            <details className="list-none m-5" open={toggleMyWishlist} onToggle={() => setToggleMyWishlist(!toggleMyWishlist)}>
                <summary className="list-none cursor-pointer">
                    <header className="dark:bg-[#1C2A3A] p-4 shadow-sm rounded-2xl text-center">
                        <span className="material-symbols-outlined dark:text-white">favorite</span>
                        <p className="dark:text-white font-medium">My Wishlist ({myWichlistCopy?.length})</p>
                    </header>
                </summary>
                <div className="m-5 p-2 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
                    <section className="flex flex-1 flex-wrap justify-center items-center flex-row gap-5 overflow-hidden">
                        {myWichlistCopy?.length != 0 ?
                            (myWichlistCopy.map((item) => (
                                <div key={item.id} className="flex flex-col m-3 justify-between">
                                    <div className="rounded-lg overflow-hidden size-40">
                                        <img
                                            src={item.image}
                                            alt={`A photo of a ${item.name}`}
                                            className="size-40 object-contain"
                                        />
                                    </div>
                                    <p className="dark:text-white mt-2">{item.name}</p>
                                    <div className="flex justify-between items-end flex-row">
                                        <div className="flex flex-col">
                                            <p className="dark:text-white my-1">₹{item.price}</p>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
                                                <strong className="text-gray-300">Color:</strong> <span>{item?.color}</span>
                                                <br />
                                                {item?.size && <><strong className="text-gray-300">Size:</strong> <span>{item?.size}</span></>}
                                            </p>
                                        </div>
                                        <div className="relative">
                                            <button
                                                onClick={() => handleToggleW_C(item)}
                                                className="m-2 flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                                <span className="material-symbols-outlined text-xl">shopping_cart</span>
                                                <span className="absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">+</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )))
                            :
                            (
                                <div className="flex-1 text-center py-6 px-6">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">You have no wish item</h2>
                                    <p className="text-slate-600 dark:text-slate-400">Looks like you haven't made any plans yet. <a href="/" className="text-blue-500 cursor-pointer">Let's change that!</a></p>
                                </div>
                            )
                        }
                    </section>
                </div>
            </details>
            <details className="list-none m-5" open={toggleMyCart} onToggle={() => setToggleMyCart(!toggleMyCart)}>
                <summary className="list-none cursor-pointer">
                    <header className="dark:bg-[#1C2A3A] p-4 shadow-sm rounded-2xl text-center">
                        <span className="material-symbols-outlined dark:text-white">shopping_cart</span>
                        <p className="dark:text-white font-medium">My Cart ({cartListCopy?.length})</p>
                    </header>
                </summary>
                <div className="m-5 p-2 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
                    <section className="flex flex-1 flex-wrap justify-center items-center flex-row gap-5 overflow-hidden">
                        {cartListCopy?.length != 0 ?
                            (cartListCopy.map((item) => (
                                <div key={item.id} className="flex flex-col m-3 justify-between">
                                    <div className="rounded-lg overflow-hidden size-40">
                                        <img
                                            src={item.image}
                                            alt={`A photo of a ${item.name}`}
                                            className="size-40 object-contain"
                                        />
                                    </div>
                                    <p className="dark:text-white mt-2">{item.name}</p>
                                    <div className="flex justify-between items-end flex-row">
                                        <div className="flex flex-col">
                                            <p className="dark:text-white my-1">₹{item.price} Q-{item.quantity}</p>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
                                                <strong className="text-gray-300">Color:</strong> <span>{item?.color}</span>
                                                <br />
                                                {item?.size && <><strong className="text-gray-300">Size:</strong> <span>{item?.size}</span></>}
                                            </p>
                                        </div>
                                        <div className="relative">
                                            <button
                                                onClick={() => handleToggleC_W(item)}
                                                className="m-2 flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                                <span className="material-symbols-outlined text-xl">favorite</span>
                                                <span className="absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">+</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )))
                            :
                            (
                                <div className="flex-1 text-center py-6 px-6">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">You have no cart item</h2>
                                    <p className="text-slate-600 dark:text-slate-400">Looks like you haven't made any plans yet. <a href="/" className="text-blue-500 cursor-pointer">Let's change that!</a></p>
                                </div>
                            )
                        }
                    </section>
                </div>
            </details>
        </main >
    );
};

export default MyDashboardPage;