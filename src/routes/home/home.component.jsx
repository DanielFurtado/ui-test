import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Gallery from '../../components/gallery/gallery.component';

const Home = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch('images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <Gallery images={images} />
      <Outlet />
    </div>
  );
};

export default Home;
