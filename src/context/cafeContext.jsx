import { createContext, useState, useContext, useEffect  } from "react";
import { fetchCafeData } from '../services/cafeService';
const CafeContext = createContext(null);

export const useCafeContext = () => useContext(CafeContext);

const DishesProvider = ({children}) =>{
    const [ cafe , setCafe] = useState(null);
    const [cart, setCart] = useState(0);
    const [myOrders, setMyOrders] = useState(null);

    useEffect(() =>{
         fetchDishes();
    },[]);

    const fetchDishes = async() =>{
      try{  
         const cafeData = await fetchCafeData();
         if(cafeData){
            setCafe(cafeData.data[0]);
        }
       }catch(err){
        console.log("Error ::",err);
    } 
    }
    return(
        <CafeContext.Provider value={{ cafe, cart, setCafe, myOrders, setMyOrders, setCart, fetchDishes}}>
            { children }
        </CafeContext.Provider>
    )
};

export default DishesProvider;
