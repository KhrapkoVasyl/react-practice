import React from 'react';
import GoodCardsList from '../GoodsList/GoodsList';

const data = [
  {
    id: 1,
    title: 'iPhone 9',
    price: 549,
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  },
  {
    id: 2,
    title: 'iPhone X',
    price: 899,
    thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
  },
  {
    id: 3,
    title: 'Samsung Universe 9',
    price: 1249,
    thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
  },
  {
    id: 4,
    title: 'OPPOF19',
    price: 280,
    thumbnail: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
  },
  {
    id: 5,
    title: 'Huawei P30',
    price: 499,
    thumbnail: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',
  },
  {
    id: 6,
    title: 'MacBook Pro',
    price: 1749,
    thumbnail: 'https://i.dummyjson.com/data/products/6/thumbnail.png',
  },
  {
    id: 7,
    title: 'Samsung Galaxy Book',
    price: 1499,
    thumbnail: 'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
  },
  {
    id: 8,
    title: 'Microsoft Surface Laptop 4',
    price: 1499,
    thumbnail: 'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
  },
  {
    id: 9,
    title: 'Infinix INBOOK',
    price: 1099,
    thumbnail: 'https://i.dummyjson.com/data/products/9/thumbnail.jpg',
  },
  {
    id: 10,
    title: 'HP Pavilion 15-DK1056WM',
    price: 1099,
    thumbnail: 'https://i.dummyjson.com/data/products/10/thumbnail.jpeg',
  },
];

const App2 = () => {
  return (
    <div className="app-2">
      <GoodCardsList
        data={data}
        renderItem={(item) => (
          <GoodCardsList.Item
            name={item.title}
            price={item.price}
            img={item.thumbnail}
          />
        )}
      />
    </div>
  );
};

export default App2;
