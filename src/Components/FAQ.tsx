export default function FAQ(){
    return(
        <section className="section">
      <div className="container">
        <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>

        <div style={{ display: "grid", gap: "2rem", maxWidth: "800px", margin: "0 auto" }}>

          <div className="process-step neo-shadow">
            <h3>What exactly do you deliver in 14 days for MVP development?</h3>
            <p>
              We deliver a fully functional MVP including: frontend interface,
              backend API, database setup, user authentication, core feature
              implementation, responsive design, deployment to production
              servers, domain setup, and basic analytics integration. Everything
              needed to start acquiring users and validating your product idea
              in the market.
            </p>
          </div>

          <div className="process-step neo-shadow">
            <h3>
              What technologies and frameworks do you use for SaaS development?
            </h3>
            <p>
              We use modern, battle-tested tech stacks: React.js/Next.js for
              frontend, Node.js/Express for backend, TypeScript for type safety,
              PostgreSQL/MongoDB for databases, AWS/Vercel for hosting, Stripe
              for payments, Auth0 for authentication, Redis for caching, and
              Docker for containerization. All production-ready and scalable.
            </p>
          </div>

          <div className="process-step neo-shadow">
            <h3>
              How do you ensure quality with such fast MVP and SaaS delivery?
            </h3>
            <p>
              Quality at speed through: senior developers only (5+ years
              experience), proven architecture patterns, automated testing, code
              reviews, established component libraries, daily progress updates,
              and focusing on core features first. No junior developers or
              learning experiments on your project.
            </p>
          </div>

          <div className="process-step neo-shadow">
            <h3>What Is included in your SaaS development package?</h3>
            <p>
              Complete SaaS solution: user dashboard, admin panel, subscription
              management, payment processing, email notifications, API
              development, database optimization, security implementation,
              performance optimization, mobile responsiveness, third-party
              integrations, and deployment to production.
            </p>
          </div>

          <div className="process-step neo-shadow">
            <h3>Do you provide ongoing support after MVP/SaaS launch?</h3>
            <p>
              Yes, included: 30 days post-launch support for bug fixes,
              performance optimization, minor feature adjustments, and
              deployment issues. Extended support packages available for ongoing
              development, feature additions, and scaling optimization.
            </p>
          </div>

          <div className="process-step neo-shadow">
            <h3>
              What makes minidev.pro different from other development agencies?
            </h3>
            <p>
              Unique advantages: 14-day guaranteed delivery, senior-only
              development team, direct communication (no project managers),
              proven rapid development methodology, startup-focused approach,
              all-inclusive pricing, and post-launch support. We specialize
              exclusively in MVPs and SaaS products.
            </p>
          </div>
        </div>
      </div>
    </section>
    )
}