import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signgin from './Components/Pages/Signin.jsx';
import Signup from './Components/Pages/Signup.jsx';
import Home from './Components/Home/Home.jsx'
import Navbar from './Components/Navbar/Navbar.jsx';
import IndividualIntervalsExample from './Components/Carousel/Carousel.jsx';
import Card from './Components/Card/Card.jsx';
import Footer from './Components/Footer/Footer.jsx';


const App = () => {
  return (
    <div>
      <Navbar />
      <IndividualIntervalsExample />
      <Card />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Signin' element={<Signgin />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
