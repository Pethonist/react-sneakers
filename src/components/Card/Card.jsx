import React from 'react';

const Card = () => {
  return (
    <div className="card">
      <div className="favorite">
        <img src="img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>12 000 грн.</b>
        </div>

        <button className="button">
          <img width={11} height={11} src="/img/btn-plus.svg" alt="Button" />
        </button>
      </div>
    </div>
  );
};

export default Card;
