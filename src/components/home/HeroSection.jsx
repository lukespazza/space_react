import { useApp } from '../../context/AppContext';
import { formatDateTime } from '../../utils/formatters';
import { ClockIcon } from '../../icons';

/**
 * HeroSection -- The main hero banner for the SSA Platform home page.
 *
 * Layout:
 *   Left side  -- Label tag ("Real-time Monitoring" with a clock icon),
 *                 main heading, and a descriptive subtitle paragraph.
 *   Right side -- A compact status panel showing three live indicators:
 *                 System Status, Data Feed connectivity, and the timestamp
 *                 of the last data update (pulled from AppContext).
 *
 * CSS classes used (global):
 *   .hero, .hero__inner, .hero__content, .hero__label, .hero__title,
 *   .hero__subtitle, .hero__status, .status-item
 */
const HeroSection = () => {
  // Read last update timestamp from global application state
  const { lastUpdate } = useApp();

  return (
    <section className="hero">
      <div className="hero__inner">

        {/* Left column -- headline content */}
        <div className="hero__content">
          {/* Label badge with clock icon */}
          <span className="hero__label">
            <ClockIcon size={14} />
            Real-time Monitoring
          </span>

          {/* Primary heading */}
          <h1 className="hero__title">
            Space Situational Awareness Operations Center
          </h1>

          {/* Supporting description */}
          <p className="hero__subtitle">
            Comprehensive monitoring and analysis of objects in Earth orbit.
            Track conjunctions, predict reentries, and assess fragmentation
            events with real-time data from global sensor networks.
          </p>
        </div>

        {/* Right column -- live status panel */}
        <div className="hero__status">
          {/* System health indicator */}
          <div className="status-item">
            <span className="status-item__indicator" />
            <div className="status-item__content">
              <span className="status-item__label">System Status</span>
              <span className="status-item__value">Operational</span>
            </div>
          </div>

          {/* Data feed connectivity indicator */}
          <div className="status-item">
            <span className="status-item__indicator" />
            <div className="status-item__content">
              <span className="status-item__label">Data Feed</span>
              <span className="status-item__value">Connected</span>
            </div>
          </div>

          {/* Last data refresh timestamp from context */}
          <div className="status-item">
            <span className="status-item__indicator" />
            <div className="status-item__content">
              <span className="status-item__label">Last Update</span>
              <span className="status-item__value">
                {formatDateTime(lastUpdate)}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
