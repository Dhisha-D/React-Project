import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Loginpage from './components/Loginpage'
import MainPage from './components/MainPage';




function App() {
  return (
   
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<MainPage/>}></Route>
    <Route path='/login' element={<Loginpage/>}></Route>
   </Routes>
   </BrowserRouter>
   
  )
  
}

export default App;