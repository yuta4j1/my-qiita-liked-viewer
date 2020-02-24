import * as React from 'react'
import Modal from 'react-modal'
import { ModalState } from '../types'
import styled from '../theme/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

type Props = {
  headerTitle: string
  body: JSX.Element
  closeEvent: () => void
}

const Header = styled.div`
  display: flex;
  border-bottom: solid;
  border-width: thin;
  border-color: #eeeeee;
`

const Closer = styled.div`
  cursor: pointer;
`

const Title = styled.div``

const Containts = styled.div``

const Body = styled.div``

const ModalContaints: React.FC<Props> = props => {
  return (
    <Containts>
      <Header>
        <Title>{props.headerTitle}</Title>
        <Closer onClick={e => props.closeEvent()}>
          <FontAwesomeIcon icon={faTimes} />
        </Closer>
      </Header>
      <Body>{props.body}</Body>
    </Containts>
  )
}

export default ModalContaints
