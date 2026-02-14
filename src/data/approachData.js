/**
 * Static mock data for the Close Approach page.
 * Extracted from approach.html.
 */

export const approachStats = [
  {
    id: 'high-risk',
    variant: 'critical',
    badge: '<1km',
    value: 12,
    label: 'High Risk Approaches',
    icon: 'CrosshairSimpleIcon',
  },
  {
    id: 'medium-dist',
    variant: 'warning',
    badge: '<5km',
    value: 89,
    label: 'Medium Distance',
    icon: 'CrosshairSimpleIcon',
  },
  {
    id: 'total-monitored',
    variant: null,
    badge: '24H',
    value: 142,
    label: 'Total Monitored',
    icon: 'ClockIcon',
  },
  {
    id: 'clear-passes',
    variant: 'nominal',
    badge: 'SAFE',
    value: '98.2%',
    label: 'Clear Passes',
    icon: 'CheckCircleIcon',
  },
];

export const approachList = [
  {
    id: 'app-1',
    severity: 'high',
    primary: { id: '25544', name: 'ISS (ZARYA)' },
    secondary: { id: '43013', name: 'COSMOS 2519 DEB' },
    missDistance: '0.42 km',
    missDistanceColor: 'critical',
    tca: '14:32 UTC',
  },
  {
    id: 'app-2',
    severity: 'high',
    primary: { id: '48274', name: 'STARLINK-2547' },
    secondary: { id: '33001', name: 'COSMOS 2251 DEB' },
    missDistance: '0.78 km',
    missDistanceColor: 'critical',
    tca: '18:15 UTC',
  },
  {
    id: 'app-3',
    severity: 'medium',
    primary: { id: '41866', name: 'SENTINEL-3A' },
    secondary: { id: '39084', name: 'FENGYUN 1C DEB' },
    missDistance: '2.34 km',
    missDistanceColor: 'warning',
    tca: '22:48 UTC',
  },
  {
    id: 'app-4',
    severity: 'low',
    primary: { id: '44713', name: 'ONEWEB-0012' },
    secondary: { id: '28654', name: 'IRIDIUM 33 DEB' },
    missDistance: '4.89 km',
    missDistanceColor: null,
    tca: 'Tomorrow 03:22',
  },
];
