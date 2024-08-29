// /* eslint-disable react/prop-types */
// import { FaArrowRight, FaShoppingCart } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const ShowFoodCart = ({ food }) => {
//     const { _id, name, category, price, description, rating, photo } = food
//     return (

//         <div>
//             <div className="card card-compact  bg-base-300 shadow-xl">
//                 <figure><img className="w-full h-[210px] object-cover" src={photo} alt="Shoes" /></figure>
//                 <div className="card-body">
//                     <h2 className=" text-center text-2xl border rounded-2xl font-bold border-orange-400 bg-slate-200">{category}</h2>
//                     <p className="text-lg">Brand:{name}</p>
//                     <p className="">price: <span className="text-orange-400">${price}</span></p>
//                     <p className="text-lg">description:{description}</p>
//                     <p className="text-lg">rating: {rating}</p>
//                     <div className="card-actions justify-end">
//                         <button className="text-2xl bg-orange-400 p-2 rounded-full text-white "><FaShoppingCart /></button>
//                         <Link to={`/cartDetails/${_id}`}><button className="text-2xl bg-orange-400 p-2 rounded-full text-white "><FaArrowRight></FaArrowRight> </button></Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ShowFoodCart;