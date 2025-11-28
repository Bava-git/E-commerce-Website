import HomePage from './HomePage'
import ProductListingPage from './ProductListingPage'
import ShoppingCartPage from './ShoppingCartPage'
import ProductPage from './ProductPage'
import CheckoutShippingMethodPage from './CheckoutShippingMethodPage'
import CheckoutShippingInfoPage from './CheckoutShippingInfoPage'
import OrderConfirmationPage from './OrderConfirmationPage'
import CheckoutPaymentPage from './CheckoutPaymentPage'
import OrderReviewPage from './OrderReviewPage'
import MyOrdersPage from './MyOrdersPage'
import LoginPage from './LoginPage'
import CreateAccountPage from './CreateAccountPage'
import CustomerDashboard from './CustomerDashboard'
import WishlistPage from './WishlistPage'
import ShipmentTrackingPage from './ShipmentTrackingPage'
import GiftCardPurchasePage from './GiftCardPurchasePage'
import ReturnsAndShippingPage from './ReturnsAndShippingPage'
import HelpCenterPage from './HelpCenterPage'
import AboutUsPage from './AboutUsPage'
import ContactUsPage from './ContactUsPage'
import NotFoundPage from './NotFoundPage'

const AllScreens = () => {
    return (
        <>
            <HomePage />
            <CheckoutShippingMethodPage />
            <ShoppingCartPage />
            <ProductPage />
            <div>h</div>
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
            <WishlistPage />
            <ShipmentTrackingPage />
            <GiftCardPurchasePage />
            <ReturnsAndShippingPage />
            <HelpCenterPage />
            <AboutUsPage />
            <ContactUsPage />
            <NotFoundPage />
        </>
    )
}
export default AllScreens;