import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * PageLayout — Root layout component used by react-router as the top-level
 * route element.  Every page in the application renders inside this shell.
 *
 * Structure (top to bottom):
 *   1. Navbar   — Sticky top navigation bar.
 *   2. <Outlet> — Placeholder where react-router renders the matched child
 *                 route's component.  This is what makes nested routing work:
 *                 the layout stays mounted while only the inner content swaps.
 *   3. Footer   — Site-wide footer with copyright and resource links.
 *
 * The wrapping div uses:
 *   - `.bg-grid` — Applies the subtle grid background pattern from the design
 *     system, giving the entire viewport the characteristic dark-grid look.
 *   - Inline min-height / flex styles ensure the footer is pushed to the
 *     bottom of the viewport even when the page content is short (sticky
 *     footer pattern via flexbox).  The child <Outlet> will naturally grow
 *     to fill available space because flex children default to flex-shrink: 1.
 */
const PageLayout = () => (
  <div
    className="bg-grid"
    style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
  >
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

export default PageLayout;
