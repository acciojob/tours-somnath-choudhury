import React, { useState } from 'react'

const Tours = ({id,name, info, image, price, removeTour}) => {
    const [showMore, setShowMore] = useState(false)
  return (
    <div>
        <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {showMore ? info : `${info.substring(0, 200)}... `}
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Show More"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Delete Tour
        </button>
      </footer>
    </article>
    </div>
  )
}

export default Tours
