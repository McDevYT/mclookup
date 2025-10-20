import { useRef, useState } from "react";
import "./Searchbar.css";

export const Searchbar = (props: {
  value: string;
  onSearch: (query: string) => void;
  isSticky: boolean;
}): React.ReactElement => {
  const [query, setQuery] = useState(props.value);

  const ref = useRef<HTMLDivElement>(null);

  const handleSearch = () => {
    props.onSearch(query.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="searchbar-holder">
      <div className={`searchbar ${props.isSticky ? "sticky" : ""}`} ref={ref}>
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
    </div>
  );
};
