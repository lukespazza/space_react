import { fragEvents } from '../../data/fragmentationData';
import Badge from '../common/Badge';

/**
 * FragEventsTable — Data table listing major fragmentation events.
 *
 * Columns:
 *   Date | Parent Object | Type (badge) | Altitude | Debris Count | Status (badge)
 *
 * Uses inline grid-template-columns so the .data-table grid layout matches
 * the specific column widths for this table.
 *
 * CSS classes used (global):
 *   .data-table, .data-table__header, .data-table__row
 */

// Shared grid template for consistent column alignment between header and rows
const gridColumns = '120px 1fr 100px 100px 120px 120px';

const FragEventsTable = () => {
  return (
    <div className="data-table">
      {/* Table header row */}
      <div
        className="data-table__header"
        style={{ gridTemplateColumns: gridColumns }}
      >
        <span>Date</span>
        <span>Parent Object</span>
        <span>Type</span>
        <span>Altitude</span>
        <span>Debris Count</span>
        <span>Status</span>
      </div>

      {/* Data rows */}
      {fragEvents.map((event, index) => (
        <div
          key={index}
          className="data-table__row"
          style={{ gridTemplateColumns: gridColumns }}
        >
          {/* Date in monospace */}
          <span className="mono">{event.date}</span>

          {/* Parent object name */}
          <span>{event.parentObject}</span>

          {/* Type shown as a colored badge */}
          <span>
            <Badge variant={event.typeVariant}>{event.type}</Badge>
          </span>

          {/* Altitude in monospace */}
          <span className="mono">{event.altitude}</span>

          {/* Debris count, optionally colored for critical events */}
          <span
            className="mono"
            style={
              event.debrisCountColor
                ? { color: `var(--color-${event.debrisCountColor})` }
                : undefined
            }
          >
            {event.debrisCount}
          </span>

          {/* Status as a badge */}
          <span>
            <Badge variant={event.statusVariant}>{event.status}</Badge>
          </span>
        </div>
      ))}
    </div>
  );
};

export default FragEventsTable;
