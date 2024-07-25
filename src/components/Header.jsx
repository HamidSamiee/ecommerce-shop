import { BsBag } from "react-icons/bs";
import useSidebar from "../hooks/useSidebar";
import useCart from "../hooks/useCart";
import { Link } from "react-router-dom";
import logo from '../assets/img/logo.svg'
import { useEffect, useState } from "react";

const Header = () => {

  const {isOpen,setIsOpen}= useSidebar();
  const {cart}=useCart();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll',()=>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  }, [])
  

  return <header className={` z-10 fixed top-0 left-0 right-0  ${isActive ? "bg-white py-4 shadow-xl" : "bg-none py-6"} w-full z-10 transition-all  px-2 `}>
    <div className="container xl:max-w-screen-xl flex items-center justify-between">
            
            <button onClick={()=>setIsOpen(!isOpen)} className="relative ">
                <BsBag className="text-2xl"/>
                <div className=" absolute -bottom-1 -right-1 w-4 h-4 text-white bg-rose-500 rounded-full ">
                  <span className="absolute -bottom-2.5 right-0 -translate-x-1 -translate-y-1/2 text-xs ">
                      {cart.length}
                  </span>
                </div>
            </button>
            <h2 className="font-bold">
                      فروشگاه اینترنتی گراد 
            </h2>
            <div className="">
              <Link to="/">
                    <img src={logo} alt="logo" className="w-[40px]" />
              </Link>
            </div>
            
    </div>
  </header>;
};

export default Header;
