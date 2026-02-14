import { catalogObjects } from '../../data/catalogData';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { ChevronLeftIcon, ChevronRightIcon } from '../../icons';

/**
 * CatalogTable — Paginated data table of tracked space objects.
 *
 * Displays a results header with total count, then a grid-based data table
 * with columns: NORAD ID, Object Name, Type (badge), Altitude, Inclination,
 * and Status (colored text).
 *
 * A static pagination bar is rendered at the bottom with numbered page buttons.
 *
 * CSS classes used (global):
 *   .catalog-results, .catalog-results__header, .catalog-results__count,
 *   .data-table, .data-table__header, .data-table__row
 */

// Grid template shared between header and row for consistent column sizing
const gridColumns = '140px 1fr 120px 100px 100px 80px';

const CatalogTable = () => {
  return (
    <div className="catalog-results">
      {/* Results header showing total count */}
      <div className="catalog-results__header">
        <span className="catalog-results__count">
          Showing <strong>1-10</strong> of <strong>45,892</strong> objects
        </span>
      </div>

      {/* Data table */}
      <div className="data-table" style={{ border: 'none', borderRadius: 0 }}>
        {/* Column headers */}
        <div
          className="data-table__header"
          style={{ gridTemplateColumns: gridColumns }}
        >
          <span>NORAD ID</span>
          <span>Object Name</span>
          <span>Type</span>
          <span>Altitude</span>
          <span>Inclination</span>
          <span>Status</span>
        </div>

        {/* Object rows */}
        {catalogObjects.map((obj) => (
          <div
            key={obj.noradId}
            className="data-table__row"
            style={{ gridTemplateColumns: gridColumns }}
          >
            {/* NORAD ID in monospace with accent color */}
            <span className="mono" style={{ color: 'var(--color-accent)' }}>
              {obj.noradId}
            </span>

            {/* Object name */}
            <span>{obj.name}</span>

            {/* Object type as a badge */}
            <span>
              <Badge variant={obj.typeVariant}>{obj.type}</Badge>
            </span>

            {/* Altitude in monospace */}
            <span className="mono">{obj.altitude}</span>

            {/* Inclination in monospace */}
            <span className="mono">{obj.inclination}</span>

            {/* Status with conditional color */}
            <span
              style={
                obj.statusColor
                  ? { color: `var(--color-${obj.statusColor})` }
                  : undefined
              }
            >
              {obj.status}
            </span>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'var(--space-2)',
          padding: 'var(--space-4)',
          borderTop: '1px solid var(--color-border)',
        }}
      >
        {/* Previous page button */}
        <Button variant="ghost" size="sm" disabled>
          <ChevronLeftIcon size={16} />
        </Button>

        {/* Page number buttons */}
        <Button variant="primary" size="sm">1</Button>
        <Button variant="ghost" size="sm">2</Button>
        <Button variant="ghost" size="sm">3</Button>

        {/* Ellipsis indicating more pages */}
        <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>
          ...
        </span>

        {/* Last page */}
        <Button variant="ghost" size="sm">1,836</Button>

        {/* Next page button */}
        <Button variant="ghost" size="sm">
          <ChevronRightIcon size={16} />
        </Button>
      </div>
    </div>
  );
};

export default CatalogTable;
