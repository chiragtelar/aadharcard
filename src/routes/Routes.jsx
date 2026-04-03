import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Download from '../pages/Download';
import FAQs from '../pages/FAQs';
import DownloadByNumberMobile from '../pages/DownloadByNumberMobile';
import PdfPasswordPrint from '../pages/PdfPasswordPrint';
import UpdateAadhaar from '../pages/UpdateAadhaar';
import AddressChange from '../pages/AddressChange';
import MobileNumberUpdate from '../pages/MobileNumberUpdate';
import DocumentUpdate from '../pages/DocumentUpdate';
import ApplicationStatus from '../pages/ApplicationStatus';
import CheckStatus from '../pages/CheckStatus';
import LostAadhaarRetrieve from '../pages/LostAadhaarRetrieve';
import AdharPanCardLink from '../pages/AdharPanCardLink';
import BlogAdharCardNewRules from '../pages/BlogAdharCardNewRules';
import BlogAdharUpdateFees from '../pages/BlogAdharUpdateFees';
import BlogHowLongAdharUpdateTakes from '../pages/BlogHowLongAdharUpdateTakes';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Disclaimer from '../pages/Disclaimer';
import TermsAndConditions from '../pages/TermsAndConditions';
import CookiePolicy from '../pages/CookiePolicy';
import Blogs from '../pages/Blogs';
import Layout from '../components/Layout';
import ScrollToTop from '../components/ScrollToTop';

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<Download />} />
          <Route path="/by-number-mobile" element={<DownloadByNumberMobile />} />
          <Route path="/pdf-password-print" element={<PdfPasswordPrint />} />
          <Route path="/update" element={<UpdateAadhaar />} />
          <Route path="/address-change" element={<AddressChange />} />
          <Route path="/mobile-number" element={<MobileNumberUpdate />} />
          <Route path="/documents" element={<DocumentUpdate />} />
          <Route path="/application-status" element={<ApplicationStatus />} />
          <Route path="/status" element={<CheckStatus />} />
          <Route path="/status/lost-adhar" element={<LostAadhaarRetrieve />} />
          <Route path="/link/pan-card" element={<AdharPanCardLink />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/adhar-card-new-rules" element={<BlogAdharCardNewRules />} />
          <Route path="/blog/adhar-update-fees" element={<BlogAdharUpdateFees />} />
          <Route path="/blog/how-long-adhar-update-takes" element={<BlogHowLongAdharUpdateTakes />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />

          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </Layout>
    </>
  );
};

export default AppRoutes;
