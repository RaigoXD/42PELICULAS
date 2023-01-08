import searchIcon from "../../Assets/Icons/Search.svg";

const SearchBar = ({ setSearchValue }) => {
  let HtmlSearchBar = (
    <div className="relative mt-4">
      <input
        type="search"
        className="px-3 rounded-xl w-full h-8 focus:outline-primary/20"
        placeholder="Buscar..."
        onChange={(text) => {
          setSearchValue(text.target.value);
        }}
      />
      <img
        src={searchIcon}
        alt="Search Icon"
        className="absolute right-3 top-2 w-4"
      />
    </div>
  );
  return HtmlSearchBar;
};

export default SearchBar;
