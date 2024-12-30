import './App.css';
import {BrowserRouter, Link,Routes,Route} from 'react-router-dom';
import { Suspense,lazy } from 'react';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';

const Homepage =  lazy(() => import('./Home'));
const Aboutpage =  lazy(() => import('./About'));
const Contactpage =  lazy(() => import('./Contact'));

function RoutingRoutes(){
  return(
    <>
    <p> <Link to="/">  Home </Link>   </p>
    <p> <Link to="/about"> About </Link>   </p>
    <p> <Link to="/contact"> Contact </Link>  </p>
    </>
    
  )
}


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <RoutingRoutes />
      <Suspense>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage/>} />
            <Route path="/contact" element={<Contactpage />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;