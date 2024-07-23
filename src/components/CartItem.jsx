import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { toPersianDigitsWithComma } from "../utils/toPersianDigits";


const CartItem = (Props) => {

  const {item}=Props;
  const {id,title,image,price,amount}=item;

  return <section className="flex px-4 py-1 lg:px-6 ">

    <div className="w-full min-h-[150px] border-b border-gray-200 flex items-center gap-x-4">
      {/* image */}
      <Link to={`product/${id}`}>
             <img src={image} alt={title} className="max-w-[80px]" />
      </Link>
      {/* title,price,amount */}
      <div className="flex-1 flex flex-col gap-y-3">
        {/* title & close btn */}
        <div className=" w-full flex justify-between items-start">
           <Link to={`product/${id}`} >
             <h4 className=" w-4/5 line-clamp-2 overflow-hidden	text-ellipsis text-base font-medium ">
                {title}
             </h4>
           </Link>
           <button className="">
              <IoClose className=" text-gray-400 hover:text-rose-400" />
           </button>
        </div>
        <div className="w-full flex items-center justify-between gap-x-5">
          <div className="flex-1 flex  max-w-[100px] items-center h-full text-primary py-1 border border-gray-300">
            <button className="flex-1 h-full flex justify-center items-center">
                <IoMdRemove />
            </button>
            <div className="h-full flex justify-center items-center px-2">
              {amount}
            </div>
            <button className="flex-1 h-full flex justify-center items-center">
                <IoMdAdd />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-between">
              <div className="text-gray-500">
                  $ {toPersianDigitsWithComma(price)}
              </div>
              <div className="text-primary">
                $ {toPersianDigitsWithComma(price * amount)}
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default CartItem;
