import Slideshow from './components/slideshow';
// import Frontpage from './components/landing-page/frontpage';

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './components/landing-page/Navbar/Navbar';
import HolidayPack from './components/NavLinks/HolidayPack/Holiday';
import Transport from './components/NavLinks/Transport/Transport';
import About from './components/NavLinks/About/About';
import Hotels from './components/NavLinks/Hotels/Hotels';
import Golden from './components/NavLinks/Hotels/Golden';
import InfoPage from './components/NavLinks/Hotels/InforPage';
import Silver from './components/NavLinks/Hotels/Silver';
import Bronze from './components/NavLinks/Hotels/Bronze';

function App() {
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
          <Route exact path='/holidayPackage' element={<HolidayPack />} />
          <Route exact path='/transport' element={<Transport />} />
          <Route exact path='/about' element={<About />} />

   </Routes>   
</Router>
   
  );
}

export default App;