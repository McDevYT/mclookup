import "./Searchbar.css";

export const Searchbar = () => {
  return (
    <div className="searchbar">
      <input className="searchbar-input">Search Name or UUID</input>
      <button className="searchbar-button">Search</button>
    </div>
  );
};
