function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-box">
      <label htmlFor="search" className="control-label">
        Search by Name
      </label>
      <input
        id="search"
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        className="control-input"
      />
    </div>
  );
}

export default SearchBar;