import React, { useContext } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Register from './components/auth/register';
import Login from './components/auth/login';
import AuthContext from './context/authcontext';


import Slideshow from './components/slideshow';

import Navbar from './components/landing-page/Navbar/Navbar';
import Trektravel from './components/NavLinks/Trektravel/Trektravel';
import Transport from './components/NavLinks/Transport/Transport';
import About from './components/NavLinks/About/About';
import Hotels from './components/NavLinks/Hotels/Hotels';
import Golden from './components/NavLinks/Hotels/Golden';
import InfoPage from './components/NavLinks/Hotels/InforPage';
import Silver from './components/NavLinks/Hotels/Silver';
import Bronze from './components/NavLinks/Hotels/Bronze';
import Profile from './components/Genral/Profile';


function MyRouter() {

  const {loggedIn} = useContext(AuthContext);
  
    return (


        <Router>
            <Navbar />

            <Routes>

            <Route exact path='/' element={<Slideshow />} />
          <Route path="/hotels/golden" element={<Golden />} /> 
          <Route path="/hotels/silver" element={<Silver />} /> 
          <Route path="/hotels/bronze" element={<Bronze />} /> 
          <Route path="/hotels/" element={<Hotels />} />          
          <Route path="/hotels/:hotelId" element={<InfoPage />} /> 
          <Route path='/trektravel' element={<Trektravel />} />
          <Route path='/transport' element={<Transport />} />
          <Route path='/about' element={<About />} />
          
          { loggedIn === false && <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />     
            </>}
          { loggedIn === true && <>

          <Route path='/profile' element={<Profile />} />
            </>}
            
           

            
        </Routes></Router>
           
          );
}

export default MyRouter;
