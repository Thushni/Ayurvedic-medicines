// Edit Component for update data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './All.css'


//import AddEvents from "./AddEvents";

// Editevent Component
const Viewmore= (props) => {

	const {id} = useParams();
	const Navigate = useNavigate()
    const [pCategory, setpCategory] = useState("");
    const [pName, setpName] = useState("");
    const [pCode, setpCode] = useState("");
    const [uCode, setuCode] = useState("");
    const [pDescription, setpDescription] = useState("");
    const [fdate, setfdate] = useState("");
    const [ldate, setldate] = useState("");
    const [price, setprice] = useState("");
   
    const [formValues, setFormValues] = useState({
    pCategory:"",
    pName:"",
    pCode:"",
    uCode:"", 
    pDescription:"",
    fdate:"",
    ldate:"",
    price:""
});

    
	


// Load data from server and reinitialize event form  
useEffect(() => {
	axios
	.get(
    `http://localhost:8070/product/get/${id}`
    
    
	)
	.then((res) => {
        const {pCategory, pName, pCode, uCode, pDescription, fdate, ldate, price } = res.data.product;
        console.log(pCategory)
		console.log(pName)
		console.log(pCode)
		console.log(uCode)
		console.log(pDescription)
        console.log(fdate)
        console.log(ldate)
        console.log(price)
     
		//setFormValues({...formValues,eventName, eventType, location, amount, description, image });
        setpCategory(pCategory)
        setpName(pName)
        setpCode(pCode)
        setuCode(uCode)
        setpDescription(pDescription)
        setfdate(fdate)
        setldate(ldate)
        setprice(price)
     
	})
	.catch((err) => console.log(err));
}, []);
function sendData(e){
	e.preventDefault();

	const newProduct = {
        pCategory,
        pName,
        pCode,
        uCode,
        pDescription,
        fdate,
        ldate,
        price
	}
    Navigate('/addPRODUCT')
	
   }
// Return event form
return (
<div className="container">
<div className='container3'>
    <h1 className=""></h1>
    <hr/>
    </div>
<div className="row">   

   
<div className="col-md-9 personal-info">
       


        <form className="p-3 mb-2 bg-secondary text-white" onSubmit={sendData} >
            <br/><br/>
          
                <h6 className="p-3 mb-2 bg-secondary text-white"> {pName}</h6>
                <h6 className="p-3 mb-2 bg-dark text-white">Product code: {pCode}</h6>
                <h6 className="p-3 mb-2 bg-dark text-white">UPC code: {uCode}</h6>
                <h6 className="p-3 mb-2 bg-dark text-white">Description: {pDescription}</h6>
                <h6 className="p-3 mb-2 bg-dark text-white">Best by: {fdate}</h6>
                <h6 className="p-3 mb-2 bg-dark text-white">Date First Available: {ldate}</h6>
                <h6 className="p-3 mb-2 bg-dark text-white">Price: {price}</h6>
        
               
                <a href="http://localhost:3000/allPRODUCT-table"><button class="btn btn-success" type="button">Back</button> </a> <br/> 
                
   
        </form>

       

    </div>
    </div>

</div>

);
}

export default Viewmore;