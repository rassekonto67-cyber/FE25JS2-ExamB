import "./About.css";
import jane from "../assets/pexels-moose-photos-170195-1587009.jpg";
import john from "../assets/pexels-moose-photos-170195-1036627.jpg";


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
          <img src={jane} alt="Jane Doe" />
          <p>Jane Doe – CEO</p>
        </div>
        <div className="member">
          <img src={john} alt="John Smith" />
          <p>John Smith – Designer</p>
        </div>
      </div>
    </div>
  );
}

export default About;
