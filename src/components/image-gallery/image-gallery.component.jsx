import { Fragment, useState } from 'react';
import CardItem from '../card-item/card-item.component';

import ReactPaginate from 'react-paginate';
import './image-gallery.styles.scss';

const Items = ({ currentItems }) => {
  return (
    <Fragment>
      {currentItems && currentItems.map((image) => (
        <CardItem className='item' key={image.id} image={image} />
      ))}
    </Fragment>
  );
};

const PaginatedItems = ({ images, itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = images.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(images.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % images.length;
    setItemOffset(newOffset);
  };

  return (
    <Fragment>
      <Items currentItems={currentItems} />
      <ReactPaginate
        previousLabel='<'
        nextLabel='>'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        pageCount={pageCount}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName='pagination'
        activeClassName='active'
      />
    </Fragment>
  );
};

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
          <PaginatedItems images={images} itemsPerPage={10} />
        </div>
      </div>
    </Fragment>
  );
};

export default ImageGallery;
