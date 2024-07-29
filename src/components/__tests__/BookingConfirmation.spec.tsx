import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // for more matchers
import { MemoryRouter, Route, Routes } from "react-router-dom";
import BookingConfirmation from "../BookingConfirmation";

jest.mock("../../utils/formatDate", () => ({
  formatDateAndTime: jest.fn((date) => date.toString()),
}));

const mockLocation = {
  state: {
    flightNumber: "1234",
    airline: "AirExample",
    origin: "New York",
    destination: "Los Angeles",
    departureTime: new Date("2024-08-01T10:00:00Z"),
  },
};

describe("BookingConfirmation Component", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter
        initialEntries={[{ pathname: "/confirmation", state: mockLocation }]}
      >
        <Routes>
          <Route path="/confirmation" element={<BookingConfirmation />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/Booking Confirmation/i)).toBeInTheDocument();
  });
});

console.error = () => {}