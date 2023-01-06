import "./styles.scss";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Yaha pe ayegi humari tagline</h1>
      <div className="select-container">
        <div>
          <select className="selection">
            <option className="option" value="1"><span >Select Location</span></option>
          </select>
        </div>
        <div>
        <select className="selection">
            <option className="option" value="1"><span >Select Solution</span></option>
          </select>
        </div>
        <div>
            <button className="search-btn" type="button">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
