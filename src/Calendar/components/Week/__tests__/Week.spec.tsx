import React from 'react';
import { screen, render } from '@testing-library/react';
import Week from '..';

describe('<Week />', () => {
  beforeEach(() => {
    render(<Week />);
  });

  it('should render cells', () => {
    const cells = screen.getAllByRole('cell');
    expect(cells).toHaveLength(7);
  });
});
