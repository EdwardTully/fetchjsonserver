quick app which will use axios, useEffect, useState, useForm and a JSON server on local host to fetch and manipulate data on the server.


  //filter data:  .get("http://localhost:4000/products?category=`${}`")  nested .get("http://localhost:4000/products?category=electronics&disount.type=shipping")

  //sorting data:  .get("http://localhost:4000/products?_sort=price) ascending order is default  .get("http://localhost:4000/products?_sort=price&_order=desc)  multiple fields .get("http://localhost:4000/products?_sort=price,category&_order=desc,asc)

  //pagination of data: .get("http://localhost:4000/products?_page=1&_limit=2)

  //operators in  use greater/less than: .get("http://localhost:4000/products?price_gte=2000&_lte=6000")  not equal to .get("http://localhost:4000/products?id_ne=1") like operator filters similar text f for ex .get("http://localhost:4000/products?category_like=^f")

  //full text search: .get("http://localhost:4000/products?q=dog")

  //relationships, how to add review object to parent object: .post("http://localhost:4000/products/1?_embed=reviews")

  //put, patch, delete requests:  .put("http://localhost:4000/products/11") then we put in place the modified 11th product object to update the data.  A patch req will patch in a change to a key in an object .patch("http://localhost:4000/products/11`") then send in {'price': 8000} to update price for example. The whole product object does not need to be sent with patch.  Delete is .delete("http://localhost:4000/products/11") this will remove the 11th product. No object needs to be sent.