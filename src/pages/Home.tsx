import React, { useState, useRef } from 'react';
import { Code2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Home() {
  const [logoError, setLogoError] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook
  const teamCoordinatorRef = useRef(null); // Create ref for team coordinator section

  const handleRegisterClick = () => {
    navigate('/events'); // Navigate to the events page when clicked
  };

  const handleContactClick = () => {
    // Scroll to the team coordinator section smoothly
    if (teamCoordinatorRef.current) {
      teamCoordinatorRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#04182E]">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <div className="flex justify-center mb-6">
          {logoError ? (
            <Code2 className="h-20 w-20 text-[#3C84AC]" />
          ) : (
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
              <img
                src="/logo.svg"
                alt="Dominators Logo"
                className="logo h-full w-full object-contain"
                onError={() => setLogoError(true)}
              />
            </div>
          )}
        </div>
        <h1 className="text-5xl font-bold text-[#FFF] mb-4">Dominators</h1>
        <p className="text-xl text-[#3C84AC] mb-8">Welcome to our Tech Fest 2025</p>

        <p className="text-lg text-[#A7B6C2] max-w-3xl mx-auto mb-8">
          Join us for an exciting journey through the latest innovations in technology! 
          The Dominators Tech Fest 2024 brings together passionate tech enthusiasts to explore, learn, and connect.
        </p>

        <div className="flex justify-center space-x-8">
  {/* Register Button */}
  <button
    onClick={handleRegisterClick}
    className="relative bg-gradient-to-r from-[#3C84AC] to-[#2A6D8C] text-white py-3 px-8 rounded-lg shadow-lg 
              transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
  >
    Register Now
  </button>

  {/* Contact Button */}
  <button
    onClick={handleContactClick}
    className="relative border-2 border-[#3C84AC] text-[#3C84AC] py-3 px-8 rounded-lg shadow-md 
              transition-all duration-300 transform hover:scale-105 hover:bg-[#3C84AC] hover:text-white hover:shadow-xl"
  >
    Contact Us
  </button>
</div>

      </div>

      {/* Team Section */}
      <div ref={teamCoordinatorRef} className="mt-16 flex flex-col items-center text-center">
        <h2 className="text-3xl font-semibold text-[#FFF] mb-6">Meet the Team</h2>
        <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
          {/* Replace with actual team coordinator photo */}
          <img
            src="/anirudha.jpg"
            alt="Team Coordinator"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-2xl font-semibold text-[#FFF]">Team Coordinator</h3>
        <p className="text-[#3C84AC]">Prof. Aniruddha B G S</p>
      </div>

      {/* Event Features Section */}
      <div className="bg-[#1A2A3D] py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-[#FFF] mb-6">Event Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-[#3C84AC] text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-4">Innovative Workshops</h3>
              <p>Participate in hands-on workshops led by industry professionals.</p>
            </div>
            <div className="bg-[#3C84AC] text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-4">Networking Opportunities</h3>
              <p>Connect with experts and peers in the tech industry.</p>
            </div>
            <div className="bg-[#3C84AC] text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-4">Tech Talks</h3>
              <p>Attend inspiring talks and presentations from tech leaders.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-[#FFF] mb-6">Event Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-300 h-48 rounded-lg overflow-hidden">
              <img
                src="https://i.pinimg.com/originals/20/0a/07/200a072465dc3c288a1d5780105705f7.jpg"
                alt="Event Image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-300 h-48 rounded-lg overflow-hidden">
              <img
                src="https://amped-m.com/wp-content/uploads/2018/10/shutterstock_373986985-1200x801.jpg"
                alt="Event Image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-300 h-48 rounded-lg overflow-hidden">
              <img
                src="https://quizizz.com/media/resource/gs/quizizz-media/quizzes/3a790821-9401-4529-9a37-5c2943b52d8d"
                alt="Event Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-[#04182E] py-6 text-center text-[#A7B6C2]">
        <p>&copy; 2025 Dominators Tech Fest. All rights reserved.</p>
      </div>

      {/* Style section for logo zoom animation */}
      <style jsx="true">{`
        .logo {
          animation: zoomOutIn 5s ease-in-out 1, zoomInOutContinuous 2s ease-in-out infinite 2s;
        }

        /* Zoom-out then zoom-in once */
        @keyframes zoomOutIn {
          0% {
            transform: scale(3.0); /* Start with zoomed-out scale */
            opacity: 1;
          }
          50% {
            transform: scale(2); /* Zoom in to the original size */
            opacity: 1;
          }
          100% {
            transform: scale(1.5); /* Maintain original size */
            opacity: 1;
          }
        }

        /* Continuous zoom in/out between scale 1.0 and 1.2 */
        @keyframes zoomInOutContinuous {
          0% {
            transform: scale(1.5);
          }
          50% {
            transform: scale(2.0);
          }
          100% {
            transform: scale(1.5);
          }
        }
      `}</style>
    </div>
  );
}
