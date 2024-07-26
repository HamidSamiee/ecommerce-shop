import { useParams } from "react-router-dom";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";


const ProductDetails = () => {

  const {id}=useParams();
// console.log(id)

  const {addToCart}=useCart();
  const {products}=useProducts();

  const product=products.find((product)=>product.id === parseInt(id))

  const {title,image,price,description}=product;

  if (!product) {
    return <div className="h-screen flex items-center justify-center">
      ... Loading
    </div>
  }

  return <section className="min-h-screen flex items-center justify-center">
   <div className="container xl:max-w-screen-xl">
          <div className="flex flex-col md:flex-row items-center justify-center px-4">
            {/* image */}
            <div className="flex-1 flex items-center justify-center mb-8 md:mb-0 ">
                <img src={image} alt={title} className="max-w-[200px] md:max-w-sm" />
            </div>
            {/* text */}
            <div className="flex-1  flex flex-col justify-center text-center md:text-left xs:text-xs sm:text-base">
                <h1 className=" mb-2 font-medium text-[26px] leading-8">
                  {title}
                </h1>
                <div className="text-xl mb-6 font-medium text-rose-400">
                  $ {price}
                </div>
                <p className="mb-8 text-justify">
                  {description}
                </p>
                <button onClick={()=>addToCart(product,product.id)} className=" md:self-start bg-primary text-white py-4 px-8">
                  add to cart
                </button>
            </div>
          </div>
   </div>
  </section>;
};

export default ProductDetails;
