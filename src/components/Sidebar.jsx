import {  IoMdArrowForward, IoMdTrash } from 'react-icons/io';
import useSidebar from '../hooks/useSidebar'
import useCart from '../hooks/useCart';
// import {toPersianDigits} from '../utils/toPersianDigits'
import CartItem from './CartItem'

const Sidebar = () => {

  const {isOpen,handleClose}=useSidebar();
  const {cart,removeCart,total}=useCart();

  return <section className=" container xl:max-w-screen-xl">
    <div className={` ${isOpen ? 'right-0': '-right-full'} font-light fixed top-0 w-full h-full overflow-y-auto shadow-md bg-white  md:w-[35vw] lg:w-[40vw] transition-all duration-300 z-20 ease-linear`} >

        <div className="sticky top-0 right-0 bg-white w-full max-h-fit shadow-2xl  p-4 z-30 flex items-center justify-between">
            <div className="">
                      <p className="">سبد خرید ({ cart?.length || 0})</p>
            </div>
            <button onClick={handleClose} className="w-12 h-12 flex items-center justify-center">
              <IoMdArrowForward className='' />
            </button>
        </div>
        <div className="h-3/5 overflow-y-auto ">
          {
            cart?.map((item)=>{
              return <CartItem item={item} key={item.id}/>
            })
          }
          
        </div>
        <div className=" bg-white   px-4   ">
              <div className="flex items-center justify-between w-full py-6 border-t-4">
                  <div className="">
                    <span className="text-primary font-semibold"> total : $ {total}</span>
                  </div>
                  <button onClick={removeCart} className="p-2">
                    <IoMdTrash className='text-rose-500 w-4 h-4 md:w-6 md:h-6' />
                  </button>
              </div>
        </div>
    </div>
  </section>
};

export default Sidebar;
