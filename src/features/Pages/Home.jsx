import { useNavigate } from "react-router";
import Data from "../../data/Data.js";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="home">
      <section className="home-content">
        <div className="home-text">
          <p className="home-greeting">Hello, I am</p>

          <h1 className="home-title">{Data.name}</h1>

          <h3 className="home-bio">
            {Data.shortBio}
          </h3>

          <button
            className="home-button"
            onClick={() => navigate("/about")}
          >
            Know More
          </button>
        </div>

        <div className="home-image-container">
          <img
            className="home-image"
            src="https://www.shutterstock.com/shutterstock/photos/2286554497/display_1500/stock-photo-random-pictures-cute-and-funny-2286554497.jpg"
            alt={`${Data.name} profile`}
          />
        </div>
      </section>
    </main>
  );
};

export default Home;