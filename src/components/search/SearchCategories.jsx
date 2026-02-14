import { searchCategories } from '../../data/searchData';
import * as Icons from '../../icons';

/**
 * SearchCategories — Grid of category browse buttons for the Search page.
 *
 * Each category card shows an icon, title, and record count. Clicking a
 * category activates it (highlighted via the --active modifier class).
 * The icon name is stored as a string in searchData and resolved to the
 * matching React component at render time through the Icons barrel export.
 *
 * Props:
 *   @param {string}   activeCategory   - ID of the currently active category
 *   @param {Function} onCategoryChange - Callback invoked with the new category ID
 *
 * CSS classes used (global):
 *   .search-categories, .search-category, .search-category--active,
 *   .search-category__icon, .search-category__text,
 *   .search-category__title, .search-category__count
 */
const SearchCategories = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="search-categories">
      {searchCategories.map((cat) => {
        // Dynamically resolve the icon component from the icons barrel
        const IconComponent = Icons[cat.icon];
        const isActive = activeCategory === cat.id;

        return (
          <button
            key={cat.id}
            className={`search-category${isActive ? ' search-category--active' : ''}`}
            onClick={() => onCategoryChange(cat.id)}
          >
            {/* Icon container */}
            <div className="search-category__icon">
              {IconComponent && <IconComponent size={20} />}
            </div>

            {/* Title and count text */}
            <div className="search-category__text">
              <div className="search-category__title">{cat.title}</div>
              <div className="search-category__count">{cat.count}</div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default SearchCategories;
