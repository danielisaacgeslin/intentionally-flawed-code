import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should add items when the button is pressed', () => {
    const { getByTestId, debug } = render(<App />);
    expect(false).toBe(true);
  })
});
