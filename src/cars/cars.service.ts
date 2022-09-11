import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  cars = [
    {
      id: 1,
      manufacturer: 'Porsche',
      model: '911',
      price: 135000,
    },
    {
      id: 2,
      manufacturer: 'Nissan',
      model: 'GT-R',
      price: 80000,
    },
    {
      id: 3,
      manufacturer: 'BMW',
      model: 'M3',
      price: 60500,
    },
    {
      id: 4,
      manufacturer: 'Audi',
      model: 'S5',
      price: 53000,
    },
    {
      id: 5,
      manufacturer: 'Audi',
      model: 'TT',
      price: 40000,
    },
  ];

  getCars() {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars.find((car) => car.id === id);
  }

  createCar(car: { manufacturer: string; model: string; price: number }) {
    const newCar = { ...car, id: this.cars.length };
    this.cars.push(newCar);
    return newCar;
  }
}
