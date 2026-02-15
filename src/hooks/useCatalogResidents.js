import { useState, useEffect, useCallback } from 'react';
import { fetchResidents } from '../api/catalogService';

export function useCatalogResidents({ search, objectType, regime, country } = {}) {
  const [residents, setResidents] = useState([]);
  const [meta, setMeta] = useState({ total: 0, page: 1, per_page: 25, total_pages: 0 });
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Reset to page 1 when filters change
  useEffect(() => {
    setPage(1);
  }, [search, objectType, regime, country]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    fetchResidents({ page, perPage: 25, search, objectType, regime, country })
      .then((response) => {
        if (cancelled) return;
        setResidents(response.data);
        setMeta(response.meta);
        setError(null);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [page, search, objectType, regime, country]);

  const goToPage = useCallback((p) => {
    setPage(p);
  }, []);

  return { residents, meta, page, loading, error, goToPage };
}
