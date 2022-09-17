// import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Works from "./components/Works";
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';

import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
  
function App() {
  return (
    <>
    <Header />
          <Routes>

    <Route exact path='/' element={< Home />}></Route>
    <Route exact path='/Works' element={< Works />}></Route>
    <Route exact path='/AboutMe' element={< AboutMe />}></Route>
    <Route exact path='/Contact' element={< Contact />}></Route>
    <Route exact path='/Skills' element={< Skills />}></Route>
   
          </Routes>

    </>
  );
}

export default App;
