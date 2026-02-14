/**
 * Static mock data for the Fragmentation Events page.
 * Extracted from fragmentation.html.
 */

export const fragSummary = [
  { value: '642', label: 'Total Events Recorded' },
  { value: '3', label: 'Events This Year', color: 'warning' },
  { value: '12,847', label: 'Tracked Debris Pieces' },
  { value: '~35,000', label: 'Estimated Total Debris' },
];

export const fragEvents = [
  {
    date: '2021-11-15',
    parentObject: 'COSMOS 1408 (Russia)',
    type: 'ASAT',
    typeVariant: 'critical',
    altitude: '480 km',
    debrisCount: '1,632',
    debrisCountColor: 'critical',
    status: 'Active',
    statusVariant: 'warning',
  },
  {
    date: '2019-03-27',
    parentObject: 'MICROSAT-R (India)',
    type: 'ASAT',
    typeVariant: 'critical',
    altitude: '283 km',
    debrisCount: '400+',
    debrisCountColor: null,
    status: 'Decayed',
    statusVariant: null,
  },
  {
    date: '2009-02-10',
    parentObject: 'COSMOS 2251 × IRIDIUM 33',
    type: 'Collision',
    typeVariant: 'warning',
    altitude: '789 km',
    debrisCount: '2,296',
    debrisCountColor: 'critical',
    status: 'Active',
    statusVariant: 'warning',
  },
  {
    date: '2007-01-11',
    parentObject: 'FENGYUN 1C (China)',
    type: 'ASAT',
    typeVariant: 'critical',
    altitude: '865 km',
    debrisCount: '3,438',
    debrisCountColor: 'critical',
    status: 'Active',
    statusVariant: 'warning',
  },
  {
    date: '1996-06-03',
    parentObject: 'PEGASUS DEB',
    type: 'Explosion',
    typeVariant: 'info',
    altitude: '625 km',
    debrisCount: '751',
    debrisCountColor: null,
    status: 'Partial Decay',
    statusVariant: null,
  },
];
