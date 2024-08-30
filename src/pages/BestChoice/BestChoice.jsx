import { FaEnvira } from "react-icons/fa6";
import { GiOpenedFoodCan, GiSkills } from "react-icons/gi";
import { LuPartyPopper } from "react-icons/lu";

const BestChoice = () => {
    return (
        <div className="my-10 px-3 md:px-0">
            <div className="text-center">
                <h4 className="text-orange-500 uppercase font-bold">Why choose us</h4>
                <h1 className="text-4xl uppercase font-semibold font-serif">Why We’re Your Best Choice</h1>
            </div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* 1 */}
                <div className="bg-gray-200 p-8 rounded hover:bg-red-500 duration-700 transition hover:text-white">
                    <GiOpenedFoodCan className="text-7xl mx-auto text-orange-500 mb-2" />
                    <div className="text-center">
                        <h3 className="text-lg font-bold">Hygienic Food</h3>
                        <p>We are passionate about serving fresh, flavorful</p>
                    </div>
                </div>
                {/* 2 */}
                <div className="bg-gray-200 p-8 rounded hover:bg-red-500 duration-700 transition hover:text-white">
                    <FaEnvira className="text-7xl mx-auto text-orange-500 mb-2" />
                    <div className="text-center">
                        <h3 className="text-lg font-bold">Fresh Environment</h3>
                        <p>We are passionate about serving fresh, flavorful</p>
                    </div>
                </div>
                {/* 3 */}
                <div className="bg-gray-200 p-8 rounded hover:bg-red-500 duration-700 transition hover:text-white">
                    <GiSkills className="text-7xl mx-auto text-orange-500 mb-2" />
                    <div className="text-center">
                        <h3 className="text-lg font-bold">Skilled Chefs</h3>
                        <p>We are passionate about serving fresh, flavorful</p>
                    </div>
                </div>
                {/* 4 */}
                <div className="bg-gray-200 p-8 rounded hover:bg-red-500 duration-700 transition hover:text-white">
                    <LuPartyPopper className="text-7xl mx-auto text-orange-500 mb-2" />
                    <div className="text-center">
                        <h3 className="text-lg font-bold">Event & Party</h3>
                        <p>We are passionate about serving fresh, flavorful</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestChoice;