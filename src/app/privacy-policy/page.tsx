// app/privacy-policy/page.js (Next.js 13+)
// OR pages/privacy-policy.js (Next.js 12)

import React from "react";

const PrivacyPolicy = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>

      {/* Last Updated */}
      <p className="text-sm text-gray-500 mb-6 text-center">
        This Privacy Policy agreement was last updated on 13th June 2025. This Privacy
        Policy agreement is effective as of 14th July 2020.
      </p>

      {/* Introduction */}
      <p className="mb-6">
        COOX Online Private Limited ("COOX") values your privacy. In this Privacy
        Policy ("Policy"), we describe the information that we collect about you when
        you visit our website, <a href="https://www.coox.in" className="text-blue-600 underline">www.coox.in</a> (the "Website")
        and use the services available on the Website ("Services"), and how we use and
        disclose that information.
      </p>

      <p className="mb-6">
        If you have any questions or comments about the Privacy Policy, please contact
        us at <a href="mailto:hello@coox.in" className="text-blue-600 underline">hello@coox.in</a>. This Policy is incorporated into and is subject to the
        COOX Terms of Use, which can be accessed at{" "}
        <a href="https://www.coox.in/terms" className="text-blue-600 underline">
          www.coox.in/terms
        </a>.
      </p>

      <p className="mb-6">
        In terms of the Information Technology (Intermediaries Guidelines) Rules, 2011
        and the Information Technology (Reasonable Security Practices and Procedures
        and Sensitive Personal Data or Information) Rules, 2011, any grievance or
        complaint may be intimated to our Grievance Officer, who may be reached at{" "}
        <a href="mailto:support@coox.in" className="text-blue-600 underline">support@coox.in</a> or at the Corporate Office at WeWork Berger Delhi One
        C-001/A2, Sector 16B, Gautam Buddha Nagar, Noida, Uttar Pradesh-201301
        registered with GSTIN: 09AAICC8138L1Z4 and CIN: U55209UP2020PTC130892. The
        complaint shall be redressed within a period of 1 (one) month.
      </p>

      {/* ================= A. Collection of Your Personal Information ================= */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          A. Collection of Your Personal Information
        </h2>

        <h3 className="text-xl font-semibold mb-2">
          1. Collection of Personal Information
        </h3>
        <p className="mb-4">
          “Personal information” is defined to include information that whether on its
          own or in combination with other information may be used to readily identify
          or contact you. Information such as: name, address, email address, phone
          number etc. We collect personal information from Service Professionals
          offering their products and services. This information is partially or
          completely accessible to all visitors using COOX’s website or mobile
          application, either directly or by submitting a request for a service. ...
        </p>

        {/* ✨ Similarly break down long text into <p> or <ul> for readability */}
        {/* I'll show a couple of next headings */}
        <h3 className="text-xl font-semibold mb-2">
          2. Collection of Personal Information from Social Networking Sites
        </h3>
        <p className="mb-4">
          You may log into our Website through your Facebook account. If you do so, you
          must enter the email address and password that you use for your Facebook
          account. We will ask that you grant us permission to access and collect your
          Facebook basic information...
        </p>

        <h3 className="text-xl font-semibold mb-2">
          3. Collection of Automatic Information, Use of Cookies and Other Tracking
          Devices
        </h3>
        <p className="mb-4">
          We and our third party service providers, which include ad networks, use
          cookies, web beacons, and other tracking technologies to collect information
          about your use of our Website and Services, such as your browser type, your
          ISP or operating system...
        </p>

        <h3 className="text-xl font-semibold mb-2">4. Third Party Data Policy</h3>
        <p className="mb-4">
          This app contains a software development kit (“SDK”) from a third party, Red
          Brick Lane Marketing Solutions Private Limited (“RBL”). The SDK is integrated
          with this app for the purposes of profiling the device...
        </p>
      </section>

      {/* ================== B. How COOX Uses the Information ================== */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          B. How COOX Uses the Information We Collect
        </h2>
        <p className="mb-4">
          We collect your personal information and aggregate information about the use
          of our Website and Services to better understand your needs and to provide
          you with a better Website experience...
        </p>
      </section>

      {/* ✨ Continue the same way for C, D, E ... till L (as in your text) */}

      {/* Footer */}
      <p className="text-sm text-gray-500 mt-12 text-center">
        © 2020-2024 COOX Online Private Limited. All Rights Reserved
      </p>
    </main>
  );
};

export default PrivacyPolicy;
