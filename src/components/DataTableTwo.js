import React, {useState, useEffect} from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios'

function DataTableTwo() {

    //Here is another table method by react.  It looks to be a little easier to use, and intuitive. Here we are going to import a premade component from react. Then we will tell it how the data will be formatted into the table and we will get the data.
    //In the columns const, we designate the col title, a selector which ties row data to the column, and a sortable option which will make the data sortable
    //styling can be added as an atribue to the component. It is set as a constant with a syle object.  It seems limited and cumbersome.

    //data configuration for table making
    const columns = [
        {
            name: "Id",
            selector: row=> row.id,
            sortable: true
        },
        {
            name: "Title",
            selector: row=> row.title,
            sortable: true
        },
        {
            name: "Category",
            selector: row=> row.category,
            sortable: true
        },
        {
            name: "Price",
            selector: row=> row.price,
            sortable: true
        },
        {
            name: "Description",
            selector: row=> row.description,
            sortable: true
        },
    ]

    //styling 
    const darkTheme = {
        rows:{
            style:{
            fontSize: '22px',
            color: 'gray',
            backgroundColor: 'black'

        }},
        headCells:{
            style:{
            fontSize: '22px',
            color: 'blue',
            backgroundColor: 'gray'

        }}
    }

    //fetch data and a storage state
    const [data, setData] = useState([{}])

    const getData = async () => {
        const res = await axios.get("http://localhost:3001/products", {
          responseType: "json",
        });
    
        console.log(res.data);
    
        setData(res.data);
      };

      //fetch data on component rendering (button is included to update table as well)
    
      useEffect(() => getData, []);

      //in the DataTable component, attributes can be added to customize functions in the table such as pagination, selectabl

      return (
        <div className='tableCont'>
            
          <DataTable columns={columns} data={data} pagination selectableRows customStyles={darkTheme}></DataTable>
          <button onClick={()=>getData()}>Refresh Table</button>
        </div>
      );
}

export default DataTableTwo