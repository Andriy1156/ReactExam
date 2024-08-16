import React, { useState } from 'react';
import Filters from '../components/Filters';
import CarList from '../components/CarList';
import AddCarForm from '../components/AddCarForm';
import EditCarForm from '../components/EditCarForm'; 
import camryImage from '../components/CarPhotos/camry.jpg';
import civicImage from '../components/CarPhotos/civic.jpg';
import x5Image from '../components/CarPhotos/x5.jpg';
import a4Image from '../components/CarPhotos/a4.jpg';
import cClassImage from '../components/CarPhotos/cClass.jpg';
import '../styles/Home.css';

const Home = () => {
  const [cars, setCars] = useState([
    {
      id: 1,
      name: 'Toyota Camry',
      manufacturer: 'Toyota',
      year: 2020,
      color: 'Чорний',
      volume: '2.5',
      price: '30000',
      image: camryImage,
      description: 'Комфортний седан з передовими технологіями та економічним двигуном.',
    },
    {
      id: 2,
      name: 'Honda Civic',
      manufacturer: 'Honda',
      year: 2019,
      color: 'Сірий',
      volume: '2.0',
      price: '25000',
      image: civicImage,
      description: 'Спортивний компактний автомобіль з відмінною маневреністю та економією пального.',
    },
    {
      id: 3,
      name: 'BMW X5',
      manufacturer: 'BMW',
      year: 2021,
      color: 'Білий',
      volume: '3.0',
      price: '45000',
      image: x5Image,
      description: 'Розкішний кросовер з потужним двигуном і розширеними функціями безпеки.',
    },
    {
      id: 4,
      name: 'Audi A4',
      manufacturer: 'Audi',
      year: 2018,
      color: 'Синій',
      volume: '2.0',
      price: '32000',
      image: a4Image,
      description: 'Елегантний седан з високою якістю виготовлення і сучасними технологіями.',
    },
    {
      id: 5,
      name: 'Mercedes-Benz C-Class',
      manufacturer: 'Mercedes-Benz',
      year: 2022,
      color: 'Червоний',
      volume: '2.0',
      price: '50000',
      image: cClassImage,
      description: 'Престижний автомобіль з чудовою динамікою і розкішним інтер’єром.',
    },
  ]);

  const [filters, setFilters] = useState({
    manufacturer: '',
    year: '',
    color: '',
    volume: '',
    priceRange: '',
  });

  const [isAddCarModalOpen, setIsAddCarModalOpen] = useState(false);
  const [editingCar, setEditingCar] = useState(null); 

  const handleFilterChange = (filterName, value) => {
    setFilters({ ...filters, [filterName]: value });
  };

  const handleAddCar = (newCar) => {
    setCars([...cars, { ...newCar, id: cars.length + 1 }]);
    setIsAddCarModalOpen(false);
  };

  const handleDeleteCar = (id) => {
    setCars(cars.filter(car => car.id !== id));
  };

  const handleEditCar = (updatedCar) => {
    setCars(cars.map(car => car.id === updatedCar.id ? updatedCar : car));
  };

  const openEditForm = (car) => {
    setEditingCar(car);
  };

  const closeEditForm = () => {
    setEditingCar(null);
  };

  const saveEditedCar = (editedCar) => {
    handleEditCar(editedCar);
  };

  return (
    <div className="home-container">
      <h1>Каталог автомобілів</h1>
      <Filters filters={filters} onFilterChange={handleFilterChange} />
      <CarList cars={cars} filters={filters} onDelete={handleDeleteCar} onEdit={openEditForm} />
      <button className="add-car-button" onClick={() => setIsAddCarModalOpen(true)}>
        Додати автомобіль
      </button>
      {isAddCarModalOpen && (
        <AddCarForm onAddCar={handleAddCar} onClose={() => setIsAddCarModalOpen(false)} />
      )}
      {editingCar && (
        <EditCarForm
          car={editingCar}
          onSave={saveEditedCar}
          onClose={closeEditForm}
        />
      )}
    </div>
  );
};

export default Home;
