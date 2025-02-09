import React, { useState } from 'react';
import { Registration } from '../types';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [registrations, setRegistrations] = useState<Registration[]>(() => {
    const saved = localStorage.getItem('registrations');
    return saved ? JSON.parse(saved) : [];
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.username === 'Dominator' && credentials.password === 'Teamdominators') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleDeleteRegistration = (id: string) => {
    const confirmed = window.confirm('Are you sure you want to delete this registration?');
    if (confirmed) {
      const updatedRegistrations = registrations.filter(reg => reg.id !== id);
      setRegistrations(updatedRegistrations);
      localStorage.setItem('registrations', JSON.stringify(updatedRegistrations));
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#04182E] flex items-center justify-center">
        <div className="bg-[#3C84AC] p-8 rounded-lg shadow-lg w-96">
          <h1 className="text-2xl font-bold text-[#FFF] mb-6 text-center">Admin Login</h1>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[#FFF] mb-2">Username</label>
              <input
                type="text"
                className="w-full px-6 py-3 border border-[#3C84AC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A2A3D] bg-[#1A2A3D] text-[#FFF] placeholder-[#A7B6C2]"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label className="block text-[#FFF] mb-2">Password</label>
              <input
                type="password"
                className="w-full px-6 py-3 border border-[#3C84AC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A2A3D] bg-[#1A2A3D] text-[#FFF] placeholder-[#A7B6C2]"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#04182E] text-[#FFF] py-3 px-6 rounded-md hover:bg-[#3C84AC] transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#04182E] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#FFF]">Admin Dashboard</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-red-500 text-white py-3 px-6 rounded-md hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="bg-[#3C84AC] rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-[#FFF] mb-6">Registrations</h2>
          
          {registrations.length === 0 ? (
            <p className="text-[#A7B6C2]">No registrations yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-[#A7B6C2]">
                <thead className="bg-[#1A2A3D]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#A7B6C2] uppercase tracking-wider">Team Name</th>
                    <th className='px-6 py-3 text-left text-xs font-medium text-[#A7B6C2] uppercase tracking-wider'>Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#A7B6C2] uppercase tracking-wider">Event</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#A7B6C2] uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#A7B6C2] uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#A7B6C2] uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-[#1A2A3D] divide-y divide-[#A7B6C2]">
                  {registrations.map((registration) => (
                    <tr key={registration.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-[#FFF]">{registration.teamname}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-[#FFF]">{registration.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-[#FFF]">{registration.eventId}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-[#FFF]">{registration.contactNumber}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-[#FFF]">{new Date(registration.timestamp).toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleDeleteRegistration(registration.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
