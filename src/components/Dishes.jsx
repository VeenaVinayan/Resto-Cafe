import  { useState, useEffect } from 'react'
import { useCafeContext  } from '../context/cafeContext';
import Navbar from './Navbar';

const Dishes = () => {
  const [selected, setSelected ] = useState();  
  const { cafe, cart, setCart }  = useCafeContext(); 
  const [itemQuantity , setItemQuantity] = useState({});

 useEffect(() => {
  if (cafe?.table_menu_list?.length > 0) {
    setSelected(cafe.table_menu_list[0]);
  }
}, [cafe]);
  const handleClick = (category)=>{
     setSelected(category)
  }
  const handleIncrement = (id) =>{
    setItemQuantity((prev) => ({...prev, [id] : (prev[id] || 0)+1}));
    if(cart >= 10) setCart((prev) => prev);
    else setCart((prev) => prev+1);
  }
  const handleDecrement = (id) =>{
    if(itemQuantity[id] >=1){ 
    setItemQuantity((prev) =>({...prev, [id]:prev[id] -1}));
    if(cart === 0) setCart(0);
    else setCart((prev) => prev-1);
    } 
  }
  if(!cafe) return(<p>Loading...</p>);

  return (
    <div className='min-h-screen bg-white'>
     <Navbar />    
      {cafe && (
      <div className='flex flex-col'>
       <div className='flex flex-row overflow-x-auto space-x-4 scrollable-hide bg-gray-50'>
       {
        cafe.table_menu_list.map((category) =>(
             <h2  key={category.menu_category_id} 
                  onClick={() => handleClick(category)}
                  className={`p-2 font-bold text-lg text-gray-600 border-b-2 whitespace-nowrap cursor-pointer ${(category.menu_category_id === selected?.menu_category_id) ? ' border-red-500 text-red-700':'border-transparent'}`}
                   >
                  {category.menu_category}
            </h2>
        ))}
        <br className='bg-gray-600 w-1'></br>
        </div>
        { selected && (
             <div className='space-x-4  md:flex-wrap md:justify-center'>
                 { selected.category_dishes.map((dish) =>(
                     <div key={dish.dish_id} className='flex flex-row p-2 m-2 border-b-2 border-gray-600 justify-between'>
                        <div className='flex flex-col'> 
                          <div>
                            <div className='flex flex-row  items-center'>
                                <div className={`w-2.5 h-2.5 border ${dish.dish_Type === 1 ? 'border-red-800' :'border-green-800'}`}>
                                  <div className={`rounded-full h-2 w-2 p-0.5 ${dish.dish_Type === 1 ? 'bg-red-800': 'bg-green-700'}`}> </div>
                                </div>
                                <h2 className='font-bold m-1'>{dish.dish_name}</h2>
                            </div>    
                 
                            <h4 className='font-medium ml-2'>{`${dish.dish_currency} ${dish.dish_price}`}</h4>
                            </div>
              
                          <p className="ml-0 md:ml-3 mt-1 text-sm sm:text-base md:text-sm line-clamp-3 md:line-clamp-6 break-words">
                                      {dish.dish_description}
                          </p>
                          <div className='bg-green-600  flex flex-row rounded-full h-8 w-32 ml-2 p-3 justify-between items-center'>
                                <button className='text-white cursor-pointer font-medium w-2' 
                                               disabled={!dish.dish_Availability}      
                                               onClick={()=>handleDecrement(dish.dish_id)}>-</button>
                                <p className='text-white font-medium p-1 m-1 w-2'>{itemQuantity[dish.dish_id] || 0}</p>
                                <button className='text-white p-1 m-1 font-medium w-2 cursor-pointer'  
                                        disabled={!dish.dish_Availability}
                                        onClick={() =>handleIncrement(dish.dish_id)}>+</button>
                            </div>    
                             { dish.addonCat.length>0 && (
                                <p className='text-red-800 font-light ml-2'>  Customization available</p>
                             )}
                             { !dish.dish_Availability && (
                                <p className='text-red-800 font-light ml-2'>Not avilable</p>
                             )}
                        </div>
                        <div className='flex flex-col sm:flex-row justify-between items-center mt-2 mr-2'>
                              <p className='font-bold'> {dish.dish_calories} Calories</p>
                              <img src={dish.dish_image} className='h-24 w-24 object-cover rounded-lg ml-2' alt={dish.dish_name}  />
                            </div>
                    </div>   
                 ))}
             </div>    
        )}
        </div>
      )}
    </div>
)}

export default Dishes
