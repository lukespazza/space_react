import { selectedConjunction } from '../../data/collisionData';
import Button from '../common/Button';
import { AlertCircleIcon, CheckSquareIcon, InfoIcon } from '../../icons';

/**
 * CollisionDetails — Detail panel for the currently selected conjunction.
 *
 * Layout:
 *   1. Critical alert banner at the top warning about high collision probability.
 *   2. Section title with alert icon.
 *   3. 2-column grid of detail items (Primary Object, Secondary Object,
 *      TCA, Miss Distance, Probability, Relative Velocity, Radial Sep,
 *      In-track Sep). Probability is highlighted in red.
 *   4. Action buttons: "Approve Maneuver" (primary) and info (secondary).
 *
 * CSS classes used (global):
 *   .collision-details, .collision-details__title, .collision-details__grid,
 *   .collision-detail-item, .collision-detail-item__label,
 *   .collision-detail-item__value
 */
const CollisionDetails = () => {
  // Detail items to render in the 2-column grid
  const details = [
    { label: 'Primary Object', value: selectedConjunction.primaryObject },
    { label: 'Secondary Object', value: selectedConjunction.secondaryObject },
    { label: 'TCA', value: selectedConjunction.tca },
    { label: 'Miss Distance', value: selectedConjunction.missDistance },
    { label: 'Probability', value: selectedConjunction.probability, color: 'critical' },
    { label: 'Relative Velocity', value: selectedConjunction.relativeVelocity },
    { label: 'Radial Sep', value: selectedConjunction.radialSep },
    { label: 'In-track Sep', value: selectedConjunction.inTrackSep },
  ];

  return (
    <div className="collision-details">
      {/* Critical alert banner */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-2)',
          padding: 'var(--space-3)',
          marginBottom: 'var(--space-4)',
          background: 'var(--color-critical-dim)',
          borderRadius: 'var(--radius-md)',
          fontSize: 'var(--text-sm)',
          color: 'var(--color-critical)',
        }}
      >
        <AlertCircleIcon size={16} />
        <span>High collision probability — immediate review required</span>
      </div>

      {/* Section title */}
      <h4 className="collision-details__title">
        <AlertCircleIcon size={16} />
        Conjunction Details
      </h4>

      {/* 2-column grid of detail values */}
      <div className="collision-details__grid">
        {details.map((item) => (
          <div key={item.label} className="collision-detail-item">
            <div className="collision-detail-item__label">{item.label}</div>
            <div
              className="collision-detail-item__value"
              style={item.color ? { color: 'var(--color-critical)' } : undefined}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-5)' }}>
        <Button variant="primary">
          <CheckSquareIcon size={16} />
          Approve Maneuver
        </Button>
        <Button variant="secondary">
          <InfoIcon size={16} />
          Details
        </Button>
      </div>
    </div>
  );
};

export default CollisionDetails;
