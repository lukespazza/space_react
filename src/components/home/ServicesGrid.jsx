import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';
import {
  GridIcon,
  AlertCircleIcon,
  LayersIcon,
  CrosshairIcon,
  DebrisCloudIcon,
  ActivityIcon,
  DatabaseIcon,
  ArrowRightIcon,
} from '../../icons';

/**
 * ServicesGrid -- Grid of six service cards linking to the main SSA tools.
 *
 * Each card contains:
 *   - An icon representing the service
 *   - A title and short description
 *   - An "Access service" link with an arrow icon, navigating to the
 *     corresponding route via react-router Link
 *
 * CSS classes used (global):
 *   .services-grid, .service-card, .service-card__icon,
 *   .service-card__title, .service-card__desc, .service-card__arrow
 */

// Service definitions -- each entry maps to a dedicated page in the platform
const services = [
  {
    id: 'collision',
    path: '/collision',
    icon: AlertCircleIcon,
    title: 'Collision Analysis',
    description:
      'Assess conjunction events and evaluate collision probability between tracked objects.',
  },
  {
    id: 'reentry',
    path: '/reentry',
    icon: LayersIcon,
    title: 'Reentry Prediction',
    description:
      'Predict atmospheric reentry windows and estimate ground impact footprints.',
  },
  {
    id: 'approach',
    path: '/approach',
    icon: CrosshairIcon,
    title: 'Close Approach',
    description:
      'Monitor close approaches between cataloged objects and active spacecraft.',
  },
  {
    id: 'fragmentation',
    path: '/fragmentation',
    icon: DebrisCloudIcon,
    title: 'Fragmentation Events',
    description:
      'Track breakup events and analyze debris cloud evolution over time.',
  },
  {
    id: 'maneuver',
    path: '/maneuver',
    icon: ActivityIcon,
    title: 'Maneuver Detection',
    description:
      'Detect and characterize orbital maneuvers performed by active satellites.',
  },
  {
    id: 'catalog',
    path: '/catalog',
    icon: DatabaseIcon,
    title: 'Object Catalog',
    description:
      'Browse the full catalog of tracked objects with detailed orbital parameters.',
  },
];

const ServicesGrid = () => {
  return (
    <section>
      {/* Section heading with grid icon */}
      <SectionHeader icon={GridIcon} title="Available Services" />

      {/* Six service cards arranged in a responsive grid */}
      <div className="services-grid">
        {services.map((service) => {
          const ServiceIcon = service.icon;
          return (
            <Link
              key={service.id}
              to={service.path}
              className="service-card"
            >
              {/* Service icon */}
              <span className="service-card__icon">
                <ServiceIcon size={24} />
              </span>

              {/* Service title */}
              <h3 className="service-card__title">{service.title}</h3>

              {/* Short description of what the service provides */}
              <p className="service-card__desc">{service.description}</p>

              {/* Action prompt with arrow */}
              <span className="service-card__arrow">
                Access service
                <ArrowRightIcon size={16} />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesGrid;
