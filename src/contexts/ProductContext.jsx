import { data } from "autoprefixer";
import { createContext, useContext, useEffect, useState } from "react";
// import { getProducts } from "../services/productServices";

const ProductsContext=createContext()

const ProductProvider = (Props) => {

  const {children}=Props;
  const [products, setProducts] = useState([])
  
 useEffect(()=>{
  const fetchProducts=async ()=>{
    const res=await fetch('https://fakestoreapi.com/products');
    const data=await res.json();
    setProducts(data)
  }
  fetchProducts();
 },[])

  return <ProductsContext.Provider value={{products}}>
              {
                children
              }
         </ProductsContext.Provider>;
};

export default ProductProvider;

export function useProducts(){
  return useContext(ProductsContext)
}