import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WagmiProvider } from './providers/WagmiProvider';
import Header from './components/navigation/Header';
import MobileNav from './components/navigation/MobileNav';
import Home from './pages/Home';
import Activities from './pages/Activities';
import Leaderboard from './pages/Leaderboard';
import Notifications from './pages/Notifications';
import Explore from './pages/Explore';
import { usePageTitle } from './hooks/usePageTitle';

function AppContent() {
  usePageTitle();

  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0">
      <Header />
      <main className="container mx-auto px-4 py-6 max-w-6xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </main>
      <MobileNav />
    </div>
  );
}

export default function App() {
  return (
    <WagmiProvider>
      <Router>
        <AppContent />
      </Router>
    </WagmiProvider>
  );
}