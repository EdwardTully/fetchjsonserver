import React, {useState, useEffect} from 'react'
import ItemCard from './ItemCard';
import axios from 'axios'


function ShopWindow() {

    const [data, setData] = useState([{}]);

    const getData = async () => {
      const res = await axios.get("http://localhost:3001/products", {
        responseType: "json",
      });
  
      setData(res.data);
    };

    useEffect(()=>getData,[])

   
  
  return (
    <div className = 'shopWindow'>
       
        {data.map((e)=>(
                <ItemCard title={e.title} description={e.description} price={e.price} image={e.image}/>
        ))}
        

    </div>
  )
}

export default ShopWindow