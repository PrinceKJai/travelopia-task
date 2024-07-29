import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AboutUs from "../AboutUs";

describe("AboutUs Component", () => {
  it("renders without crashing", () => {
    render(<AboutUs />);
  });

  it("displays the correct title and content", () => {
    render(<AboutUs />);
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();

    expect(
      screen.getByText(/Welcome to our airline booking application/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Our mission is to provide the best flight booking experience/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Our team is dedicated to making your travel plans as smooth and convenient as possible/i
      )
    ).toBeInTheDocument();
  });
});

console.error = () => {}
