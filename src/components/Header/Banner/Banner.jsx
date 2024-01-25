const Banner = () => {
    return (
        <div className="hero  h-[450px]" style={{ backgroundImage: 'url(https://i.ibb.co/xsD3SqG/lily-banse-YHSwy6uqvk-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Food and Beverage</h1>
                    <p className="mb-5">Halal Food for Muslims need to take the best possible care of their physical and spiritual health. One of the best ways to do this is by confirming that the food they use is pure, healthy and of good quality. Consumption of healthy food supports the overall metabolic function and immune system of the person. By using Halal food, the body’s overall health can be maintained.</p>
                    <button className="btn btn-primary">Good Food</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;