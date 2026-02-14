/**
 * Utility functions for formatting numbers, dates, and times.
 * Ported from the original vanilla JS utils.js module.
 */

/**
 * Format a number with locale-aware thousands separators.
 * @param {number} num - The number to format
 * @returns {string} Formatted number string (e.g., "45,892")
 */
export function formatNumber(num) {
  return num.toLocaleString('en-US');
}

/**
 * Format an ISO string to HH:MM in 24h format.
 * @param {string} isoString - ISO 8601 date string
 * @returns {string} Time in "HH:MM" format
 */
export function formatTime(isoString) {
  const date = new Date(isoString);
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

/**
 * Format an ISO string to a readable date.
 * @param {string} isoString - ISO 8601 date string
 * @returns {string} Date in "Jan 1, 2025" format
 */
export function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Format an ISO string to combined date and time.
 * @param {string} isoString - ISO 8601 date string
 * @returns {string} Combined date and time string
 */
export function formatDateTime(isoString) {
  return `${formatDate(isoString)} ${formatTime(isoString)}`;
}

/**
 * Convert an ISO string to a human-readable relative time.
 * @param {string} isoString - ISO 8601 date string
 * @returns {string} Relative time (e.g., "5m ago", "2h ago")
 */
export function relativeTime(isoString) {
  const now = new Date();
  const date = new Date(isoString);
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  return `${diffDays}d ago`;
}
