function SortSelect({ sortOption, onSortChange }) {
  return (
    <div className="sort-box">
      <label htmlFor="sort" className="control-label">
        Sort By
      </label>
      <select
        id="sort"
        value={sortOption}
        onChange={(event) => onSortChange(event.target.value)}
        className="control-input"
      >
        <option value="">Default</option>
        <option value="name-asc">Name A-Z</option>
        <option value="name-desc">Name Z-A</option>
        <option value="price-asc">Price Low to High</option>
        <option value="price-desc">Price High to Low</option>
      </select>
    </div>
  );
}

export default SortSelect;