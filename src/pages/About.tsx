import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-[#04182E] py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#FFF] mb-8">About Us</h1>
        
        <div className="bg-[#FFF] text-[#04182E] rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-6">
            The Dominators team represents the cutting edge of technical innovation and creativity
            in our institution. We are a diverse group of passionate individuals committed to
            fostering technological growth and creating opportunities for students to showcase
            their talents.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Tech Fest</h2>
          <p className="text-gray-700 mb-6">
            Our annual Tech Fest is more than just an event - it's a celebration of technology,
            innovation, and creativity. We bring together students from various disciplines to
            compete, learn, and grow through a diverse range of technical and creative events.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            We aim to create a platform that encourages technical excellence, fosters innovation,
            and builds a community of future tech leaders. Through our carefully curated events,
            we provide opportunities for students to challenge themselves, learn new skills,
            and network with like-minded individuals.
          </p>
        </div>
      </div>
    </div>
  );
}
