import { useContext, useState } from "react";
import AuthProvider, { AuthContext } from "../../Authentication/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = (props) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [toggle, setToggle] = useState(false)
    const { createUser, login, googleLogin } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const handleEmailPassLogin = data => {
        login(data.email, data.password)
            .then(res => {
                console.log(res)
                navigate(location.state ? location.state : '/')

            })

    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => createUser(result))
            .catch(error => console.log(error))

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit(handleEmailPassLogin)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" {...register("email")} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="flex relative">
                                <input type={toggle ? 'text' : 'password'} name="password" placeholder="password" className="input w-full input-bordered" {...register("password")} required />
                                <p className="cursor-pointer absolute right-4 top-4" onClick={() => { setToggle(!toggle) }}>{toggle ? <FaRegEyeSlash /> : <FaRegEye />}</p>

                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <button onClick={handleGoogleLogin} className="btn">Login With Google</button>
                        </div>
                        <p>Do not have an account? <Link to='/register'><span className="text-purple-500 underline">Register</span></Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login;
