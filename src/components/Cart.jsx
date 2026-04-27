import { MdDeleteSweep } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveItem } from "../../redux/cart/cartslice"


export default function Cart({ isClose }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = cartItems.reduce((acc , item) => acc + item.price * item.Quan, 0 )  
  const dispatch = useDispatch()

  return (
    <div className={`${isClose ? "translate-x-full" : "translate-x-0"} bg-[#c4dbce] shadow-lg flex flex-col py-17 right-0 top-0 fixed gap-2 z-10 h-full  w-70  transition-all duration-500`}>


      <div className='flex flex-col gap-2 overflow-y-auto h-auto '>
        {cartItems.map((item) => (
          <div key={item.id} className='bg-olive-100/89 min-h-15 flex items-center justify-between px-3'>

            <img src={item.image} className='w-12 h-12 rounded-full' />
            <h3 className='text-sm truncate w-25'>{item.title}</h3>
            <span>${item.price}</span>

            <MdDeleteSweep className='text-2xl cursor-pointer hover:scale-105 hover:text-red-600 transition-all duration-300' onClick={() => dispatch(RemoveItem(item.id))} />
          </div>
        ))}
      </div>


      <div className='bg-olive-100 h-10 w-full fixed mb-17 bottom-0 flex items-center justify-between px-5'>
        total : <span>${total.toFixed(2)}</span>
      </div>
      <button className='flex  text-md text-white  fixed mb-5  bottom-0 left-[23%] px-10 shadow-white/30 rounded-tl-4xl rounded-br-4xl bg-green-600 shadow-md  py-1  w-auto hover:scale-95 transition-all duration-300 '>Checkout</button>

    </div>
  )
}
