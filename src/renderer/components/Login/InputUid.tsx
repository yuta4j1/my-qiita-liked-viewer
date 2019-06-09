import * as React from 'react';
import { useState } from 'react';

type Props = {
  text: string;
  changeEvent: (string) => void;
};

const InputUid: React.FC<Props> = props => {
  return (
    <input
      type="text"
      placeholder="input your user ID"
      value={props.text}
      onChange={e => props.changeEvent(e.target.value)}
    />
  );
};

export default InputUid;
