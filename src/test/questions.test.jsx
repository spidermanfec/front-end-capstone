import React from 'react';
import axios from 'axios';
import { render, fireEvent, wait, act } from '@testing-library/react';
import Questions from '../components/questions/questions.jsx';

jest.mock('axios');
jest.mock('../components/questions/qlist.jsx', () => jest.fn(() => null));
import Qlist from '../components/questions/qlist.jsx';
const productID = 1;
const product = { name: 'Test product' };
const questionList = [{
  question_id: 1,
  question_body: 'Test question 1',
  question_helpfulness: 5
}, {
  question_id: 2,
  question_body: 'Test question 2',
  question_helpfulness: 3
}];
describe('Questions component', () => {
  it('should make an axios call to the right route', async () => {

    axios.get.mockResolvedValueOnce({
      data: questionList
    });

    await act(async() => {
      const { getByText, getByTestId } = render(<Questions productID={productID} product={product} />);
    });
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith('/questions/?product_id=1&count=999');
  });
});