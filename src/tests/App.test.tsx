import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from '../App';

/** @todo write missing test */

describe('App', () => {
  it('should add items when the button is pressed', () => {
    const { queryAllByTestId, queryByTestId, getByTestId, getAllByTestId, debug } = render(<App />);
    expect(false).toBe(true);
  })
});
