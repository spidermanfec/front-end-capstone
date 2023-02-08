import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react';
import Prodinfo from '../components/overview/details/prodinfo.jsx';

jest.mock('../components/overview/details/ratings.jsx', () => () => {
  return <div>Ratings</div>;
});

describe('prodinfo', () => {
  const mockTest = jest.fn()

  beforeEach(() => {
    render(<Prodinfo itemsInfo={{category: 'shoes', name: 'bob'}} styles={{sale_price: '500', original_price: '$400'} } test={mockTest} />)
  })

  afterEach(() => {
    jest.mockReset()
  })

  test('should rendeer item name andd category', () => {
    expect(screen.getByText('shoes')).toBeInTheDocument()
    expect(screen.getByText('bob')).toBeInTheDocument()
  })

  test('should render sale price and original price', () => {
    expect(screen.getByText('Sale: $500')).toBeInTheDocument()
    expect(screen.getByText('$$400')).toBeInTheDocument()
  })

  test('should ', async () => {
    const btn = screen.getByText('hi click me')
    screen.debug(btn)
    await userEvent.click(btn)
    expect(mockTest).toHaveBeenCalledTimes(1)
  })

  test('should ', async () => {
    const btn = screen.getByText('hi click me')
    screen.debug(btn)
    await userEvent.click(btn)
    expect(mockTest).toHaveBeenCalledTimes(1)
  })
})