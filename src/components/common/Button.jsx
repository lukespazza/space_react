/**
 * Button component with primary/secondary/ghost variants and size options.
 *
 * Uses the global .btn CSS classes from the original vanilla app.
 * Accepts icon as children alongside text — the .btn class already handles
 * flex layout and svg sizing via .btn svg { width: 16px; height: 16px }.
 *
 * @param {React.ReactNode} children - Button content (text, icons, or both)
 * @param {string} variant - One of: primary (default), secondary, ghost
 * @param {string} size - Optional: sm, lg (omit for default size)
 * @param {boolean} disabled - Disabled state
 * @param {Function} onClick - Click handler
 * @param {Object} style - Optional inline styles
 * @param {string} className - Additional CSS class names to append
 * @param {Object} rest - Any additional props forwarded to the <button> element
 */
const Button = ({ children, variant = 'primary', size, disabled, onClick, style, className: extraClass, ...rest }) => {
  // Compose class names: base btn, variant modifier, optional size modifier, extra classes
  const classes = [
    'btn',
    `btn--${variant}`,
    size ? `btn--${size}` : '',
    extraClass || '',
  ].filter(Boolean).join(' ');

  return (
    <button className={classes} disabled={disabled} onClick={onClick} style={style} {...rest}>
      {children}
    </button>
  );
};

export default Button;
