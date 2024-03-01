import React, {useMemo, useEffect, useState} from 'react'
import COLUMNS from './columns'
import {useTable, useSortBy} from 'react-table'



import axios from "axios";

function DataTable() {
  //GOAL is to present data table of database using react-table hooks and tools.  Not easy, but logical and powerful. This table is sortable!

  //make a container for data
  const [products, setProducts] = useState([{}]);
  //this is done to prevent reformulating data upon a reload

  //make sure columns.js includes accessor wtih the proper spelling of the key, it might differ from the Header/Footer spelling.  This mistake took hours for me to figure out!

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => products, [products]);

  //fetch data

  //reset this to a async, took a long time to get this to work in setting the products with setProducts.  The promise based approach with the .then() wouldnt work
  const getData = async () => {
    const res = await axios.get("http://localhost:3001/products", {
      responseType: "json",
    });

    console.log(res.data);

    setProducts(res.data);
  };

  useEffect(() => getData, []);
 
  //useEffect(setProducts(resData))

  //unpack table stuff and functions

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns: columns,
        data: data,
      },
      useSortBy
    );

  return (
    <div className="tableCont">
      <h3>Table of Database Items on JSON Server, react-table</h3>
      <button onClick={() => getData()}>GET Updated Table, After First Render</button>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(
                    column.getHeaderProps(column.getSortByToggleProps())
                  )}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "-" : "^") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;