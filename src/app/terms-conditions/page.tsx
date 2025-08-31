"use client";
import React from "react";

const TermsConditions = () => {
  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "agreement", title: "Agreement" },
    { id: "privacy", title: "Privacy Policy" },
    { id: "obligations", title: "User Obligations" },
    { id: "liability", title: "Limitation of Liability" },
    { id: "changes", title: "Changes to Terms" },
    { id: "contact", title: "Contact Information" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="lg:w-1/4 w-full bg-gray-50 border-r border-gray-200 p-6 sticky top-0 h-screen hidden lg:block">
        <h2 className="text-lg font-bold mb-4 text-gray-800">Table of Contents</h2>
        <ul className="space-y-3 text-sm text-gray-600">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="hover:text-blue-600 transition-colors"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="lg:w-3/4 w-full p-8 lg:p-12 space-y-10 text-justify">
        <h1 className="text-2xl sm:text-3xl font-bold bg-blue-600 text-white px-6 py-2 rounded-md shadow-md inline-block">
          Terms of Use
        </h1>

        {/* Sections */}
        <section id="intro">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Introduction</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            The Terms of Use agreement was last updated on 1st April 2023 and is effective as of 14th July 2023.
            Please read these terms carefully before using our services.
          </p>
        </section>

        <section id="agreement">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Agreement</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            These Terms of Use form a legally binding agreement between COOX Online Business Limited ("COOX") and users
            of its website, app, and services. By accessing or using our services, you agree to be bound by these terms.
          </p>
        </section>

        <section id="privacy">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Privacy Policy</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Your privacy is important to us. The Privacy Policy describes how we collect, use, and safeguard your
            information when you use our services.
          </p>
        </section>

        <section id="obligations">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">User Obligations</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Users agree not to misuse the platform, impersonate others, or engage in unlawful activities. You are
            responsible for maintaining the confidentiality of your account.
          </p>
        </section>

        <section id="liability">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Limitation of Liability</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            COOX will not be liable for any indirect, incidental, or consequential damages arising from the use of
            services. The company’s liability is limited to the maximum extent permitted by law.
          </p>
        </section>

        <section id="changes">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Changes to Terms</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            We reserve the right to update or modify these Terms of Use at any time. Changes will be posted on this page
            with an updated effective date.
          </p>
        </section>

        <section id="contact">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Information</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            If you have questions regarding these Terms, please contact us at support@coox.com.
          </p>
        </section>
      </main>
    </div>
  );
};

export default TermsConditions;
