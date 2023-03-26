import React, { useState } from "react";

const AddProduct=()=>{
    const [name,setName ]=useState("");
    const [price,setPrice ]=useState("");
    const [category,setCategory ]=useState("");
    const [company,setCompany ]=useState("");
    const [error,setError]=useState(false)
const ProductData=async()=>{
// console.log(name)
if(!name || !price  || !category || !company){
    setError(true)
    return false;
}
    
    console.log(name,price,category,company)
    const result=await fetch("http://localhost:5000/add-product",{
        method:"post",
        body:JSON.stringify({name,price,category,company}),
        headers:{
            "Content-type":"Application/json",
            authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
    })
    const k=await result.json();
    console.log(k)
}
    return(
        <div>
            <center>
            <h1>Add Product</h1>

            </center>

            <input type="text" className="inputBoxAddProduct" placeholder="Enter product name "  onChange={(e)=>setName(e.target.value)} value={name}></input><br></br>
            { error && !name && <span className="span">* Enter Correct name</span>} 
            <input type="text" className="inputBoxAddProduct" placeholder="Enter price" value={price} onChange={(e)=>setPrice(e.target.value)}></input><br></br>
            { error && !price && <span className="span">* Enter Valid Price</span>} 
            <input type="text" className="inputBoxAddProduct" placeholder="Enter category" value={category} onChange={(e)=>setCategory(e.target.value)}></input><br></br>
            { error && !category && <span className="span">* Enter Correct category</span>} 
            <input type="text" className="inputBoxAddProduct" placeholder="Enter company name" value={company} onChange={(e)=>setCompany(e.target.value)}></input><br></br>
            { error && !company && <span className="span" >* Enter Correct Company name</span>} <br></br>
            <button className="buttonClassProduct" onClick={ProductData}>Add product</button>
            
        </div>
    )
}
export default AddProduct;
