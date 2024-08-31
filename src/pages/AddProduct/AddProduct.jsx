import axios from "axios";
import Swal from "sweetalert2";

const AddProduct = () => {

    const handleSubmit = e => {
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

        axios.post('https://food-and-beverage-server-ecru.vercel.app/addProduct', addFood)

            .then(res => {
                if (res.data.insertedId) {

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Product added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => console.log(error))



    }


    return (
        <div>
            <h2 className="text-center text-3xl text-orange-500 font-serif mb-3 font-bold">Add Your Favourite Product</h2>
            <form onSubmit={handleSubmit} >
                <div className=" bg-gray-100 flex  p-20">
                    <div className="md:w-9/12 mx-auto  space-y-4">
                        {/*1: name and brandName */}

                        <div className="flex">
                            <div className="md:w-1/2">
                                <input type="text" name="name" placeholder="name" className="input input-bordered w-full " required />
                            </div>

                            <div className="md:w-1/2 ml-2">

                                <select name="categorySelect" className="select select-bordered w-full" id="cars" >
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
                                <input type="text" name="category" placeholder="Category" className="input input-bordered w-full " required />
                            </div>
                            <div className="md:w-1/2 ml-2">
                                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full " required />
                            </div>
                        </div>
                        {/* 3: short description and rating*/}
                        <div className="flex">
                            <div className="md:w-1/2">
                                <input type="text" name="description" placeholder="Description" className="input input-bordered w-full " required />
                            </div>
                            <div className="md:w-1/2 ml-2">
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full " required />
                            </div>
                        </div>
                        {/*Image*/}
                        <div className="md:full">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full " required />
                        </div>
                        {/* <button className="btn btn-block">block</button> */}
                        <input className="btn btn-block text-xl font-bold" type="submit" value="Add a Product" />

                    </div>
                </div>
            </form>



        </div>
    );
};

export default AddProduct;