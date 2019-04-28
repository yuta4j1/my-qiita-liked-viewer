import * as React from 'react';
import ReactLoading from 'react-loading';

class Spinner extends React.Component<{}> {
  render() {
    return (
      <ReactLoading
        type={'bubbles'}
        color={'#00BFFF'}
        height={'20%'}
        width={'20%'}
      />
    );
  }
}

export default Spinner;
