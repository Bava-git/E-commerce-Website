import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';



import './App.css'

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
import TestScreen from './TestScreen'
import AllScreens from './AllScreens'

import { Header, Footer } from './HeaderAndFooter'

function App() {

  return (
    <div className="bg-white dark:bg-background-dark">
      <Header links={dealsLinks} />
      <BrowserRouter>
        <Routes>
          <Route path='/testscreen' element={<TestScreen />} />
          <Route path='/allscreens' element={<AllScreens />} />
          <Route path='/*' element={<NotFoundPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/productlist' element={<ProductListingPage />} />
          <Route path='/cart' element={<ShoppingCartPage />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/products' element={<CheckoutShippingMethodPage />} />
          {/* <CheckoutShippingMethodPage />
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
          <NotFoundPage /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App

export const dealsLinks = [
  { title: "New Arrivals", links: "#" },
  { title: "Today's Deals", links: "#" },
  { title: "Men", links: "#" },
  { title: "Women", links: "#" },
  { title: "Best Sellers", links: "#" },
  { title: "Gift Cards", links: "#" },
  { title: "Browsing History's", links: "#" },
];
