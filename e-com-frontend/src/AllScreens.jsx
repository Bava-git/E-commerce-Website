// import CheckoutPaymentPage from './components/bin/CheckoutPaymentPage'
import CheckoutShippingInfoPage from './CheckoutShippingInfoPage'
// import CheckoutShippingMethodPage from './components/bin/CheckoutShippingMethodPage'
import CreateAccountPage from './CreateAccountPage'
import CustomerDashboard from './CustomerDashboard'
import GiftCardPurchasePage from './GiftCardPurchasePage'
import LoginPage from './LoginPage'
import MyOrdersPage from './MyOrdersPage'
import OrderConfirmationPage from './OrderConfirmationPage'
import OrderReviewPage from './OrderReviewPage'
import ShipmentTrackingPage from './ShipmentTrackingPage'
import ShoppingCartPage from './ShoppingCartPage'

const AllScreens = () => {
    return (
        <>
            {/* <ShoppingCartPage /> */}
            {/* <CheckoutShippingInfoPage /> */}
            {/* <CheckoutShippingMethodPage /> */}
            {/* <CheckoutPaymentPage /> */}
            <OrderReviewPage />
            <OrderConfirmationPage />
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