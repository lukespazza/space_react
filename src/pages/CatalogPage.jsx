import { useState, useEffect } from 'react';
import StatCard from '../components/common/StatCard';
import SectionHeader from '../components/common/SectionHeader';
import ChartPlaceholder from '../components/common/ChartPlaceholder';
import CatalogFilters from '../components/catalog/CatalogFilters';
import CatalogTable from '../components/catalog/CatalogTable';
import { useCatalogStats } from '../hooks/useCatalogStats';
import { useCatalogResidents } from '../hooks/useCatalogResidents';
import {
  TargetIcon,
  CpuIcon,
  StarIcon,
  RocketIcon,
  PieChartIcon,
  BarChartIcon,
} from '../icons';

const ICON_MAP = {
  TargetIcon,
  CpuIcon,
  StarIcon,
  RocketIcon,
};

const TYPE_FILTER_MAP = {
  payload: 'PAYLOAD',
  rocket: 'ROCKET BODY',
  debris: 'DEBRIS',
};

const CatalogPage = () => {
  const { stats: catalogStats, loading: statsLoading, error: statsError } = useCatalogStats();
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [orbitFilter, setOrbitFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');

  // Debounce search input (400ms)
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchValue.trim()), 400);
    return () => clearTimeout(timer);
  }, [searchValue]);

  const {
    residents,
    meta,
    page,
    loading: tableLoading,
    error: tableError,
    goToPage,
  } = useCatalogResidents({
    search: debouncedSearch || undefined,
    objectType: TYPE_FILTER_MAP[typeFilter] || undefined,
    regime: orbitFilter || undefined,
    country: countryFilter || undefined,
  });

  return (
    <main className="page service-page">
      <div className="container">
        <header className="page__header">
          <h1 className="page__title">Object Catalog</h1>
          <p className="page__subtitle">
            Comprehensive database of all tracked space objects with orbital elements
          </p>
        </header>

        {/* Summary Stats */}
        <div className="stats-grid" style={{ marginBottom: 'var(--space-8)', opacity: statsLoading ? 0.5 : 1, transition: 'opacity 0.3s' }}>
          {catalogStats.map((stat) => {
            const IconComp = ICON_MAP[stat.icon];
            return (
              <StatCard
                key={stat.id}
                icon={IconComp}
                badge={stat.badge}
                value={stat.value}
                label={stat.label}
                variant={stat.variant}
              />
            );
          })}
        </div>
        {(statsError || tableError) && (
          <p style={{ color: 'var(--color-warning)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>
            Unable to fetch live data — showing cached values.
          </p>
        )}

        {/* Filters */}
        <CatalogFilters
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          typeFilter={typeFilter}
          onTypeChange={setTypeFilter}
          orbitFilter={orbitFilter}
          onOrbitChange={setOrbitFilter}
          countryFilter={countryFilter}
          onCountryChange={setCountryFilter}
        />

        {/* Results Table */}
        <section className="section">
          <CatalogTable
            residents={residents}
            meta={meta}
            loading={tableLoading}
            page={page}
            onPageChange={goToPage}
          />
        </section>

        {/* Distribution Charts */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
          <section className="section">
            <SectionHeader icon={PieChartIcon} title="Objects by Type" />
            <ChartPlaceholder icon={PieChartIcon} text="Distribution pie chart" />
          </section>
          <section className="section">
            <SectionHeader icon={BarChartIcon} title="Altitude Distribution" />
            <ChartPlaceholder icon={BarChartIcon} text="Altitude histogram" />
          </section>
        </div>
      </div>
    </main>
  );
};

export default CatalogPage;
