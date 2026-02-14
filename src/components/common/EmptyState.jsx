/**
 * EmptyState component for no-results or empty content states.
 *
 * Displays a centered title and description when there is no data
 * to show (e.g., no search results, no events matching filters).
 * Uses the global .empty-state CSS classes from the original vanilla app.
 *
 * Note: The original CSS also defines .empty-state__icon for a 64px icon,
 * but this component focuses on the text-based empty state. Icons can be
 * added as a future enhancement if needed.
 *
 * @param {string} title - Primary empty state heading
 * @param {string} description - Explanatory text shown below the title
 */
const EmptyState = ({ title, description }) => {
  return (
    <div className="empty-state">
      <div className="empty-state__title">{title}</div>
      <div className="empty-state__desc">{description}</div>
    </div>
  );
};

export default EmptyState;
