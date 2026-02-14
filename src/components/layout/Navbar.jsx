import { NavLink } from 'react-router-dom';
import { navigationItems } from '../../data/navigationItems';
import * as Icons from '../../icons';

/**
 * Navbar — Sticky top navigation bar for the SSA Platform.
 *
 * Structure:
 *   1. Brand section — Logo icon + platform name, links back to home ("/").
 *   2. Navigation links — Dynamically rendered from data/navigationItems.js so
 *      adding or reordering pages only requires editing that single data file.
 *      Each link uses react-router-dom's NavLink which exposes an `isActive`
 *      flag; we use it to conditionally append the .nav__link--active class
 *      that highlights the current route.
 *   3. Utility buttons — Notifications and Settings actions placed at the far
 *      right of the bar.
 *
 * Icon resolution:
 *   navigationItems store the icon name as a string (e.g. "DashboardIcon").
 *   We import the entire icons barrel export as `Icons` and look up the
 *   component at render time via `Icons[item.icon]`. This keeps the data
 *   file free of React imports while still being fully dynamic.
 *
 * CSS classes used (defined in global design-system.css / components.css):
 *   .nav, .nav__inner, .nav__brand, .nav__brand-icon, .nav__brand-text,
 *   .nav__brand-name, .nav__brand-subtitle, .nav__links, .nav__link,
 *   .nav__link--active, .nav__utils, .nav__util-btn
 */
const Navbar = () => {
  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="nav__inner">

        {/* Brand — clicking the logo always navigates to the dashboard root */}
        <NavLink to="/" className="nav__brand">
          <div className="nav__brand-icon">
            <Icons.TargetIcon size={16} />
          </div>
          <div className="nav__brand-text">
            <span className="nav__brand-name">SSA Platform</span>
            <span className="nav__brand-subtitle">Space Situational Awareness</span>
          </div>
        </NavLink>

        {/* Navigation Links — rendered from the central navigationItems array.
            The `end` prop on the home route ("/") ensures it only matches
            exactly, preventing it from staying active on every nested path. */}
        <ul className="nav__links">
          {navigationItems.map((item) => {
            const IconComponent = Icons[item.icon];
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav__link${isActive ? ' nav__link--active' : ''}`
                  }
                  end={item.path === '/'}
                >
                  {IconComponent && <IconComponent size={16} />}
                  <span>{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Utility Buttons — global actions that are always accessible
            regardless of the current page. aria-labels ensure screen reader
            accessibility since these buttons only contain icons. */}
        <div className="nav__utils">
          <button className="nav__util-btn" aria-label="Notifications">
            <Icons.BellIcon size={18} />
          </button>
          <button className="nav__util-btn" aria-label="Settings">
            <Icons.SettingsIcon size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
