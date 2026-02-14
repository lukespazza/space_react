/**
 * SearchInput component with a search icon.
 *
 * Renders a search input field with a magnifying glass icon positioned
 * inside using absolute positioning. Uses the global .search-input CSS
 * classes from the original vanilla app.
 *
 * The `large` prop adds a .search-input--large modifier class for the
 * search page variant, which has larger padding and font size. The
 * consuming page (or its parent wrapper) can style this via CSS.
 *
 * @param {string} value - Controlled input value
 * @param {Function} onChange - Input change handler
 * @param {Function} onKeyDown - Optional keydown handler (e.g., for Enter to search)
 * @param {string} placeholder - Input placeholder text
 * @param {boolean} large - Whether to use the large search page variant
 */
import { SearchIcon } from '../../icons';

const SearchInput = ({ value, onChange, onKeyDown, placeholder, large }) => {
  // Add large modifier class when used on the search page
  const containerClasses = ['search-input', large ? 'search-input--large' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClasses}>
      {/* Icon positioned absolutely inside the input via CSS */}
      <SearchIcon className="search-input__icon" size={18} />
      <input
        type="text"
        className="search-input__field"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        aria-label={placeholder || 'Search'}
      />
    </div>
  );
};

export default SearchInput;
