export default function Pricing() {
    return(
        <section className="section">
      <div className="container">
        <h2 className="section-title">PICK YOUR ROCKET</h2>
        <div className="pricing-grid">
          <div className="pricing-card neo-shadow">
            <h3>MVP LAUNCHPAD</h3>
            <div className="price-tag">$3,000</div>
            <p className="price-description">
              Zero to MVP in 14 days. Perfect for founders who need to validate
              their idea fast and smart.
            </p>
            <ul className="features-list">
              <li>Full-stack development</li>
              <li>Core feature implementation</li>
              <li>Responsive design</li>
              <li>Basic analytics integration</li>
              <li>2-week delivery guarantee</li>
            </ul>
            <a href="https://wise.com/pay/r/44YR1i88u7K0tyc" target="_blank" className="cta-primary neo-shadow">
              Start Building →
            </a>
          </div>

          <div className="pricing-card neo-shadow">
            <h3>SAAS POWERHOUSE</h3>
            <div className="price-tag">$4,000</div>
            <p className="price-description">
              Full-scale SaaS development with all the bells and whistles. Built
              to scale from day one.
            </p>
            <ul className="features-list">
              <li>Advanced feature set</li>
              <li>Scalable architecture</li>
              <li>User authentication</li>
              <li>Payment integration</li>
              <li>Premium UI/UX design</li>
            </ul>
            <a href="https://wise.com/pay/r/44YR1i88u7K0tyc" target="_blank" className="cta-primary neo-shadow">
              Scale Your SaaS →
            </a>
          </div>
        </div>
      </div>
    </section>
    )
}