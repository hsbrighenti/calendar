import React, { FC } from 'react';

type Props = {
  name?: string,
};

const HelloMessage: FC<Props> = ({ name = 'World' }) => (
  <div>
    Hello {name}
  </div>
);

export default HelloMessage;
