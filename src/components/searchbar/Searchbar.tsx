import { useState } from "react";
import "./Searchbar.css";

export const Searchbar = (props: {
  onSearch: (query: string) => void;
}): React.ReactElement => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    props.onSearch(query.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="searchbar">
      <input
        className="searchbar-input"
        placeholder="Search Name or UUID"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="searchbar-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
