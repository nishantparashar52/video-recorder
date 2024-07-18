import React from 'react';
import { useStarRating } from '../hooks/useStarRating.ts';
import './StarRating.css';

function StarRating({ totalStars }) {
  const {
    selectedStar,
    hoveredStar,
    handleMouseOver,
    handleMouseLeave,
    handleClick,
  } = useStarRating();

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hoveredStar || selectedStar) ? 'star selected' : 'star'}
            onMouseOver={() => handleMouseOver(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
          >
          </button>
        );
      })}
    </div>
  );
}

export default StarRating;