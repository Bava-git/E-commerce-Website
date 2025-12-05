import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Toaster } from 'sonner';


import './App.css'

import ProductListingPage from './ProductListingPage'
import ShoppingCartPage from './CartPage'
import ProductPage from './ProductPage'
import CheckoutPage from './CheckoutPage'
import OrderConfirmationPage from './ConfirmationPage'
import OrderReviewPage from './ReviewPage'
import MyOrdersPage from './MyOrdersPage'
import LoginPage from './LoginPage'
import CreateAccountPage from './CreateAccountPage'
import CustomerDashboard from './CustomerDashboard'
import WishlistPage from './WishlistPage'
import ShipmentTrackingPage from './ShipmentTrackingPage'
import GiftCardPurchasePage from './GiftCardPurchasePage'

// Bin -----------------------------------------------------------------------------
// import CheckoutShippingMethodPage from './components/bin/CheckoutShippingMethodPage'
// import CheckoutPaymentPage from './components/bin/CheckoutPaymentPage'

// General -----------------------------------------------------------------------------
import { Header, Footer } from './HeaderAndFooter'
import HomePage from './HomePage'
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
      <Toaster richColors duration={3000} position='top-right' />
      <BrowserRouter>
        <Routes>
          {/* Developer */}
          <Route path='/testscreen' element={<TestScreen />} />
          <Route path='/allscreens' element={<AllScreens />} />
          {/* READY */}
          <Route path='/' element={<HomePage />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/wishlist' element={<WishlistPage />} />
          <Route path='/cart' element={<ShoppingCartPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/confirmation' element={<OrderConfirmationPage />} />
          {/* General */}
          <Route path='/aboutus' element={<AboutUsPage />} />
          <Route path='/returninfo' element={<ReturnsAndShippingPage />} />
          <Route path='/helpcenter' element={<HelpCenterPage />} />
          <Route path='/contactus' element={<ContactUsPage />} />
          <Route path='/*' element={<NotFoundPage />} />
          {/* NOT-READY */}
          <Route path='/productlist' element={<ProductListingPage />} />
          <Route path='/dashboard' element={<CustomerDashboard />} />
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
