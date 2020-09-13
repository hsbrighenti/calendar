import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('<App />', () => {
  beforeAll(() => {
    render(<App />);
  });

  it('should display a header with "Simplest Calendar"', () => {
    const heading = screen.getByRole('heading');
    expect(heading.textContent).toContain('Simplest Calendar');
  });

  it('should display the current months name', () => {
    const month = screen.queryByText('September');
    expect(month).toBeDefined();
  });
});
