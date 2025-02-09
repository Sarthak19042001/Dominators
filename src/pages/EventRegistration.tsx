import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { events } from '../data/events';
import { Registration } from '../types';

export default function EventRegistration() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const event = events.find(e => e.id === eventId);

  const [formData, setFormData] = useState({
    teamname: '',
    name: '',
    contactNumber: ''
  });

  if (!event) {
    return <div>Event not found</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new registration
    const newRegistration: Registration = {
      id: crypto.randomUUID(),
      teamname: formData.teamname,
      name: formData.name,
      eventId: event.id,
      contactNumber: formData.contactNumber,
      timestamp: new Date().toISOString()
    };

    // Get existing registrations
    const existingRegistrations = JSON.parse(localStorage.getItem('registrations') || '[]');
    
    // Add new registration
    const updatedRegistrations = [...existingRegistrations, newRegistration];
    
    // Save to localStorage
    localStorage.setItem('registrations', JSON.stringify(updatedRegistrations));

    alert('Registration successful!');
    navigate('/events');
  };

  return (
    <div className="min-h-screen bg-[#04182E] py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#FFF] mb-8 text-center">{event.name}</h1>

        <div className="mb-8 flex justify-center space-x-8">
          {event.eventHeads.map((head, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-2">
                <img
                  src={head.photo || `https://images.unsplash.com/photo-${index + 1}`}
                  alt={head.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-medium text-[#FFF]">{head.name}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#3C84AC] rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-[#FFF] mb-6">Registration Form</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
          <div>
  <label className="block text-[#FFF] mb-2">Team Name</label>
  <input
    type="text"
    required
    className="w-full px-6 py-3 border border-[#3C84AC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#04182E] bg-[#1A2A3D] text-[#FFF] placeholder-[#A7B6C2]"
    value={formData.teamname}
    onChange={(e) => setFormData({ ...formData, teamname: e.target.value })}
    placeholder="Enter your team name"
  />
</div>
<div>
  <label className="block text-[#FFF] mb-2">Name</label>
  <input
    type="text"
    required
    className="w-full px-6 py-3 border border-[#3C84AC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#04182E] bg-[#1A2A3D] text-[#FFF] placeholder-[#A7B6C2]"
    value={formData.name}
    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    placeholder="Enter your name"
  />
</div>

            <div>
              <label className="block text-[#FFF] mb-2">Contact Number</label>
              <input
                type="tel"
                required
                className="w-full px-6 py-3 border border-[#3C84AC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#04182E] bg-[#1A2A3D] text-[#FFF] placeholder-[#A7B6C2]"
                value={formData.contactNumber}
                onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                placeholder="Enter your contact number"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#04182E] text-[#FFF] py-3 px-6 rounded-md hover:bg-[#3C84AC] transition-colors"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
