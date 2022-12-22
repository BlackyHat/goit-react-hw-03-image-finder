import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';

const ImageGallery = ({ ...props }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem {...props} />
    </ul>
  );
};

export default ImageGallery;
