import { reentryTimeline } from '../../data/reentryData';
import Badge from '../common/Badge';

/**
 * ReentryTimeline — Vertical timeline of predicted reentry events.
 *
 * Each timeline item shows:
 *   - Object name/ID with monospace font
 *   - Urgency badge (critical, warning, nominal, etc.)
 *   - Estimated reentry time
 *   - Grid of detail items using collision-detail-item styling
 *   - Colored left border based on urgency level
 *
 * CSS classes used (global):
 *   .reentry-timeline, .reentry-timeline__item, .reentry-timeline__header,
 *   .reentry-timeline__object, .reentry-timeline__time,
 *   .reentry-timeline__details, .collision-detail-item,
 *   .collision-detail-item__label, .collision-detail-item__value
 */

/**
 * Maps urgency level to the corresponding CSS custom property color.
 * Used for the left border accent on each timeline card.
 */
const urgencyBorderColor = {
  critical: 'var(--color-critical)',
  warning: 'var(--color-warning)',
  nominal: 'var(--color-nominal)',
};

const ReentryTimeline = () => {
  return (
    <div className="reentry-timeline">
      {reentryTimeline.map((entry) => (
        <div
          key={entry.id}
          className="reentry-timeline__item"
          style={{
            borderLeftWidth: '3px',
            borderLeftStyle: 'solid',
            borderLeftColor: urgencyBorderColor[entry.urgency] || 'var(--color-border)',
          }}
        >
          {/* Header: object name + urgency badge on left, estimated time on right */}
          <div className="reentry-timeline__header">
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <span className="reentry-timeline__object">{entry.object}</span>
              <Badge variant={entry.badgeVariant}>{entry.badgeLabel}</Badge>
            </div>
            <span className="reentry-timeline__time">{entry.estimatedTime}</span>
          </div>

          {/* Detail grid — reuses collision-detail-item styles */}
          <div className="reentry-timeline__details">
            {entry.details.map((detail) => (
              <div key={detail.label} className="collision-detail-item">
                <div className="collision-detail-item__label">{detail.label}</div>
                <div
                  className="collision-detail-item__value"
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
      ))}
    </div>
  );
};

export default ReentryTimeline;
