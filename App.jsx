import React, { Suspense, lazy, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from './context/AppContext';
import { pageTransitionVariants } from './utils/motionVariants';
import RoleSwitcherBanner from './components/RoleSwitcherBanner';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import EditProfileModal from './components/EditProfileModal';
import Toast from './components/Toast';
import ErrorBoundary from './components/ErrorBoundary';
import PageLoader from './components/PageLoader';
import NotFound from './components/NotFound';
import SchoolRegistrationModal from './components/SchoolRegistrationModal';
import CertificateVerificationModal from './components/CertificateVerificationModal';
import RequestDemoModal from './components/RequestDemoModal';
import SchoolPartnershipModal from './components/SchoolPartnershipModal';
import CookieConsentBanner from './components/CookieConsentBanner';
import { analytics } from './services/analyticsService';

// Core Dashboard Routes (Lazy Loaded)
const Home = lazy(() => import('./pages/Home'));
const StudentDashboard = lazy(() => import('./pages/StudentDashboard'));
const AiLab = lazy(() => import('./pages/AiLab'));
const CapstoneWorkflow = lazy(() => import('./pages/CapstoneWorkflow'));
const TeacherDashboard = lazy(() => import('./pages/TeacherDashboard'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const SchoolAdminDashboard = lazy(() => import('./pages/SchoolAdminDashboard'));

// Public Platform Routes (Lazy Loaded)
const AboutUs = lazy(() => import('./pages/public/AboutUs'));
const ForSchools = lazy(() => import('./pages/public/ForSchools'));
const ForStudents = lazy(() => import('./pages/public/ForStudents'));
const ForTeachers = lazy(() => import('./pages/public/ForTeachers'));
const HowItWorks = lazy(() => import('./pages/public/HowItWorks'));
const ProjectShowcase = lazy(() => import('./pages/public/ProjectShowcase'));
const ContactUs = lazy(() => import('./pages/public/ContactUs'));
const FaqPage = lazy(() => import('./pages/public/FaqPage'));
const LegalPrivacy = lazy(() => import('./pages/public/LegalPrivacy'));

// Phase 9: School Partnership, Pilot Management & Academic Training Routes (Lazy Loaded)
const PartnershipPortal = lazy(() => import('./pages/public/PartnershipPortal'));
const TeacherTrainingModule = lazy(() => import('./pages/training/TeacherTrainingModule'));
const StudentOrientationModule = lazy(() => import('./pages/training/StudentOrientationModule'));
const FeedbackSystem = lazy(() => import('./pages/public/FeedbackSystem'));

// Phase 10: AI Knowledge Resource Center (Lazy Loaded)
const ResourceCenter = lazy(() => import('./pages/public/ResourceCenter'));

export default function App() {
  const {
    activeTab,
    setActiveTab,
    sidebarOpen,
    setSidebarOpen,
    profileModalOpen,
    setProfileModalOpen
  } = useApp();

  // Listen to URL hash changes for deep linking (e.g. /#about, /#showcase)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      const validPublicTabs = [
        'home', 'about', 'for-schools', 'for-students', 'for-teachers',
        'how-it-works', 'showcase', 'contact', 'faq', 'legal-privacy',
        'privacy', 'terms', 'cookies', 'ai-disclaimer', 'student-privacy',
        'ai-lab', 'capstone', 'partnerships', 'partnership-portal',
        'teacher-training', 'student-orientation', 'feedback',
        'resources', 'knowledge', 'resource-center'
      ];
      if (hash && validPublicTabs.includes(hash)) {
        setActiveTab(hash);
      }
    };

    // On Initial Mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [setActiveTab]);

  // Sync activeTab to window URL hash and analytics
  useEffect(() => {
    const publicTabs = [
      'home', 'about', 'for-schools', 'for-students', 'for-teachers',
      'how-it-works', 'showcase', 'contact', 'faq', 'legal-privacy',
      'privacy', 'terms', 'cookies', 'ai-disclaimer', 'student-privacy',
      'partnerships', 'partnership-portal', 'teacher-training',
      'student-orientation', 'feedback', 'resources', 'knowledge', 'resource-center'
    ];
    if (publicTabs.includes(activeTab)) {
      if (window.location.hash !== `#${activeTab}`) {
        window.history.replaceState(null, '', activeTab === 'home' ? '/' : `#${activeTab}`);
      }
    }
    analytics.trackPageView(activeTab);
  }, [activeTab]);

  const renderActiveView = () => {
    switch (activeTab) {
      // Core Public & Overview Pages
      case 'home':
        return <Home />;
      case 'about':
        return <AboutUs />;
      case 'for-schools':
        return <ForSchools />;
      case 'for-students':
        return <ForStudents />;
      case 'for-teachers':
        return <ForTeachers />;
      case 'how-it-works':
        return <HowItWorks />;
      case 'showcase':
        return <ProjectShowcase />;
      case 'contact':
        return <ContactUs />;
      case 'faq':
        return <FaqPage />;

      // Phase 9: School Partnerships, Pilot Programme, Teacher & Student Training Hubs
      case 'partnerships':
      case 'partnership-portal':
        return <PartnershipPortal />;
      case 'teacher-training':
        return <TeacherTrainingModule />;
      case 'student-orientation':
        return <StudentOrientationModule />;
      case 'feedback':
      case 'feedback-hub':
        return <FeedbackSystem />;

      // Phase 10: AI Knowledge Resource Center
      case 'resources':
      case 'knowledge':
      case 'resource-center':
        return <ResourceCenter />;

      // Legal & Privacy Hub
      case 'legal-privacy':
        return <LegalPrivacy defaultSection="privacy" />;
      case 'privacy':
        return <LegalPrivacy defaultSection="privacy" />;
      case 'terms':
        return <LegalPrivacy defaultSection="terms" />;
      case 'cookies':
        return <LegalPrivacy defaultSection="cookies" />;
      case 'ai-disclaimer':
        return <LegalPrivacy defaultSection="ai-disclaimer" />;
      case 'student-privacy':
        return <LegalPrivacy defaultSection="student-privacy" />;

      // Core Interactive Dashboards
      case 'student-dashboard':
        return <StudentDashboard />;
      case 'ai-lab':
        return <AiLab />;
      case 'capstone':
        return <CapstoneWorkflow />;
      case 'teacher-dashboard':
        return <TeacherDashboard />;
      case 'admin-dashboard':
        return <AdminDashboard />;
      case 'school-admin-dashboard':
        return <SchoolAdminDashboard />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-navy-950 text-slate-100 selection:bg-purple-500/30 selection:text-white">
      {/* Top Demo / Perspective Switcher */}
      <RoleSwitcherBanner />

      {/* Main Sticky Navigation */}
      <Navbar />

      {/* Slide-out Sidebar Navigator */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Dynamic View Router with Suspense, ErrorBoundary, and Smooth Page Transitions */}
      <main className="flex-1 overflow-x-hidden">
        <ErrorBoundary>
          <Suspense fallback={<PageLoader message="Initializing Module Interface..." />}>
            <motion.div
              key={activeTab}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageTransitionVariants}
              className="w-full"
            >
              {renderActiveView()}
            </motion.div>
          </Suspense>
        </ErrorBoundary>
      </main>

      {/* Footer */}
      <Footer />

      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
      />

      {/* Auth Modal */}
      <AuthModal />

      {/* School Registration Modal */}
      <SchoolRegistrationModal />

      {/* Certificate Verification Modal */}
      <CertificateVerificationModal />

      {/* Request a Demo Modal */}
      <RequestDemoModal />

      {/* School Partnership Modal */}
      <SchoolPartnershipModal />

      {/* Privacy-Conscious Cookie Consent Banner */}
      <CookieConsentBanner />

      {/* Global Toast System */}
      <Toast />
    </div>
  );
}
