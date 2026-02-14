/**
 * Badge component for color-coded status labels.
 *
 * Uses the global .badge CSS classes from the original vanilla app.
 * Variants: nominal (green), warning (amber), critical (red), info (blue), default (gray).
 *
 * @param {React.ReactNode} children - Badge text content
 * @param {string} variant - One of: nominal, warning, critical, info (omit for default gray)
 */
const Badge = ({ children, variant }) => {
  // Build class list: always include 'badge', conditionally add variant modifier
  const className = ['badge', variant ? `badge--${variant}` : ''].filter(Boolean).join(' ');
  return <span className={className}>{children}</span>;
};

export default Badge;
