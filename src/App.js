import React from 'react';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Analytics from './components/Home';
import Footer from './components/Footer';
import Events from './components/Events';

function App() {
  return (
    <div>
      <Navbar/>
      <Analytics/>
      <Events/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
