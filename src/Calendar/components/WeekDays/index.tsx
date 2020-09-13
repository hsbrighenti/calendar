import React, { FC } from 'react';

const TableHeader: FC = () => (
  <div className="week week-days" role="row">
    <div role="columnheader">Sunday</div>
    <div role="columnheader">Monday</div>
    <div role="columnheader">Tuesday</div>
    <div role="columnheader">Wednesday</div>
    <div role="columnheader">Thursday</div>
    <div role="columnheader">Friday</div>
    <div role="columnheader">Saturday</div>
  </div>
);

export default TableHeader;
