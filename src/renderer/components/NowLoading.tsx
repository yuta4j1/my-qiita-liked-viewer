import * as React from 'react';
import LoadingOverlay from 'react-loading-overlay';
import Spinner from './Spinner';
import { LoadingState } from '../types';

type LoadingProps = {
  currentState: LoadingState;
  children: JSX.Element;
};

const NowLoading: React.FC<LoadingProps> = (props: LoadingProps) => {
  return (
    <LoadingOverlay
      active={props.currentState.isActive}
      spinner
      text="Loading content..."
    >
      {props.children}
    </LoadingOverlay>
  );
};

export default NowLoading;
