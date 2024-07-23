import { createContext, useState } from "react";

export const CartContext=createContext();

const CartProvider = (Props) => {

  const {children}=Props;
  const [cart, setCart] = useState([])

  const addToCart=(product,id)=>{

    // console.log(product,id)

    const newItem={...product,amount:1};

    const cartItem=cart.find((item)=>item.id === id);

    if(cartItem){
      const newCart=[...cart].map(item=>{
        if(item.id === id)
          return {...item,amount:cartItem.amount+1}
        return item
      })
      setCart(newCart)
    }else{
      setCart([...cart,newItem])
    }
    
  }
console.log(cart)
  return <CartContext.Provider value={{cart,setCart,addToCart}}>
    {children}
  </CartContext.Provider>;
};

export default CartProvider;
