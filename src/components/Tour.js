import React, { useState } from "react";

function Tour({ id, image, info, price, name, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p id={`tour-item-para-${id}`}>
  {readMore ? info : `${info.substring(0, 200)}...`}
  <button onClick={() => setReadMore(!readMore)}>
    {readMore ? "Show less" : "Show more"}
  </button>
</p>
        <button id={`delete-btn-${id}`} className="delete-btn" onClick={() => removeTour(id)}>
          Remove
        </button>
      </footer>
    </article>
  );
}

export default Tour;
