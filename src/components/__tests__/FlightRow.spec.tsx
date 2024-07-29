import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FlightRow from '../FlightRow';
import { FlightDetails } from '../../types/FlightDetails';

const mockFlight: FlightDetails = {
  id: 1,
  flightNumber: 'AA123',
  airline: 'AirExample',
  origin: 'JFK',
  destination: 'LAX',
  departureTime: '2024-08-01T10:00:00Z',
  status: 'On Time',
};

describe('FlightRow Component', () => {
  it('renders flight details correctly', () => {
    render(
      <MemoryRouter>
        <table>
          <tbody>
            <FlightRow flight={mockFlight} />
          </tbody>
        </table>
      </MemoryRouter>
    );

    expect(screen.getByText('AA123')).toBeInTheDocument();
    expect(screen.getByText('AirExample')).toBeInTheDocument();
    expect(screen.getByText('JFK')).toBeInTheDocument();
    expect(screen.getByText('LAX')).toBeInTheDocument();
    expect(screen.getByText('2024-08-01T10:00:00Z')).toBeInTheDocument();
    expect(screen.getByText('On Time')).toBeInTheDocument();

    const detailsLink = screen.getByRole('link', { name: /Details/i });
    expect(detailsLink).toBeInTheDocument();
    expect(detailsLink).toHaveAttribute('href', '/flights/1');
  });
});

console.error = () => {}
