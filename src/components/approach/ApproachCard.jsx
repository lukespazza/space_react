/**
 * ApproachCard — Card component for individual close approach events.
 *
 * Layout (3-column grid):
 *   1. Severity bar — thin vertical colored bar on the left indicating
 *      severity level (high = red, medium = amber, low = blue).
 *   2. Object pair — primary and secondary objects separated by a "x" divider,
 *      each showing NORAD ID (monospace, accent) and object name.
 *   3. Metrics — Miss Distance (colored by risk) and TCA values.
 *
 * Props:
 *   @param {Object} approach - A single approach object from approachData
 *     { severity, primary: {id, name}, secondary: {id, name},
 *       missDistance, missDistanceColor, tca }
 *
 * CSS classes used (global):
 *   .approach-card, .approach-card__severity, .approach-card__severity--{level},
 *   .approach-card__objects, .approach-card__object, .approach-card__object-id,
 *   .approach-card__object-name, .approach-card__vs,
 *   .approach-card__metrics, .approach-card__metric,
 *   .approach-card__metric-value, .approach-card__metric-label
 */
const ApproachCard = ({ approach }) => {
  return (
    <div className="approach-card">
      {/* Colored severity bar on the left */}
      <div className={`approach-card__severity approach-card__severity--${approach.severity}`} />

      {/* Two objects with a separator */}
      <div className="approach-card__objects">
        {/* Primary object */}
        <div className="approach-card__object">
          <span className="approach-card__object-id">{approach.primary.id}</span>
          <span className="approach-card__object-name">{approach.primary.name}</span>
        </div>

        {/* Visual separator */}
        <span className="approach-card__vs">&times;</span>

        {/* Secondary object */}
        <div className="approach-card__object">
          <span className="approach-card__object-id">{approach.secondary.id}</span>
          <span className="approach-card__object-name">{approach.secondary.name}</span>
        </div>
      </div>

      {/* Metrics: miss distance and TCA */}
      <div className="approach-card__metrics">
        <div className="approach-card__metric">
          <div
            className="approach-card__metric-value"
            style={
              approach.missDistanceColor
                ? { color: `var(--color-${approach.missDistanceColor})` }
                : undefined
            }
          >
            {approach.missDistance}
          </div>
          <div className="approach-card__metric-label">Miss Distance</div>
        </div>

        <div className="approach-card__metric">
          <div className="approach-card__metric-value">{approach.tca}</div>
          <div className="approach-card__metric-label">TCA</div>
        </div>
      </div>
    </div>
  );
};

export default ApproachCard;
