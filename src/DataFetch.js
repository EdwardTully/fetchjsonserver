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
            {products.map(ea=>
               ( <li>{`Product ${ea.id} is listed as ${ea.category}`}</li>)
            )}
        </ul>
    </div>
  )
}

export default DataFetch