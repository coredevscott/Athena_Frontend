import * as React from 'react'
import '../css/athena.css'
import '../css/animations.css';

import Sidebar from './Dashboard/Sidebar';
import Navbar from './Dashboard/Navbar';
import Main from './Market/Main';
import Footer from './Landing/Footer';

function Market () {
    return (
      <div className="App">
        <div className='relative w-full h-full body'>
          <div className='absolute top-0 left-0 w-full h-full bg-[#011710]'></div>
          <div className='flex flex-row'>
            <Sidebar />
            <div className='flex flex-col w-full'>
              <Navbar />
              <Main />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
}

export default Market;
