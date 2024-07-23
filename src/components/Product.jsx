import { FaEye } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

const Product = (Props) => {

  const {product}=Props;
  const {id,title,price,image,category}=product;

  const {addToCart}=useCart();

  return( 
  <div className="">
      <div  className="relative overflow-hidden group transition-all  border border-[#e4e4e4] w-full h-[300px] mb-4" >
   
          <div className="w-full h-full flex items-center justify-center">
              {/* {image} */}
                  <div className="w-[200px] mx-auto flex items-center justify-center">
                    <img src={image} alt={category} className="max-h-[160px] group-hover:scale-110 transition duration-300 " />
                  </div>
          </div>
        {/* {buttons} */}
          <div className="absolute top-6 -right-12 group-hover:right-5  flex flex-col gap-y-2 justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
                    <button
                      onClick={()=>addToCart(product,id)}
                      className="bg-rose-400 text-white flex items-center justify-center w-12 h-12"
                    >
                        <FaPlus className="text-xl"/>
                    </button> 
                    <Link to={`product/${id}`} className="flex  items-center justify-center w-12 h-12 bg-white shadow-2xl" >
                        <FaEye className=" text-xl" />
                    </Link> 
          </div>   
      </div>
      {/* category, title , price */}
      <div className="flex flex-col gap-y-2">
         <div className="text-sm capitalize text-gray-500 ">
                {category}
         </div>
         <Link to={`product/${id}`}>
              <h2 className="font-bold">
                {title}
              </h2>
         </Link>
         <div className="font-semibold">
                $ {price}
         </div>
      </div>
  </div>
)};

export default Product;
