import "./Home.css";
import { Link } from "react-router-dom";

import pexelsImage from "../assets/pexels-cottonbro-6003325.jpg";

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <img
          className="hero-img"
          src={pexelsImage}
          alt="Hero"
        />
        <Link to="/clothes" className="hero-btn">
            Shop Now - Collection 2026
          </Link>
        <div className="hero-text">
          <h1>Fall/Winter</h1>

        </div>
      </section>

      <section className="content">
        <h2>Featured Products</h2>
        <p>Check out our top picks for this season.</p>
      </section>
    </div>
  );
}

export default Home;
