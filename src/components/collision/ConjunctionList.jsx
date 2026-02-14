import { conjunctionList } from '../../data/collisionData';
import Badge from '../common/Badge';

/**
 * ConjunctionList — Displays the list of active conjunction events
 * on the Collision Analysis page.
 *
 * Each conjunction item shows:
 *   - Primary object ID x Secondary object ID (monospace)
 *   - Description text with TCA countdown
 *   - Collision probability in monospace font
 *   - Severity badge (critical, warning, low, etc.)
 *
 * CSS classes used (global):
 *   .events-list, .event-item, .event-item--{type},
 *   .event-item__indicator, .event-item__content,
 *   .event-item__type, .event-item__desc,
 *   .event-item__meta, .event-item__time
 */
const ConjunctionList = () => {
  return (
    <div className="events-list">
      {conjunctionList.map((conj) => (
        <div key={conj.id} className={`event-item event-item--${conj.type}`}>
          {/* Colored left indicator bar based on event type */}
          <div className="event-item__indicator" />

          {/* Main content: object pair and description */}
          <div className="event-item__content">
            <div className="event-item__type">
              <span className="mono">{conj.primaryId}</span>
              {' \u00D7 '}
              <span className="mono">{conj.secondaryId}</span>
            </div>
            <div className="event-item__desc">{conj.description}</div>
          </div>

          {/* Right-side metadata: probability and severity badge */}
          <div className="event-item__meta">
            <span className="event-item__time">{conj.probability}</span>
            <Badge variant={conj.severity}>{conj.severity.toUpperCase()}</Badge>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConjunctionList;
