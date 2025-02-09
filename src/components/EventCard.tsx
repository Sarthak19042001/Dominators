import React from 'react';
import { Link } from 'react-router-dom';
import { Event } from '../types';
import { Calendar, MapPin, Users } from 'lucide-react';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link 
      to={`/events/${event.id}`}
      className="bg-gradient-to-r from-[#04182E] to-[#3C84AC] rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 p-6 flex flex-col space-y-4 cursor-pointer transform hover:scale-105"
    >
      <h3 className="text-2xl font-semibold text-white">{event.name}</h3>
      
      <div className="flex items-center space-x-2 text-white opacity-80">
        <Users className="h-5 w-5 text-[#FFF]" />
        <span className="text-lg">{event.eventHeads.map(head => head.name).join(', ')}</span>
      </div>
      
      {/* Display event rules */}
      {event.rules && (
        <div className="flex flex-col space-y-1 text-white opacity-80">
          <span className="text-lg font-semibold">Rules:</span>
          {event.rules.map((rule, index) => (
            <span key={index} className="text-lg">- {rule}</span>
          ))}
        </div>
      )}
      
      <div className="flex items-center space-x-2 text-white opacity-80">
        <MapPin className="h-5 w-5 text-[#FFF]" />
        <span className="text-lg">{event.venue}</span>
      </div>
    </Link>
  );
}
