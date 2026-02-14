/**
 * Reentry Prediction Page
 *
 * Track decaying objects and predict atmospheric reentry windows.
 * Features: filter tabs, stat cards, reentry timeline, ground track placeholder.
 */

import { useState } from 'react';
import FilterTabs from '../components/common/FilterTabs';
import StatCard from '../components/common/StatCard';
import SectionHeader from '../components/common/SectionHeader';
import OrbitalView from '../components/common/OrbitalView';
import Button from '../components/common/Button';
import ReentryTimeline from '../components/reentry/ReentryTimeline';
import { reentryStats } from '../data/reentryData';
import {
  LayersIcon,
  CalendarIcon,
  CheckCircleIcon,
  ClockIcon,
  DownloadIcon,
  ActivityIcon,
  GlobeIcon,
} from '../icons';

const ICON_MAP = {
  LayersIcon,
  CalendarIcon,
  CheckCircleIcon,
  ClockIcon,
};

const FILTER_TABS = [
  { id: 'all', label: 'All Objects' },
  { id: 'imminent', label: 'Imminent (<24h)' },
  { id: 'week', label: 'This Week' },
  { id: 'controlled', label: 'Controlled' },
];

const ReentryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <main className="page service-page">
      <div className="container">
        <header className="page__header">
          <h1 className="page__title">Reentry Prediction</h1>
          <p className="page__subtitle">
            Track decaying objects and predict atmospheric reentry windows
          </p>
        </header>

        <div className="service-page__controls">
          <div className="service-page__filters">
            <FilterTabs tabs={FILTER_TABS} activeTab={activeFilter} onTabChange={setActiveFilter} />
          </div>
          <div className="service-page__actions">
            <Button variant="secondary">
              <DownloadIcon size={16} />
              Export Report
            </Button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="stats-grid" style={{ marginBottom: 'var(--space-8)' }}>
          {reentryStats.map((stat) => {
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

        {/* Reentry Timeline */}
        <section className="section">
          <SectionHeader icon={ActivityIcon} title="Predicted Reentries" />
          <ReentryTimeline />
        </section>

        {/* Ground Track Placeholder */}
        <section className="section">
          <SectionHeader icon={GlobeIcon} title="Ground Track Projection" />
          <OrbitalView
            icon={GlobeIcon}
            text="Ground track and impact zone visualization"
            subtext="Integration ready for mapping library"
            style={{ aspectRatio: '2/1', minHeight: '300px' }}
          />
        </section>
      </div>
    </main>
  );
};

export default ReentryPage;
