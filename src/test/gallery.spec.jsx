import {render, screen, fireEvent, cleanUp} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react';
import Gallery from '../components/overview/details/gallery.jsx';

describe('gallery', () => {
  let styles = {photos: [{url: 'https://test.com/test.jpg'}]}
  let handleStyleSelect = jest.fn();
  let productID = 0;
  const handleClick = jest.fn();

  beforeEach(() => {
    render(<Gallery styles={styles} handleStyleSelect={handleStyleSelect} productID={productID} />)
  })

  afterEach(() => {
    cleanUp;
  });

  test('loads slider', () => {
   expect(screen.getByTestId('carousel')).toBeTruthy();
  })

  test('loads large modal', async () => {
    const btn = screen.getByTestId('')
    await userEvent.click(toggleModal);
    expect(screen.getAllByTestId('lgmodal')).toBeTruthy();
   })
})