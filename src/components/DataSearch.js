import React, { useState} from 'react'
import axios from 'axios'

function DataSearch() {
  const [list, setList] = useState([]);
  const [term, setTerm] = useState("");
  const [val, setVal] = useState("");

  const filterData = (event) => {
    event.preventDefault()
    axios
      .get(`http://localhost:3001/products?${val}=${term}`)
      .then((res) => {
        
        setList(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h2>Search Data</h2>
      <form className='searchForm'>
        <select value={val} onChange={(e) => setVal(e.target.value)}>
            <option></option>
          <option type="text" value="id">
            ID
          </option>
          <option type="text" value="title">
            Title
          </option>
          <option type="text" value="category">
            Category
          </option>
          <option type="text" value="price">
            Price
          </option>
        </select>
        <button type="submit" onClick={filterData}>
          Find
        </button>

        <input
          className="searchInput"
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>

      <ul className="dataList">
        {list.map((ea) => (
          <li key={ea.id}>{`ID ${ea.id}:  ${ea.title},  ${ea.description}, $${ea.price}  `}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataSearch