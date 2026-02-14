/**
 * DataTable component for grid-based tabular data display.
 *
 * Renders a CSS Grid-based table with a header row and data rows.
 * Uses the global .data-table CSS classes from the original vanilla app.
 * The grid layout is controlled by the gridTemplate prop which maps
 * directly to grid-template-columns.
 *
 * Column configuration supports:
 *   - key: property name to read from each data row
 *   - label: header text for the column
 *   - mono: boolean, applies monospace font (.data-table__cell--mono)
 *   - muted: boolean, applies muted text color (.data-table__cell--muted)
 *   - format: optional function to transform the cell value for display
 *
 * @param {Array<Object>} columns - Column definitions
 * @param {Array<Object>} data - Row data objects
 * @param {string} gridTemplate - CSS grid-template-columns value (e.g., "1fr 2fr 1fr 1fr")
 */
const DataTable = ({ columns, data, gridTemplate }) => {
  // Inline grid-template-columns style applied to both header and rows
  // so they share the same column widths
  const gridStyle = { gridTemplateColumns: gridTemplate };

  return (
    <div className="data-table">
      {/* Header row */}
      <div className="data-table__header" style={gridStyle}>
        {columns.map((col) => (
          <div key={col.key}>{col.label}</div>
        ))}
      </div>

      {/* Data rows */}
      {data.map((row, rowIndex) => (
        <div className="data-table__row" key={row.id || rowIndex} style={gridStyle}>
          {columns.map((col) => {
            // Build cell class list from column options
            const cellClasses = [
              col.mono ? 'data-table__cell--mono' : '',
              col.muted ? 'data-table__cell--muted' : '',
            ].filter(Boolean).join(' ') || undefined;

            // Apply format function if provided, otherwise use raw value
            const cellValue = col.format ? col.format(row[col.key], row) : row[col.key];

            return (
              <div key={col.key} className={cellClasses}>
                {cellValue}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default DataTable;
