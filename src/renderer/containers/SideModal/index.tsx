import * as React from 'react';
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { SideModalState } from '@/types';
import { AppState } from '../store';
import { toggleModal } from './action';
import SideModalFrame from '@/components/Modal/SideModalFrame';

const SideModalContainer: React.FC<{ children: any }> = ({ children }) => {
  const dispatch = useDispatch<Dispatch>();

  const dispatchModal = React.useCallback(
    (data: SideModalState) => {
      dispatch(toggleModal(data));
    },
    [dispatch]
  );

  const selector = (data: AppState): SideModalState =>
    data.sideModalStateReducer;

  const state = useSelector<AppState, SideModalState>(selector);

  const props = { isShow: state.isShow, toggleModal: dispatchModal };

  return <SideModalFrame {...props}>{children}</SideModalFrame>;
};

export default SideModalContainer;
