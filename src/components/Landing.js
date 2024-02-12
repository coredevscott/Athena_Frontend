import * as React from 'react'
import '../css/athena.css'
import '../css/animations.css';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from './Dashboard/Navbar';
import Main from './Dashboard/Main';
import Supply from './Dashboard/Supply';
import Markets from './Dashboard/Markets';
import axios from 'axios';

function Landing () {
    return (
      <div className="App">
        <div className='relative w-full h-full body'>
          <Navbar />
          <Main />
          <Supply />
          <Markets />
        </div>
      </div>
    );
}

export default Landing;
