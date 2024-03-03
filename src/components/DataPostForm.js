
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";

function DataPostForm() {
  //see FORMS-HOOKS project for notes on useForm use!
  const form = useForm({
    defaultValues: {
      id: "",
      title: "",
      category: "",
      price: 0,
      description: "",
      image: "",
    },
  });

  const { register, control, handleSubmit, formState, reset } = form;

  const { errors } = formState;

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3001/products", data)

      .catch((error) => {
        console.log(error);
      });

    reset();
  };

  return (
    <div className="assetForm">
      <h3>Inventory Asset Entry</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="id">ID</label>
        <input
          type="text"
          id="id"
          {...register("id", {
            required: {
              value: true,
              message: "category is required",
            },
          })}
        />
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
        <label htmlFor="description">Image URL</label>
        <input type="text" id="image" {...register("image")} />

        <button>Enter Item</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default DataPostForm;

/**/