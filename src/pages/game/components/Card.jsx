import { useState, useEffect } from 'react';

function Card({ classes, value }) {
  const [hint, setHint] = useState(false)

  useEffect(() => {
    setHint(false)
  }, [value])

  return (
    <div className={classes}>
      <div className="card__top">
        <p className="card__value">{value?.eng}</p>
      </div>
      <div className="card__bottom">
        <p onClick={() => setHint(!hint)} className={`card__hint ${hint && 'show'}`}>{value?.ru}</p>
      </div>
    </div>
  );
}

export default Card;