import { Fragment } from 'react';
import CardItem from '../card-item/card-item.component';

import './image-gallery.styles.scss';

const ImageGallery = ({ images }) => {
  return (
    <Fragment>
      <div className='image-gallery-container'>
        <div className='image-gallery-heading'>
          <h1>Photo gallery</h1>
          <p>Some of our clients have shared some of their amazing photographic work with us here at Motorway! 
          This is truly inspirational!</p>
        </div>
        <div className='image-gallery-wrapper'>
          {images && images.map((image) => (
            <CardItem className='item' key={image.id} image={image} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ImageGallery;
