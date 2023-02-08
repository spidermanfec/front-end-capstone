import React from 'react';
import axios from 'axios';
import { render, fireEvent, wait, act } from '@testing-library/react';
import Qentry from '../components/questions/qentry.jsx';

jest.mock('axios');
//jest.mock('../components/questions/qlist.jsx', () => jest.fn(() => null));
//import Qlist from '../components/questions/qlist.jsx';
const productID = 1;
const product = { name: 'Test product' };
const questionList = [{
  question_id: 1,
  question_body: 'Test question 1',
  question_helpfulness: 5,
  answers: {
    "5987009": {
      "id": 5987009,
      "body": "nah nah nahnah nah nahnah nah nahnah nah nahnah nah nah",
      "date": "2022-07-22T00:00:00.000Z",
      "answerer_name": "nah nah nah",
      "helpfulness": 21,
      "photos": [
        "https://res.cloudinary.com/juannncodes/image/upload/v1658453974/d91iwadcwhiwapeit5vd.jpg"
      ]
    }
  }
}, {
  question_id: 2,
  question_body: 'Test question 2',
  question_helpfulness: 3
}];

//axios.get.mockResolvedValueOnce({
// data: questionList
//});

describe('Questions component', () => {

  it('should display the correct question text on the screen', async () => {
    const { getByText } = render(<Qentry question={questionList[0]} />);
    expect(getByText('Test question 1')).toBeInTheDocument();
  });

  it('should display the correct answer text on the screen', async () => {
    const { getByText } = render(<Qentry question={questionList[0]} />);
    expect(getByText('nah nah nahnah nah nahnah nah nahnah nah nahnah nah nah')).toBeInTheDocument();
  });

});
