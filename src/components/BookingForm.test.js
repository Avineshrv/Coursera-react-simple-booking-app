import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

jest.mock('./BookingForm', () => ({
  handleChange: jest.fn(),
  handleSubmit: jest.fn(),
}));

const mockBookingInfo = {
  name: '',
  email: '',
  date: '',
  time: '',
  numberOfPeople: 1,
};

test('renders BookingForm and handles submission with correct data', () => {
  render(<BookingForm bookingInfo={mockBookingInfo} />);

  const nameInput = screen.getByLabelText(/Name:/i);
  const emailInput = screen.getByLabelText(/Email:/i);
  const dateInput = screen.getByLabelText(/Date:/i);
  const timeInput = screen.getByLabelText(/Time:/i);
  const numberOfPeopleInput = screen.getByLabelText(/Number of People:/i);
  const submitButton = screen.getByRole('button', { name: /Book Table/i });

  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
  fireEvent.change(dateInput, { target: { value: '2024-05-27' } });
  fireEvent.change(timeInput, { target: { value: '18:00' } });
  fireEvent.change(numberOfPeopleInput, { target: { value: 2 } });

  fireEvent.submit(submitButton);

  expect(BookingForm.handleChange).toHaveBeenCalledTimes(5);
  expect(BookingForm.handleSubmit).toHaveBeenCalledWith({
    name: 'Kumar',
    email: 'kumar@example.com',
    date: '2024-05-27',
    time: '09:00',
    numberOfPeople: 2,
  });
});

test('renders BookingForm and shows error for invalid date', () => {
  render(<BookingForm bookingInfo={mockBookingInfo} />);

  const dateInput = screen.getByLabelText(/Date:/i);

  fireEvent.change(dateInput, { target: { value: '2023-05-26' } });
});
