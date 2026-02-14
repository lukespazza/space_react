import { useState, useEffect } from 'react';
import { fetchCatalogStats } from '../api/catalogService';
import { catalogStats as fallbackStats } from '../data/catalogData';

export function useCatalogStats() {
  const [stats, setStats] = useState(fallbackStats);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetchCatalogStats()
      .then((data) => {
        if (!cancelled) setStats(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, []);

  return { stats, loading, error };
}
