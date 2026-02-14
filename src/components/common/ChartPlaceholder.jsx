/**
 * ChartPlaceholder component for chart visualization placeholders.
 *
 * Used where charts will eventually be rendered (e.g., D3, Recharts).
 * Displays a centered icon and descriptive text within a dashed border
 * container. Uses the global .chart-placeholder CSS classes from the
 * original vanilla app.
 *
 * @param {React.ComponentType} icon - Icon component shown in the placeholder
 * @param {string} text - Descriptive text (e.g., "Collision probability timeline")
 * @param {Object} style - Optional inline styles for the container
 */
const ChartPlaceholder = ({ icon: Icon, text, style }) => {
  return (
    <div className="chart-placeholder" style={style}>
      {/* Icon rendered at 48px via .chart-placeholder__icon CSS */}
      {Icon && (
        <div className="chart-placeholder__icon">
          <Icon size={48} />
        </div>
      )}
      <div className="chart-placeholder__text">{text}</div>
    </div>
  );
};

export default ChartPlaceholder;
