/**
 * Application-wide state context.
 *
 * Provides global state for system status, last data update time,
 * and active filters. Replaces the vanilla JS SSA state object.
 */

import { createContext, useContext, useState, useCallback } from 'react';

const AppContext = createContext(null);

const INITIAL_STATE = {
  systemStatus: 'operational', // 'operational' | 'warning' | 'critical'
  lastUpdate: new Date().toISOString(),
  filters: {
    timeRange: 'today',
    eventType: 'all',
  },
  statistics: {
    objectsInOrbit: 45892,
    todayCollisions: 3,
    todayReentries: 7,
    closeApproaches: 142,
  },
};

export function AppProvider({ children }) {
  const [state, setState] = useState(INITIAL_STATE);

  // Update a specific filter value
  const setFilter = useCallback((key, value) => {
    setState((prev) => ({
      ...prev,
      filters: { ...prev.filters, [key]: value },
    }));
  }, []);

  // Update the last refresh timestamp
  const refreshTimestamp = useCallback(() => {
    setState((prev) => ({
      ...prev,
      lastUpdate: new Date().toISOString(),
    }));
  }, []);

  // Update system status
  const setSystemStatus = useCallback((status) => {
    setState((prev) => ({ ...prev, systemStatus: status }));
  }, []);

  const value = {
    ...state,
    setFilter,
    refreshTimestamp,
    setSystemStatus,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

/**
 * Hook to consume the application context.
 * @returns {Object} Application state and updater functions
 */
export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
