import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for more matchers
import ContactUs from '../ContactUs';

describe('ContactUs Component', () => {
  it('renders without crashing', () => {
    render(<ContactUs />);
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
  });

  it('updates form inputs correctly', () => {
    render(<ContactUs />);

    const nameInput = screen.getByLabelText(/Name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const messageInput = screen.getByLabelText(/Message/i);

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello, I have a question!' } });

    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john.doe@example.com');
    expect(messageInput).toHaveValue('Hello, I have a question!');
  });

  it('submits the form and resets fields', () => {
    render(<ContactUs />);

    const nameInput = screen.getByLabelText(/Name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const messageInput = screen.getByLabelText(/Message/i);
    const submitButton = screen.getByRole('button', { name: /Send/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello, I have a question!' } });

    const alertMock = jest.spyOn(window, 'alert').mockImplementation();

    fireEvent.click(submitButton);

    expect(alertMock).toHaveBeenCalledWith('Message sent successfully!');

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(messageInput).toHaveValue('');

    alertMock.mockRestore();
  });
});

console.error = () => {}