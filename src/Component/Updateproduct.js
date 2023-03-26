import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const UpdateProduct = () => {
    const params = useParams()
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
     const navigate=useNavigate()

    useEffect(() => {

        getProductData()
    }, [])


    const getProductData = async () => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`,
        {
            headers: {
                authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
            },
        })
        result = await result.json();
        console.log(result)
        if (result) {
            setName(result.name)
            setPrice(result.price)
            setCategory(result.category)
            setCompany(result.company)
        }
    }



    const updateProductData=async()=>{
       let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method: 'put',
            body: JSON.stringify({ name, price,category,company }),  //Api takes object in the form of json stringify
            headers: {
                'Content-Type': 'application/json',
                authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
            },
        });
        result = await result.json();
        console.log(result)
        navigate("/")
        
    }


    return (
        <div>
            <center>
                <h1>Update Product</h1>
            </center>
            <input type="text" className="inputBoxAddProduct" placeholder="Enter product name " onChange={(e) => setName(e.target.value)} value={name}></input><br></br>
            <input type="text" className="inputBoxAddProduct" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)}></input><br></br>
            <input type="text" className="inputBoxAddProduct" placeholder="Enter category" value={category} onChange={(e) => setCategory(e.target.value)}></input><br></br>
            <input type="text" className="inputBoxAddProduct" placeholder="Enter company name" value={company} onChange={(e) => setCompany(e.target.value)}></input><br></br>
            <button className="buttonClassProduct" onClick={updateProductData}>Update</button>

        </div>
    )
}
export default UpdateProduct;