import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductUpdate = () => {
    const update = useLoaderData()
    console.log(update);
    const { _id, brand_name, category, price, description, image, rating } = update || {};



    const handleUpdate = e => {
        console.log('click');
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        // const brandName = form.brandName.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const categorySelect = form.categorySelect.value;
        const addFood = { name, category, price, description, rating, photo, categorySelect }
        console.log(addFood);

        axios.put(`https://food-and-beverage-server-ecru.vercel.app/product-update/${_id}`, addFood)

            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Product update successfully",
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })
            .catch(error => console.log(error))



    }


    return (
        <div>
            <h2 className="text-2xl font-bold text-center text-orange-500 mb-4">Update Product </h2>
            <form onSubmit={handleUpdate} >
                <div className=" bg-gray-100 flex  p-20">
                    <div className="md:w-9/12 mx-auto  space-y-4">
                        {/*1: name and brandName */}

                        <div className="flex">
                            <div className="md:w-1/2">
                                <input defaultValue={brand_name} type="text" name="name" placeholder="name" className="input input-bordered w-full " required />
                            </div>

                            <div className="md:w-1/2 ml-2">

                                <select defaultValue={category} name="categorySelect" className="select select-bordered w-full" id="cars" >
                                    <option disabled value={"default"}>
                                        please category
                                    </option>
                                    <option value="coca-cola">cocaCola</option>

                                    <option value="McDonald's">McDonalds</option>
                                    <option value="StarBuck">StarBuck</option>
                                    <option value="pepsico">pepsico</option>
                                    <option value="kellogg's">kelloggs</option>
                                </select>
                            </div>


                        </div>

                        {/*2: category and price */}
                        <div className="flex">
                            <div className="md:w-1/2">
                                <input defaultValue={category} type="text" name="category" placeholder="Category" className="input input-bordered w-full " required />
                            </div>
                            <div className="md:w-1/2 ml-2">
                                <input defaultValue={price} type="text" name="price" placeholder="Price" className="input input-bordered w-full " required />
                            </div>
                        </div>
                        {/* 3: short description and rating*/}
                        <div className="flex">
                            <div className="md:w-1/2">
                                <input defaultValue={description} type="text" name="description" placeholder="Description" className="input input-bordered w-full " required />
                            </div>
                            <div className="md:w-1/2 ml-2">
                                <input defaultValue={rating} type="text" name="rating" placeholder="Rating" className="input input-bordered w-full " required />
                            </div>
                        </div>
                        {/*Image*/}
                        <div className="md:full">
                            <input defaultValue={image} type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full " required />
                        </div>
                        {/* <button className="btn btn-block">block</button> */}
                        <input className="btn btn-block text-xl font-bold" type="submit" value="ADD" />

                    </div>
                </div>
            </form>



        </div>
    );
};

export default ProductUpdate;