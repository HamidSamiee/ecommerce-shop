
import { createContext, useEffect, useState } from "react";
import { getProducts } from "../services/productServices";
// import { getProducts } from "../services/productServices";

export const ProductsContext=createContext()

const ProductProvider = (Props) => {

  const {children}=Props;
  const [products, setProducts] = useState([])

  const fetchProducts=async ()=>{
    const data=await getProducts();
    setProducts(data)
  }

 useEffect(()=>{

  // const fetchProducts=async ()=>{
  //   const res=await fetch('https://fakestoreapi.com/products');
  //   const data=await res.json();
  //   setProducts(data)
  // }
  
  fetchProducts();
 },[])

// console.log(products)
  return <ProductsContext.Provider value={{products}}>
              {
                children
              }
         </ProductsContext.Provider>;
};

export default ProductProvider;

