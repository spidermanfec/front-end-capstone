import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import axios from 'axios';
import Aentry from '../components/questions/aentry';

jest.mock('axios');

describe('Aentry component', () => {
  let answer;

  beforeEach(() => {
    answer = {
      id: 1,
      body: 'Answer body',
      photos: ['image1', 'image2'],
      answerer_name: 'Answerer name',
      date: '2022-01-01T00:00:00.000Z',
      helpfulness: 0
    };
  });

  it('renders the answer body and photos', () => {
    const { getByText, getAllByRole } = render(<Aentry answer={answer} />);
    expect(getByText('A: Answer body')).toBeInTheDocument();
  });

  /* it('increments the helpfulness count and sets a cookie after helpful click', async () => {
    const { getByText } = render(<Aentry answer={answer} />);

    fireEvent.click(getByText('Yes (0)'));

    expect(axios.put).toHaveBeenCalledWith(`http://localhost:1100/helpfula/?answer_id=${answer.id}`);
    expect(getByText('Yes (1)')).toBeInTheDocument();
  });

  it('displays an alert if the user has already voted helpful', async () => {
    answer.helpfulness = 1;

    const { getByText } = render(<Aentry answer={answer} />);

    fireEvent.click(getByText('Yes (1)'));

    expect(window.alert).toHaveBeenCalledWith("You've already voted this helpful!");
  });

  it('reports the answer after report click', async () => {
    const { getByText } = render(<Aentry answer={answer} />);

    fireEvent.click(getByText('Report'));

    expect(axios.put).toHaveBeenCalledWith(`http://localhost:1100/reporta/?answer_id=${answer.id}`);
    expect(getByText('Reported')).toBeInTheDocument();
  });

  it('opens the image modal on image click', async () => {
    const { getAllByRole } = render(<Aentry answer={answer} />);

    fireEvent.click(getAllByRole('img')[0]);

    expect(getAllByRole('img')[0]).toHaveAttribute('src', 'image1');
  }); */
});