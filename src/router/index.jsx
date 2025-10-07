import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from '../pages/LandingPage';
import Dishes from '../components/Dishes';

const IndexRouter = ()=>{
    return(
    <Router>
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/dishes' element={< Dishes/>} />
        </Routes>
    </Router>
    )
}

export default IndexRouter;
