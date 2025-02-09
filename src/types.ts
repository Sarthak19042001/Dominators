export interface Event {
  id: string;
  name: string;
  eventHeads: {
    name: string;
    photo?: string;
  }[];
  judge?: string;
  venue: string;
}

export interface Registration {
  id: string;
  name: string;
  eventId: string;
  contactNumber: string;
  timestamp: string;
}

export interface User {
  isAuthenticated: boolean;
  isAdmin: boolean;
}