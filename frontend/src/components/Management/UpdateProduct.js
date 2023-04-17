// Edit Component for update data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
//import AddEvent from "./AddEvent";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



// Editevent Component
const UpdateProduct = (props) => {
    const { id } = useParams();
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
        pCategory: "",
        pName: "",
        pCode: "",
        uCode: "",
        pDescription: "",
        fdate: "",
        ldate: "",
        price: ""

    });

    //onSubmit handler
    const onSubmit = (productObject) => {
        axios
            .put(
                `http://localhost:8070/product/updatePRODUCT/${id}`,
                productObject
            )
            .then((res) => {
                if (res.status === 200) {
                    alert("lecture successfully updated");
                    props.history.push("/AddProduct");
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
    };

    // Load data from server and reinitialize event form
    useEffect(() => {
        axios
            .get(
                `http://localhost:8070/product/get/${id}`

            )
            .then((res) => {
                const { pCategory, pName, pCode, uCode, pDescription, fdate, ldate, price } = res.data.product;
                console.log(pCategory)
                console.log(pName)
                console.log(pCode)
                console.log(uCode)
                console.log(pDescription)
                console.log(fdate)
                console.log(ldate)
                console.log(price)

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
            price
        }

        axios.put(`http://localhost:8070/product/updatePRODUCT/${id}`, newProduct).then((res) => {
            alert("Product Updated")
            console.log(res.data)
            Navigate('/allPRODUCT-table')

        }).catch((err) => {
            alert(err)
        })

    }

    // Return lecture form
    return (


        <div className=""><br />
            <h2 className="p-3 mb-2 bg-secondary text-white">Update Lecture</h2>

            <br />
            <br></br>


            <form className="l-include" onSubmit={sendData} >
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
                    <input type="text" className="form-control" maxLength={20} minLength={8} id="validationCustom01" placeholder="Enter Product Name" onChange={(e) => {

                        setpName(e.target.value);

                    }} required />


                </div>


                <div className="col-md-6">
                    <label for="validationCustom01" className="form-label">Product Code</label>
                    <input type="text" className="form-control" maxLength={20} minLength={8} id="validationCustom01" placeholder="Enter Product Code" onChange={(e) => {

                        setpCode(e.target.value);

                    }} required />


                </div>



                <div className="col-md-3">
                    <label for="validationCustom04" className="form-label">UPC Code</label>
                    <input type="text" className="form-control" maxLength={20} minLength={8} id="validationCustom01" placeholder="Enter Product UPC Code" onChange={(e) => {

                        setuCode(e.target.value);

                    }} required />


                </div>


                <div className="col-md-3">
                    <label for="validationCustom01" className="form-label">Product Description</label>
                    <input type="text" className="form-control" minLength={6} maxLength={6} id="module" placeholder="Enter Product Description" onChange={(e) => {

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
                    <input type="text" className="form-control" id="mLink" placeholder="Enter Product Price" onChange={(e) => {

                        setprice(e.target.value);

                    }} required />


                </div>



                <div className="col-12">
                    <button className="button2" type="submit" >
                        <a href="/" validate="true" style={{ textDecoration: 'none', color: 'white' }}></a>
                        Update</button>
                </div>


            </form>

        </div>
    );
};

// Export Editlecture Component
export default UpdateProduct;
