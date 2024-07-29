import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import FlightDetail from "../FlightDetails";
import { FlightDetails } from "../../types/FlightDetails";
import "@testing-library/jest-dom";

const mockFlightDetails: FlightDetails = {
  flightNumber: "AA123",
  airline: "American Airlines",
  origin: "JFK",
  destination: "LAX",
  departureTime: "2024-07-29T15:00:00Z",
  status: "On Time",
};

describe("FlightDetail Component", () => {
  const renderOnce = () => {
    render(
      <MemoryRouter
        initialEntries={[{ pathname: "/flights/1", state: mockFlightDetails }]}
      >
        <Routes>
          <Route path="/flights/:id" element={<FlightDetail />} />
        </Routes>
      </MemoryRouter>
    );
  };
  test("renders flight details correctly", () => {
    renderOnce();

    expect(screen.getByText(/Flight Details for AA123/i)).toBeInTheDocument();
    expect(screen.getByText(/Airline:/i)).toBeInTheDocument();
    expect(screen.getByText(mockFlightDetails.airline)).toBeInTheDocument();
    expect(screen.getByText(/Origin:/i)).toBeInTheDocument();
    expect(screen.getByText(mockFlightDetails.origin)).toBeInTheDocument();
    expect(screen.getByText(/Destination:/i)).toBeInTheDocument();
    expect(screen.getByText(mockFlightDetails.destination)).toBeInTheDocument();
    expect(screen.getByText(/Departure Time:/i)).toBeInTheDocument();
    expect(
      screen.getByText(mockFlightDetails.departureTime)
    ).toBeInTheDocument();
    expect(screen.getByText(/Status:/i)).toBeInTheDocument();
    expect(screen.getByText(mockFlightDetails.status)).toBeInTheDocument();
  });
});

console.error = () => {}