import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import './AllEvents.css';


function ProductTable() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        function getProducts() {
            axios.get("http://localhost:8070/Product/").then((res) => {
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
    axios.delete("http://localhost:8070/Product/delete/"+id).then((res)=>{
            if(res.status===200){
                alert("Product deleted")
                // getEvents()
            }
        })
}    }

    return (
        
      <div className="container">

        

        <a href="http://localhost:3000/addPRODUCT"><button class="abc" type="button">Add Product</button> </a> 
      


         
         
        <br/><br/>
        


        
       
        <table class="table">
            <thead>
                <tr>
                    <th scope='col'>No.</th>
                    <th scope="col">Product Category</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product Code</th>
                    <th scope="col">UPC Code</th>
                    <th scope="col">Product Description</th>
                    <th scope="col">Best By</th>
                    <th scope="col">Date First Available</th>
                   
                   
                    <th scope="col">Price</th>
                    <th scope="col">Update</th>
                    <th scope="col">View</th>
                    <th scope="col">Delete</th>
                  
                </tr>
            </thead>
            <tbody>
                {
                    products.map((Product , index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{Product.pCategory}</td>
                                <td>{Product.pName}</td>
                                <td>{Product.pCode}</td>
                                <td>{Product.uCode}</td>
                                <td>{Product.pDescription}</td>
                                <td>{Product.fdate}</td>
                                <td>{Product.ldate}</td>
                               
                                <td>{Product.price}</td>
                                <td> <Link to={"/all-table/updatePRODUCT/"+Product._id}><button  className='btn btn-warning'>Update</button></Link> </td>
                                <td> <Link to={"/all-table/viewPRODUCT/"+Product._id}><button  className='btn btn-success'>View</button></Link> </td>
                                <td> <button onClick={()=>{deleteProduct(Product._id)}} className='btn btn-danger'>Delete</button> </td>
                            </tr>
                        )
                    })
                }

           
<a href="/reportEvent" >
            <button className="gen_btn" type="submit" >
            Generate pdf
            </button></a>


            </tbody>
        </table>
        </div>
    )
}

export default ProductTable;