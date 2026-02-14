/**
 * Maneuver Detection Page
 *
 * Detect and characterize orbital maneuvers performed by tracked objects.
 * Features: filter tabs, stat cards, maneuver card grid, orbital element chart.
 */

import { useState } from 'react';
import FilterTabs from '../components/common/FilterTabs';
import StatCard from '../components/common/StatCard';
import SectionHeader from '../components/common/SectionHeader';
import ChartPlaceholder from '../components/common/ChartPlaceholder';
import ManeuverCard from '../components/maneuver/ManeuverCard';
import { maneuverStats, maneuverList } from '../data/maneuverData';
import {
  ClockIcon,
  TrendUpIcon,
  AlertCircleIcon,
  CheckCircleIcon,
  ActivityIcon,
  TargetIcon,
} from '../icons';

const ICON_MAP = {
  ClockIcon,
  TrendUpIcon,
  AlertCircleIcon,
  CheckCircleIcon,
};

const FILTER_TABS = [
  { id: 'all', label: 'All' },
  { id: 'sk', label: 'Station Keeping' },
  { id: 'orbit', label: 'Orbit Raising' },
  { id: 'cam', label: 'Collision Avoidance' },
];

const ManeuverPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <main className="page service-page">
      <div className="container">
        <header className="page__header">
          <h1 className="page__title">Maneuver Detection</h1>
          <p className="page__subtitle">
            Detect and characterize orbital maneuvers performed by tracked objects
          </p>
        </header>

        <div className="service-page__controls">
          <div className="service-page__filters">
            <FilterTabs tabs={FILTER_TABS} activeTab={activeFilter} onTabChange={setActiveFilter} />
          </div>
        </div>

        {/* Summary Stats */}
        <div className="stats-grid" style={{ marginBottom: 'var(--space-8)' }}>
          {maneuverStats.map((stat) => {
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

        {/* Recent Maneuvers Grid */}
        <section className="section">
          <SectionHeader icon={ActivityIcon} title="Recent Maneuvers" />
          <div className="maneuver-grid">
            {maneuverList.map((maneuver) => (
              <ManeuverCard key={maneuver.id} maneuver={maneuver} />
            ))}
          </div>
        </section>

        {/* Orbital Element Changes */}
        <section className="section">
          <SectionHeader icon={TargetIcon} title="Orbital Element Changes" />
          <ChartPlaceholder
            icon={ActivityIcon}
            text="Pre/post maneuver comparison chart"
            style={{ minHeight: '250px' }}
          />
        </section>
      </div>
    </main>
  );
};

export default ManeuverPage;
