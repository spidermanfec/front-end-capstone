import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react';
import Gallery from '../components/overview/details/gallery.jsx';

describe('gallery', () => {
  const mockTest = jest.fn()

  beforeEach(() => {
    render(<Gallery styles={{ backgroundImage: 'urlphotourl'}} test={mockTest} />)
  })

  afterEach(() => {
    jest.clearAllMocks();
  })

  test('loads gallery', () => {
    expect(screen.getByText('urlphotourl')).toBeInTheDocument()
    // expect(screen.getByText('bob')).toBeInTheDocument()
  })

  // test('should render sale price and original price', () => {
  //   expect(screen.getByText('Sale: $500')).toBeInTheDocument()
  //   expect(screen.getByText('$$400')).toBeInTheDocument()
  // })

  // test('should ', async () => {
  //   const btn = screen.getByText('hi click me')
  //   screen.debug(btn)
  //   await userEvent.click(btn)
  //   expect(mockTest).toHaveBeenCalledTimes(1)
  // })
})