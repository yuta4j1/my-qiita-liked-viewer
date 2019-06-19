import * as React from 'react';
import styled from '@/theme';

type Props = {
  text: string;
  changeEvent: (string) => void;
};

const Input = styled.input`
  padding: 6px;
  width: 30%;
  height: 30px;
  border-radius: 8px;
  border-style: none;
  font-family: 'Assistant', sans-serif;
  font-size: 20px;
`;

const InputUidText: React.FC<Props> = props => {
  return (
    <Input
      type="text"
      className={'login-uid-input'}
      value={props.text}
      onChange={e => props.changeEvent(e.target.value)}
    />
  );
};

export default InputUidText;
