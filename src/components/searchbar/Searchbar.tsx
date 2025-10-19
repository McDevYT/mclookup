import "./Searchbar.css";

export const Searchbar = (): React.ReactElement => {
  return (
    <div className="searchbar">
      <input className="searchbar-input" placeholder="Search Name or UUID" />
      <button className="searchbar-button">Search</button>
    </div>
  );
};
