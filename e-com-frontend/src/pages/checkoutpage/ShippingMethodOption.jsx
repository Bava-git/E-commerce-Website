import { format } from 'date-fns';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
import { shippingOptions } from './CheckoutPage';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const ShippingMethodOption = ({ selectedShippingMethod, setSelectedShippingMethod }) => {

    return (
        <div className="flex flex-col gap-4">

            {/* Shipping Options Heading */}
            <h1 className="text-3xl lg:text-3xl font-black text-white tracking-tighter mx-2 my-10" > Choose a Delivery Option</h1 >
            {shippingOptions.map(option => (
                <label key={option.id}
                    className={`flex cursor-pointer items-start gap-4 rounded-xl p-4 ring-offset-background-light dark:ring-offset-background-dark focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 transition-all 
                        ${(selectedShippingMethod.id === option.id)
                            ? 'border-2 border-primary bg-primary/5 dark:bg-primary/10'
                            : 'border border-border-light dark:border-border-dark bg-neutral-light dark:bg-neutral-dark'
                        }`}
                >
                    <input
                        className="mt-1 h-5 w-5 appearance-none rounded-full border-2 border-text-muted-light dark:border-text-muted-dark bg-transparent text-transparent 
                        checked:border-primary checked:bg-primary checked:bg-[image:--radio-dot-svg] focus:outline-none"
                        name="shipping_method"
                        type="radio"
                        checked={selectedShippingMethod.id === option.id}
                        onChange={() => setSelectedShippingMethod(option)}
                    />
                    <div className="flex grow flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-col">
                            <p className="font-bold text-text-light dark:text-text-dark">{option.name}</p>
                            <p className="text-sm text-white text-text-muted-light dark:text-text-muted-dark">Arrives by {format(option.eta || 0, 'dd MMM yyyy')}</p>
                        </div>
                        <p className="mt-1 text-sm font-bold text-text-light dark:text-text-dark sm:mt-0">{(option.price === 0) ? '' : `₹${option.price.toFixed(2)}`}</p>
                    </div>
                    {option.isPopular && (
                        <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
                            <span className="material-symbols-outlined !text-[16px]">star</span>
                            <span>Most Popular</span>
                        </div>
                    )}
                </label>
            ))}
        </div>
    );
};

export default ShippingMethodOption;