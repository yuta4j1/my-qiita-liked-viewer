import * as React from 'react'
import styled from '@/theme'

type Props = {
  clickEvent: () => void
}

const Button = styled.button`
  padding: 12px;
  height: 10%;
  width: 16%;
  cursor: pointer;
  border-style: none;
  border-radius: 8px;
  color: #55c500;
  font-size: 1.2em;
  background-color: #fafafa;
  transition: background-color .3s
  &:hover {
    background-color: #dcedc8;
  }
`

const SubmitButton: React.FC<Props> = props => {
  return <Button onClick={e => props.clickEvent()}>Sign in</Button>
}

export default SubmitButton
