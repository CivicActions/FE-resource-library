import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '.';

describe('<Button />', () => {
  test('renders a button with Hello World', () => {
    render(<Button />);
    expect(screen.getByRole('button', { name: "Hello World"})).toBeInTheDocument();
  })

  test('renders a button with custom text', () => {
    render(<Button text="My custom button" />);
    expect(screen.getByRole('button', { name: "My custom button"})).toBeInTheDocument();
  })
});

