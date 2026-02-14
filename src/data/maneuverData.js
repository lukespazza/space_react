/**
 * Static mock data for the Maneuver Detection page.
 * Extracted from maneuver.html.
 */

export const maneuverStats = [
  {
    id: 'detected',
    variant: null,
    badge: '24H',
    value: 47,
    label: 'Maneuvers Detected',
    icon: 'ClockIcon',
  },
  {
    id: 'orbit-adj',
    variant: 'info',
    badge: 'ORBIT',
    value: 23,
    label: 'Orbit Adjustments',
    icon: 'TrendUpIcon',
  },
  {
    id: 'cam',
    variant: 'warning',
    badge: 'CAM',
    value: 8,
    label: 'Collision Avoidance',
    icon: 'AlertCircleIcon',
  },
  {
    id: 'station-keep',
    variant: 'nominal',
    badge: 'SK',
    value: 16,
    label: 'Station Keeping',
    icon: 'CheckCircleIcon',
  },
];

export const maneuverList = [
  {
    id: 'man-1',
    object: 'STARLINK-2547 (48274)',
    time: '2h ago',
    type: 'Collision Avoidance',
    typeVariant: 'warning',
    details: [
      { label: 'Delta-V', value: '0.42 m/s' },
      { label: 'Duration', value: '12s' },
      { label: 'Alt. Change', value: '+2.3 km' },
      { label: 'Confidence', value: 'High', color: 'nominal' },
    ],
  },
  {
    id: 'man-2',
    object: 'ISS (ZARYA) (25544)',
    time: '4h ago',
    type: 'Orbit Raising',
    typeVariant: 'info',
    details: [
      { label: 'Delta-V', value: '1.23 m/s' },
      { label: 'Duration', value: '180s' },
      { label: 'Alt. Change', value: '+1.8 km' },
      { label: 'Confidence', value: 'High', color: 'nominal' },
    ],
  },
  {
    id: 'man-3',
    object: 'SENTINEL-3A (41866)',
    time: '6h ago',
    type: 'Station Keeping',
    typeVariant: null,
    details: [
      { label: 'Delta-V', value: '0.08 m/s' },
      { label: 'Duration', value: '45s' },
      { label: 'Alt. Change', value: '+0.1 km' },
      { label: 'Confidence', value: 'High', color: 'nominal' },
    ],
  },
  {
    id: 'man-4',
    object: 'ONEWEB-0145 (48912)',
    time: '8h ago',
    type: 'Collision Avoidance',
    typeVariant: 'warning',
    details: [
      { label: 'Delta-V', value: '0.31 m/s' },
      { label: 'Duration', value: '8s' },
      { label: 'Alt. Change', value: '+1.5 km' },
      { label: 'Confidence', value: 'Medium', color: 'warning' },
    ],
  },
  {
    id: 'man-5',
    object: 'GPS IIF-12 (41019)',
    time: '12h ago',
    type: 'Station Keeping',
    typeVariant: null,
    details: [
      { label: 'Delta-V', value: '0.15 m/s' },
      { label: 'Duration', value: '120s' },
      { label: 'Alt. Change', value: '0 km' },
      { label: 'Confidence', value: 'High', color: 'nominal' },
    ],
  },
  {
    id: 'man-6',
    object: 'TDRS-13 (43077)',
    time: '18h ago',
    type: 'Orbit Adjustment',
    typeVariant: 'info',
    details: [
      { label: 'Delta-V', value: '0.52 m/s' },
      { label: 'Duration', value: '240s' },
      { label: 'Incl. Change', value: '0.02°' },
      { label: 'Confidence', value: 'High', color: 'nominal' },
    ],
  },
];
