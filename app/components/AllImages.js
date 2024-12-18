import React from 'react';
import images from "./imagesData";
import Product from './Product';

export default function AllImages() {

    const [imagesData, setImagesData] = React.useState(images.data);

    console.log(imagesData)
    console.log(imagesData.src)
  const scrollImages = imagesData.map(img => (
    
    <Product 
        name={img.name}
        src={img.src}
        country={img.country}
    />
  ))

  return (
    <div className='w-auto flex'>
      {scrollImages}
    </div>
  );
}
