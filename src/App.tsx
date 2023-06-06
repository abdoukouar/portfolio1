import React from 'react';

import './App.css';
import { Navbar } from './components/navbar';
import { Main } from './components/main';
import { AboutUs } from './components/aboutUs';
import { Appdev } from './components/Appdev';
import { Members } from './components/members';
import { Work } from './components/work';
import { Contact } from './components/contactUs';
import { Footer } from './components/footer';
import {Link} from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <AboutUs/>
      <Appdev/>
      <Members/>
      <Work/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
