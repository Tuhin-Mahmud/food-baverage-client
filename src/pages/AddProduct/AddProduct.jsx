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
        console.log(categorySelect,);
        const addFood = { name, category, price, description, rating, photo }
        console.log(addFood);

        fetch('', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(addFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'food added successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })

    }


    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div className=" bg-gray-300 flex  p-20">
                    <div className="md:w-9/12 mx-auto  space-y-4">
                        {/*1: name and brandName */}

                        <div className="flex">
                            <div className="md:w-1/2">
                                <input type="text" name="name" placeholder="name" className="input input-bordered w-full " />
                            </div>

                            <div className="md:w-1/2 ml-2">

                                {/* <input type="text" name="brandName" placeholder="BrandName" className="input input-bordered w-full " /> */}

                                {/* <select className="w-full input input-bordered" name="categorySelect" id="">
                                    <option value="pepsico">pepsico</option>
                                    <option value="pepsico">coca-cola</option>
                                    <option value="pepsico">pepsico</option>
                                </select> */}

                                <select name="categorySelect" className="input input-bordered w-full" id="cars" >
                                    <option value="">
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
                                <input type="text" name="category" placeholder="Category" className="input input-bordered w-full " />
                            </div>
                            <div className="md:w-1/2 ml-2">
                                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full " />
                            </div>
                        </div>
                        {/* 3: short description and rating*/}
                        <div className="flex">
                            <div className="md:w-1/2">
                                <input type="text" name="description" placeholder="Description" className="input input-bordered w-full " />
                            </div>
                            <div className="md:w-1/2 ml-2">
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full " />
                            </div>
                        </div>
                        {/*Image*/}
                        <div className="md:full">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full " />
                        </div>
                        {/* <button className="btn btn-block">block</button> */}
                        <input className="btn btn-block text-xl font-bold" type="submit" value="ADD" />

                    </div>
                </div>
            </form>



        </div>
    );
};

export default AddProduct;