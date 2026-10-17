import {Routes , Route} from 'react-router-dom'
import  Welcome from './components/Wlecome';
import Pageinfo from './components/pageinfo';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

import Loginpage2 from './components/Loginpage2'
import LoginPage3 from './components/LoginPage3'
import UserDetailPage from './components/UserDetailPage'
import Myproject from './components/Myproject'


function App() {
  return(
    <div>
     <Myproject />

      
      

      <Routes>
         {/* <Route path="/" element={<Welcome />} /> */}
        <Route path="/about" element={<Pageinfo/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  )
}
export default App
