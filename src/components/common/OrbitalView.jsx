/**
 * OrbitalView component for orbital visualization placeholders.
 *
 * Renders a 16:9 aspect ratio container with a grid background overlay
 * and centered placeholder content (icon, text, and subtext). This will
 * eventually house a 3D orbital visualization (e.g., Three.js/CesiumJS).
 *
 * Uses the global .orbital-view CSS classes from the original vanilla app.
 * The ::before pseudo-element on .orbital-view provides the radial gradient
 * background, and .orbital-view__grid provides the grid lines.
 *
 * @param {React.ComponentType} icon - Icon component shown in the placeholder center
 * @param {string} text - Primary placeholder text (e.g., "Orbital Visualization")
 * @param {string} subtext - Secondary text shown below, typically muted
 * @param {Object} style - Optional inline styles for the container
 */
const OrbitalView = ({ icon: Icon, text, subtext, style }) => {
  return (
    <div className="orbital-view" style={style}>
      {/* Grid overlay — CSS provides the background-image grid lines */}
      <div className="orbital-view__grid" />

      {/* Centered placeholder content */}
      <div className="orbital-view__placeholder">
        {Icon && (
          <div className="orbital-view__placeholder-icon">
            <Icon size={80} />
          </div>
        )}
        <p className="orbital-view__placeholder-text">
          {text}
          {/* Subtext rendered on a new line with muted styling, matching original HTML pattern */}
          {subtext && (
            <>
              <br />
              <span className="text-muted">{subtext}</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default OrbitalView;
