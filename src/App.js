import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Loginpage from './components/LoginPage';
import SignUp from './components/SignUp';
import Nav from './components/Nav';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import LivingHall from './components/LivingHall';
import Kitchen from './components/Kitchen';
import Bedroom from './components/Bedroom';
import Bathroom from './components/Bathroom';
import Patio from './components/Patio';
import Terrace from './components/Terrace';
import PlayArea from './components/PlayArea';
import Kids from './components/Kids';
import Gym from './components/Gym';
import Garden from './components/Garden';
import Garage from './components/Garage';
import Pool from './components/Pool';
import Study from './components/Study';
function App() {
  return (
    <div>
    <BrowserRouter>
        <Nav/>
      <Routes>
      <Route path='/' element={<MainPage/>}></Route>
      <Route path='/login' element={<Loginpage/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/living' element={<LivingHall/>}></Route>
      <Route path='/kitchen' element={<Kitchen/>}></Route>
      <Route path='/bedroom' element={<Bedroom/>}></Route>
      <Route path='/bathroom' element={<Bathroom/>}></Route>
      <Route path='/patio' element={<Patio/>}></Route>
      <Route path='/terrace' element={<Terrace/>}></Route>
      <Route path='/playarea' element={<PlayArea/>}></Route>
      <Route path='/kids' element={<Kids/>}></Route>
      <Route path='/gym' element={<Gym/>}></Route>
      <Route path='/garden' element={<Garden/>}></Route>
      <Route path='/garage' element={<Garage/>}></Route>
      <Route path='/pool' element={<Pool/>}></Route>
      <Route path='/study' element={<Study/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </div>
   
  )
  
}
export default App;