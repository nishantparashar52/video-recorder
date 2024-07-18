import { useState } from 'react';

export const useStarRating = () => {
  const [selectedStar, setSelectedStar] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleMouseOver = (index) => {
    setHoveredStar(index);
  };

  const handleMouseLeave = () => {
    setHoveredStar(0);
  };

  const handleClick = (index) => {
    setSelectedStar(index);
  };

  return {
    selectedStar,
    hoveredStar,
    handleMouseOver,
    handleMouseLeave,
    handleClick,
  };
}