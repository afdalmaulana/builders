import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Route, Routes } from 'react-router-dom';
import { Contacts } from './components/Pages/Contacts';
import { Projects } from './components/Pages/Projects';
import { AboutPage } from './components/Pages/AboutPages';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contacts/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/project' element={<Projects/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
