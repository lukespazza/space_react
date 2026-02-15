/**
 * Static mock data for the Object Catalog page.
 * Extracted from catalog.html.
 */

export const catalogStats = [
  {
    id: 'total',
    variant: 'nominal',
    badge: 'TOTAL',
    value: '45,892',
    label: 'Tracked Objects',
    icon: 'TargetIcon',
  },
  {
    id: 'payloads',
    variant: null,
    badge: 'ACTIVE',
    value: '9,847',
    label: 'Payloads',
    icon: 'CpuIcon',
  },
  {
    id: 'debris',
    variant: 'warning',
    badge: 'DEBRIS',
    value: '28,451',
    label: 'Debris Fragments',
    icon: 'StarIcon',
  },
  {
    id: 'rockets',
    variant: null,
    badge: 'R/B',
    value: '2,156',
    label: 'Rocket Bodies',
    icon: 'RocketIcon',
  },
];

export const objectTypeOptions = [
  { value: '', label: 'All Types' },
  { value: 'payload', label: 'Payload' },
  { value: 'rocket', label: 'Rocket Body' },
  { value: 'debris', label: 'Debris' },
];

export const orbitRegimeOptions = [
  { value: '', label: 'All Orbits' },
  { value: 'GEO', label: 'GEO' },
  { value: 'IGO', label: 'IGO' },
  { value: 'EGO', label: 'EGO' },
  { value: 'NSO', label: 'NSO' },
  { value: 'GTO', label: 'GTO' },
  { value: 'MEO', label: 'MEO' },
  { value: 'GHO', label: 'GHO' },
  { value: 'LEO', label: 'LEO' },
  { value: 'HAO', label: 'HAO' },
  { value: 'MGO', label: 'MGO' },
  { value: 'HEO', label: 'HEO' },
  { value: 'LMO', label: 'LMO' },
  { value: 'UFO', label: 'UFO' },
  { value: 'ESO', label: 'ESO' },
];

export const countryOptions = [
  { value: '', label: 'All Countries' },
  { value: 'us', label: 'United States' },
  { value: 'ru', label: 'Russia' },
  { value: 'cn', label: 'China' },
  { value: 'eu', label: 'ESA' },
];
