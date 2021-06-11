import { render } from '@testing-library/react';
import Item from '../Item';

/** @todo test is ok, but the component is not working properly */

describe('Item', () => {
  it('should render an item with a render count that only increments when something changes', () => {
    const { queryAllByTestId, queryByTestId, getByTestId, getAllByTestId, debug, rerender } = render(<Item value={'123'} />);
    expect(getByTestId('count').textContent).toEqual('1');
    rerender(<Item value={'123'} />);
    expect(getByTestId('count').textContent).toEqual('1');
    rerender(<Item value={'456'} />);
    expect(getByTestId('count').textContent).toEqual('2');
  })
});
