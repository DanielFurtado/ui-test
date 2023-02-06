import { Fragment, useState } from 'react';
import CardModal from '../card-modal/card-modal.component';

import './card-item.styles.scss';

const CardItem = ({ image }) => {
  const [show, setShow] = useState(false)
  const { url, user } = image;
  
  return (
    <Fragment>
      <div 
        onClick={() => setShow(true) }
        className='card-container'
        style={{ 
          backgroundImage: `url(${url}.jpg)` 
        }}
        data-testid="card-container"
        >
          <div className='card-body-container'>
            <div className='card-info shine'>
              <p>{user.name}</p>
              <span className="arrow-right"></span>
            </div>
          </div>
      </div>
      <CardModal onClose={() => setShow(false)} image={image} show={show} />
    </Fragment>
  );
};

export default CardItem;
