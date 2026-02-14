import StatCard from '../common/StatCard';
import SectionHeader from '../common/SectionHeader';
import {
  GlobeIcon,
  AlertCircleIcon,
  LayersIcon,
  CrosshairIcon,
  BarChartIcon,
} from '../../icons';

/**
 * StatsGrid -- Displays a grid of four key statistics for the home page.
 *
 * Each card renders a StatCard common component with:
 *   - An icon representing the metric category
 *   - The metric label
 *   - The current value
 *   - A status variant (nominal, warning, info, or default)
 *   - A badge label (LIVE, TODAY, 24H) for temporal context
 *   - A trend object with supplementary detail
 *
 * CSS classes used (global):
 *   .stats-grid  -- CSS Grid wrapper for the four cards
 */

// Static definitions for the four stat cards displayed on the home dashboard
const stats = [
  {
    id: 'objects',
    icon: GlobeIcon,
    label: 'Objects in Orbit',
    value: '45,892',
    variant: 'nominal',
    badge: 'LIVE',
    trend: { text: '+127 from yesterday', direction: 'up' },
  },
  {
    id: 'collisions',
    icon: AlertCircleIcon,
    label: 'Collision Alerts',
    value: '3',
    variant: 'warning',
    badge: 'TODAY',
    trend: { text: '2 high probability events' },
  },
  {
    id: 'reentries',
    icon: LayersIcon,
    label: 'Reentries',
    value: '7',
    variant: 'info',
    badge: 'TODAY',
    trend: { text: '1 controlled, 6 uncontrolled' },
  },
  {
    id: 'approaches',
    icon: CrosshairIcon,
    label: 'Close Approaches',
    value: '142',
    badge: '24H',
    trend: { text: 'All within safe parameters' },
  },
];

const StatsGrid = () => {
  return (
    <section>
      {/* Section heading with bar-chart icon */}
      <SectionHeader icon={BarChartIcon} title="Key Statistics" />

      {/* Grid of four stat cards */}
      <div className="stats-grid">
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
            variant={stat.variant}
            badge={stat.badge}
            trend={stat.trend}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsGrid;
