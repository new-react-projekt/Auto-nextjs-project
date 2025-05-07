// pages/about.js
export default function About() {
  return (
    <>
    <main className="min-h-screen  bg-gray-100 flex items-center justify-center p-6 -mt-22">
    <section className="bg-white shadow-lg rounded-2xl max-w-4xl w-full p-8">
      <h1 className="text-4xl font-bold text-blue-950 mb-6">About Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to KRC Cars! We're passionate about providing top-notch car services and unforgettable driving experiences.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Our team has years of experience in the automotive industry, and we specialize in vehicle customization, detailing, and diagnostics.
      </p>
      <p className="text-lg text-gray-700">
        Whether you're looking for performance tuning or just need expert maintenance, we're here to help.
        Your satisfaction and your vehicle's excellence are our top priorities.
      </p>
      <h2 className="text-lg text-blue-950 font-extrabold my-8">Our Team</h2>
<div className="text-lg text-gray-700">
  <div>
  <h3 className="text-blue-950 font-extrabold ">Cihan Ünal</h3>
  <div className="flex flex-wrap gap-4">
  <img src="/Cihan_Model.png" alt="Cihan Ünal" className="rounded-xl w-60 h-auto mb-4" />
  <img src="/Cihan_Model2.png" alt="Cihan Ünal" className="rounded-xl w-60 h-auto mb-4" />
  <img src="/Cihan_Model3.png" alt="Cihan Ünal" className="rounded-xl w-60 h-auto mb-4" />
  </div>
  <p className="text-gray-500 font-extrabold">Founder & CEO</p>
  <p className="text-gray-500 mb-8">Cihan is a car enthusiast with a passion for performance and innovation. He leads our team with vision and expertise.</p>
  </div>
  <div>
  <h3 className="text-blue-950 font-extrabold ">Randy Born</h3>
  <div className="flex flex-wrap gap-4">
  <img src="/Randy1.png" alt="Randy Born" className="rounded-xl w-60 h-auto mb-4" />
  <img src="/Randy2.png" alt="Randy Born" className="rounded-xl w-60 h-auto mb-4" />
  <img src="/Randi3.png" alt="Randy Born" className="rounded-xl w-60 h-auto mb-4" />
  </div>
  <p className="text-gray-500 font-extrabold">Head of Customization</p>
  <p className="text-gray-500 mb-8">Randy is our customization expert, turning dreams into reality with his creative designs and technical skills.</p>
  </div>
  <div>
  <h3 className="text-blue-950 font-extrabold ">Kushtrim Bilali</h3>
  <div className="flex flex-wrap gap-4">
    
    <img src="/Kushtrim1.png" alt="Kushtrim Bilali" className="rounded-xl w-60 h-auto mb-4" />
    </div>
    <p className="text-gray-500 font-extrabold">Lead Technician</p>
    <p className="text-gray-500">Kushtrim is our lead technician, ensuring every vehicle meets our high standards of quality and performance.</p>
    </div>
  
</div>
    </section>



    </main>
    </>
  );
}
