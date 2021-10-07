const Search = () => (
  <form action="/" method="get">
    <label htmlFor="header-search">
      <span className="search"></span>
    </label>
    <input
      type="text"
      id="header-search"
      placeholder="Search for movies by name"
      name="s"
    />
    <button type="submit">Search</button>
  </form>
);

export default Search;
