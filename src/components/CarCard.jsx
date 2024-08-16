import React from 'react';
import '../styles/CarCard.css';

const CarCard = ({ car, onDelete, onEdit }) => {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} className="car-image" />
      <div className="car-details">
        <h3>{car.name}</h3>
        <p>Виробник: {car.manufacturer}</p>
        <p>Рік: {car.year}</p>
        <p>Колір: {car.color}</p>
        <p>Об'єм: {car.volume} л</p>
        <p>Ціна: ${car.price}</p>
        <p>{car.description}</p>
      </div>
      <div className="car-actions">
        <button className="edit-button" onClick={() => onEdit(car)}>Редагувати</button>
        <button className="delete-button" onClick={onDelete}>Видалити</button>
      </div>
    </div>
  );
};

export default CarCard;
