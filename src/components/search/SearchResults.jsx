import * as Icons from '../../icons';
import {
  CircleIcon,
  MapPinIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  CrosshairSimpleIcon,
} from '../../icons';

/**
 * SearchResults — Displays a list of search result items for the Search page.
 *
 * Each result shows:
 *   - Type icon resolved from the typeIcon string
 *   - NORAD ID in monospace accent font
 *   - Object name
 *   - Meta items: type, orbit, country, status (with colored indicator)
 *
 * When there are no results, an empty state message is rendered in place
 * of the list.
 *
 * Props:
 *   @param {Array}  results - Array of search result objects from searchData
 *   @param {string} query   - The current search query string (displayed in header)
 *
 * CSS classes used (global):
 *   .search-results, .search-results__header, .search-results__title,
 *   .search-result-item, .search-result-item__icon,
 *   .search-result-item__content, .search-result-item__title,
 *   .search-result-item__id, .search-result-item__meta,
 *   .search-result-item__meta-item, .empty-state, .empty-state__icon,
 *   .empty-state__title, .empty-state__desc
 */
const SearchResults = ({ results, query }) => {
  // If no results, show empty state
  if (!results || results.length === 0) {
    return (
      <div className="search-results">
        <div className="empty-state">
          <CrosshairSimpleIcon size={64} className="empty-state__icon" />
          <h3 className="empty-state__title">No results found</h3>
          <p className="empty-state__desc">
            {query
              ? `No objects match "${query}". Try adjusting your search terms.`
              : 'Enter a search query to find tracked objects.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="search-results">
      {/* Results header with count */}
      <div className="search-results__header">
        <span className="search-results__title">
          {results.length} result{results.length !== 1 ? 's' : ''}
          {query ? ` for "${query}"` : ''}
        </span>
      </div>

      {/* Result items */}
      {results.map((result) => {
        // Resolve the type icon component from the icon name string
        const TypeIcon = Icons[result.typeIcon] || CircleIcon;

        return (
          <div key={result.id} className="search-result-item">
            {/* Type icon */}
            <div className="search-result-item__icon">
              <TypeIcon size={18} />
            </div>

            {/* Main content: ID, name, and metadata */}
            <div className="search-result-item__content">
              <div className="search-result-item__title">
                <span className="search-result-item__id">{result.id}</span>
                {' '}
                {result.name}
              </div>

              {/* Meta information row */}
              <div className="search-result-item__meta">
                {/* Object type */}
                <span className="search-result-item__meta-item">
                  <CircleIcon size={12} />
                  {result.type}
                </span>

                {/* Orbit information */}
                <span className="search-result-item__meta-item">
                  <MapPinIcon size={12} />
                  {result.orbit}
                </span>

                {/* Country / operator */}
                <span className="search-result-item__meta-item">
                  <CircleIcon size={12} />
                  {result.country}
                </span>

                {/* Status with colored icon */}
                <span className="search-result-item__meta-item">
                  {result.statusColor === 'nominal' ? (
                    <CheckCircleIcon
                      size={12}
                      style={{ color: 'var(--color-nominal)' }}
                    />
                  ) : result.statusColor === 'warning' ? (
                    <AlertCircleIcon
                      size={12}
                      style={{ color: 'var(--color-warning)' }}
                    />
                  ) : result.statusColor === 'critical' ? (
                    <AlertCircleIcon
                      size={12}
                      style={{ color: 'var(--color-critical)' }}
                    />
                  ) : (
                    <CircleIcon size={12} />
                  )}
                  <span
                    style={
                      result.statusColor
                        ? { color: `var(--color-${result.statusColor})` }
                        : undefined
                    }
                  >
                    {result.status}
                  </span>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
