import useProducts from "../hooks/useProducts";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {

  const {products}=useProducts();

  const filteredProducts=products.filter(item=>item.category === "men's clothing" || item.category ==="women's clothing")

  // console.log(filteredProducts)

  return <section className=" ">
              <Hero />  
              <div className=" container xl:max-w-screen-xl py-16 px-4">
                 <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                        {
                          filteredProducts?.map((product)=>{
                            return <Product product={product} key={product.id} />
                             
                          })
                        }
                 </div>
              </div>
         </section>;
};

export default Home;
