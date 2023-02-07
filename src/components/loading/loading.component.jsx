import { Fragment } from 'react';
import './loading.styles.scss';

const Loading = () => {
  return (
    <Fragment>
      <h3 className='loading'>Loading
        <div className='lds-ellipsis'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </h3>
    </Fragment>
  );
};

export default Loading;