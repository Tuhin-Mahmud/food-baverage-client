import { useLoaderData } from "react-router-dom";

const ShowFoods = () => {
    const showFoods = useLoaderData()
    console.log(showFoods);


    return (
        <div>
            <h3 className="text-4xl">show foods</h3>
        </div>
    );
};

export default ShowFoods;