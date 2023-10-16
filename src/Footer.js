import facebook from "./Images/facebook.svg"
import instagram from "./Images/instagram.svg"

function footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-card">
          <h3>Little Lemon</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Reservations</a>
            </li>
            <li>
              <a href="/">Order Online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>
        <div className="footer-card">
            <h3>Contact</h3>
            <p>Visit us:</p>
            <p>littlelemon@meta.com</p>
            <p>(555) 555-5555</p>
        </div>
        <div className="footer-card">
            <h3>Social Media</h3>
            <a href="facebook.com">
                <img src={facebook}/>
            </a>
            <a href="instagram.com">
                <img src={instagram}/>
            </a>
        </div>
      </div>
    </footer>
  );
}

export default footer;
