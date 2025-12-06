import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Toaster } from 'sonner';


import './App.css'

import SearchedProductsListingPage from './SearchedProductsListingPage'
import ShoppingCartPage from './CartPage'
import SelectedProductPage from './SelectedProductPage'
import CheckoutPage from './CheckoutPage'
import OrderConfirmationPage from './ConfirmationPage'
import OrderReviewPage from './ReviewPage'
import MyOrdersPage from './MyOrdersPage'
import LoginPage from './LoginPage'
import CreateAccountPage from './CreateAccountPage'
import CustomerDashboard from './CustomerDashboard'
import WishlistPage from './WishlistPage'
import ShipmentTrackingPage from './TrackingPage'
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
          <Route path='/loading' element={<loadingScreen />} />
          {/* General */}
          <Route path='/aboutus' element={<AboutUsPage />} />
          <Route path='/returninfo' element={<ReturnsAndShippingPage />} />
          <Route path='/helpcenter' element={<HelpCenterPage />} />
          <Route path='/contactus' element={<ContactUsPage />} />
          <Route path='/*' element={<NotFoundPage />} />
          {/* READY */}
          <Route path='/' element={<HomePage />} />
          <Route path='/signin' element={<LoginPage />} />
          <Route path='/signup' element={<CreateAccountPage />} />
          <Route path='/product' element={<SelectedProductPage />} />
          <Route path='/wishlist' element={<WishlistPage />} />
          <Route path='/cart' element={<ShoppingCartPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/confirmation' element={<OrderConfirmationPage />} />
          <Route path='/trackingshipment' element={<ShipmentTrackingPage />} />
          {/* NOT-READY */}
          <Route path='/dashboard' element={<CustomerDashboard />} />
          <Route path='/productlist' element={<SearchedProductsListingPage />} />
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

export const loadingScreen = () => {
  return (
    <div className="loader">
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
      <div className="bar4"></div>
      <div className="bar5"></div>
      <div className="bar6"></div>
      <div className="bar7"></div>
      <div className="bar8"></div>
      <div className="bar9"></div>
      <div className="bar10"></div>
      <div className="bar11"></div>
      <div className="bar12"></div>
    </div>
  );
}