
const Accordian = () => {
    return (
        <div className="my-10 px-5 md:px-10 bg-gray-100">
            <div>
                <h1 className="uppercase text-3xl font-bold text-center text-orange-500 font-serif p-3">Important question <br /> with answer</h1>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium"> How far in advance do I need to place an order?</div>
                    <div className="collapse-content">
                        <p>It’s best to place your order at least [insert number] days in advance to ensure availability. For large events, I recommend booking [insert number] weeks ahea</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">What is your cancellation policy?</div>
                    <div className="collapse-content">
                        <p>Cancellations must be made at least [insert number] days before the scheduled delivery or event for a full refund. Late cancellations may incur a fee.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium"> How do I store and reheat the food?</div>
                    <div className="collapse-content">
                        <p>Each dish comes with specific storage and reheating instructions to ensure it tastes as delicious as when it was first prepared.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordian;