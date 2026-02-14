/**
 * Collision Analysis Page
 *
 * Conjunction screening, probability assessment, and avoidance maneuver planning.
 * Features: filter tabs, stat cards, orbital visualization, conjunction list, details panel.
 */

import { useState } from 'react';
import FilterTabs from '../components/common/FilterTabs';
import StatCard from '../components/common/StatCard';
import SectionHeader from '../components/common/SectionHeader';
import OrbitalView from '../components/common/OrbitalView';
import ChartPlaceholder from '../components/common/ChartPlaceholder';
import Button from '../components/common/Button';
import ConjunctionList from '../components/collision/ConjunctionList';
import CollisionDetails from '../components/collision/CollisionDetails';
import { collisionStats } from '../data/collisionData';
import {
  AlertCircleIcon,
  CheckCircleIcon,
  ClockIcon,
  DownloadIcon,
  EditIcon,
  TargetIcon,
  ActivityIcon,
  OrbitIcon,
  BarChartIcon,
} from '../icons';

const ICON_MAP = {
  AlertCircleIcon,
  CheckCircleIcon,
  ClockIcon,
};

const FILTER_TABS = [
  { id: 'all', label: 'All Events' },
  { id: 'critical', label: 'Critical' },
  { id: 'warning', label: 'Warning' },
  { id: 'monitored', label: 'Monitored' },
];

const VIEW_TABS = [
  { id: '2d', label: '2D' },
  { id: '3d', label: '3D' },
];

const CollisionPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeView, setActiveView] = useState('2d');

  return (
    <main className="page service-page collision-page">
      <div className="container">
        {/* Page Header */}
        <header className="page__header">
          <h1 className="page__title">Collision Analysis</h1>
          <p className="page__subtitle">
            Conjunction screening, probability assessment, and avoidance maneuver planning
          </p>
        </header>

        {/* Controls */}
        <div className="service-page__controls">
          <div className="service-page__filters">
            <FilterTabs tabs={FILTER_TABS} activeTab={activeFilter} onTabChange={setActiveFilter} />
          </div>
          <div className="service-page__actions">
            <Button variant="secondary">
              <DownloadIcon size={16} />
              Export Data
            </Button>
            <Button variant="primary">
              <EditIcon size={16} />
              New Analysis
            </Button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="stats-grid" style={{ marginBottom: 'var(--space-8)' }}>
          {collisionStats.map((stat) => {
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

        {/* Main Content - Split Layout */}
        <div className="service-content service-content--split">
          {/* Left: Orbital View + Conjunction List */}
          <div>
            <section className="section">
              <SectionHeader icon={TargetIcon} title="Orbital View">
                <FilterTabs tabs={VIEW_TABS} activeTab={activeView} onTabChange={setActiveView} />
              </SectionHeader>
              <OrbitalView
                icon={OrbitIcon}
                text="Orbital visualization placeholder"
                subtext="Integration ready for Three.js / D3.js"
              />
            </section>

            <section className="section">
              <SectionHeader icon={ActivityIcon} title="Active Conjunctions" />
              <ConjunctionList />
            </section>
          </div>

          {/* Right: Details Panel */}
          <aside>
            <CollisionDetails />
            <ChartPlaceholder
              icon={BarChartIcon}
              text="Probability trend chart"
              style={{ marginTop: 'var(--space-4)' }}
            />
          </aside>
        </div>
      </div>
    </main>
  );
};

export default CollisionPage;
