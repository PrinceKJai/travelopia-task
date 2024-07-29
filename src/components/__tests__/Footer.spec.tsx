import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../Footer';
import { MemoryRouter } from 'react-router-dom';

describe('Footer Component', () => {
  it('renders correctly with current year and links', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByText(`© ${new Date().getFullYear()} travel`)).toBeInTheDocument();

    const privacyLink = screen.getByRole('link', { name: /Privacy Policy/i });
    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink).toHaveAttribute('href', '/privacy');

    const termsLink = screen.getByRole('link', { name: /Terms of Service/i });
    expect(termsLink).toBeInTheDocument();
    expect(termsLink).toHaveAttribute('href', '/terms');
  });
});

console.error = () => {}

