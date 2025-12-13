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
// Customer Dashboard -----------------------------------------------------------------------------
const CustomerDashboard = lazy(() => import('./components/customerdashboard/CustomerDashboard'));
const ShipmentTrackingPage = lazy(() => import('./components/customerdashboard/TrackingPage'));
// Credentials -----------------------------------------------------------------------------
const LoginPage = lazy(() => import('./components/credentials/LoginPage'));
const CreateAccountPage = lazy(() => import('./components/credentials/CreateAccountPage'));
// Other Pages -----------------------------------------------------------------------------
const ShoppingCartPage = lazy(() => import('./CartPage'));
const CheckoutPage = lazy(() => import('./components/checkoutpage/CheckoutPage'));
const OrderConfirmationPage = lazy(() => import('./components/checkoutpage/ConfirmationPage'));
const SearchedProductsListingPage = lazy(() => import('./SearchedProductsListingPage'));
const SelectedProductPage = lazy(() => import('./SelectedProductPage'));
const WishlistPage = lazy(() => import('./WishlistPage'));
// Developer -----------------------------------------------------------------------------
import AllScreens from './AllScreens';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// Context -----------------------------------------------------------------------------
import { ProductProvider } from './utilities/context/ProductContext';

function App() {

  return (
    <div className="bg-background-light dark:bg-background-dark">
      <Toaster richColors duration={3000} position='top-right' />
      <ProductProvider>
        <BrowserRouter>
          <Header links={dealsLinks} />
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              {/* Developer */}
              <Route path='/testscreen' element={<LoadingScreen />} />
              <Route path='/allscreens' element={<AllScreens />} />
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
              <Route path='/s' element={<SearchedProductsListingPage />} />
              {/* Customer Dashboard*/}
              <Route path='/dashboard' element={<CustomerDashboard section="dashboard" />} />
              <Route path='/orders' element={<CustomerDashboard section="orders" />} />
              <Route path='/addresses' element={<CustomerDashboard section="addresses" />} />
              <Route path='/giftcard' element={<CustomerDashboard section="giftcard" />} />
              <Route path='/profile' element={<CustomerDashboard section="profile" />} />
              <Route path='/preferences' element={<CustomerDashboard section="preferences" />} />
              {/* NOT-READY */}
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ProductProvider>
      <Footer links={dealsLinks} />
    </div >
  )
}

export default App

const dealsLinks = [
  { label: "Men", link: "/s", keywords: ["men", "mens", "unisex"], image: "/website/mens.jpg" },
  { label: "Women", link: "/s", keywords: ["women", "womens", "unisex"], image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2670&auto=format&fit=crop" },
  { label: "Accessories", link: "/s", keywords: ["accessories", "accessory"], image: "/website/electronic_accessories.jpg" },
  { label: "Sale", link: "/s", keywords: ["sale", "discount"], image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=2670&auto=format&fit=crop" },
  { label: "New Arrivals", link: "/s", keywords: ["new", "newarrivals"], image: "" },
  { label: "Today's Deals", link: "/s", keywords: ["deals", "todaysdeals"], image: "" },
  { label: "Best Sellers", link: "/s", keywords: ["bestsellers", "bestselling"], image: "" },
  { label: "Gift Cards", link: "/giftcard", keywords: ["giftcard", "giftcards"], image: "" },
  { label: "Browsing History", link: "/s", keywords: ["browsinghistory", "history"], image: "" },
];

const LoadingScreen = () => {

  const randomNumber = Math.floor(Math.random() * (100 - 60 + 1)) + 60;

  return (
    <div className="relative flex h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-hidden font-display transition-colors duration-200">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="layout-container flex h-full grow flex-col justify-center items-center relative z-10">
        <div className="layout-content-container flex flex-col max-w-md w-full px-6">

          {/* Central Brand/Logo Area (Modified HeaderImage) */}
          <div className="flex justify-center mb-8">
            <div className="animate-subtle-pulse p-1 rounded-2xl bg-gradient-to-br from-gray-800 to-transparent border border-gray-800/50 shadow-2xl">
              <div
                className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-xl bg-gray-900 text-slate-900 dark:text-slate-50"
                data-alt="Minimalist abstract geometric logo with blue accents"
                style={{ backgroundImage: 'url("")' }}
              >
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>

          {/* Headline (Modified HeadlineText) */}
          <h2 className="text-gray-900 dark:text-white tracking-tight text-[28px] font-bold leading-tight text-center pb-2">
            Khapara Store
          </h2>

          {/* Status Message (Modified BodyText) */}
          <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal pb-8 text-center animate-pulse">
            Curating your personalized experience...
          </p>

          {/* Progress Bar Section (Modified ProgressBar) */}
          <div className="flex flex-col gap-3 p-4 bg-white/5 dark:bg-black/20 rounded-xl border border-gray-200/10 dark:border-gray-800/50 backdrop-blur-sm">
            <div className="flex gap-6 justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px] animate-spin">sync</span>
                <p className="text-gray-700 dark:text-gray-200 text-sm font-medium leading-normal">Loading...</p>
              </div>
              <p className="text-primary text-sm font-bold leading-normal">{randomNumber}%</p>
            </div>
            <div className="rounded-full bg-gray-200 dark:bg-gray-700/50 h-1.5 overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500 ease-out shadow-[0_0_10px_rgba(19,109,236,0.5)]"
                style={{ width: `${randomNumber}%` }}
              ></div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};