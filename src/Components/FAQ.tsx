"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What exactly do you deliver in 14 days for MVP development?",
    answer:
      "We deliver a fully functional MVP including: frontend interface, backend API, database setup, user authentication, core feature implementation, responsive design, deployment to production servers, domain setup, and basic analytics integration.",
  },
  {
    question: "What technologies and frameworks do you use for SaaS development?",
    answer:
      "We use modern, battle-tested tech stacks: React.js/Next.js for frontend, Node.js/Express for backend, TypeScript for type safety, PostgreSQL/MongoDB for databases, AWS/Vercel for hosting, Stripe for payments, Auth0 for authentication, Redis for caching, and Docker for containerization.",
  },
  {
    question: "How do you ensure quality with such fast MVP and SaaS delivery?",
    answer:
      "Quality at speed through: senior developers only (5+ years experience), proven architecture patterns, automated testing, code reviews, established component libraries, daily progress updates, and focusing on core features first.",
  },
  {
    question: "What is included in your SaaS development package?",
    answer:
      "Complete SaaS solution: user dashboard, admin panel, subscription management, payment processing, email notifications, API development, database optimization, security implementation, performance optimization, mobile responsiveness, third-party integrations, and deployment to production.",
  },
  {
    question: "Do you provide ongoing support after MVP/SaaS launch?",
    answer:
      "Yes, included: 30 days post-launch support for bug fixes, performance optimization, minor feature adjustments, and deployment issues. Extended support packages available.",
  },
  {
    question: "What makes minidev.pro different from other development agencies?",
    answer:
      "Unique advantages: 14-day guaranteed delivery, senior-only development team, direct communication (no project managers), proven rapid development methodology, startup-focused approach, all-inclusive pricing, and post-launch support.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Side */}
        <div className="md:col-span-1 flex items-start">
          <h2 className="section-title text-2xl font-bold uppercase tracking-wide">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Right Side - Accordion */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div key={index} className="process-step neo-shadow border rounded-lg bg-white">
                <button
                  onClick={() => toggleIndex(index)}
                  className="cta-primary w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition"
                >
                  <span className="text-left">{item.question}</span>
                  <span className="ml-4 text-xl">
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 text-gray-600 bg-gray-50">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
