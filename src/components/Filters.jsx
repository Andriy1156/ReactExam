import React from 'react';
import '../styles/Filters.css';

const Filters = ({ filters, onFilterChange }) => {
  return (
    <div className="filters-container">
      <h3>Фільтри</h3>
      <div className="filter-group">
        <label>Виробник</label>
        <input
          type="text"
          value={filters.manufacturer}
          onChange={(e) => onFilterChange('manufacturer', e.target.value)}
        />
      </div>
      <div className="filter-group">
        <label>Рік випуску</label>
        <input
          type="number"
          value={filters.year}
          onChange={(e) => onFilterChange('year', e.target.value)}
        />
      </div>
      <div className="filter-group">
        <label>Колір</label>
        <input
          type="text"
          value={filters.color}
          onChange={(e) => onFilterChange('color', e.target.value)}
        />
      </div>
      <div className="filter-group">
        <label>Об'єм двигуна</label>
        <input
          type="text"
          value={filters.volume}
          onChange={(e) => onFilterChange('volume', e.target.value)}
        />
      </div>
      <div className="filter-group">
        <label>Ціновий діапазон</label>
        <input
          type="text"
          placeholder="Напр. 20000-30000"
          value={filters.priceRange}
          onChange={(e) => onFilterChange('priceRange', e.target.value)}
        />
      </div>
    </div>
  );
};

export default Filters;
