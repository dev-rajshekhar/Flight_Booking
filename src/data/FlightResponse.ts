type FlightAirport = {
  cityCode: string;
  cityName: string;
  terminal: string;
  airportCode: string;
  airportName: string;
  countryCode: string;
  countryName: string;
};

type FlightAirline = {
  airlineCode: string;
  airlineName: string;
  flightNumber: string;
};

type FlightDisplayData = {
  source: {
    airport: FlightAirport[];
    depTime: string;
  };
  airlines: FlightAirline[];
  stopInfo: string;
  destination: {
    airport: FlightAirport[];
    arrTime: string;
  };
  totalDuration: string;
};

type FlightResponse = {
  id: string;
  fare: number;
  displayData: FlightDisplayData;
};

export default FlightResponse;
