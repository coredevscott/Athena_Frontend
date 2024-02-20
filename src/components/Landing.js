import * as React from 'react'
import '../css/athena.css'
import '../css/animations.css';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from './Landing/Navbar';
import Main from './Landing/Main';
import Supply from './Landing/Supply';
import Outlook from './Landing/Outlook';
import Markets from './Landing/Markets';
import Howwork from './Landing/Howwork';
import About from './Landing/About';
import Tokenomics from './Landing/Tokenomics';
import Footer from './Landing/Footer';
import axios from 'axios';

function Landing () {
    return (
      <div className="App">
        <div className='relative w-full h-full body'>
          <Navbar />
          <Main />
          <Supply />
          <Outlook />
          <Markets />
          <Howwork />
          <About />
          <Tokenomics />
          <Footer />
        </div>
      </div>
    );
}

export default Landing;
