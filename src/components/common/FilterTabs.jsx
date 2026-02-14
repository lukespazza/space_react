/**
 * Tab-based filter component.
 *
 * Renders a set of filter buttons inside a .filter-tabs container.
 * Tracks active state via the activeTab prop and fires onTabChange
 * when a different tab is clicked.
 *
 * Uses the global .filter-tabs and .filter-tab CSS classes from the
 * original vanilla app.
 *
 * @param {Array<{id: string, label: string}>} tabs - Available filter options
 * @param {string} activeTab - Currently active tab id
 * @param {Function} onTabChange - Callback receiving the new tab id on click
 */
import { useCallback } from 'react';

const FilterTabs = ({ tabs, activeTab, onTabChange }) => {
  // Memoize handler to avoid unnecessary re-renders in child callbacks
  const handleClick = useCallback((tabId) => {
    onTabChange(tabId);
  }, [onTabChange]);

  return (
    <div className="filter-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`filter-tab${activeTab === tab.id ? ' filter-tab--active' : ''}`}
          onClick={() => handleClick(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
