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
    <div className='dataFetch'>
       <h3>Inventory</h3>
        <ul className='dataList'>
            {products.map((ea)=>
               ( <li key={ea.id}>{`${ea.title} ${ea.description} item number ${ea.id} sale price $${ea.price}`}</li>)
            )}
        </ul>
    </div>
  )
}

export default DataFetch