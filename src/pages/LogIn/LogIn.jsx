import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LogIn = () => {
    const { signIn, signInGoogle } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedIn = result.user;
                console.log(loggedIn);

                // const from = location.state?.from?.pathname || '/';
                const from = location.state?.from?.pathname || '/'
                // navigate(from, { replace: true });
                navigate(from, { replace: true })

            })
            .catch(error => console.log(error))


    }
    const handleGoogle = () => {
        console.log('google signin');
        signInGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(error => {
                console.error(error);
            })
    }



    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value="LogIn" />
                        </div>
                    </form>
                    <p className="text-center mb-7 text-orange-500 "> <small>New Here</small> <Link to='/register' className="">Register Now</Link></p>
                    <button onClick={handleGoogle} className="text-3xl mb-4  btn">Google</button>
                </div>

            </div>
        </div>

    );
};

export default LogIn;
