/**
 * Close Approach Analysis Page
 *
 * Monitor and analyze proximity events between tracked objects.
 * Features: filter tabs, stat cards, approach card list, conjunction geometry placeholder.
 */

import { useState } from 'react';
import FilterTabs from '../components/common/FilterTabs';
import StatCard from '../components/common/StatCard';
import SectionHeader from '../components/common/SectionHeader';
import OrbitalView from '../components/common/OrbitalView';
import Button from '../components/common/Button';
import ApproachCard from '../components/approach/ApproachCard';
import { approachStats, approachList } from '../data/approachData';
import {
  CrosshairSimpleIcon,
  ClockIcon,
  CheckCircleIcon,
  DownloadIcon,
  ActivityIcon,
  OrbitSingleIcon,
  TargetIcon,
} from '../icons';

const ICON_MAP = {
  CrosshairSimpleIcon,
  ClockIcon,
  CheckCircleIcon,
};

const FILTER_TABS = [
  { id: 'all', label: 'All' },
  { id: 'high', label: 'High Risk' },
  { id: 'active', label: 'Active Satellites' },
  { id: 'debris', label: 'Debris Fields' },
];

const ApproachPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <main className="page service-page">
      <div className="container">
        <header className="page__header">
          <h1 className="page__title">Close Approach Analysis</h1>
          <p className="page__subtitle">
            Monitor and analyze proximity events between tracked objects
          </p>
        </header>

        <div className="service-page__controls">
          <div className="service-page__filters">
            <FilterTabs tabs={FILTER_TABS} activeTab={activeFilter} onTabChange={setActiveFilter} />
          </div>
          <div className="service-page__actions">
            <Button variant="secondary">
              <DownloadIcon size={16} />
              Export
            </Button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="stats-grid" style={{ marginBottom: 'var(--space-8)' }}>
          {approachStats.map((stat) => {
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

        {/* Approach List */}
        <section className="section">
          <SectionHeader icon={ActivityIcon} title="Upcoming Close Approaches" />
          <div className="approach-list">
            {approachList.map((approach) => (
              <ApproachCard key={approach.id} approach={approach} />
            ))}
          </div>
        </section>

        {/* Visualization */}
        <section className="section">
          <SectionHeader icon={TargetIcon} title="Conjunction Geometry" />
          <OrbitalView
            icon={OrbitSingleIcon}
            text="Close approach visualization"
            subtext="Ready for 3D integration"
          />
        </section>
      </div>
    </main>
  );
};

export default ApproachPage;
