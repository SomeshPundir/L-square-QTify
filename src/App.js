import './App.css';
import Hero from './components/heroImage/heroimage.jsx';
import Navbar from './components/navbar/navbar';
import Card from './components/card/card.jsx';
// import FAQSection from './components/faqsection/faqsection.jsx';
import AccordionComponent from './components/accordian/Accordian.jsx';
function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Hero/> */}
      {/* <Card/> */}
      {/* <FAQSection/> */}
      <AccordionComponent />
    </div>
  );
}

export default App;
