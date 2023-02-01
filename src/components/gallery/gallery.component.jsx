import CardItem from '../card-item/card-item.component';

import './gallery.styles.scss';

const Gallery = ({ images }) => {
  return (
    <div className='gallery-container'>
      <div className='gallery-wrapper'>
      {images && images.map((image) => (
        <CardItem key={image.id} image={image} />
      ))}
      </div>
    </div>
  );
};

export default Gallery;
