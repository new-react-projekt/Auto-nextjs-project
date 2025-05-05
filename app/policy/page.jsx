"use client";
const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl max-w-4xl w-full p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Privacy Policy
        </h1>

        <div className="text-lg text-gray-700 space-y-4">
          <p>
            At KRC-Cars, we respect your privacy and are committed to protecting
            your personal data. This Privacy Policy explains how we collect,
            use, and protect your information when you visit our website and use
            our services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6">
            1. Information We Collect
          </h2>
          <p>
            We collect personal information when you visit our website, make a
            purchase, or contact us. The types of personal data we may collect
            include:
          </p>
          <ul className="list-disc pl-8">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Billing and shipping address</li>
            <li>Payment information (handled securely via payment gateways)</li>
            <li>Browsing behavior on our website</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6">
            2. How We Use Your Information
          </h2>
          <p>
            We use your personal information to provide, improve, and
            personalize our services. Specifically, we use your data for the
            following purposes:
          </p>
          <ul className="list-disc pl-8">
            <li>Processing and completing your orders</li>
            <li>Customer service and support</li>
            <li>
              Sending promotional and marketing materials (if you have
              consented)
            </li>
            <li>
              Improving our website and services based on user behavior and
              feedback
            </li>
            <li>Complying with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6">
            3. Data Security
          </h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal data against unauthorized access, alteration,
            disclosure, or destruction. While we strive to use commercially
            acceptable means to protect your personal information, please be
            aware that no method of transmission over the internet is 100%
            secure.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6">
            4. Sharing Your Information
          </h2>
          <p>
            We may share your personal information with third parties in the
            following cases:
          </p>
          <ul className="list-disc pl-8">
            <li>
              With our trusted service providers, such as payment processors,
              shipping companies, and customer support services
            </li>
            <li>If required by law or to comply with legal processes</li>
            <li>
              In the event of a merger, acquisition, or sale of assets, your
              data may be transferred to the new owner
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6">
            5. Cookies and Tracking Technologies
          </h2>
          <p>
            We use cookies and similar tracking technologies to enhance your
            experience on our website. Cookies help us:
          </p>
          <ul className="list-disc pl-8">
            <li>Improve the functionality of our website</li>
            <li>Analyze usage and performance of the website</li>
            <li>Provide personalized content and advertising</li>
          </ul>
          <p>
            You can manage your cookie preferences through your browser
            settings. Please note that disabling cookies may affect the
            functionality of some parts of the website.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6">
            6. Your Rights
          </h2>
          <p>
            You have the right to access, correct, delete, or restrict the
            processing of your personal data. If you wish to exercise any of
            these rights or if you have concerns about the way we handle your
            data, please contact us at
            <a href="mailto:info@krc-cars.com" className="text-blue-600">
              info@krc-cars.com
            </a>
            .
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6">
            7. Changes to This Privacy Policy
          </h2>
          <p>
            We reserve the right to update or modify this Privacy Policy at any
            time. Any changes will be posted on this page, and the date of the
            latest update will be reflected at the top of the policy. Please
            review this Privacy Policy periodically for any updates.
          </p>

          <p className="text-gray-600 text-lg mt-6">
            By using our website, you agree to the collection and use of your
            information as described in this Privacy Policy.
          </p>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">Last updated: April 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
