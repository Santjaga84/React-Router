
import './App.css';
import Info from './pages/Info';
import Count from './pages/Count';
import Nav from './components/Nav';
import { Routes, Route, Link } from "react-router-dom";


function App() {

   
  return (
    <>
    
    {/* <div className='App'> */}
    <Routes>
     <Route path='/' element={<Nav />} >
      <Route index element={<Count />} />
      <Route path='/info' element={ <Info /> } />
     </Route> 
    </Routes>
     
    {/* </div> */}
    </>
  );
            
}

export default App;
