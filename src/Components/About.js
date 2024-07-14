import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Welcome to FoodApp, your number one source for all things food. We're dedicated to providing you the very best of food delivery services, with an emphasis on quality, customer service, and uniqueness.
        </p>

        <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            Our mission is to deliver delicious and high-quality food from the best local restaurants right to your doorstep. We aim to offer an unparalleled dining experience by bringing together a diverse selection of dishes and top-notch customer service.
          </p>
          <p className="text-gray-600">
            Founded in 2023, FoodApp has come a long way from its beginnings. When we first started out, our passion for providing the best food delivery experience drove us to start our own business.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Head of Operations</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">Mike Johnson</h3>
              <p className="text-gray-600">Chief Technology Officer</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-4">If you have any questions or comments, please don't hesitate to contact us:</p>
          <ul className="text-gray-600">
            <li>Email: <a href="mailto:support@foodapp.com" className="text-blue-500">support@foodapp.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="text-blue-500">+1234567890</a></li>
            <li>Address: 123 Food Street, Flavor Town, FT 12345</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
