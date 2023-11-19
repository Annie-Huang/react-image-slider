import { useState } from 'react';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import './image-slider.css';

type ImageSliderProps = {
  imageUrls: string[];
};
export const ImageSlider = ({ imageUrls }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <img src={imageUrls[imageIndex]} className='img-slider-img' />
      <button className='img-slider-btn'>
        <ArrowBigLeft />
      </button>
      <button className='img-slider-btn'>
        <ArrowBigRight />
      </button>
    </div>
  );
};
