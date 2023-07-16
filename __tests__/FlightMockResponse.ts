const FlightResponseMock = [
  {
    id: '1',
    fare: 12015,
    displayData: {
      source: {
        airport: [
          {
            cityCode: 'BOM',
            cityName: 'Mumbai',
            terminal: '2',
            airportCode: 'BOM',
            airportName: 'Mumbai',
            countryCode: 'IN',
            countryName: 'India',
          },
        ],
        depTime: '2023-07-18T01:41:13.839116',
      },
      airlines: [
        {
          airlineCode: 'AEC',
          airlineName: 'Vistara',
          flightNumber: '09381',
        },
      ],
      stopInfo: 'Non stop',
      destination: {
        airport: [
          {
            cityCode: 'DEL',
            cityName: 'Delhi',
            terminal: '3',
            airportCode: 'DEL',
            airportName: 'Indira Gandhi Airport',
            countryCode: 'IN',
            countryName: 'India',
          },
        ],
        arrTime: '2023-08-01T01:41:13.839137',
      },
      totalDuration: '3h 54m',
    },
  },
  // Add more flight responses as needed
];

export default FlightResponseMock;
