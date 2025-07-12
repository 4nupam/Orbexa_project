export default function Footer(){
    return(
        <footer className="footer section-dark">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>About Us</h4>
            <p>
              Crafting exceptional digital products with unmatched speed and
              precision. We transform visionary ideas into market-ready
              solutions that set new industry standards.
            </p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li>
                <a href="https://cal.com/minidev.pro/30min" target="_blank">Schedule Call</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms &amp; Conditions</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get Started</h4>
            <a href="https://wise.com/pay/r/44YR1i88u7K0tyc" target="_blank" className="cta-primary neo-shadow">
              Launch Your MVP →
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Orbexa. All rights reserved.</p>
        </div>
      </div>
    </footer>
    )
}