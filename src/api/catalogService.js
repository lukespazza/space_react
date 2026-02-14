import { get } from './spockClient';

const STAT_CONFIG = {
  total_residents: {
    id: 'total',
    variant: 'nominal',
    badge: 'TOTAL',
    label: 'Tracked Objects',
    icon: 'TargetIcon',
  },
  active_payloads: {
    id: 'payloads',
    variant: null,
    badge: 'ACTIVE',
    label: 'Payloads',
    icon: 'CpuIcon',
  },
  debris: {
    id: 'debris',
    variant: 'warning',
    badge: 'DEBRIS',
    label: 'Debris Fragments',
    icon: 'StarIcon',
  },
  rocket_bodies: {
    id: 'rockets',
    variant: null,
    badge: 'R/B',
    label: 'Rocket Bodies',
    icon: 'RocketIcon',
  },
};

export async function fetchCatalogStats() {
  const [total, payloads, debris, rocketBodies] = await Promise.all([
    get('/residents/stats/total'),
    get('/residents/stats/active-payloads'),
    get('/residents/stats/debris'),
    get('/residents/stats/rocket-bodies'),
  ]);

  return [total, payloads, debris, rocketBodies].map((res) => {
    const config = STAT_CONFIG[res.category];
    return { ...config, value: res.count };
  });
}
