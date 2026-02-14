/**
 * Root application component.
 * Configures React Router with all page routes wrapped in the shared PageLayout.
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';
import HomePage from './pages/HomePage';
import CollisionPage from './pages/CollisionPage';
import ReentryPage from './pages/ReentryPage';
import ApproachPage from './pages/ApproachPage';
import FragmentationPage from './pages/FragmentationPage';
import ManeuverPage from './pages/ManeuverPage';
import CatalogPage from './pages/CatalogPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PageLayout provides the shared navbar, footer, and bg-grid background */}
        <Route element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="collision" element={<CollisionPage />} />
          <Route path="reentry" element={<ReentryPage />} />
          <Route path="approach" element={<ApproachPage />} />
          <Route path="fragmentation" element={<FragmentationPage />} />
          <Route path="maneuver" element={<ManeuverPage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
