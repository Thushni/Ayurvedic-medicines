import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import './All.css'




function ProductTable() {

    const [products, setProducts] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() => {
        function getProducts() {
            axios.get("http://localhost:8070/product/").then((res) => {
                setProducts(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getProducts();
    }, [products])


    const deleteProduct = (id) =>{
        // alert(id)
        var answer = window.confirm("Are you sure")

if(answer){
    axios.delete("http://localhost:8070/product/delete/"+id).then((res)=>{
            if(res.status===200){
                alert("Product deleted")
                // getEvents()
            }
        })
}    }

//search

useEffect(() => {
    setFilteredResults(

       products.filter((e) => {
        return e.pCode,e.pName.toLowerCase().includes(searchInput.toLowerCase())
        })
    )
  }, [searchInput, products])

    //endsearch

    

return (
    <div className='background'>
    <div className='container2'>

       <div class="d-flex justify-content-center h-100">
      
     

      </div>
    </div>
    <div >
<section className="p-3 mb-2 bg-light text-dark" id="about">
<div class="searchbar">
          <input class="search_input" type="text" placeholder="Find product" onChange={(e) => setSearchInput(e.target.value)}/>
         
          <a href="#" class="search_icon"><i class="fa"></i></a>
        </div>
    {products && filteredResults.map(product => (
    <div className="row align-items-center justify-content-around flex-row-reverse">
        <div className="col-lg-7">
            <div className="about-text">
                <h4></h4>
            <hr/>
            
            <div className='container4'></div>
            <table class="table1">
<thead>
    <tr>
        <th scope='col'> <div className="col-3">
                    <div className="button" >
                        <a href="http://localhost:3000/allPRODUCT-table" validate="true" style={{ textDecoration: 'none', color: 'white' }}></a>
                      Add to cart</div>
                </div></th>
        <th scope="col">   <div className="col-3">
                    <div className="button2" >
                        <a href="http://localhost:3000/allPRODUCT-table" validate="true" style={{ textDecoration: 'none', color: 'white' }}></a>
                     Feedback</div>
                </div></th>
      
       
    </tr>
</thead>

</table>
          
             
                
            <h5 className="p-3 mb-2 bg-light text-dark">*Product Category: {product.pCategory} </h5>
                <h5 className="p-3 mb-2 bg-light text-dark">* Product Name: {product.pName} </h5>
               <h5 class="p-3 mb-2 bg-light text-dark">* ProductCode: {product.pCode}</h5>
                <h5 className="p-3 mb-2 bg-light text-dark">* UPS code:   {product.ucode}</h5>
                <h5 className="p-3 mb-2 bg-light text-dark">* Description:   {product.pDescription}</h5>
                <h5 className="p-3 mb-2 bg-light text-dark">* Best By:   {product.fdate}</h5>
                <h5 className="p-3 mb-2 bg-light text-dark">* Date First Available:   {product.ldate}</h5>  
            
                <h5 className="p-3 mb-2 bg-primary text-white">* Product Price:   {product.price}</h5>                    
                <div className="btn-bar">
             
              
             
                </div>
            </div>
        </div>
      
        </div>
 


))}
</section>

</div>
</div>
)
}
export default ProductTable;