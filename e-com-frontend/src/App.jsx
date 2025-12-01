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

// General -----------------------------------------------------------------------------
import { Header, Footer } from './HeaderAndFooter'
import ReturnsAndShippingPage from './components/general/ReturnsAndShippingPage'
import HelpCenterPage from './components/general/HelpCenterPage'
import AboutUsPage from './components/general/AboutUsPage'
import ContactUsPage from './components/general/ContactUsPage'
import NotFoundPage from './components/general/NotFoundPage'

// Developer -----------------------------------------------------------------------------
import TestScreen from './TestScreen'
import AllScreens from './AllScreens'


function App() {

  return (
    <div className="bg-white dark:bg-background-dark">
      <Header links={dealsLinks} />
      <BrowserRouter>
        <Routes>
          {/* Developer */}
          <Route path='/testscreen' element={<TestScreen />} />
          <Route path='/allscreens' element={<AllScreens />} />
          {/* READY */}
          <Route path='/' element={<HomePage />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/wishlist' element={<WishlistPage />} />
          {/* General */}
          <Route path='/aboutus' element={<AboutUsPage />} />
          <Route path='/returninfo' element={<ReturnsAndShippingPage />} />
          <Route path='/helpcenter' element={<HelpCenterPage />} />
          <Route path='/contactus' element={<ContactUsPage />} />
          <Route path='/*' element={<NotFoundPage />} />
          {/* NOT-READY */}
          <Route path='/productlist' element={<ProductListingPage />} />
          <Route path='/cart' element={<ShoppingCartPage />} />
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
          <ShipmentTrackingPage />
          <GiftCardPurchasePage /> */}
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
