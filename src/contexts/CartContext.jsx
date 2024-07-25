import { createContext, useEffect, useState } from "react";

export const CartContext=createContext();

const CartProvider = (Props) => {

  const {children}=Props;
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const total=cart.reduce((acc,curr)=>{
        return acc + curr.price * curr.amount
    }, 0)
    setTotal(total)
  }, [total,cart])
  


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

  const removeFromCart=(id)=>{

    const newCart=cart.filter((item)=>{
      return item.id !== id
    })
      setCart(newCart)
    

  }

  const addCountproducts=(id)=>{

    const product=cart.find((item)=>item.id === id);

    addToCart(product,id);
  }


  const removeCountproducts=(id)=>{

    // const updatedCart = [...cart];
    // const index=updatedCart.findIndex((item)=>item.id === id);
    // const updatedItem = { ...updatedCart[index] };

    // if(updatedItem.amount === 1){
    //   const filteredItem=updatedCart.filter(
    //     (item)=>item.id !== id
    //   )
    //   setCart(filteredItem) 
    // }else{
    //   updatedItem.amount--;
    //   updatedCart[index]=updatedItem;
    //   setCart(updatedCart) 
    // }
    
    const cartItem=cart.find((item)=>item.id === id);

    if(cartItem){
      const newCart=cart.map((item)=>{
        if(item.id === id)
           return {...item, amount:cartItem.amount-1} 
        return item    
    })
    setCart(newCart)
    }
    if(cartItem.amount < 2)
      removeFromCart(id)

  }

  const removeCart=()=>{
    setCart([])
  }


// console.log(cart)

  return <CartContext.Provider value={{cart,setCart,addToCart,removeFromCart,removeCountproducts,addCountproducts,removeCart,total}}>
    {children}
  </CartContext.Provider>;
};

export default CartProvider;
