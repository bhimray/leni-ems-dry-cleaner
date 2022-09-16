import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/about';
import FAQ from './components/faq';
import Footer from './components/footer';
import Header from './components/header';
import Headlines from './components/headlines';
import Pricing from './components/pricing';
import Review from './components/review';
import Whyus from './components/why-us';
  
function App() {

  const [underline, setUnderline] = React.useState(false)

  React.useEffect(()=>{
    if (window.innerWidth<=600){
      // console.log(window.innerWidth)
      setUnderline(true);
    } else{
      setUnderline(false);
    }
  },[])
  console.log("app underline", underline)

  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="/headlines" element={ <Headlines/>}/>
        <Route path="/review" element={<Review/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/whyus" element={<Whyus/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/footer" element={<Footer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
