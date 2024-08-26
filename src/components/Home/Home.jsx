import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import TaskList from './TaskList/TaskList';

const Home = () => {
  return (
    <div className='lg:flex px-5 lg:px-20 pt-[2.9vh]'>
      <div className='hidden lg:block w-[25vw] relative mr-12'>
        <Sidebar></Sidebar>
      </div>
      <div className='rigth-side-part w-full flex justify-center mb-10'>
        <TaskList/>
      </div>
    </div>
  );
}
  
export default Home;
