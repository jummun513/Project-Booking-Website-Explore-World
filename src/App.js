import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/Pages/NotFound/NotFound';
import Home from './components/Pages/PublicPages/Home/Home';
import Destinations from './components/Pages/PublicPages/Destinations/Destinations';
import Blogs from './components/Pages/PublicPages/Blogs/Blogs';
import About from './components/Pages/PublicPages/About/About';
import Hotels from './components/Pages/PublicPages/Hotels/Hotels';
import Tours from './components/Pages/PublicPages/Tours/Tours';
import data from './data/destinationsData.json';
import { createContext } from 'react';

export const destinationContext = createContext([]);

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<destinationContext.Provider value={data.data}><Home></Home></destinationContext.Provider>}></Route>
        <Route path='/destinations' element={<destinationContext.Provider value={data}><Destinations></Destinations></destinationContext.Provider>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/hotels' element={<Hotels></Hotels>}></Route>
        <Route path='/tours' element={<Tours></Tours>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
