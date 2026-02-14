/**
 * Static mock data for the Search page.
 * Extracted from search.html.
 */

export const searchCategories = [
  { id: 'all', title: 'All Objects', count: '45,892 records', icon: 'TargetIcon' },
  { id: 'payload', title: 'Payloads', count: '9,847 active', icon: 'CpuIcon' },
  { id: 'debris', title: 'Debris', count: '28,451 tracked', icon: 'StarIcon' },
  { id: 'rocket', title: 'Rocket Bodies', count: '2,156 tracked', icon: 'RocketIcon' },
  { id: 'events', title: 'Events', count: '1,247 this month', icon: 'ActivityIcon' },
  { id: 'conjunctions', title: 'Conjunctions', count: '3,892 active', icon: 'AlertCircleIcon' },
];

export const mockSearchResults = [
  {
    id: '25544',
    name: 'ISS (ZARYA)',
    type: 'Payload',
    typeIcon: 'CpuIcon',
    orbit: 'LEO (408 km)',
    country: 'ISS/Multi-national',
    status: 'Active',
    statusColor: 'nominal',
  },
  {
    id: '48274',
    name: 'STARLINK-2547',
    type: 'Payload',
    typeIcon: 'CpuIcon',
    orbit: 'LEO (550 km)',
    country: 'SpaceX (US)',
    status: 'Active',
    statusColor: 'nominal',
  },
  {
    id: '33001',
    name: 'COSMOS 2251 DEB',
    type: 'Debris',
    typeIcon: 'StarIcon',
    orbit: 'LEO (782 km)',
    country: 'Russia',
    status: 'In Conjunction',
    statusColor: 'warning',
  },
  {
    id: '54892',
    name: 'CZ-2C R/B',
    type: 'Rocket Body',
    typeIcon: 'RocketIcon',
    orbit: 'LEO (142 km)',
    country: 'China',
    status: 'Decaying',
    statusColor: 'critical',
  },
  {
    id: '39084',
    name: 'FENGYUN 1C DEB',
    type: 'Debris',
    typeIcon: 'StarIcon',
    orbit: 'LEO (865 km)',
    country: 'China',
    status: 'Tracked',
    statusColor: null,
  },
];
