import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header Component', () => {
  it('renders correctly with navigation links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const titleLink = screen.getByRole('link', { name: /Travel App/i });
    expect(titleLink).toBeInTheDocument();
    expect(titleLink).toHaveAttribute('href', '/');

    const contactButton = screen.getByRole('link', { name: /Contact Us/i });
    expect(contactButton).toBeInTheDocument();
    expect(contactButton).toHaveAttribute('href', '/contact');

    const aboutButton = screen.getByRole('link', { name: /About Us/i });
    expect(aboutButton).toBeInTheDocument();
    expect(aboutButton).toHaveAttribute('href', '/about');
  });
});

console.error = () => {}

