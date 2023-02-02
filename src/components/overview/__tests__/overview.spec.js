import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../app.jsx';

describe('App tests', () => {

  it('should contain basic text within components', () => {
    render(<App />);
    const text = screen.getByText(/QUESTION & ANSWER/i);
    setTimeout(() => {
        expect(text).toBeInTheDocument();
        done();
    });
  });

});
