import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// Import CSS
import './App.css';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// Common  -----------------------------------------------------------------------------
import { Footer, Header } from './HeaderAndFooter'; // NOT-IN-LAZY-LOAD
import HomePage from './HomePage'; // NOT-IN-LAZY-LOAD
// General Pages  -----------------------------------------------------------------------------
const AboutUsPage = lazy(() => import('./components/general/AboutUsPage'));
const ContactUsPage = lazy(() => import('./components/general/ContactUsPage'));
const HelpCenterPage = lazy(() => import('./components/general/HelpCenterPage'));
const NotFoundPage = lazy(() => import('./components/general/NotFoundPage'));
const ReturnsAndShippingPage = lazy(() => import('./components/general/ReturnsAndShippingPage'));
// Other Pages -----------------------------------------------------------------------------
const ShoppingCartPage = lazy(() => import('./CartPage'));
const CheckoutPage = lazy(() => import('./CheckoutPage'));
const OrderConfirmationPage = lazy(() => import('./ConfirmationPage'));
const CreateAccountPage = lazy(() => import('./CreateAccountPage'));
const CustomerDashboard = lazy(() => import('./CustomerDashboard'));
const LoginPage = lazy(() => import('./LoginPage'));
const SearchedProductsListingPage = lazy(() => import('./SearchedProductsListingPage'));
const SelectedProductPage = lazy(() => import('./SelectedProductPage'));
const ShipmentTrackingPage = lazy(() => import('./TrackingPage'));
const WishlistPage = lazy(() => import('./WishlistPage'));
// Developer -----------------------------------------------------------------------------
import AllScreens from './AllScreens';
import TestScreen from './TestScreen';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// Context -----------------------------------------------------------------------------
import { ProductProvider } from './components/context/ProductContext';

function App() {

  // console.log(document.documentElement.classList.contains('dark'));

  return (
    <div className="bg-background-light dark:bg-background-dark">
      <Toaster richColors duration={3000} position='top-right' />
      <ProductProvider>
        <BrowserRouter>
          <Header links={dealsLinks} />
          <Suspense element={<loadingScreen />}>
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
              {/* Customer Dashboard*/}
              <Route path='/dashboard' element={<CustomerDashboard section="dashboard" />} />
              <Route path='/orders' element={<CustomerDashboard section="orders" />} />
              <Route path='/addresses' element={<CustomerDashboard section="addresses" />} />
              <Route path='/giftcard' element={<CustomerDashboard section="giftcard" />} />
              <Route path='/profile' element={<CustomerDashboard section="profile" />} />
              <Route path='/preferences' element={<CustomerDashboard section="preferences" />} />
              {/* NOT-READY */}
              <Route path='/productlist' element={<SearchedProductsListingPage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ProductProvider>
      <Footer />
    </div >
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