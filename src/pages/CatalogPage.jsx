/**
 * Object Catalog Page
 *
 * Comprehensive database of all tracked space objects with orbital elements.
 * Features: stat cards, search/filter controls, data table, pagination, distribution charts.
 */

import { useState } from 'react';
import StatCard from '../components/common/StatCard';
import SectionHeader from '../components/common/SectionHeader';
import ChartPlaceholder from '../components/common/ChartPlaceholder';
import CatalogFilters from '../components/catalog/CatalogFilters';
import CatalogTable from '../components/catalog/CatalogTable';
import { useCatalogStats } from '../hooks/useCatalogStats';
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

const CatalogPage = () => {
  const { stats: catalogStats, loading, error } = useCatalogStats();
  const [searchValue, setSearchValue] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [orbitFilter, setOrbitFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');

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
        <div className="stats-grid" style={{ marginBottom: 'var(--space-8)', opacity: loading ? 0.5 : 1, transition: 'opacity 0.3s' }}>
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
        {error && (
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
          <CatalogTable />
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
