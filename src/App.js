import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import DetailProduct from './components/LipsDetailProduct';
import LipsDetailPage from './components/LipsDetailPage';
import FaceDetailPage from './components/FaceDetailPage';
import CheeksDetailPage from './components/CheeksDetailPage';
import EyesDetailPage from './components/EyesDetailPage';
import RegisterPage from './components/RegisterPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<RegisterPage />}/>
      <Route path='/Login' element={<LoginPage />}/>
      <Route path='/Home' element={<HomePage />} />
      <Route path='/About/Us' element={<AboutUs />} />
      <Route path='/Lips/Detail' element={<LipsDetailPage />} />
      <Route path='/Face/Detail' element={<FaceDetailPage />} />
      <Route path='/Cheeks/Detail' element={<CheeksDetailPage />} />
      <Route path='/Eyes/Detail' element={<EyesDetailPage />} />
      <Route path='/Detail/:id' exact element={<DetailProduct />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
