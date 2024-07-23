import { BsBag } from "react-icons/bs";
import useSidebar from "../hooks/useSidebar";


const Header = () => {

  const {isOpen,setIsOpen}= useSidebar();

  return <header className="bg-pink-300">
    <div className="">header</div>
    <button onClick={()=>setIsOpen(!isOpen)} className="">
        <BsBag className="text-2xl"/>
    </button>
  </header>;
};

export default Header;
