import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from '../../assets/images/login/login.jpg'

const Register = () => {
    const { createUser, signInGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);

                const from = location?.state?.pathname || '/';

                navigate(from, { replace: true })


            })
            .catch(err => {
                console.log(err);
            })
    }
    // google signUp
    const handleGoogleSignUp = () => {
        console.log('singUp');
        signInGoogle()
            .then(result => {
                const user = result.user;
                navigate('/')
                console.log(user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="w-1/3">

                            <img src={login} alt="" />
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <h1 className="text-5xl font-bold text-center">Register now!</h1>
                            <form onSubmit={handleRegister} className="card-body">
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

                                    <input className="btn btn-primary" type="submit" value="Register" />
                                </div>
                            </form>
                            <p className="text-center mb-7 text-orange-500 "> <small>Already Have an account?</small> <Link to='/login' className="">login Now</Link></p>
                            {/* --- */}
                            <div className="px-6">
                                <div className="mx-auto border w-full border-black rounded text-center mb-4  hover:bg-orange-400 hover:text-white duration-500 transition">
                                    <button onClick={handleGoogleSignUp} className="text-3xl  p-2 ">Google</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;