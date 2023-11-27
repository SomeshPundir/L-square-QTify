import './App.css';
// import Hero from './components/heroImage/heroimage.jsx';
import Navbar from './components/navbar/navbar';
// import Card from './components/card/card.jsx';
import { fetchNewAlbums, fetchTopAlbums } from './components/api/api.jsx';
// import FAQSection from './components/faqsection/faqsection.jsx';
import {StyledEngineProvider, styledEngineProvider} from '@mui/material';
// import SliderComponent from './components/slider/slider.jsx'
// import Carousel from './components/Carousel.jsx';
import {Outlet} from 'react-router-dom';
import { useEffect, useState } from 'react';
function App() {

  const [data,setData]=useState({
       topAlbums:"",
       newAlbums:""
  }); 
  const generateData = async (key, source) => {
    try {
      const theData = await source();
      setData((prevState) => {
        console.log(theData);
        return { ...prevState, [key]: theData };
      });
    } catch (error) {
      console.error(`Error fetching ${key} data:`, error);
    }
  };

  useEffect(()=>{
    generateData("topAlbums",fetchTopAlbums);
    generateData("newAlbums",fetchNewAlbums);
  },[]);
  
  const {topAlbums=[],newAlbums=[]}=data;
  return (
    <div className="App">
     <StyledEngineProvider>
     <Navbar/>
     <Outlet context={{data:{topAlbums,newAlbums}}}/>
     </StyledEngineProvider>
    </div>
  );
}

export default App;
