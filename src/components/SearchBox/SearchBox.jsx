import css from './SearchBox.module.css'

const SearchBox = ({ value, onSearch }) => {
    return (
      <div className={css.SearchBox}>
        <p>Find contacts by name</p>
        <input
          className={css.searchInput}
          type="text"
          placeholder="Search..."
          value={value}
          onChange={(event) => onSearch(event.target.value)}
        />
      </div>
    );
 };

export default SearchBox