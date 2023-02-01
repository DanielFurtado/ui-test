import CardItem from '../card-item/card-item.component';

import './gallery.styles.scss';

const Gallery = ({ images }) => {
  return (
    <div className='gallery-container'>
      {images && images.map((image) => (
        <CardItem key={image.id} image={image} />
      ))}
    </div>
  );
};

export default Gallery;
