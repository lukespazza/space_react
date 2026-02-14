/**
 * Footer — Site-wide footer displayed at the bottom of every page.
 *
 * Contains a brief copyright / platform description on the left and a set of
 * external resource links on the right.  The footer is intentionally simple
 * since the primary navigation lives in the Navbar.
 *
 * The outer `.footer` class handles the dark background and bottom border,
 * while `.container` constrains the content width to match the rest of the
 * page.  `.footer__inner` uses flexbox to space copyright and links apart.
 *
 * CSS classes used (defined in global design-system.css / components.css):
 *   .footer, .container, .footer__inner, .footer__copyright,
 *   .footer__links, .footer__link
 */
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__inner">
        {/* Copyright / platform tagline */}
        <p className="footer__copyright">
          SSA Platform — Space Situational Awareness Operations Center
        </p>

        {/* Resource links — placeholder hrefs for now; these will point to
            real documentation, API specs, and a support portal once available. */}
        <nav className="footer__links">
          <a href="#" className="footer__link">Documentation</a>
          <a href="#" className="footer__link">API Reference</a>
          <a href="#" className="footer__link">Support</a>
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;
