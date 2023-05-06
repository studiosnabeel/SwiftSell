import React from 'react';
import ProductsCard from './ProductsCard';

const Products = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-primary hover:bg-secondary active:bg-black duration-[250ms] text-white py-2 w-80 text-center">
          Shop Now
        </h1>
        <span className="w-20 h-[3px] bg-secondary"></span>
        <p className="max-w-[700px] text-secondary text-center font-bold text-sm">
          Welcome to our Shop, where you can browse our extensive collection of
          high-quality products from the comfort of your own home. We offer a
          wide range of products, including clothing, electronics, home goods,
          and more, at competitive prices that you won't find anywhere else.
        </p>
      </div>
      <div className="max-w-screen-xl mx-aut0">
        <ProductsCard />
      </div>
    </div>
  );
};

export default Products;
