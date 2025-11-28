import CheckoutPaymentPage from './CheckoutPaymentPage'
import CheckoutShippingInfoPage from './CheckoutShippingInfoPage'
import CheckoutShippingMethodPage from './CheckoutShippingMethodPage'
import CreateAccountPage from './CreateAccountPage'
import CustomerDashboard from './CustomerDashboard'
import GiftCardPurchasePage from './GiftCardPurchasePage'
import LoginPage from './LoginPage'
import MyOrdersPage from './MyOrdersPage'
import OrderConfirmationPage from './OrderConfirmationPage'
import OrderReviewPage from './OrderReviewPage'
import ProductListingPage from './ProductListingPage'
import ShipmentTrackingPage from './ShipmentTrackingPage'
import ShoppingCartPage from './ShoppingCartPage'
import WishlistPage from './WishlistPage'

const AllScreens = () => {
    return (
        <>
            <WishlistPage />
            <ShoppingCartPage />
            <ProductListingPage />
            <CheckoutShippingMethodPage />
            <CheckoutShippingInfoPage />
            <OrderConfirmationPage />
            <CheckoutPaymentPage />
            <OrderReviewPage />
            <MyOrdersPage />
            <LoginPage />
            <CreateAccountPage />
            <CustomerDashboard />
            <ShipmentTrackingPage />
            <GiftCardPurchasePage />
        </>
    )
}
export default AllScreens;