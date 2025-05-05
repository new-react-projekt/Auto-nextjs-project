"use client";
const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl max-w-4xl w-full p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Cookie Policy
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          This website uses cookies (including third-party cookies) that are
          essential for the technical operation of the website. Disabling these
          cookies will not prevent the website from being used in an accessible
          manner.
        </p>

        <p className="text-gray-600 text-lg mb-6">
          We use cookies to analyze your browsing behavior and improve your
          shopping experience. These cookies help us prevent issues, address
          spam, fraud, and abuse, and improve the quality of our services.
        </p>

        <p className="text-gray-600 text-lg mb-6">
          Additionally, we use cookies from social networks to tailor
          advertising and create target groups based on your shopping and
          browsing behavior on our website.
        </p>

        <p className="text-gray-600 text-lg mb-6">
          By using this website, you agree to the use of cookies. You can manage
          your cookie preferences through your browser settings.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;
