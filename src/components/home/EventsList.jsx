import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { generateMockEvents } from '../../utils/mockData';
import { ActivityIcon } from '../../icons';
import SectionHeader from '../common/SectionHeader';
import FilterTabs from '../common/FilterTabs';
import EventItem from '../common/EventItem';

/**
 * EventsList -- Displays recent SSA events with time-range filter tabs.
 *
 * Behaviour:
 *   - Three filter tabs (Today, Last 24h, This Week) control which events
 *     are shown. Switching tabs regenerates the mock event list to simulate
 *     server-side filtering returning different result sets.
 *   - Each event is rendered by the EventItem common component.
 *   - A "View all events" link in the section header navigates to /search.
 *
 * CSS classes used (global):
 *   .events-list  -- Vertical list container for event items
 */

// Tab definitions for the filter bar
const FILTER_TABS = [
  { id: 'today', label: 'Today' },
  { id: '24h', label: 'Last 24h' },
  { id: 'week', label: 'This Week' },
];

const EventsList = () => {
  // Track the currently active filter tab
  const [activeTab, setActiveTab] = useState('today');

  // Holds the generated list of events
  const [events, setEvents] = useState(() => generateMockEvents(7));

  // Regenerate mock events whenever the filter tab changes to
  // simulate fetching a different dataset from the server
  useEffect(() => {
    setEvents(generateMockEvents(7));
  }, [activeTab]);

  return (
    <section>
      {/* Section heading with activity icon and a navigation link */}
      <SectionHeader icon={ActivityIcon} title="Recent Events">
        <Link to="/search" className="section__action">View all events</Link>
      </SectionHeader>

      {/* Time-range filter tabs */}
      <FilterTabs
        tabs={FILTER_TABS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Event list */}
      <div className="events-list">
        {events.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default EventsList;
