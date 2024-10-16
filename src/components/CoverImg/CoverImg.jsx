/* eslint-disable react/prop-types */

const CoverImg = ({ img }) => {
    return (


        <div>
            <img className="rounded w-full h-[400px] object-cover" src={img} alt="" />
            {/* <div className="flex gap-3 -mt-32 text-center">
                <h1>Home</h1>
                <p>Popular Foods</p>
            </div> */}
        </div>

    );
};

export default CoverImg;