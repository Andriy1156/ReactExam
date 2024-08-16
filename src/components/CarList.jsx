import React from 'react';
import CarCard from './CarCard';
import '../styles/CarList.css';

const CarList = ({ cars, filters, onDelete, onEdit }) => {

  const filteredCars = cars.filter(car => {
    return (
      (filters.manufacturer === '' || car.manufacturer.toLowerCase().includes(filters.manufacturer.toLowerCase())) &&
      (filters.year === '' || car.year.toString() === filters.year) &&
      (filters.color === '' || car.color.toLowerCase().includes(filters.color.toLowerCase())) &&
      (filters.volume === '' || car.volume === filters.volume) &&
      (filters.priceRange === '' || checkPriceRange(car.price, filters.priceRange))
    );
  });

  const checkPriceRange = (price, range) => {
    const [min, max] = range.split('-').map(Number);
    return price >= min && price <= max;
  };

  return (
    <div className="car-list">
      {filteredCars.map(car => (
        <CarCard
          key={car.id}
          car={car}
          onDelete={() => onDelete(car.id)}
          onEdit={() => onEdit(car)}
        />
      ))}
    </div>
  );
};

export default CarList;
