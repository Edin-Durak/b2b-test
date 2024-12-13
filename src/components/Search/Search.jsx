import { useState, useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import styles from "./Search.module.css";

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    if (debouncedSearchTerm.length >= 3) {
      onSearch(debouncedSearchTerm);
    } else {
      onSearch("");
    }
  }, [debouncedSearchTerm, onSearch]);

  return (
    <input
      type="text"
      className={styles.searchInput}
      placeholder="Pretraži..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default Search;
