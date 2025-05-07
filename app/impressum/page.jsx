"use client";
const Impressum = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl max-w-4xl w-full p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Imprint (Impressum)
        </h1>

        <div className="text-lg text-gray-700 space-y-4">
          <p>
            <strong>Company Name:</strong> KRC-Cars
          </p>
          <p>
            <strong>Address:</strong> Altstraße 99, 49000 Berlin, Germany
          </p>
          <p>
            <strong>Phone:</strong> +49 2333 3333333
          </p>
          <p>
            <strong>Fax:</strong> +49 2333 3333334
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@krc-cars.com" className="text-blue-600">
              info@krc-cars.com
            </a>
          </p>
          <p>
            <strong>Register Court:</strong> Amtsgericht Berlin
          </p>
          <p>
            <strong>Registration Number:</strong> KRC 123456
          </p>

          <p>
            <strong>Managing Director:</strong> Cihan Randy Kuschtrim
          </p>

          <p>
            <strong>VAT Identification Number:</strong> DE0123456789
          </p>

          <p>
            <strong>EU Online Dispute Resolution Platform:</strong>
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              https://ec.europa.eu/consumers/odr
            </a>
          </p>

          <p className="text-sm text-gray-500">
            We are neither obliged nor willing to participate in a dispute
            resolution procedure before a consumer arbitration board.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
