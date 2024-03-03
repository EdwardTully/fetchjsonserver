import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import {FaCartShopping} from 'react-icons/fa6'
import axios from "axios";

function DataTableTwo() {
  //Here is another table method by react.  It looks to be a little easier to use, and intuitive. Here we are going to import a premade component from react. Then we will tell it how the data will be formatted into the table and we will get the data.
  //In the columns const, we designate the col title, a selector which ties row data to the column, and a sortable option which will make the data sortable
  //styling can be added as an atribue to the component. It is set as a constant with a syle object.  It seems limited and cumbersome.

  //image sources added to JSON file, and img tag inserted into <td>

  //data configuration for table making
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
      width: "5%",
    },
    //add appropriate image path to db, in this case it is in public folder, but can be a link. Then have selector run a function which adds in the image file to the src attribute of the an inserted img tag.  That is all!!! NOTE ea.image
    {
      name: "",
      selector: (ea) => <img src={ea.image} width="50%" height="50%" alt="" />,
      width: "10%",
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      width: "20%",
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
      width: "20%",
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
      width: "10%",
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
      width: "35%",
    },
  ];

  //styling
  const darkTheme = {
    rows: {
      style: {
        fontSize: "22px",
        color: "gray",
        backgroundColor: "black",
        height: "100px;",
      },
    },
    headCells: {
      style: {
        fontSize: "22px",
        color: "white",
        backgroundColor: "gray",
      },
    },
  };

  //fetch data and a storage state
  const [data, setData] = useState([{}]);

  const getData = async () => {
    const res = await axios.get("http://localhost:3001/products", {
      responseType: "json",
    });

    setData(res.data);
  };

  //fetch data on component rendering (button is included to update table as well)

  useEffect(() => getData, []);

  //in the DataTable component, attributes can be added to customize functions in the table such as pagination, selectabl

  //selected row data.  Note SelectedRows is a conserved variable of the package

  const [selRowData, setSelRowData] = useState([{}]);

  const handleSelected = ({ selectedRows }) => {
    setSelRowData({ selectedRows });
  };
  //submit select data to db/interests

  const submitSelectItems = () => {
    axios
      .post("http://localhost:3001/Shopping_Cart", selRowData)

      .catch((error) => {
        console.log(error);
      });
     
  };

   // Toggle the state so React Data Table changes to clearSelectedRows are triggered

   const [toggledClearRows, setToggleClearRows] = useState(false);

   const handleClearRows = () => {
    setToggleClearRows(!toggledClearRows);
  }


  return (
    <div className="tableCont">
      <h3>
        Second method for table of JSON server Data, using the react data table
        component package
      </h3>
      <button type="submit" onClick={() => {
        submitSelectItems()
        handleClearRows()}}>
        Submit Selected Items
      </button>
      <FaCartShopping size="3em" />
      <DataTable
        columns={columns}
        data={data}
        selectableRows
        selectableRowsHighlight
        onSelectedRowsChange={handleSelected}
        clearSelectedRows={toggledClearRows}
        customStyles={darkTheme}
      ></DataTable>
      <button onClick={() => getData()}>Refresh Table</button>

    </div>
  );
}

export default DataTableTwo;
