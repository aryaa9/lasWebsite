// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Analytics from './components/Home';
import Footer from './components/Footer';
import Events from './components/Events';
import MeetTheTeam from './components/MeetTheTeam';

function App() {
  return (
    <div>
      <Navbar/>
      <div className="main-content">
        <Analytics/>
        <Events/>
      
      <MeetTheTeam />
      </div>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
