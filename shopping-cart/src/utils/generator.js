import { v4 as uuidv4 } from 'uuid';

export const generateRandomProduct = () => {
  const products = [
    {
      id: uuidv4(),
      name: 'Product 1',
      price: 10,
      quantity: 1,
    },
    {
      id: uuidv4(),
      name: 'Product 2',
      price: 20,
      quantity: 1,
    },
    {
      id: uuidv4(),
      name: 'Product 3',
      price: 30,
      quantity: 1,
    },
    {
      id: uuidv4(),
      name: 'Product 4',
      price: 40.5,
      quantity: 1,
    },
    {
      id: uuidv4(),
      name: 'Product 5',
      price: 50,
      quantity: 1,
    },
    {
      id: uuidv4(),
      name: 'Product 6',
      price: 60,
      quantity: 1,
    },
    {
      id: uuidv4(),
      name: 'Product 7',
      price: 70.99,
      quantity: 1,
    },
    {
      id: uuidv4(),
      name: 'Product 8',
      price: 80.99,
      quantity: 1,
    },
    {
      id: uuidv4(),
      name: 'Product 9',
      price: 90.99,
      quantity: 1,
    },
    {
      id: uuidv4(),
      name: 'Product 10',
      price: 100.99,
      quantity: 1,
    },
  ];

  const random = Math.floor(Math.random() * products.length);

  return products[random];
};
