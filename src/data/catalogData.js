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

export const catalogObjects = [
  { noradId: '25544', name: 'ISS (ZARYA)', type: 'Payload', typeVariant: 'nominal', altitude: '408 km', inclination: '51.64°', status: 'Active', statusColor: 'nominal' },
  { noradId: '48274', name: 'STARLINK-2547', type: 'Payload', typeVariant: 'nominal', altitude: '550 km', inclination: '53.05°', status: 'Active', statusColor: 'nominal' },
  { noradId: '33001', name: 'COSMOS 2251 DEB', type: 'Debris', typeVariant: 'warning', altitude: '782 km', inclination: '74.04°', status: 'Tracked', statusColor: 'muted' },
  { noradId: '54892', name: 'CZ-2C R/B', type: 'R/B', typeVariant: null, altitude: '142 km', inclination: '42.73°', status: 'Decaying', statusColor: 'critical' },
  { noradId: '39084', name: 'FENGYUN 1C DEB', type: 'Debris', typeVariant: 'warning', altitude: '865 km', inclination: '98.87°', status: 'Tracked', statusColor: 'muted' },
  { noradId: '41866', name: 'SENTINEL-3A', type: 'Payload', typeVariant: 'nominal', altitude: '814 km', inclination: '98.62°', status: 'Active', statusColor: 'nominal' },
  { noradId: '43013', name: 'COSMOS 2519 DEB', type: 'Debris', typeVariant: 'warning', altitude: '642 km', inclination: '82.44°', status: 'Tracked', statusColor: 'muted' },
  { noradId: '28654', name: 'IRIDIUM 33 DEB', type: 'Debris', typeVariant: 'warning', altitude: '789 km', inclination: '86.39°', status: 'Tracked', statusColor: 'muted' },
  { noradId: '44713', name: 'ONEWEB-0012', type: 'Payload', typeVariant: 'nominal', altitude: '1,200 km', inclination: '87.90°', status: 'Active', statusColor: 'nominal' },
  { noradId: '22285', name: 'SL-16 R/B', type: 'R/B', typeVariant: null, altitude: '850 km', inclination: '71.01°', status: 'Tracked', statusColor: 'muted' },
];

export const objectTypeOptions = [
  { value: '', label: 'All Types' },
  { value: 'payload', label: 'Payload' },
  { value: 'rocket', label: 'Rocket Body' },
  { value: 'debris', label: 'Debris' },
];

export const orbitRegimeOptions = [
  { value: '', label: 'All Orbits' },
  { value: 'leo', label: 'LEO' },
  { value: 'meo', label: 'MEO' },
  { value: 'geo', label: 'GEO' },
  { value: 'heo', label: 'HEO' },
];

export const countryOptions = [
  { value: '', label: 'All Countries' },
  { value: 'us', label: 'United States' },
  { value: 'ru', label: 'Russia' },
  { value: 'cn', label: 'China' },
  { value: 'eu', label: 'ESA' },
];
