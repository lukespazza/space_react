/**
 * EventItem component for the events timeline / activity list.
 *
 * Renders an event list item with a color indicator bar, type-specific icon,
 * event description, relative timestamp, and severity badge.
 * Uses the global .event-item CSS classes from the original vanilla app.
 *
 * Icon mapping follows the original HTML:
 *   - collision -> AlertCircleIcon
 *   - reentry  -> LayersIcon
 *   - approach -> CrosshairIcon
 *   - nominal  -> CheckCircleIcon (default fallback)
 *
 * @param {Object} event - Event data object
 * @param {string} event.type - Event type: collision, reentry, approach, nominal
 * @param {string} event.severity - Severity level for badge: critical, warning, info, low
 * @param {string} event.timestamp - ISO 8601 timestamp string
 * @param {string} event.description - Human-readable event description
 */
import { AlertCircleIcon, LayersIcon, CrosshairIcon, CheckCircleIcon } from '../../icons';
import { relativeTime } from '../../utils/formatters';
import Badge from './Badge';

// Map event types to their corresponding icon components
const EVENT_ICON_MAP = {
  collision: AlertCircleIcon,
  reentry: LayersIcon,
  approach: CrosshairIcon,
  nominal: CheckCircleIcon,
};

// Map event types to human-readable labels shown in the type row
const EVENT_LABEL_MAP = {
  collision: 'Collision Alert',
  reentry: 'Reentry Prediction',
  approach: 'Close Approach',
  nominal: 'Status Update',
};

// Map severity to badge variant — severity values may differ from variant names
const SEVERITY_VARIANT_MAP = {
  critical: 'critical',
  warning: 'warning',
  info: 'info',
  low: null, // low severity uses default (gray) badge styling
};

const EventItem = ({ event }) => {
  const { type, severity, timestamp, description } = event;

  // Resolve icon component; fall back to CheckCircleIcon for unknown types
  const TypeIcon = EVENT_ICON_MAP[type] || CheckCircleIcon;
  const typeLabel = EVENT_LABEL_MAP[type] || type;

  // Resolve badge variant from severity
  const badgeVariant = SEVERITY_VARIANT_MAP[severity] ?? null;

  return (
    <div className={`event-item event-item--${type}`}>
      {/* Colored vertical indicator bar — color is set via CSS modifier */}
      <div className="event-item__indicator" />

      {/* Main content: type label with icon, and description */}
      <div className="event-item__content">
        <div className="event-item__type">
          <TypeIcon size={14} />
          <span>{typeLabel}</span>
        </div>
        <div className="event-item__desc">{description}</div>
      </div>

      {/* Meta column: relative time and severity badge */}
      <div className="event-item__meta">
        <span className="event-item__time">{relativeTime(timestamp)}</span>
        <Badge variant={badgeVariant}>{severity}</Badge>
      </div>
    </div>
  );
};

export default EventItem;
