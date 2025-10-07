import React from 'react'
import { useCafeContext} from '../context/cafeContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
const LandingPage = () => {

  const { cafe } = useCafeContext();
  const navigate = useNavigate();

  
 const handleClick = () =>{
    navigate('/dishes');
 }
 if(!cafe){ return(<p className='justify-center text-center text-amber-700'>Dishes loading ...</p>)}
 
 return (
    <>
      <div className="flex flex-col min-h-screen">
      <Navbar />

      <section className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10 bg-gray-50 flex-1">
        <div className="w-full md:w-1/2 flex justify-around">
          {cafe && (
            <div className="flex flex-col md:flex-row items-center md:items-start m-2 p-3 w-full max-w-4xl">
              <img
                src={cafe.restaurant_image}
                alt="Retro_cafe"
                className="w-full md:w-1/2 h-auto rounded-lg shadow-lg mb-4 md:mb-0"
              />
              <div className="flex flex-col justify-center text-center md:text-left m-2 md:ml-6 space-y-4 md:w-1/2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-teal-950 leading-tight">
                  Taste beyond the ordinary
                </h2>
                <button
                  onClick={handleClick}
                  className="rounded-lg h-12 w-40 bg-gray-800 text-white text-md font-bold mx-auto md:mx-0 hover:bg-gray-700 transition"
                >
                  Explore Now
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>

    </>
  )
}

export default LandingPage
