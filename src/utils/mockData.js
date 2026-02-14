/**
 * Mock data generation utilities.
 * Replicates the event generation logic from the original events.js module.
 */

const EVENT_TYPES = ['collision', 'reentry', 'approach'];

const EVENT_DESCRIPTIONS = {
  collision: 'Potential collision detected between tracked objects',
  reentry: 'Atmospheric reentry predicted for debris object',
  approach: 'Close approach warning issued',
};

const EVENT_TYPE_LABELS = {
  collision: 'Collision Alert',
  reentry: 'Reentry Prediction',
  approach: 'Close Approach',
};

/**
 * Generate a random NORAD-like object ID.
 * @returns {string} 5-digit numeric string
 */
function generateObjectId() {
  return `${Math.floor(10000 + Math.random() * 90000)}`;
}

/**
 * Generate an array of mock SSA events.
 * @param {number} count - Number of events to generate (default 7)
 * @returns {Array} Sorted array of event objects
 */
export function generateMockEvents(count = 7) {
  const events = [];

  for (let i = 0; i < count; i++) {
    const type = EVENT_TYPES[Math.floor(Math.random() * EVENT_TYPES.length)];
    const severity =
      type === 'collision'
        ? 'critical'
        : type === 'reentry'
          ? 'warning'
          : ['critical', 'warning', 'info', 'low'][Math.floor(Math.random() * 4)];

    events.push({
      id: `EVT-${Date.now()}-${i}`,
      type,
      severity,
      timestamp: new Date(Date.now() - Math.random() * 86400000).toISOString(),
      description: EVENT_DESCRIPTIONS[type] || 'Event detected',
      objects:
        type === 'collision'
          ? [generateObjectId(), generateObjectId()]
          : [generateObjectId()],
    });
  }

  return events.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
}

/**
 * Get the display label for an event type.
 * @param {string} type - Event type key
 * @returns {string} Human-readable event type label
 */
export function getEventTypeLabel(type) {
  return EVENT_TYPE_LABELS[type] || type;
}

/**
 * Filter events by type and/or severity.
 * @param {Array} events - Array of event objects
 * @param {Object} filter - Filter criteria { type, severity }
 * @returns {Array} Filtered events
 */
export function filterEvents(events, filter = {}) {
  return events.filter((event) => {
    if (filter.type && filter.type !== 'all' && event.type !== filter.type) {
      return false;
    }
    if (filter.severity && filter.severity !== 'all' && event.severity !== filter.severity) {
      return false;
    }
    return true;
  });
}
