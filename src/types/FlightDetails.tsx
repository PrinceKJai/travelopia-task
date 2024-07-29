interface FlightDetails {
    id?: number,
    flightNumber: string;
    airline: string;
    origin: string;
    destination: string;
    departureTime: string;
    status: string;
  }

  export { type FlightDetails };