import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../redux/swiftSlice";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const userInfo = useSelector((state) => state.swift.userInfo);
  const productData = useSelector((state) => state.swift.productData);
  const [payNow, setPayNow] = useState(false);
  const [totalAmt, setTotalAmt] = useState("");
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(4));
  }, [productData]);

  const dispatch = useDispatch();

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to Checkout!");
    }
  };
  return (
    <div>
      <div className='m-4 p-6 flex 2xl:flex-row xl:flex-col lg:flex-col max-[639px]:flex-col md:flex-col sm:flex-col justify-between'>
        <div className='basis-1/2 mb-6 mt-6'>
          <CartItem />
        </div>
        <div className='2xl:w-[30%] xl:w-[60%] lg:w-[60%] md:[70%] sm:w-[100%] bg-slate-100 py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className='text-2xl font-medium'>Carts Total</h2>
            <p className='flex items-center gap-4 text-base'>
              Subtotal
              <span className='font-titleFont font-bold text-lg'>
                {" "}
                ${totalAmt}
              </span>
            </p>
            <p className='flex items-center gap-4 text-base'>
              Shipping
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elite.
              </span>
            </p>
          </div>
          <p className='font-titleFont font-semibold flex justify-between mt-6'>
            Total <span className='text-xl font-bold'>${totalAmt}</span>
          </p>
          <button
            onClick={handleCheckout}
            className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-100'
          >
            Proceed to checkout
          </button>
          {payNow && (
            <div className='w-full mt-6 flex items-center justify-center'>
              <StripeCheckout
                stripeKey='pk_test_51N5ZPFDsla8seMEp8VkI7Yp4b22kcLqtu4iFKrL8WV3IiAQHkCjerBWrk9G4wbE9j9GN7XPzxR5Tu0XisQXFWOUM00i8R3wqyl'
                name='Swift Store'
                amount={totalAmt * 100}
                label='Pay to Swift Store'
                description={`Your total amount is $${totalAmt}`}
                // token={payment}
                email={userInfo.email}
              />
            </div>
          )}
        </div>
      </div>
      <button
        onClick={() =>
          dispatch(resetCart()) && toast.error("your Cart is Empty!")
        }
        className='bg-red-500 text-white mb-4 ml-12 py-1 px-6 hover:bg-red-800'
      >
        Reset Cart
      </button>
      <Link to='/'>
        <button className='mb-16 ml-12 flex items-center gap-1 text-gray-400 hover:text-black duratoin-300'>
          <span>
            <HiOutlineArrowLeft />
          </span>
          go shopping
        </button>
      </Link>
      <ToastContainer
        position='top-left'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  );
};

export default Cart;
