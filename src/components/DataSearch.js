import React, {useEffect, useState} from 'react'
import axios from 'axios'

function DataSearch() {
    const[product,setProduct]=useState({})
    const[id,setId]=useState(1)

    useEffect(()=>{
        axios
        .get(`http://localhost:4000/products/${id}`)
        .then(res => {
            console.log(res)
            setProduct(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[id])
  return (
    <div>
        <h2>Search Data</h2>
        <input type='text' value={id} onChange={e => setId(e.target.value)}/>

        <div>{`title ${product.title} category ${product.category} price ${product.price} description ${product.description}`}</div>

      
    </div>
  )
}

export default DataSearch