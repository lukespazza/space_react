/**
 * Fragmentation Events Page
 *
 * Analysis and tracking of breakup events and debris cloud evolution.
 * Features: filter tabs, summary cards, events table, visualizations.
 */

import { useState } from 'react';
import FilterTabs from '../components/common/FilterTabs';
import SectionHeader from '../components/common/SectionHeader';
import OrbitalView from '../components/common/OrbitalView';
import ChartPlaceholder from '../components/common/ChartPlaceholder';
import FragSummary from '../components/fragmentation/FragSummary';
import FragEventsTable from '../components/fragmentation/FragEventsTable';
import {
  StarIcon,
  TargetIcon,
  DebrisCloudIcon,
  BarChartIcon,
  ActivityIcon,
  PieChartIcon,
  TrendUpIcon,
} from '../icons';

const FILTER_TABS = [
  { id: 'all', label: 'All Events' },
  { id: 'recent', label: 'Recent (30 days)' },
  { id: 'major', label: 'Major Events' },
  { id: 'asat', label: 'ASAT Tests' },
];

const VIEW_TABS = [
  { id: 'altitude', label: 'Altitude' },
  { id: 'inclination', label: 'Inclination' },
  { id: '3d', label: '3D View' },
];

const FragmentationPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeView, setActiveView] = useState('altitude');

  return (
    <main className="page service-page">
      <div className="container">
        <header className="page__header">
          <h1 className="page__title">Fragmentation Events</h1>
          <p className="page__subtitle">
            Analysis and tracking of breakup events and debris cloud evolution
          </p>
        </header>

        <div className="service-page__controls">
          <div className="service-page__filters">
            <FilterTabs tabs={FILTER_TABS} activeTab={activeFilter} onTabChange={setActiveFilter} />
          </div>
        </div>

        {/* Summary */}
        <FragSummary />

        {/* Major Events Table */}
        <section className="section">
          <SectionHeader icon={StarIcon} title="Major Fragmentation Events" />
          <FragEventsTable />
        </section>

        {/* Debris Cloud Visualization */}
        <section className="section">
          <SectionHeader icon={TargetIcon} title="Debris Cloud Distribution">
            <FilterTabs tabs={VIEW_TABS} activeTab={activeView} onTabChange={setActiveView} />
          </SectionHeader>
          <OrbitalView
            icon={DebrisCloudIcon}
            text="Debris cloud visualization"
            subtext="Integration ready for density mapping"
          />
        </section>

        {/* Charts */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
          <section className="section">
            <SectionHeader icon={BarChartIcon} title="Debris by Source" />
            <ChartPlaceholder icon={PieChartIcon} text="Pie chart by event source" />
          </section>
          <section className="section">
            <SectionHeader icon={ActivityIcon} title="Cumulative Debris Growth" />
            <ChartPlaceholder icon={TrendUpIcon} text="Historical trend chart" />
          </section>
        </div>
      </div>
    </main>
  );
};

export default FragmentationPage;
