/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react';
import cityImg from '../../images/paris.jpg';
import './Image.css';

const zoomConfig = {
  DEFAULT_SCALE: 1,
  MIN_SCALE: 0.2,
  MAX_SCALE: 4,
  SCALE_STEP: 0.2,
  currScale: 1,
};

const Image = () => {
  const [currentZoom, setCurrentZoom] = useState(zoomConfig.DEFAULT_SCALE);
  const [images, setImages] = useState([
    { id: crypto.randomUUID(), src: cityImg },
  ]);

  const handleAddClick = () => {
    setImages((prevState) => {
      return [...prevState, { id: crypto.randomUUID(), src: cityImg }];
    });
    setCurrentZoom(zoomConfig.DEFAULT_SCALE);
  };

  const handleZoomInClick = () => {
    setCurrentZoom((prevState) => {
      const nextZoomState = prevState + zoomConfig.SCALE_STEP;

      if (zoomConfig.MAX_SCALE < nextZoomState) return prevState;

      return prevState + zoomConfig.SCALE_STEP;
    });
  };

  const handleZoomOutClick = () => {
    setCurrentZoom((prevState) => {
      const nextZoomState = prevState - zoomConfig.SCALE_STEP;

      if (zoomConfig.MIN_SCALE > nextZoomState) return prevState;

      return prevState - zoomConfig.SCALE_STEP;
    });
  };

  const handleRemoveClick = () => {
    setImages((prevState) => {
      return prevState.filter((_, i) => i !== prevState.length - 1);
    });

    setCurrentZoom(zoomConfig.DEFAULT_SCALE);
  };

  const currentImgStyle = {
    transform: `scale(${currentZoom})`,
  };

  return (
    <div>
      <div className="outer-img-container">
        {images.map(({ src, id }, i) => {
          return (
            <div key={id} className="img-container">
              <a
                style={{
                  ...(i === images.length - 1 ? currentImgStyle : null),
                }}
                href="https://www.paris.fr/"
                target="_blank"
              >
                <img className="image" src={src} alt="Париж" title="Париж" />
              </a>
            </div>
          );
        })}
      </div>
      <div className="button-container">
        <button className="add-img-button" onClick={handleAddClick}>
          Додати
        </button>
        <button className="enlarge-img-button" onClick={handleZoomInClick}>
          Збільшити
        </button>
        <button className="reduce-img-button" onClick={handleZoomOutClick}>
          Зменшити
        </button>
        <button className="remove-img-button" onClick={handleRemoveClick}>
          Видалити
        </button>
      </div>
    </div>
  );
};

export default Image;
