import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // for more matchers
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Flight from "../Flights";
import { fetchFlights } from "../../services/flightApi";

type FetchFlightsType = () => Promise<any[]>;

jest.mock("../../services/flightApi", () => ({
  fetchFlights: jest.fn() as FetchFlightsType,
}));

jest.mock("../../utils/formatDate", () => ({
  formatDateAndTime: jest.fn((date) => new Date(date).toString()),
}));

jest.mock("../FlightLogo", () => ({
  getRandomImage: jest.fn(() => "https://example.com/logo.png"),
}));

describe("Flight Component", () => {
  const mockFlights = [
    {
      id: 1,
      flightNumber: "AA123",
      airline: "AirExample",
      origin: "JFK",
      destination: "LAX",
      departureTime: "2024-08-01T10:00:00Z",
      status: "On Time",
    },
  ];
  const renderOnce = (path: string, text: string) => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Flight />} />
          <Route path={path} element={<div>{text}</div>} />
        </Routes>
      </MemoryRouter>
    );
  };
  it("fetches and displays flight data correctly", async () => {
    (fetchFlights as jest.Mock).mockResolvedValue(mockFlights);

    render(
      <MemoryRouter>
        <Flight />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("AA123")).toBeInTheDocument();
      expect(screen.getByText("AirExample")).toBeInTheDocument();
      expect(screen.getByText("JFK")).toBeInTheDocument();
      expect(screen.getByText("LAX")).toBeInTheDocument();
    });
  });

  it("navigates to flight details page on row click", async () => {
    (fetchFlights as jest.Mock).mockResolvedValue(mockFlights);

    renderOnce("/flights/:id", "Flight Details Page");

    await waitFor(() => {
      fireEvent.click(screen.getByText("AA123"));
    });

    expect(screen.getByText("Flight Details Page")).toBeInTheDocument();
  });

  it("navigates to booking page on Book Now button click", async () => {
    (fetchFlights as jest.Mock).mockResolvedValue(mockFlights);
    renderOnce("/book/:id", "Booking Page");

    await waitFor(() => {
      fireEvent.click(screen.getByRole("button", { name: /Book Now/i }));
    });

    expect(screen.getByText("Booking Page")).toBeInTheDocument();
  });
});

console.error = () => {}

