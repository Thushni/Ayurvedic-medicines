import './App.css';

import Header from './components/Management/Header';
import AddProduct from './components/Management/AddProduct';
import AllProducts from './components/Management/AllProducts';
import Home from './components/Management/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UpdateProduct from './components/Management/UpdateProduct';
import ProductTable from './components/Management/ProductTable';
import Viewmore from './components/Management/ViewMore';
import ReportEvent from './components/Management/ReportEvent';
import Footer from './components/Management/Footer';



function App() {
  return (
    <Router>
      <div>
      <Header/>
      
        <Routes>
          
          <Route path= '/' element={<AllProducts/>} />
          <Route path='/addPRODUCT' element={<AddProduct/>} /> 
          <Route path='/Home' element={<Home/>} />
          <Route path='/allPRODUCT-table' element={<ProductTable/>} />
      
          <Route path='/updatePRODUCT/:id' element={<UpdateProduct/>} />
          <Route path='/reportEvent' element={<ReportEvent/>} />
          <Route path='/all-table/updatePRODUCT/:id' element={<UpdateProduct/>} />
          <Route path='/all-table/viewPRODUCT/:id' element={<Viewmore/>} />
         

          
        </Routes>
        
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
