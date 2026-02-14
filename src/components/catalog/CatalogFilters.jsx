import { objectTypeOptions, orbitRegimeOptions, countryOptions } from '../../data/catalogData';

/**
 * CatalogFilters — Filter bar for the Object Catalog page.
 *
 * Provides four filter controls laid out in a responsive grid:
 *   1. Search input — Free-text search for object name or NORAD ID.
 *   2. Object Type select — Filter by Payload, Rocket Body, Debris, etc.
 *   3. Orbit Regime select — Filter by LEO, MEO, GEO, HEO.
 *   4. Country select — Filter by launching country/agency.
 *
 * All filter state is controlled by the parent via props so this component
 * remains a pure presentation layer.
 *
 * Props:
 *   @param {string}   searchValue     - Current search input value
 *   @param {Function} onSearchChange  - Callback when search text changes
 *   @param {string}   typeFilter      - Currently selected object type
 *   @param {Function} onTypeChange    - Callback when object type changes
 *   @param {string}   orbitFilter     - Currently selected orbit regime
 *   @param {Function} onOrbitChange   - Callback when orbit regime changes
 *   @param {string}   countryFilter   - Currently selected country
 *   @param {Function} onCountryChange - Callback when country changes
 *
 * CSS classes used (global):
 *   .catalog-filters, .catalog-filter, .catalog-filter__label,
 *   .catalog-filter__select
 */
const CatalogFilters = ({
  searchValue,
  onSearchChange,
  typeFilter,
  onTypeChange,
  orbitFilter,
  onOrbitChange,
  countryFilter,
  onCountryChange,
}) => {
  return (
    <div className="catalog-filters">
      {/* Search input field */}
      <div className="catalog-filter">
        <label className="catalog-filter__label">Search</label>
        <input
          type="text"
          className="catalog-filter__select"
          placeholder="Search by name or NORAD ID..."
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {/* Object type dropdown */}
      <div className="catalog-filter">
        <label className="catalog-filter__label">Object Type</label>
        <select
          className="catalog-filter__select"
          value={typeFilter}
          onChange={(e) => onTypeChange(e.target.value)}
        >
          {objectTypeOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Orbit regime dropdown */}
      <div className="catalog-filter">
        <label className="catalog-filter__label">Orbit Regime</label>
        <select
          className="catalog-filter__select"
          value={orbitFilter}
          onChange={(e) => onOrbitChange(e.target.value)}
        >
          {orbitRegimeOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Country dropdown */}
      <div className="catalog-filter">
        <label className="catalog-filter__label">Country</label>
        <select
          className="catalog-filter__select"
          value={countryFilter}
          onChange={(e) => onCountryChange(e.target.value)}
        >
          {countryOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CatalogFilters;
