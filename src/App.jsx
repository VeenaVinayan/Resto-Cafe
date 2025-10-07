import IndexRouter from "./router"
import DishesProvider from './context/cafeContext';
function App() {

  return (
    <>
      <DishesProvider>
          <IndexRouter /> 
       </DishesProvider> 
    </>
  )
}

export default App
