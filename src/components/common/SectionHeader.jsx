/**
 * SectionHeader component for titled content sections.
 *
 * Renders a section header with an icon, title text, and an optional
 * action slot on the right (passed as children). Uses the global
 * .section__header and .section__title CSS classes from the original
 * vanilla app.
 *
 * The flexbox layout in .section__header places the title on the left
 * and any children (e.g., links, buttons, filter tabs) on the right
 * via justify-content: space-between.
 *
 * @param {React.ComponentType} icon - Icon component rendered beside the title
 * @param {string} title - Section title text (displayed uppercase via CSS)
 * @param {React.ReactNode} children - Optional right-side action content
 */
const SectionHeader = ({ icon: Icon, title, children }) => {
  return (
    <div className="section__header">
      <h3 className="section__title">
        {/* Icon is rendered at 16px by CSS (.section__title svg) */}
        {Icon && <Icon size={16} />}
        {title}
      </h3>

      {/* Action slot: links, buttons, or filter tabs appear on the right */}
      {children}
    </div>
  );
};

export default SectionHeader;
