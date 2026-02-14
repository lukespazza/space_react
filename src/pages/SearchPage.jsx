/**
 * Database Search Page
 *
 * Query space objects, events, conjunctions, and historical data.
 * Features: search hero with input, category browsing, advanced filters, search results.
 */

import { useState, useMemo } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import SearchInput from '../components/common/SearchInput';
import Button from '../components/common/Button';
import SearchCategories from '../components/search/SearchCategories';
import SearchResults from '../components/search/SearchResults';
import { useDebounce } from '../hooks/useDebounce';
import { mockSearchResults } from '../data/searchData';
import {
  objectTypeOptions,
  orbitRegimeOptions,
  countryOptions,
} from '../data/catalogData';
import { GridIcon, FilterIcon, FilterLinesIcon } from '../icons';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Advanced filter state
  const [nameFilter, setNameFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [orbitFilter, setOrbitFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');

  // Debounce the search query to avoid filtering on every keystroke
  const debouncedQuery = useDebounce(query, 300);

  // Filter results based on debounced query
  const filteredResults = useMemo(() => {
    if (debouncedQuery.length < 2) return mockSearchResults;
    return mockSearchResults.filter(
      (item) =>
        item.id.includes(debouncedQuery) ||
        item.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [debouncedQuery]);

  const handleResetFilters = () => {
    setNameFilter('');
    setTypeFilter('');
    setOrbitFilter('');
    setCountryFilter('');
  };

  return (
    <main className="page search-page">
      <div className="container">
        {/* Search Hero */}
        <div className="search-page__hero">
          <h1 className="search-page__title">Search SSA Database</h1>
          <p className="search-page__subtitle">
            Query space objects, events, conjunctions, and historical data
          </p>
          <div className="search-page__input">
            <SearchInput
              value={query}
              onChange={setQuery}
              placeholder="Search by NORAD ID, object name, or event type..."
              large
            />
          </div>
        </div>

        {/* Search Categories */}
        <section className="section">
          <SectionHeader icon={GridIcon} title="Browse by Category" />
          <SearchCategories
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </section>

        {/* Advanced Filters */}
        <section className="section">
          <SectionHeader icon={FilterIcon} title="Advanced Filters">
            <Button variant="ghost" size="sm" onClick={handleResetFilters}>
              <FilterLinesIcon size={14} />
              Reset Filters
            </Button>
          </SectionHeader>
          <div className="catalog-filters">
            <div className="catalog-filter">
              <label className="catalog-filter__label">Object Name / ID</label>
              <input
                type="text"
                className="search-input__field"
                placeholder="Enter NORAD ID or name"
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
                style={{ padding: 'var(--space-2) var(--space-3)' }}
              />
            </div>
            <div className="catalog-filter">
              <label className="catalog-filter__label">Object Type</label>
              <select
                className="catalog-filter__select"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                {[{ value: '', label: 'All Types' }, ...objectTypeOptions.slice(1), { value: 'unknown', label: 'Unknown' }].map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            <div className="catalog-filter">
              <label className="catalog-filter__label">Orbit Regime</label>
              <select
                className="catalog-filter__select"
                value={orbitFilter}
                onChange={(e) => setOrbitFilter(e.target.value)}
              >
                {[
                  { value: '', label: 'All Orbits' },
                  { value: 'leo', label: 'LEO (<2000 km)' },
                  { value: 'meo', label: 'MEO (2000-35786 km)' },
                  { value: 'geo', label: 'GEO (~35786 km)' },
                  { value: 'heo', label: 'HEO (Highly Elliptical)' },
                ].map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            <div className="catalog-filter">
              <label className="catalog-filter__label">Country/Operator</label>
              <select
                className="catalog-filter__select"
                value={countryFilter}
                onChange={(e) => setCountryFilter(e.target.value)}
              >
                {[
                  { value: '', label: 'All Countries' },
                  ...countryOptions.slice(1),
                  { value: 'jp', label: 'Japan' },
                  { value: 'in', label: 'India' },
                  { value: 'other', label: 'Other' },
                ].map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Search Results */}
        <section className="section">
          <SearchResults results={filteredResults} query={debouncedQuery} />

          {/* Pagination */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-2)', marginTop: 'var(--space-6)' }}>
            <Button variant="secondary" size="sm" disabled>
              Previous
            </Button>
            <Button variant="ghost" size="sm" style={{ minWidth: '36px' }}>1</Button>
            <Button variant="ghost" size="sm" style={{ minWidth: '36px' }}>2</Button>
            <Button variant="ghost" size="sm" style={{ minWidth: '36px' }}>3</Button>
            <span className="text-muted" style={{ padding: 'var(--space-2)' }}>...</span>
            <Button variant="ghost" size="sm" style={{ minWidth: '36px' }}>4,589</Button>
            <Button variant="secondary" size="sm">
              Next
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SearchPage;
