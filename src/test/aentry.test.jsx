Path: 'src/test/aentry.test.jsx'
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Aentry from '../components/questions/aentry.jsx';

const answer = {
  answerer_name: 'Seller',
  body: 'This is a test answer',
  date: '2021-01-01T00:00:00.000Z',
  helpfulness: 0,
  id: 1,
  photos: [],
};

describe('Aentry', () => {
  test('renders Aentry component', () => {
    render(<Aentry answer={answer}/>);
    expect(screen.getByText('A:')).toBeInTheDocument();
  });

  test('renders Aentry component with answer', () => {
    render(<Aentry answer={answer} />);
    expect(screen.getByText('This is a test answer')).toBeInTheDocument();
  });

  test('renders Aentry component with answerer name', () => {
    render(<Aentry answer={answer} />);
    expect(screen.getByText('Seller')).toBeInTheDocument();
  });

  // fireEven tests

  test('renders Aentry component with report click', () => {
    render(<Aentry answer={answer} />);
    fireEvent.click(screen.getByText('Report'));
    expect(screen.getByText('Reported')).toBeInTheDocument();
  });

});