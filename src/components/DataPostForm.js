import React,{useState, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {DevTool} from '@hookform/devtools'
import axios from "axios";

function DataPostForm() {
//see FORMS-HOOKS project for notes on useForm use!
    const form = useForm({
        defaultValues:{
            id: '',
            title: '',
            category: '',
            price: '',
            description: '',
        }
    })

    const {register, control, handleSubmit, formState}= form

    const {errors}= formState

    const [inventory, setInventory]=useState([])
    console.log(inventory)

    const onSubmit = (data)=>{
        axios
        .post('http://localhost:4000/products',data)
        .then((res)=>{
            console.log(res)
        })
        .catch((error)=>{
            console.log(error)
        })
      
}
    
useEffect(()=>{
    axios
    .get('http://localhost:4000/products')
    .then(res => {
        console.log(res)
        setInventory(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
},[])

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="id">Id</label>
        <input
          type="text"
          id="id"
          {...register("id", {
            required: {
              value: true,
              message: "Required field",
            },
          })}
        />
        <p className="errorss">{errors.id?.message}</p>

        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          {...register("title", {
            required: {
              value: true,
              message: "title required",
            },
          })}
        />
        <p className="errorss">{errors.title?.message}</p>

        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          {...register("category", {
            required: {
              value: true,
              message: "category is required",
            },
          })}
        />
        <p className="errorss">{errors.category?.message}</p>

        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          {...register("price", {
            required: {
              value: true,
              message: "please enter price",
            },
          })}
        />
        <p className="errorss">{errors.price?.message}</p>

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          {...register("description", {
            required: {
              value: true,
              message: "Please enter a description",
            },
          })}
        />
        <p className="errorss">{errors.description?.message}</p>

        <button>Enter Item</button>
      </form>
      <DevTool control={control} />
      
      <div className='dataFetch'>
       <h3>Inventory</h3>
        <ul className='dataList'>
            {inventory.map((ea)=>
               ( <li className='listItem' key={ea.id}>{`${ea.title} ${ea.description} item number ${ea.id} sale price $${ea.price}`}</li>)
            )}
        </ul>
    </div>
      
    </div>
  );
}

export default DataPostForm