import React, { useState } from 'react';
import '../styles/EditCarForm.css';

const EditCarForm = ({ car, onSave, onClose }) => {
  const [editedCar, setEditedCar] = useState({ ...car });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCar({ ...editedCar, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedCar);
    onClose();
  };

  return (
    <div className="edit-car-form-overlay">
      <div className="edit-car-form">
        <h2>Редагувати автомобіль</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Назва:
            <input
              type="text"
              name="name"
              value={editedCar.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Виробник:
            <input
              type="text"
              name="manufacturer"
              value={editedCar.manufacturer}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Рік:
            <input
              type="number"
              name="year"
              value={editedCar.year}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Колір:
            <input
              type="text"
              name="color"
              value={editedCar.color}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Об'єм (л):
            <input
              type="text"
              name="volume"
              value={editedCar.volume}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Ціна ($):
            <input
              type="number"
              name="price"
              value={editedCar.price}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Опис:
            <textarea
              name="description"
              value={editedCar.description}
              onChange={handleChange}
              required
            />
          </label>
          <div className="form-actions">
            <button type="submit">Зберегти</button>
            <button type="button" onClick={onClose}>Скасувати</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCarForm;
