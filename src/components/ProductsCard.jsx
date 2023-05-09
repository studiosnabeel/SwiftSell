import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/swiftSlice';
import { ToastContainer, toast } from 'react-toastify';

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = product.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(' ').join('');
  };
  const rootId = idString(_id);
  // console.log(rootId);
  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };
  // console.log(product);
  return (
    <div className="group relative">
      <div
        onClick={handleDetails}
        className="w-full h-96 cursor-pointer overflow-hidden "
      >
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={product.image}
          alt="ProductImg"
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[100%] flex justify-center">
            <h6 className="font-titleFont text-[15px] font-bold">
              {product.title.substring(0, 20)}
            </h6>
          </div>
          <div className="flex justify-center gap-2 relative overflow-hidden w-28 text-sm">
            <div className="text-[16px] relative w-[100%] flex justify-center gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              <p className="line-through text-gray-500 ">{product.oldPrice}</p>
              <p className="font-semibold">{product.price}</p>
            </div>
            <p
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: product._id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                  })
                ) && toast.success(`${product.title} added to cart`)
              }
              className="text-[14px] font-bold absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex justify-center items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-tranform cursor-pointer duration-500"
            >
              add to cart{' '}
              <span>
                <BsArrowRight />
              </span>
            </p>
          </div>
        </div>
        <div>
          <p className="text-center text-sm font-semibold text-secondary">
            {product.category}
          </p>
        </div>
        <div className="absolute right-0 top-2">
          {product.isNew && (
            <p className="bg-black text-white font-semibold font-titleFont px-4 py-0">
              Sale
            </p>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default ProductsCard;
