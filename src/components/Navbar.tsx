import { ShoppingCart } from 'lucide-react';
import { useCafeContext  } from '../context/cafeContext';

const Navbar = () => {
  const { cafe,cart } = useCafeContext();  
  return (
    <>
     <nav className="flex justify-between items-center p-3 md:p-4 bg-white shadow-md">
       <div className="m-1 md:m-2">
          <h2 className="font-bold text-gray-700 text-xl sm:text-2xl truncate max-w-[160px] sm:max-w-none">
            {cafe?.restaurant_name || "Cafe"}
          </h2>
        </div>
        <div className="flex items-center gap-2 relative m-1 md:m-2">
          <h4 className="text-sm sm:text-md font-medium text-gray-500 hidden sm:block">
            My Orders
          </h4>
          <div className="relative">
            <ShoppingCart size={24} color="gray" />
            {cart > 0 && (
              <span className="bg-red-500 text-white font-semibold text-xs rounded-full px-1.5 py-0.5 absolute -top-1 -right-2">
                {cart}
              </span>
            )}
          </div>
        </div>
    </nav>
   </>
  )
}

export default Navbar
