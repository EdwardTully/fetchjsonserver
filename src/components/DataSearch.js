import React, {useEffect, useState} from 'react'
import axios from 'axios'

function DataSearch() {
    const[product,setProduct]=useState({})
    const[id,setId]=useState('')

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
        <input className='searchInput' type='text' value={id} onChange={e => setId(e.target.value)}/>

        <div>{`ID ${product.id}:  ${product.title},  ${product.description}, $${product.price}  `}</div>

      
    </div>
  )
}

export default DataSearch