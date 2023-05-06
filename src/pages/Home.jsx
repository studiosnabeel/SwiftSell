import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import Products from '../components/Products';

const Home = () => {
  const { data } = useLoaderData();
  return (
    <div>
      <Banner />
      <Products />
    </div>
  );
};

export default Home;
