import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Qentry from '../components/questions/qentry.jsx';

const question = {
  question_id: 1,
  question_body: 'This is a test question',
  question_date: '2021-01-01T00:00:00.000Z',
  question_helpfulness: 0,
  reported: false,
  answers: {},
};

describe('Qentry', () => {
  test('renders Qentry component', () => {
    render(<Qentry question={question} />);
    expect(screen.getByText(/Q: This is a test question/)).toBeInTheDocument();
  });

  // fireEven tests

  test('renders Qentry component with report click', () => {
    render(<Qentry question={question} />);
    fireEvent.click(screen.getByText('Report'));
    expect(screen.getByText('Reported')).toBeInTheDocument();
  });

});