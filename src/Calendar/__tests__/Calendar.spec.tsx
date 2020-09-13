import React from 'react';
import { screen, render } from '@testing-library/react';
import Calendar from '../';

describe('<Calendar />', () => {
  it('should display a table', () => {
    render(<Calendar />);
    expect(screen.queryByRole('table')).toBeDefined();
  });
});
