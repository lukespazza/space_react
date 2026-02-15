import Badge from '../common/Badge';
import Button from '../common/Button';
import { ChevronLeftIcon, ChevronRightIcon } from '../../icons';

const gridColumns = '100px 1fr 100px 100px 100px 100px 60px 80px 80px';

function getTypeVariant(objectType) {
  if (!objectType) return null;
  const upper = objectType.toUpperCase();
  if (upper === 'PAYLOAD') return 'nominal';
  if (upper === 'DEBRIS') return 'warning';
  return null;
}

function getTypeLabel(objectType) {
  if (!objectType) return '—';
  const upper = objectType.toUpperCase();
  if (upper === 'ROCKET BODY') return 'R/B';
  return objectType.charAt(0) + objectType.slice(1).toLowerCase();
}

function getStatus(obj) {
  if (obj.decay_date) return { label: 'Decayed', color: 'critical' };
  if (obj.is_active === true) return { label: 'Active', color: 'nominal' };
  if (obj.is_active === false) return { label: 'Inactive', color: 'muted' };
  return { label: 'Tracked', color: 'muted' };
}

function formatAltitude(val) {
  if (val == null) return '—';
  return `${Math.round(val)} km`;
}

function formatInclination(val) {
  if (val == null) return '—';
  return `${val.toFixed(2)}°`;
}

function buildPageNumbers(currentPage, totalPages) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages = [1];
  if (currentPage > 3) pages.push('...');

  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);
  for (let i = start; i <= end; i++) pages.push(i);

  if (currentPage < totalPages - 2) pages.push('...');
  pages.push(totalPages);

  return pages;
}

const CatalogTable = ({ residents = [], meta = {}, loading, page = 1, onPageChange }) => {
  const { total = 0, total_pages: totalPages = 0, per_page: perPage = 25 } = meta;
  const from = total > 0 ? (page - 1) * perPage + 1 : 0;
  const to = Math.min(page * perPage, total);

  return (
    <div className="catalog-results" style={{ opacity: loading ? 0.5 : 1, transition: 'opacity 0.2s' }}>
      <div className="catalog-results__header">
        <span className="catalog-results__count">
          Showing <strong>{from.toLocaleString()}-{to.toLocaleString()}</strong> of <strong>{total.toLocaleString()}</strong> objects
        </span>
      </div>

      <div className="data-table" style={{ border: 'none', borderRadius: 0 }}>
        <div
          className="data-table__header"
          style={{ gridTemplateColumns: gridColumns }}
        >
          <span>NORAD ID</span>
          <span>Object Name</span>
          <span>Type</span>
          <span>Perigee</span>
          <span>Apogee</span>
          <span>Inclination</span>
          <span>Country</span>
          <span>Orbit</span>
          <span>Status</span>
        </div>

        {residents.map((obj) => {
          const status = getStatus(obj);
          return (
            <div
              key={obj.norad_id}
              className="data-table__row"
              style={{ gridTemplateColumns: gridColumns }}
            >
              <span className="mono" style={{ color: 'var(--color-accent)' }}>
                {obj.norad_id}
              </span>
              <span>{obj.name || '—'}</span>
              <span>
                <Badge variant={getTypeVariant(obj.object_type)}>
                  {getTypeLabel(obj.object_type)}
                </Badge>
              </span>
              <span className="mono">{formatAltitude(obj.perigee)}</span>
              <span className="mono">{formatAltitude(obj.apogee)}</span>
              <span className="mono">{formatInclination(obj.inclination)}</span>
              <span className="mono">{obj.country || '—'}</span>
              <span>{obj.regime || '—'}</span>
              <span style={{ color: `var(--color-${status.color})` }}>
                {status.label}
              </span>
            </div>
          );
        })}

        {residents.length === 0 && !loading && (
          <div style={{ padding: 'var(--space-8)', textAlign: 'center', color: 'var(--color-text-muted)' }}>
            No objects found.
          </div>
        )}
      </div>

      {totalPages > 1 && (
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
          <Button
            variant="ghost"
            size="sm"
            disabled={page <= 1}
            onClick={() => onPageChange(page - 1)}
          >
            <ChevronLeftIcon size={16} />
          </Button>

          {buildPageNumbers(page, totalPages).map((p, i) =>
            p === '...' ? (
              <span key={`ellipsis-${i}`} style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>
                ...
              </span>
            ) : (
              <Button
                key={p}
                variant={p === page ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => onPageChange(p)}
              >
                {p.toLocaleString()}
              </Button>
            )
          )}

          <Button
            variant="ghost"
            size="sm"
            disabled={page >= totalPages}
            onClick={() => onPageChange(page + 1)}
          >
            <ChevronRightIcon size={16} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default CatalogTable;
