import { fragSummary } from '../../data/fragmentationData';

/**
 * FragSummary — Row of summary statistic cards for the Fragmentation Events page.
 *
 * Each card displays a single metric: a large numeric value and a descriptive label.
 * Values can optionally be colored (e.g. "Events This Year" in warning amber).
 *
 * CSS classes used (global):
 *   .fragmentation-summary, .frag-summary-card,
 *   .frag-summary-card__value, .frag-summary-card__label
 */
const FragSummary = () => {
  return (
    <div className="fragmentation-summary">
      {fragSummary.map((item, index) => (
        <div key={index} className="frag-summary-card">
          {/* Large numeric value, optionally colored by severity */}
          <div
            className="frag-summary-card__value"
            style={item.color ? { color: `var(--color-${item.color})` } : undefined}
          >
            {item.value}
          </div>
          {/* Descriptive label beneath the value */}
          <div className="frag-summary-card__label">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default FragSummary;
