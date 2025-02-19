import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import CreateBlog from './components/CreateBlog';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <div className="bg-dark text-center py-2 shadow-lg">
        <h1 className="text-white">React & Laravel Blog App</h1>
      </div>

      <Routes>
          <Route path='/' element={ <Blogs/> }/>
          <Route path='/contact' element={ <Contact/> }/>
          <Route path='/create' element={ <CreateBlog/> }></Route>
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
