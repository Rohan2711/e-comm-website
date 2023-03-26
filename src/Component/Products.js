import React, { useEffect, useState } from "react";
import { Table,Button  } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate=useNavigate()

const updateP=(id)=>{
  navigate(`/update/${id}`)
}


  const getProducts = async () => {
    let result = await fetch('http://localhost:5000/products',{
      headers: {
        authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
    },
    });
    result = await result.json();
    setProducts(result);
    // console.log(".................")
  }
  useEffect(() => {
    getProducts();
  }, [])
  console.log(products)


  const deleteProduct=async (id)=>{
    let result =await fetch(`http://localhost:5000/product/${id}`,{
      method:"delete",
      headers: {
        authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
    },
    });
    result=await result.json()
    // console.warn(id)
    if(result){
     
      alert("Product Deleted")
      getProducts()
    }
  }



  const SearchProduct=async (event)=>{
    // console.warn()
    const data=event.target.value
    let result =await fetch(`http://localhost:5000/search/${data}`,{
      headers: {
        authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
    },
    })
    result=await result.json();
    if(result){
       setProducts(result)
    }
    else{
      getProducts()
    }
  }
  return (
    <>
      <center><h1>Product List </h1></center>
      <center>
      <input type="text" className="inputBoxSearch" onChange={SearchProduct} placeholder="Search Product "  ></input><br></br>
      </center>
      <div className='p-5'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th> Name</th>
              <th> Price</th>
              <th> Category</th>
              <th>Operation</th>
              <th>Any Updation</th>

              
            </tr>
          </thead>
          <tbody>
            {
              products.length>0 ?
              
              products.map((item,index) => {
                return<>
                <tr key={item._id}>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                 <td><Button type="button" className="btn btn-warning" onClick={()=>deleteProduct(item._id)}>Delete</Button></td>
                 <td><button type="button" onClick={()=>updateP(item._id)} className="btn btn-info">Want to Update</button></td>
                </tr>
                </>
                
              }):
              <>
              <tr>
              <th>No Result Found </th>  
              <th>No Result Found </th>         
              <th>No Result Found </th>  
              <th>No Result Found </th>  
              <th>No Result Found </th>  
              <th>No Result Found </th>  
            </tr>
              </>
            }

          </tbody>
        </Table>
      </div>
    </>

  )
}











// const Product= ()=>{
//     const [item,setItem]=useState([])
//     useEffect(()=>{
//         fun()
//     },[])
//     const fun=async ()=>{
//         const data=await fetch("http://localhost:5000/products")
// const k=await data.json()
// setItem(k)

// }
// console.log(item)
//     return(
//         <div className="divProduct">
//             <center>
//                 <h1> Products </h1>
//                 </center>
//                 <table class="table table-striped">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     {
//         item.map(()=>{
//             <tr>
//       <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//     </tr>
//         })
//     }
//   </tbody>
// </table>

//         </div>
//     )
// }
export default ProductList;