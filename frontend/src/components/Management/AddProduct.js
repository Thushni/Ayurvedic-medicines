import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AddProduct() {
   
    const Navigate = useNavigate()
    const [pCategory, setpCategory] = useState("");
    const [pName, setpName] = useState("");
    const [pCode, setpCode] = useState("");
    const [uCode, setuCode] = useState("");
    const [pDescription, setpDescription] = useState("");
    const [fdate, setfdate] = useState("");
    const [ldate, setldate] = useState("");
    const [price, setprice] = useState("");


    function sendData(e) {
        e.preventDefault();

        const newProduct = {
            pCategory,
            pName,
            pCode,
            uCode,
            pDescription,
            fdate,
            ldate,
            price,

        }


        axios.post("http://localhost:8070/product/addPRODUCT", newProduct).then((res) => {
            alert("Product Added Successfully")
            console.log(res.data)
            Navigate('/allPRODUCT-table')

        }).catch((err) => {
            alert(err)
        })
    }



    const formValidation = () => {

        let isValid = true;

        if (pCategory.trim().length === 0) {
            toast.error("Please insert name");
            isValid = false;
        }
        else if (pName.trim().length === 0) {
            toast.error("Please insert name");
            isValid = false;
        }
        else if (pCode.trim().length === 0) {
            toast.error("Please insert year");
            isValid = false;
        }

        else if (uCode.trim().length === 0) {
            toast.error("Please insert semester");
            isValid = false;
        }

        else if (fdate.trim().length === 0) {
            toast.error("Please insert date");
            isValid = false;
        }
        else if (ldate.trim().length === 0) {
            toast.error("Please insert date");
            isValid = false;
        }
       
        else if (price.trim().length === 0) {
            toast.error("Please insert date");
            isValid = false;
        }





        return isValid;
    }


    return (





        <div className=""><br />
            <h2 className="p-3 mb-2 bg-secondary text-white">Add Product</h2>



            <br />

            <form className="l-include" onSubmit={sendData} >


                <ToastContainer style={{ width: "1000px", textAlign: 'center', fontSize: '25px', fontFamily: 'fantasy' }}
                    position="center"
                    theme='light'
                    autoClose={7000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    limit={1}
                />

                <br></br>
                <br></br>


                <div className="col-md-3">
                    <label for="validationCustom04" className="form-label">Product Category</label>
                    <select className="form-select" id="validationCustom04" onChange={(e) => {

                        setpCategory(e.target.value);

                    }} required>
                        <option selected disabled >Product Category</option>
                        <option>Cream</option>
                        <option>Oil</option>
                    </select>

                </div>

                <div className="col-md-6">
                    <label for="validationCustom01" className="form-label">Product Name</label>
                    <input type="text" className="form-control" maxLength={20} minLength={4} id="validationCustom01" placeholder="Enter Product Name" onChange={(e) => {

                        setpName(e.target.value);

                    }} required />


                </div>


                <div className="col-md-6">
                    <label for="validationCustom01" className="form-label">Product Code</label>
                    <input type="text" className="form-control" maxLength={20} minLength={6} id="validationCustom01" placeholder="Enter Product Code" onChange={(e) => {

                        setpCode(e.target.value);

                    }} required />


                </div>



                <div className="col-md-3">
                    <label for="validationCustom04" className="form-label">UPC Code</label>
                    
                    <input type="text" className="form-control" maxLength={12} minLength={12} id="validationCustom01" placeholder="Enter Product UPC Code" onChange={(e) => {

                        setuCode(e.target.value);

                    }} required />


                </div>


                <div className="col-md-3">
                    <label for="validationCustom01" className="form-label">Product Description</label>
                    <input type="text" className="form-control" minLength={6} maxLength={30} id="module" placeholder="Enter Product Description" onChange={(e) => {

                        setpDescription(e.target.value);

                    }} required />

                </div>



                <div className="col-md-3">
                    <label for="validationCustom01" className="form-label">Best By</label>
                    <input type="Date" className="form-control" id="validationCustom01" placeholder="Enter Best By" onChange={(e) => {

                        setfdate(e.target.value);

                    }} required />

                </div>
                <div className="col-md-3">
                    <label for="validationCustom01" className="form-label">Date First Available</label>
                    <input type="Date" className="form-control" id="validationCustom01" placeholder="Date First Available" onChange={(e) => {

                        setldate(e.target.value);

                    }} required />

                </div>






                <div className="col-md-12">
                    <label for="validationCustom01" className="form-label">Product Price</label>
                    <input type="text" className="form-control" id="validationCustom01" placeholder="Enter Product Price" onChange={(e) => {

                        setprice(e.target.value);

                    }} required />


                </div>

              


                <div className="col-3">
                    <button className="button" type="submit" >
                        <a href="http://localhost:3000/allPRODUCT-table" validate="true" style={{ textDecoration: 'none', color: 'white' }}></a>
                        Submit</button>
                </div>




            </form>

        </div>
    )

}