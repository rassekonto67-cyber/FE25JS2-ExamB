import "./About.css";

function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>
        Welcome! We are passionate about delivering the best products and 
        excellent service. Explore our collections and find your favorites.
      </p>

      <h2>Our Team</h2>
      <div className="team">
        <div className="member">
          <img src="https://via.placeholder.com/120" alt="Jane Doe" />
          <p>Jane Doe – CEO</p>
        </div>
        <div className="member">
          <img src="https://via.placeholder.com/120" alt="John Smith" />
          <p>John Smith – Designer</p>
        </div>
      </div>
    </div>
  );
}

export default About;
