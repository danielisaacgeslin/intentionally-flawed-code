import React from 'react';
import { render } from '@testing-library/react';
import Item from './Item';

describe('Item', () => {
  it('should render an item with a render count that only increments when something changes', () => {
    const { getByTestId, debug, rerender } = render(<Item color="blue" value={123} />);
    expect(getByTestId('count').textContent).toEqual('1');
    rerender(<Item color="blue" value={123} />);
    expect(getByTestId('count').textContent).toEqual('1');
    rerender(<Item color="blue" value={456} />);
    expect(getByTestId('count').textContent).toEqual('2');
  })
});
