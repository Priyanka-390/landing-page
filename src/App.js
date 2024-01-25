
import './App.css';
import Mynav from './components/Mynav';
import Preloader from './components/Preloader';
import Homepage from './pages/Homepage';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

document.body.classList.add("overflow-hidden")
function App() {
   useEffect(() => {
    AOS.init(
      {
         once: true,
         duration:2000,
      }
        );
      }, [])
   const [preloader, setpreloader] = useState(true)
  setTimeout(() => {
    setpreloader(false)
    document.body.classList.remove("overflow-hidden")
  }, 3000);
  return (
 
    <div className="App">
           {preloader&& <Preloader/>}
      <Mynav />
      <Homepage/>
    </div>
  );
}

export default App;
