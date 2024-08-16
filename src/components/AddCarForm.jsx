import React, { useState } from 'react';
import '../styles/AddCarForm.css';

const AddCarForm = ({ onAddCar, onClose }) => {
  const [newCar, setNewCar] = useState({
    name: '',
    manufacturer: '',
    year: '',
    color: '',
    volume: '',
    price: '',
    image: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCar({ ...newCar, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCar(newCar);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Додати автомобіль</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Назва" value={newCar.name} onChange={handleChange} />
          <input type="text" name="manufacturer" placeholder="Виробник" value={newCar.manufacturer} onChange={handleChange} />
          <input type="number" name="year" placeholder="Рік випуску" value={newCar.year} onChange={handleChange} />
          <input type="text" name="color" placeholder="Колір" value={newCar.color} onChange={handleChange} />
          <input type="text" name="volume" placeholder="Об'єм двигуна" value={newCar.volume} onChange={handleChange} />
          <input type="number" name="price" placeholder="Ціна" value={newCar.price} onChange={handleChange} />
          <input type="text" name="image" placeholder="URL зображення" value={newCar.image} onChange={handleChange} />
          <textarea name="description" placeholder="Опис" value={newCar.description} onChange={handleChange}></textarea>
          <button type="submit">Додати</button>
          <button type="button" onClick={onClose}>Скасувати</button>
        </form>
      </div>
    </div>
  );
};

export default AddCarForm;
