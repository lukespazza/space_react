import { InfoIcon, TargetIcon, ShieldIcon, LayersIcon } from '../../icons';
import SectionHeader from '../common/SectionHeader';

/**
 * InfoGrid -- Three informational cards describing the core SSA capabilities.
 *
 * Each card presents:
 *   1. An icon and title in the header row.
 *   2. A short introductory sentence.
 *   3. A bulleted list of specific capabilities.
 *
 * CSS classes used (global):
 *   .info-grid, .info-card, .info-card__header, .info-card__icon,
 *   .info-card__title, .info-card__content, .info-card__list,
 *   .info-card__list-item
 */

// Data for the three information cards
const infoCards = [
  {
    id: 'monitoring',
    icon: TargetIcon,
    title: 'Space Environment Monitoring',
    description:
      'Continuous surveillance of the orbital environment to maintain space safety.',
    items: [
      'Track 45,000+ objects in real time',
      'Monitor LEO to GEO orbital regimes',
      '24/7 automated detection and cataloging',
    ],
  },
  {
    id: 'collision',
    icon: ShieldIcon,
    title: 'Collision Avoidance',
    description:
      'Proactive conjunction analysis and maneuver support for spacecraft operators.',
    items: [
      'Probability of collision calculations',
      'Maneuver optimization recommendations',
      'Alert dissemination to operators',
    ],
  },
  {
    id: 'reentry',
    icon: LayersIcon,
    title: 'Reentry Analysis',
    description:
      'Predicting when and where objects will reenter the atmosphere.',
    items: [
      'Orbital decay prediction modeling',
      'Impact footprint estimation',
      'Debris survivability assessment',
    ],
  },
];

const InfoGrid = () => {
  return (
    <section>
      {/* Section heading with info icon */}
      <SectionHeader icon={InfoIcon} title="About SSA" />

      {/* Three-column information grid */}
      <div className="info-grid">
        {infoCards.map((card) => {
          const CardIcon = card.icon;
          return (
            <div key={card.id} className="info-card">
              {/* Card header with icon and title */}
              <div className="info-card__header">
                <span className="info-card__icon">
                  <CardIcon size={20} />
                </span>
                <h3 className="info-card__title">{card.title}</h3>
              </div>

              {/* Introductory description */}
              <p className="info-card__content">{card.description}</p>

              {/* Capability bullet list */}
              <ul className="info-card__list">
                {card.items.map((item, index) => (
                  <li key={index} className="info-card__list-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InfoGrid;
