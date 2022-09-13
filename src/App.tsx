import React from 'react';
import './App.css';
import About from './components/about';
import FAQ from './components/faq';
import Footer from './components/footer';
import Header from './components/header';
import Headlines from './components/headlines';
import Pricing from './components/pricing';
import Refer from './components/refer';
import Review from './components/review';
import Whyus from './components/why-us';

function App() {
  return (
    <div className="App">
      <Header/>
      <Headlines/>
      <Review/>
      <About/>
      <Pricing/>
      <Whyus/>
      <FAQ/>
      <Refer/>
      <Footer/>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
    </div>
  );
}

export default App;
