import React from 'react';
import { screen, render } from '@testing-library/react';
import WeekDays from '..';

describe('<WeekDays />', () => {
  beforeEach(() => {
    render(<WeekDays />);
  });

  it.each([
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ])('should display %s', day => {
    expect(screen.getByText(day)).toBeDefined();
  });
});
