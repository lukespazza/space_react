/**
 * Static mock data for the Collision Analysis page.
 * Extracted from the original collision.html static content.
 */

export const collisionStats = [
  {
    id: 'high-prob',
    variant: 'critical',
    badge: 'CRITICAL',
    value: 2,
    label: 'High Probability Events',
    icon: 'AlertCircleIcon',
  },
  {
    id: 'medium-prob',
    variant: 'warning',
    badge: 'WARNING',
    value: 8,
    label: 'Medium Probability Events',
    icon: 'AlertCircleIcon',
  },
  {
    id: 'active-conj',
    variant: null,
    badge: 'MONITORED',
    value: 47,
    label: 'Active Conjunctions',
    icon: 'CheckCircleIcon',
  },
  {
    id: 'maneuvers',
    variant: 'nominal',
    badge: '24H',
    value: 3,
    label: 'Maneuvers Executed',
    icon: 'ClockIcon',
  },
];

export const conjunctionList = [
  {
    id: 'conj-1',
    primaryId: '33001',
    secondaryId: '48274',
    type: 'collision',
    description: 'COSMOS 2251 DEB vs STARLINK-2547 — TCA in 6h 42m',
    probability: 'Pc: 1.2e-3',
    severity: 'critical',
  },
  {
    id: 'conj-2',
    primaryId: '25544',
    secondaryId: '43013',
    type: 'collision',
    description: 'ISS (ZARYA) vs COSMOS 2519 DEB — TCA in 14h 18m',
    probability: 'Pc: 8.7e-4',
    severity: 'critical',
  },
  {
    id: 'conj-3',
    primaryId: '39084',
    secondaryId: '42876',
    type: 'approach',
    description: 'FENGYUN 1C DEB vs SL-16 R/B — TCA in 22h 05m',
    probability: 'Pc: 2.3e-5',
    severity: 'warning',
  },
  {
    id: 'conj-4',
    primaryId: '54892',
    secondaryId: '28654',
    type: 'nominal',
    description: 'CZ-2C R/B vs IRIDIUM 33 DEB — TCA in 31h 44m',
    probability: 'Pc: 4.1e-7',
    severity: 'low',
  },
];

export const selectedConjunction = {
  primaryObject: '33001',
  secondaryObject: '48274',
  tca: '2025-01-15 21:42:18',
  missDistance: '127 m',
  probability: '1.2 × 10⁻³',
  relativeVelocity: '14.2 km/s',
  radialSep: '42 m',
  inTrackSep: '98 m',
};
