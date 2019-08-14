import * as React from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';
import { SideModalState } from '../../types';

type Props = {
  isShow: boolean;
  toggleModal?: (data: SideModalState) => void;
};

const SideModalFrame: React.FC<Props> = props => {
  const state: SideModalState = {
    isShow: false
  };

  return (
    <>
      <Backdrop
        isShow={props.isShow}
        clickEvent={e => props.toggleModal(state)}
      />
      <Modal isShow={props.isShow}>{props.children}</Modal>
    </>
  );
};

export default SideModalFrame;
