/**
 * Static mock data for the Reentry Prediction page.
 * Extracted from reentry.html.
 */

export const reentryStats = [
  {
    id: 'imminent',
    variant: 'warning',
    badge: '<24H',
    value: 3,
    label: 'Imminent Reentries',
    icon: 'LayersIcon',
  },
  {
    id: 'this-week',
    variant: 'info',
    badge: '7 DAYS',
    value: 12,
    label: 'Predicted This Week',
    icon: 'CalendarIcon',
  },
  {
    id: 'controlled',
    variant: 'nominal',
    badge: 'CONTROLLED',
    value: 1,
    label: 'Controlled Deorbit',
    icon: 'CheckCircleIcon',
  },
  {
    id: 'decay',
    variant: null,
    badge: 'TRACKED',
    value: 847,
    label: 'Objects in Decay',
    icon: 'ClockIcon',
  },
];

export const reentryTimeline = [
  {
    id: 're-1',
    object: 'CZ-2C R/B (54892)',
    urgency: 'critical',
    badgeLabel: 'Imminent',
    badgeVariant: 'critical',
    estimatedTime: 'Est. 2025-01-15 18:30 ± 4h',
    details: [
      { label: 'Object Type', value: 'Rocket Body' },
      { label: 'Mass (est.)', value: '3,200 kg' },
      { label: 'Current Alt.', value: '142 km' },
      { label: 'Inclination', value: '42.7°' },
      { label: 'Impact Zone', value: 'Pacific Ocean (est.)' },
      { label: 'Survivability', value: '20-40%', color: 'warning' },
    ],
  },
  {
    id: 're-2',
    object: 'SL-16 R/B (22285)',
    urgency: 'warning',
    badgeLabel: '12h',
    badgeVariant: 'warning',
    estimatedTime: 'Est. 2025-01-16 06:15 ± 6h',
    details: [
      { label: 'Object Type', value: 'Rocket Body' },
      { label: 'Mass (est.)', value: '8,900 kg' },
      { label: 'Current Alt.', value: '168 km' },
      { label: 'Inclination', value: '71.0°' },
      { label: 'Impact Zone', value: 'TBD' },
      { label: 'Survivability', value: '40-60%', color: 'critical' },
    ],
  },
  {
    id: 're-3',
    object: 'COSMOS 1408 DEB (49863)',
    urgency: null,
    badgeLabel: '3 days',
    badgeVariant: null,
    estimatedTime: 'Est. 2025-01-18 14:00 ± 24h',
    details: [
      { label: 'Object Type', value: 'Debris' },
      { label: 'Mass (est.)', value: '12 kg' },
      { label: 'Current Alt.', value: '245 km' },
      { label: 'Inclination', value: '82.5°' },
      { label: 'Impact Zone', value: 'TBD' },
      { label: 'Survivability', value: '<5%', color: 'nominal' },
    ],
  },
  {
    id: 're-4',
    object: 'PROGRESS MS-28 (58421)',
    urgency: 'nominal',
    badgeLabel: 'Controlled',
    badgeVariant: 'nominal',
    estimatedTime: 'Planned 2025-01-20 04:30 UTC',
    details: [
      { label: 'Object Type', value: 'Cargo Spacecraft' },
      { label: 'Mass', value: '7,200 kg' },
      { label: 'Current Alt.', value: '410 km' },
      { label: 'Inclination', value: '51.6°' },
      { label: 'Target Zone', value: 'SPOUA' },
      { label: 'Status', value: 'Nominal', color: 'nominal' },
    ],
  },
];
