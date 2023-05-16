import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineClose } from 'react-icons/md';
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
} from '../redux/swiftSlice';
import { ToastContainer, toast } from 'react-toastify';

const CartItem = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.swift.productData);

  return (
    <div className="w-[60%] pr-10">
      <div className="w-full ">
        <h2 className="font-titleFont text-xl">shopping cart</h2>
      </div>
      <div className='flex-wrap'>
        {productData.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between gap-6 mt-6"
          >
            <div className='flex max-[850px]:flex-col gap-6'>
            <div className="w-[70%] flex items-center justify-center gap-2">
            <div className='flex justify-center items-center gap-2'>
              <div
                className="text-base text-gray-600 hover:text-red-600 cursor-pointer duration-300
              "
              >
                
                <MdOutlineClose
                  onClick={() =>
                    dispatch(deleteItem(item._id)) &&
                    toast.error(`${item.title} is removed`)
                  }
                />
              </div>
              <div className="w-24">
                <img
                  className="w-24 h-24 object-cover"
                  src={item.image}
                  alt="productImg"
                />
              </div>
            </div>
            <h2 className="text-sm w-52 text-center">{item.title}</h2>
            <p className="w-10">${item.price}</p>
            </div>
            <div className="w-[30%] flex gap-4 items-center">
              <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
                <p className="text-sm">Quantity</p>
                <div className="flex items-center gap-4 text-sm font-semibold">
                  <button
                    onClick={() =>
                      dispatch(
                        decrementQuantity({
                          _id: item._id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          quantity: 1,
                          description: item.description,
                        })
                      )
                    }
                    className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor pointer duration-300 active:bg-black"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(
                        incrementQuantity({
                          _id: item._id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          quantity: 1,
                          description: item.description,
                        })
                      )
                    }
                    className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor pointer duration-300 active:bg-black"
                  >
                    +
                  </button>
                </div>
              </div>
            <p className="w-14 mx-4">${item.quantity * item.price}</p>
            </div>   
            </div>

           
          </div>
        ))}
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

export default CartItem;
