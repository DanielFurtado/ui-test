import React, { Fragment } from 'react';
import { useQuery } from 'react-query'
import { Outlet } from 'react-router-dom';

import ImageGallery from '../../components/image-gallery/image-gallery.component';
import './gallery.styles.scss';

const Gallery = () => {
  const { isLoading, error, data } = useQuery('data', async () => {
    return fetch('images?limit=10')
      .then(res => res.json())
  })

  if (isLoading) return <h3 className='loading'>Loading...</h3>
  if (error) return <h3 className='error-loading'>Error loading data!</h3>
  
  return (
    <Fragment>
      <ImageGallery images={data} />
      <Outlet />
    </Fragment>
  );
};

export default Gallery;
