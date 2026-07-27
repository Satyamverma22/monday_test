import { useNavigate } from "react-router";
import Data from "../../data/Data.js";
import "./Home.css";
import Navbar from "../components/Navbar.jsx";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <main className="container">
        <section className="content">
          <div className="text">
            <p className="greeting">Hello, I am</p>

            <h1 className="title">{Data.name}</h1>

            <h3 className="bio">{Data.shortBio}</h3>

            <button
              className="button"
              onClick={() => navigate("/about")}
            >
              Know More
            </button>
          </div>

          <div className="image-box">
            <img
              className="image"
              src="https://www.shutterstock.com/shutterstock/photos/2286554497/display_1500/stock-photo-random-pictures-cute-and-funny-2286554497.jpg"
              alt={`${Data.name} profile`}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;