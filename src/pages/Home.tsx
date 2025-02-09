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
        <h1 className="text-5xl font-bold text-[#FFF] mb-4">Uthkarsh</h1>
        <p className="text-xl text-[#3C84AC] mb-8">Welcome to our Tech Fest 2025</p>

        <p className="text-lg text-[#A7B6C2] max-w-3xl mx-auto mb-8">
          Join us for an exciting journey through the latest innovations in technology! 
          The Dominators Uthkarsh 2025 brings together passionate tech enthusiasts to explore, learn, and connect.
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
        <h2 className="text-3xl font-semibold text-[#FFF] mb-6">Meet the Team!</h2>
        <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
          {/* Replace with actual team coordinator photo */}
          <img
            src="/anirudha.jpg"
            alt="Team Coordinator"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-2xl font-semibold text-[#FFF]">Staff Coordinator</h3>
        <p className="text-[#3C84AC]">Prof. Anirudha B G S</p>
      </div>


      {/* Student Coordinators */}
      <div className="mt-16 flex flex-wrap justify-center max-w-[1300px] mx-auto">
  {/* First Row (5 items) */}
  <div className="w-56 mb-8 mx-2 text-center basis-1/5">
    <div className="w-48 h-48 rounded-full overflow-hidden mb-4 mx-auto">
      <img src="event-heads/creative-craze-sarthak.jpg.jpg.jpg" alt="Team Coordinator" className="w-full h-full object-cover" />
    </div>
    <h3 className="text-2xl font-semibold text-[#FFF]">Student Coordinator</h3>
    <p className="text-[#3C84AC]">Sarthak B</p>
  </div>
  <div className="w-56 mb-8 mx-2 text-center basis-1/5">
    <div className="w-48 h-48 rounded-full overflow-hidden mb-4 mx-auto">
      <img src="event-heads/byte-buster-kruthika.jpg.jpg" alt="Team Coordinator" className="w-full h-full object-cover" />
    </div>
    <h3 className="text-2xl font-semibold text-[#FFF]">Student Coordinator</h3>
    <p className="text-[#3C84AC]">Kruthika K J</p>
  </div>
  <div className="w-56 mb-8 mx-2 text-center basis-1/5">
    <div className="w-48 h-48 rounded-full overflow-hidden mb-4 mx-auto">
      <img src="event-heads/code-craft-varun.jpg.jpg" alt="Team Coordinator" className="w-full h-full object-cover" />
    </div>
    <h3 className="text-2xl font-semibold text-[#FFF]">Student Coordinator</h3>
    <p className="text-[#3C84AC]">Varun M C</p>
  </div>
  <div className="w-56 mb-8 mx-2 text-center basis-1/5">
    <div className="w-48 h-48 rounded-full overflow-hidden mb-4 mx-auto">
      <img src="event-heads/random-games-likitha.jpg.jpg" alt="Team Coordinator" className="w-full h-full object-cover" />
    </div>
    <h3 className="text-2xl font-semibold text-[#FFF]">Student Coordinator</h3>
    <p className="text-[#3C84AC]">Likitha</p>
  </div>
  <div className="w-56 mb-8 mx-2 text-center basis-1/5">
    <div className="w-48 h-48 rounded-full overflow-hidden mb-4 mx-auto">
      <img src="event-heads/creative-craze-vibhashree.jpg.jpg" alt="Team Coordinator" className="w-full h-full object-cover" />
    </div>
    <h3 className="text-2xl font-semibold text-[#FFF]">Student Coordinator</h3>
    <p className="text-[#3C84AC]">Vibhashree M</p>
  </div>

  {/* Second Row (5 items) */}
  <div className="w-56 mb-8 mx-2 text-center basis-1/5">
    <div className="w-48 h-48 rounded-full overflow-hidden mb-4 mx-auto">
      <img src="event-heads/byte-buster-kriti.jpg.jpg" alt="Team Coordinator" className="w-full h-full object-cover" />
    </div>
    <h3 className="text-2xl font-semibold text-[#FFF]">Student Coordinator</h3>
    <p className="text-[#3C84AC]">Krithi</p>
  </div>
  <div className="w-56 mb-8 mx-2 text-center basis-1/5">
    <div className="w-48 h-48 rounded-full overflow-hidden mb-4 mx-auto">
      <img src="event-heads/code-craft-achintya.jpg.jpg" alt="Team Coordinator" className="w-full h-full object-cover" />
    </div>
    <h3 className="text-2xl font-semibold text-[#FFF]">Student Coordinator</h3>
    <p className="text-[#3C84AC]">Achinthya</p>
  </div>
  <div className="w-56 mb-8 mx-2 text-center basis-1/5">
    <div className="w-48 h-48 rounded-full overflow-hidden mb-4 mx-auto">
      <img src="event-heads/frame-frenzy-sumith.jpg.jpg" alt="Team Coordinator" className="w-full h-full object-cover" />
    </div>
    <h3 className="text-2xl font-semibold text-[#FFF]">Student Coordinator</h3>
    <p className="text-[#3C84AC]">Sumith</p>
  </div>
  <div className="w-56 mb-8 mx-2 text-center basis-1/5">
    <div className="w-48 h-48 rounded-full overflow-hidden mb-4 mx-auto">
      <img src="event-heads/quizardry-ruchitha.jpg.jpg" alt="Team Coordinator" className="w-full h-full object-cover" />
    </div>
    <h3 className="text-2xl font-semibold text-[#FFF]">Student Coordinator</h3>
    <p className="text-[#3C84AC]">Ruchitha</p>
  </div>
  <div className="w-56 mb-8 mx-2 text-center basis-1/5">
    <div className="w-48 h-48 rounded-full overflow-hidden mb-4 mx-auto">
      <img src="event-heads/quizardry-shalaka.jpg.jpg" alt="Team Coordinator" className="w-full h-full object-cover" />
    </div>
    <h3 className="text-2xl font-semibold text-[#FFF]">Student Coordinator</h3>
    <p className="text-[#3C84AC]">Shalaka</p>
  </div>

  {/* Third Row (5 items) */}
  <div className="w-56 mb-8 mx-2 text-center basis-1/5">
    <div className="w-48 h-48 rounded-full overflow-hidden mb-4 mx-auto">
      <img src="event-heads/random-games-jyothi.jpg.jpg" alt="Team Coordinator" className="w-full h-full object-cover" />
    </div>
    <h3 className="text-2xl font-semibold text-[#FFF]">Student Coordinator</h3>
    <p className="text-[#3C84AC]">Jyothi</p>
  </div>
  <div className="w-56 mb-8 mx-2 text-center basis-1/5">
    <div className="w-48 h-48 rounded-full overflow-hidden mb-4 mx-auto">
      <img src="event-heads/random-games-kripa.jpg.jpg" alt="Team Coordinator" className="w-full h-full object-cover" />
    </div>
    <h3 className="text-2xl font-semibold text-[#FFF]">Student Coordinator</h3>
    <p className="text-[#3C84AC]">Kripa</p>
  </div>
  <div className="w-56 mb-8 mx-2 text-center basis-1/5">
    <div className="w-48 h-48 rounded-full overflow-hidden mb-4 mx-auto">
      <img src="event-heads/terminal-stack-bhavish.jpg.jpg" alt="Team Coordinator" className="w-full h-full object-cover" />
    </div>
    <h3 className="text-2xl font-semibold text-[#FFF]">Student Coordinator</h3>
    <p className="text-[#3C84AC]">Bhavish</p>
  </div>
  <div className="w-56 mb-8 mx-2 text-center basis-1/5">
    <div className="w-48 h-48 rounded-full overflow-hidden mb-4 mx-auto">
      <img src="event-heads/terminal-stack-chaithali.jpg.jpg" alt="Team Coordinator" className="w-full h-full object-cover" />
    </div>
    <h3 className="text-2xl font-semibold text-[#FFF]">Student Coordinator</h3>
    <p className="text-[#3C84AC]">Chaitali S</p>
  </div>
  <div className="w-56 mb-8 mx-2 text-center basis-1/5">
    <div className="w-48 h-48 rounded-full overflow-hidden mb-4 mx-auto">
      <img src="/" alt="Team Coordinator" className="w-full h-full object-cover" />
    </div>
    <h3 className="text-2xl font-semibold text-[#FFF]">Student Coordinator</h3>
    <p className="text-[#3C84AC]">Vikhyath B C</p>
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
      <style>{`
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
