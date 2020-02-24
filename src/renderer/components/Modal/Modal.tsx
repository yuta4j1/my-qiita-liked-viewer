import * as React from 'react'
import styled, { keyframes } from '@/theme'

type ModalProps = {
  isShow: boolean
}

const fadeIn = keyframes`
  from {
      left: -30%;
      opacity: 0;
  }
  to {
      left: 0%;
      opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
      left: 0%;
      opacity: 1;
  }
  to {
      left: -30%;
      opacity: 0;
  }
`

const ModalComponentBase = styled.div`
  position: fixed;
  top: 0;
  left: -30%;
  height: 100%;
  width: 240px;
  background-color: #e0e0e0;
  z-index: 11;
`

const Modal: React.FC<ModalProps> = props => {
  const ModalComponent = props.isShow
    ? styled(ModalComponentBase)`
        visibility: visible;
        left: 0%;
        animation: ${fadeIn} 0.3s linear;
      `
    : styled(ModalComponentBase)`
        animation: ${fadeOut} 0.3s linear;
        visibility: hidden;
        left: -30%;
      `
  return <ModalComponent>{props.children}</ModalComponent>
}

export default Modal
