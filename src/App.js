import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import NewsFirst from './components/NewsFirst';
import NewsSecond from './components/NewsSecond';
import Fqa from './components/Fqa';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
    <div className="flex flex-col flex-1">
        <Navbar/>
        <Hero/>
        <NewsFirst/>
        <NewsSecond/>
        <Fqa/>
    </div>
    <Footer/>
</div>

  );
}

export default App;
