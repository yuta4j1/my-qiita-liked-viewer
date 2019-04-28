import * as React from 'react';
import LoadingOverlay from 'react-loading-overlay';
import Spinner from './Spinner';

type LoaderState = { isActive: boolean };

class NowLoading extends React.Component<{}, LoaderState> {
  state = { isActive: true };

  componentDidMount() {
    console.log('[NowLoading] componentDidMount is');
  }

  render() {
    return (
      <div>
        <LoadingOverlay active={this.state.isActive} spinner={<Spinner />} />
      </div>
    );
  }
}

export default NowLoading;
