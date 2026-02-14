/**
 * SVG Icon Components
 *
 * Centralized icon library for the SSA Platform.
 * All icons are Feather-style SVG stroke icons extracted from the original HTML.
 * Each icon accepts optional size (default 24) and className props.
 */

const defaultProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
};

// Helper to create icon components with consistent API
const createIcon = (name, children) => {
  const Icon = ({ size = 24, className, ...rest }) => (
    <svg
      width={size}
      height={size}
      {...defaultProps}
      className={className}
      {...rest}
    >
      {children}
    </svg>
  );
  Icon.displayName = name;
  return Icon;
};

// Navigation & Brand icons
export const TargetIcon = createIcon('TargetIcon', <>
  <circle cx="12" cy="12" r="10" />
  <circle cx="12" cy="12" r="3" />
  <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
</>);

export const HomeIcon = createIcon('HomeIcon', <>
  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  <polyline points="9 22 9 12 15 12 15 22" />
</>);

export const AlertCircleIcon = createIcon('AlertCircleIcon', <>
  <circle cx="12" cy="12" r="10" />
  <line x1="12" y1="8" x2="12" y2="12" />
  <line x1="12" y1="16" x2="12.01" y2="16" />
</>);

export const LayersIcon = createIcon('LayersIcon', <>
  <path d="M12 2L2 7l10 5 10-5-10-5z" />
  <path d="M2 17l10 5 10-5" />
  <path d="M2 12l10 5 10-5" />
</>);

export const CrosshairIcon = createIcon('CrosshairIcon', <>
  <circle cx="12" cy="12" r="3" />
  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
</>);

export const StarIcon = createIcon('StarIcon', <>
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</>);

export const ClockIcon = createIcon('ClockIcon', <>
  <circle cx="12" cy="12" r="10" />
  <polyline points="12 6 12 12 16 14" />
</>);

export const DatabaseIcon = createIcon('DatabaseIcon', <>
  <ellipse cx="12" cy="5" rx="9" ry="3" />
  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
</>);

export const SearchIcon = createIcon('SearchIcon', <>
  <circle cx="11" cy="11" r="8" />
  <line x1="21" y1="21" x2="16.65" y2="16.65" />
</>);

export const BellIcon = createIcon('BellIcon', <>
  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
</>);

export const SettingsIcon = createIcon('SettingsIcon', <>
  <circle cx="12" cy="12" r="3" />
  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
</>);

// Stats & Chart icons
export const BarChartIcon = createIcon('BarChartIcon', <>
  <line x1="18" y1="20" x2="18" y2="10" />
  <line x1="12" y1="20" x2="12" y2="4" />
  <line x1="6" y1="20" x2="6" y2="14" />
</>);

export const ActivityIcon = createIcon('ActivityIcon', <>
  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
</>);

export const TrendUpIcon = createIcon('TrendUpIcon', <>
  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
  <polyline points="17 6 23 6 23 12" />
</>);

export const CheckCircleIcon = createIcon('CheckCircleIcon', <>
  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
  <polyline points="22 4 12 14.01 9 11.01" />
</>);

export const PieChartIcon = createIcon('PieChartIcon', <>
  <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
  <path d="M22 12A10 10 0 0 0 12 2v10z" />
</>);

// Action icons
export const DownloadIcon = createIcon('DownloadIcon', <>
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <polyline points="7 10 12 15 17 10" />
  <line x1="12" y1="15" x2="12" y2="3" />
</>);

export const EditIcon = createIcon('EditIcon', <>
  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
</>);

export const CheckSquareIcon = createIcon('CheckSquareIcon', <>
  <polyline points="9 11 12 14 22 4" />
  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
</>);

export const ArrowRightIcon = createIcon('ArrowRightIcon', <>
  <line x1="5" y1="12" x2="19" y2="12" />
  <polyline points="12 5 19 12 12 19" />
</>);

export const ChevronLeftIcon = createIcon('ChevronLeftIcon', <>
  <polyline points="15 18 9 12 15 6" />
</>);

export const ChevronRightIcon = createIcon('ChevronRightIcon', <>
  <polyline points="9 18 15 12 9 6" />
</>);

export const FilterIcon = createIcon('FilterIcon', <>
  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
</>);

export const FilterLinesIcon = createIcon('FilterLinesIcon', <>
  <path d="M3 6h18" />
  <path d="M7 12h10" />
  <path d="M10 18h4" />
</>);

// Object type icons
export const ShieldIcon = createIcon('ShieldIcon', <>
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
</>);

export const InfoIcon = createIcon('InfoIcon', <>
  <circle cx="12" cy="12" r="10" />
  <line x1="12" y1="16" x2="12" y2="12" />
  <line x1="12" y1="8" x2="12.01" y2="8" />
</>);

export const GridIcon = createIcon('GridIcon', <>
  <rect x="3" y="3" width="7" height="7" />
  <rect x="14" y="3" width="7" height="7" />
  <rect x="14" y="14" width="7" height="7" />
  <rect x="3" y="14" width="7" height="7" />
</>);

export const CpuIcon = createIcon('CpuIcon', <>
  <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
  <rect x="9" y="9" width="6" height="6" />
  <line x1="9" y1="1" x2="9" y2="4" />
  <line x1="15" y1="1" x2="15" y2="4" />
  <line x1="9" y1="20" x2="9" y2="23" />
  <line x1="15" y1="20" x2="15" y2="23" />
  <line x1="20" y1="9" x2="23" y2="9" />
  <line x1="20" y1="14" x2="23" y2="14" />
  <line x1="1" y1="9" x2="4" y2="9" />
  <line x1="1" y1="14" x2="4" y2="14" />
</>);

export const RocketIcon = createIcon('RocketIcon', <>
  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
  <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
</>);

export const GlobeIcon = createIcon('GlobeIcon', <>
  <circle cx="12" cy="12" r="10" />
  <line x1="2" y1="12" x2="22" y2="12" />
  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
</>);

export const MapPinIcon = createIcon('MapPinIcon', <>
  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
  <circle cx="12" cy="10" r="3" />
</>);

export const CalendarIcon = createIcon('CalendarIcon', <>
  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
  <line x1="16" y1="2" x2="16" y2="6" />
  <line x1="8" y1="2" x2="8" y2="6" />
  <line x1="3" y1="10" x2="21" y2="10" />
</>);

// Orbital view placeholders
export const OrbitIcon = createIcon('OrbitIcon', <>
  <circle cx="12" cy="12" r="10" />
  <circle cx="12" cy="12" r="3" />
  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-30 12 12)" />
</>);

export const OrbitSingleIcon = createIcon('OrbitSingleIcon', <>
  <circle cx="12" cy="12" r="10" />
  <circle cx="12" cy="12" r="3" />
  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
</>);

// Debris cloud icon
export const DebrisCloudIcon = createIcon('DebrisCloudIcon', <>
  <circle cx="12" cy="12" r="10" />
  <circle cx="8" cy="8" r="1" />
  <circle cx="14" cy="6" r="1" />
  <circle cx="16" cy="10" r="1" />
  <circle cx="15" cy="14" r="1" />
  <circle cx="10" cy="16" r="1" />
  <circle cx="6" cy="12" r="1" />
  <circle cx="12" cy="12" r="3" />
</>);

// Simple circle icon (for generic orbit)
export const CircleIcon = createIcon('CircleIcon', <>
  <circle cx="12" cy="12" r="10" />
</>);

// Square icon
export const SquareIcon = createIcon('SquareIcon', <>
  <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
</>);

// Crosshair simple (for approach with fewer paths)
export const CrosshairSimpleIcon = createIcon('CrosshairSimpleIcon', <>
  <circle cx="12" cy="12" r="3" />
  <path d="M12 2v4M12 18v4" />
</>);
