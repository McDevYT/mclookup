import "./Home.css";

export const Home = () => {
  return (
    <div className="home-div">
      <div className="home-logo">
        <h1>McLookup</h1>
      </div>
      <div className="home-content-section">
        <svg
          className="section-edge"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <polygon points="0,10 0,5 10,5 10,10 20,10 20,0 30,0 30,10 40,10 40,5 50,5 50,10 60,10 60,0 70,0 70,10 80,10 80,5 90,5 90,10 100,10" />
        </svg>
        <div className="home-content"></div>
      </div>
    </div>
  );
};
