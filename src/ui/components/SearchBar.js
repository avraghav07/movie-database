const SearchBar = ({ searchString, setSearchString }) => {
  return (
    <div className="search">
      <input
        className="search__bar"
        type="text"
        placeholder="🔎 Search for movies by name"
        value={searchString}
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
      />
      <button type="submit" className="search__button">
        Filters
      </button>
    </div>
  );
};

export default SearchBar;
