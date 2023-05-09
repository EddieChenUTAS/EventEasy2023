import "./index.css"

export default function Footer() {
  return (
    <div class="footer-container">
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"></link>
      <div class="footer">
        <div class="footer-email-form">
          <h2>Sign Up for Our Newsletter</h2>
          <input type="email" placeholder="your@email.com" id="footer-email"></input>
          <input type="submit" value="Sign Up" id="footer-email-btn"></input>
          <p> Sign up to receive emails for events, special tips and general info </p>
        </div>
        <div class="footer-heading footer-1">
          <h2> About us</h2>
          <a href="#">How it works</a>
          <a href="#">Testimonials</a>
          <a href="#">Careers</a>
          <a href="#">Investors</a>
        </div>
        <div class="footer-heading footer-2">
          <h2> Contact Us</h2>
          <a href="#">1800319870</a>
          <a href="#">eventeasy@healthshack.tech</a>
        </div>
        <div class="footer-heading footer-3">
          <h2> Connect</h2>
          <div class="social-links">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
