import React, {useEffect, useState} from 'react'
import axios from 'axios'

function DataFetch() {
    const[products,setProducts]=useState([])

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
    },[])
  return (
    <div>
        <h2>Data</h2>
        <ul>
            {products.map((ea)=>
               ( <li key={ea.id}>{`Product ${ea.title} ${ea.description}`}</li>)
            )}
        </ul>
    </div>
  )
}

export default DataFetch