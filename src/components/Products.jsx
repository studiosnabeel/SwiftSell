import React from 'react';
import ProductsCard from './ProductsCard';

const Products = ({ products }) => {
  // console.log(products);
  return (
    <div className="py-10">
      <div className="flex flex-col items-center justify-center gap-4">
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
      <div className="max-w-screen-xl mx-auto py-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-10 ">
        {products.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
