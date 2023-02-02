import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../app.jsx';

describe('App tests', () => {
  it('should contain basic text within components', () => {
    render(<App />);
    const text = screen.getByText(/QUESTIONS & ANSWER/i);
    expect(text).toBeInTheDocument();
  });
});
