import React, { useState } from "react";
import axios from "axios";

function SortProducts() {
  const [hTlPrices, setHTlPrices] = useState([]);
  const [sel, setSel] = useState("");

  const pullSortedHL = async() => {
    if (sel === "lh") {
      await axios
        .get("http://localhost:3001/products?q=dog")
        .then((res) => {
          console.log(res);
          setHTlPrices(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else{
      await axios
        .get("http://localhost:3001/products?_sort=price&_order=desc")
        .then((res) => {
          setHTlPrices(res.data);
          console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        });
    }
  };
  return (
    <div className="dataFetch">
      <h3>Products Sorted by Price</h3>
      <select value={sel} onChange={(e) => setSel(e.target.value)}>
        <option></option>
        <option type="text" value="lh">
          Price Low to High
        </option>
        <option type="text" value="hl">
          Price High to Low
        </option>
      </select>
      <button type="submit" onClick={pullSortedHL}>
        Show Inventory
      </button>
      <br />
      <div className="listCnt">
        <ul className="dataList">
          {hTlPrices.map((ea) => (
            <li
              className="listItem"
              key={ea.id}
            >{`${ea.title} ${ea.description} item number ${ea.id} sale price $${ea.price}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SortProducts;
