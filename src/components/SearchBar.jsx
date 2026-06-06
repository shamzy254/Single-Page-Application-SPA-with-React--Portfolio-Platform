function SearchBar({ value, onSearch }) {
  return (
    <div className="input-group">
      <label htmlFor="project-search">Search projects</label>
      <input
        id="project-search"
        className="search-field"
        type="search"
        placeholder="Search by title, description, or tag"
        value={value}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
