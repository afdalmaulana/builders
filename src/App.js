import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Route, Routes } from 'react-router-dom';
import { Contacts } from './components/Pages/Contacts';
import { AboutPage } from './components/Pages/AboutPages';
import { Footer } from './components/Footer';
import { Portfolio } from './components/Pages/Portfolio';
import { Client } from './components/Pages/Client';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contacts/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/client' element={<Client/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
