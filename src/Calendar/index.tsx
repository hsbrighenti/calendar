import React, { FC } from 'react';
import Week from './components/Week';
import WeekDays from './components/WeekDays';

import './styles.css';

const Calendar: FC = () => (
  <div className="calendar" role="table">
    <WeekDays />
    <Week />
    <Week />
    <Week />
    <Week />
    <Week />
  </div>
);

export default Calendar;
