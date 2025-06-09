"use client";
import { Star, StarHalf, StarOff } from "lucide-react";

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} size={16} fill="currentColor" />
      ))}
      {hasHalfStar && <StarHalf size={16} fill="currentColor" />}
      {[...Array(emptyStars)].map((_, i) => (
        <StarOff key={`empty-${i}`} size={16} />
      ))}
    </div>
  );
};

export default RatingStars;
