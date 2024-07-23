import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductContext";

export default function useProducts(){
    return useContext(ProductsContext)
  }