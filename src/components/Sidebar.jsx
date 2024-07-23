import {  IoMdArrowForward } from 'react-icons/io';
import useSidebar from '../hooks/useSidebar'
import useCart from '../hooks/useCart';
import {toPersianDigits} from '../utils/toPersianDigits'
import CartItem from './CartItem'

const Sidebar = () => {

  const {isOpen,handleClose}=useSidebar();
  const {cart}=useCart();

  return <section className="container xl:max-w-screen-xl">
    <div className={` ${isOpen ? 'right-0': '-right-full'} fixed top-0 w-full h-full shadow-md bg-white  md:w-[35vw] lg:w-[40vw] transition-all duration-300 z-20 ease-linear`} >

        <div className="w-full max-h-fit shadow-2xl  p-4  flex items-center justify-between">
            <div className="">
                      <p className="">سبد خرید ({ toPersianDigits(cart?.length || 0)})</p>
            </div>
            <button onClick={handleClose} className="w-12 h-12 flex items-center justify-center">
              <IoMdArrowForward className='' />
            </button>
        </div>
        <div className="overflow-y-auto ">
          {
            cart?.map((item)=>{
              return <CartItem item={item} key={item.id}/>
            })
          }
        </div>
    </div>
  </section>
};

export default Sidebar;
