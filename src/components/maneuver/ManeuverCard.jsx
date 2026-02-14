import Badge from '../common/Badge';

/**
 * ManeuverCard — Card component for a single maneuver detection event.
 *
 * Layout:
 *   1. Header — Object name (monospace, accent) on the left, time ago on the right.
 *   2. Type badge beneath the header (e.g. "Collision Avoidance", "Station Keeping").
 *   3. 2x2 grid of detail items (Delta-V, Duration, Alt. Change, Confidence).
 *
 * Props:
 *   @param {Object} maneuver - A single maneuver object from maneuverData
 *     { object, time, type, typeVariant, details: [{label, value, color?}] }
 *
 * CSS classes used (global):
 *   .maneuver-card, .maneuver-card__header, .maneuver-card__object,
 *   .maneuver-card__time, .maneuver-card__details,
 *   .maneuver-detail, .maneuver-detail__label, .maneuver-detail__value
 */
const ManeuverCard = ({ maneuver }) => {
  return (
    <div className="maneuver-card">
      {/* Header row: object identification and time since detection */}
      <div className="maneuver-card__header">
        <span className="maneuver-card__object">{maneuver.object}</span>
        <span className="maneuver-card__time">{maneuver.time}</span>
      </div>

      {/* Maneuver type badge */}
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <Badge variant={maneuver.typeVariant}>{maneuver.type}</Badge>
      </div>

      {/* 2x2 detail grid */}
      <div className="maneuver-card__details">
        {maneuver.details.map((detail) => (
          <div key={detail.label} className="maneuver-detail">
            <div className="maneuver-detail__label">{detail.label}</div>
            <div
              className="maneuver-detail__value"
              style={
                detail.color
                  ? { color: `var(--color-${detail.color})` }
                  : undefined
              }
            >
              {detail.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManeuverCard;
