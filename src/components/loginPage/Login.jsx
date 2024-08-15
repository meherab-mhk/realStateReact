import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
const Login = () => {
  AOS.init();
  const { loginUser, setUser, googleLogin, githubLogin } =
    useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  // const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // google login:
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  //github login
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        setUser(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  // email / password login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        setSuccess("Login successfully!!!");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        setError(error.message.split("/")[1].slice(0, -2));
      });
    console.log(email, password);
    setError("");
    setSuccess("");
  };
  return (
    <div
      data-aos="zoom-in"
      className="w-[340px] shadow-inner border rounded-3xl md:w-1/2 lg:w-1/3 mx-auto p-4 lg:p-6 bg-gray-100"
    >
      <Helmet>
        <title>Imperial Estate|Login Page</title>
        <meta name="" content="" />
      </Helmet>
      <h3 className="text-[#ffbe00] font-bold text-3xl mb-3 text-center">
        Login
      </h3>
      <p className="font-bold text-xl text-green-500 text-center">{success}</p>
      <form onSubmit={handleLogin} action="">
        <div>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Type here"
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <label
              htmlFor=""
              className="input input-bordered flex items-center"
            >
              <input
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Type here"
                className="w-full"
                required
              />
              <span onClick={() => setShowPass(!showPass)}>
                {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </label>
          </label>
          {error && (
            <small className="font-bold text-xs text-red-500">{error}</small>
          )}
          <div className="my-3 flex gap-4 items-center">
            <p className="text-sm ">Easy login:</p>
            <button className="text-3xl" onClick={handleGoogleLogin}>
              <FaGoogle></FaGoogle>
            </button>
            <button className="text-3xl" onClick={handleGithubLogin}>
              <FaGithub></FaGithub>
            </button>
            <button className="text-3xl">
              <FaFacebook></FaFacebook>
            </button>
            <button className="text-3xl">
              <FaSquareXTwitter></FaSquareXTwitter>
            </button>
          </div>
          <label htmlFor="" className="text-xs font-bold">
            Do not have account?{" "}
            <Link to="/register" className="text-[#ffbe00]">
              Register here!!!
            </Link>
          </label>
          <button className="btn btn-warning w-full my-3">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
