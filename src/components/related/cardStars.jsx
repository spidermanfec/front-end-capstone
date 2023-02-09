import React, { useState, useEffect } from 'react';

export default function CardStars({ rating }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    if (rating !== undefined) {
      const whole = Math.floor(rating);
      const partial = rating - whole;
      Promise.all([1, 2, 3, 4, 5])
        .then((results) => results.map((element, index) => {
          if (index + 1 < whole) return (<i className="fa-solid fa-star" />);
          let partialWidth;
          if (partial <= 0.25) {
            partialWidth = 31;
          } else if (partial <= 0.5) {
            partialWidth = 34;
          } else {
            partialWidth = 38;
          }
          return (
            <i
              style={{ width: partialWidth }}
              id="mutable-card-star"
              className="fa-solid fa-star"
            />
          );
        }))
        .then((results) => results.filter((element, index) => index + 1 < Math.ceil(rating)))
        .then((results) => setStars(results));
    }
  }, [rating]);

  return (
    <div className="card-star-row">
      {stars.map((star) => star)}
    </div>
  );
}
