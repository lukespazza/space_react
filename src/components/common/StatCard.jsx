/**
 * StatCard component for displaying key metrics with visual emphasis.
 *
 * Renders a stat card with icon, badge text, large animated value, label,
 * and optional trend line. Uses the global .stat-card CSS classes from
 * the original vanilla app.
 *
 * Numeric values are animated using useAnimatedValue to replicate the
 * Statistics.animateValue behavior from the original app. String values
 * (e.g., "N/A", "12.5 km") are displayed as-is without animation.
 *
 * @param {React.ComponentType} icon - Icon component to render in the card header
 * @param {string} badge - Small label text shown in the header (e.g., "LEO", "GEO")
 * @param {string|number} value - The main stat value to display prominently
 * @param {string} label - Descriptive label shown below the value
 * @param {string} variant - Color variant: nominal, warning, critical, info
 * @param {Object} trend - Optional trend indicator: { icon: ComponentType, text: string, direction: 'up'|'down' }
 * @param {boolean} clickable - Whether the card should show a pointer cursor
 * @param {string} id - Optional HTML id attribute for the card
 */
import { useAnimatedValue } from '../../hooks/useAnimatedValue';

const StatCard = ({ icon: Icon, badge, value, label, variant, trend, clickable, id }) => {
  // Determine if value is numeric to decide whether to animate
  const isNumeric = typeof value === 'number';

  // Animate numeric values; for strings, useAnimatedValue receives 0 (unused)
  const animatedValue = useAnimatedValue(isNumeric ? value : 0);

  // Build card class list with variant and clickable modifiers
  const cardClasses = [
    'stat-card',
    variant ? `stat-card--${variant}` : '',
    clickable ? 'stat-card--clickable' : '',
  ].filter(Boolean).join(' ');

  // Build trend class with direction modifier for color styling
  const trendClasses = trend
    ? ['stat-card__trend', trend.direction ? `stat-card__trend--${trend.direction}` : ''].filter(Boolean).join(' ')
    : '';

  return (
    <div className={cardClasses} id={id}>
      {/* Header row: icon on left, badge on right */}
      <div className="stat-card__header">
        {Icon && (
          <div className="stat-card__icon">
            <Icon size={20} />
          </div>
        )}
        {badge && <span className="stat-card__badge">{badge}</span>}
      </div>

      {/* Main value: animated for numbers, static for strings */}
      <div className="stat-card__value">
        {isNumeric ? animatedValue.toLocaleString('en-US') : value}
      </div>

      {/* Descriptive label beneath the value */}
      <div className="stat-card__label">{label}</div>

      {/* Optional trend line with icon and text, separated by a top border */}
      {trend && (
        <div className={trendClasses}>
          {trend.icon && <trend.icon size={14} />}
          <span>{trend.text}</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;
