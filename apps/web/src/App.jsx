import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DepartmentsPage from './pages/DepartmentsPage';
import AcademicsPage from './pages/AcademicsPage';
import CampusLifePage from './pages/CampusLifePage';
import AdmissionsPage from './pages/AdmissionsPage';
import ContactPage from './pages/ContactPage';
import ApplyNowPage from './pages/ApplyNowPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboard from './pages/AdminDashboard';

function App() {
    return (
        <AuthProvider>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/departments" element={<DepartmentsPage />} />
                    <Route path="/academics" element={<AcademicsPage />} />
                    <Route path="/campus-life" element={<CampusLifePage />} />
                    <Route path="/admissions" element={<AdmissionsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/apply-now" element={<ApplyNowPage />} />
                    <Route path="/admin/login" element={<AdminLoginPage />} />
                    <Route 
                        path="/admin/bookings" 
                        element={
                            <ProtectedRoute>
                                <AdminDashboard />
                            </ProtectedRoute>
                        } 
                    />
                </Routes>
                <Toaster />
            </Router>
        </AuthProvider>
    );
}

export default App;
