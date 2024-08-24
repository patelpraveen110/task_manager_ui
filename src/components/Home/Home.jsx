import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
  return (
    <div className='lg:flex px-5 lg:px-20 pt-[2.9vh]'>
      <div className='hidden lg:block w-[25vw] relative'>
        <Sidebar></Sidebar>
      </div>
      <div className='rigth-side-part'>

      </div>
    </div>
  );
}

export default Home;
