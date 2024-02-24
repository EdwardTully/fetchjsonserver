import React, { useEffect, useState } from "react";
import axios from "axios";

function DataPost() {
  const [newId, setNewId] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newDescr, setNewDescr] = useState("");
  const newProd = {
    id: newId,
    title: newTitle,
    price: newPrice,
    category: newCategory,
    description: newDescr,
  };
  const [newItem, setNewItem]= useState("")

  const [products, setProducts] = useState([]);
  // eslint-disable-next-line

  const handleSubmit = () => {
    
    axios
      .post(`http://localhost:4000/products`, newProd)
      .then((res) =>{ 
      console.log(res)
      setNewItem(res.data)
      })
      .catch((err) => console.log(err));
  };


  useEffect(()=>{
    axios
    .get('http://localhost:4000/products')
    .then(res => {
        console.log(res)
        setProducts(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
}, [newItem])



  return (
    <div>
      <input
        placeholder='id'
        type="text"
        value={newId}
        onChange={(e) => setNewId(e.target.value)}/>
      
      <input
       placeholder='Title'
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}/>
      
      <input
       placeholder='Category'
        type="text"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}/>
      <input
       placeholder='Price'
        type="text"
        value={newPrice}
        onChange={(e) => setNewPrice(e.target.value)}/>
     
      <input
       placeholder='Description'
        type="text"
        value={newDescr}
        onChange={(e) => setNewDescr(e.target.value)}/>
      <button type='button' onClick={()=>handleSubmit()}>Send Data</button>
      <br/>
      <ul>
            {products.map((ea)=>
               ( <li key={ea.id}>{`Product ${ea.id} is listed as ${ea.category} price and descr is ${ea.price}, ${ea.description}`}</li>)
            )}
        </ul>
    </div>
  );
}

export default DataPost;

/**/
