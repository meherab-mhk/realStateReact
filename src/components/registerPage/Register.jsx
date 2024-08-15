import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

const Register = () => {
  AOS.init();
  const { registerUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoUrl = e.target.photoUrl.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    setError("");
    setSuccess("");
    if (confirmPassword !== password) {
      setError("Password's did not match!!!");
      return;
    }
    if (password.length < 6) {
      setError("Password must be upto 6 character!!!");
      return;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
      setError("Password must be an uppercase and a lowercase letter!!!");
      return;
    }
    console.log(name, email, photoUrl, password, confirmPassword);

    registerUser(email, password)
      .then((result) => {
        setUser(result.user);
        setSuccess("Account registed successfully!!!");
      })
      .catch((error) => {
        setError("This " + error.message.split("/")[1].slice(0, -2));
      });
  };
  return (
    <div
      data-aos="zoom-in"
      className="w-[340px] shadow-inner border rounded-3xl md:w-1/2 lg:w-1/3 mx-auto p-4 lg:p-6 bg-gray-100"
    >
      <Helmet>
        <title>Imperial Estate|Register Page</title>
        <meta name="" content="" />
      </Helmet>
      <h3 className="text-[#ffbe00] font-bold text-3xl mb-3 text-center">
        Register New Account
      </h3>
      {
        <p className="font-bold text-xl text-green-500 text-center">
          {success}
        </p>
      }
      <form onSubmit={handleRegister} action="">
        <div>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Type here"
              className="input input-bordered w-full"
              required
            />
          </label>
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
              <span className="label-text">Photo url</span>
            </div>
            <input
              type="text"
              name="photoUrl"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <label className="input input-bordered flex items-center">
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
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Confirm Password</span>
            </div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Type here"
              className="input input-bordered w-full"
              required
            />
            {error && (
              <small className="text-xs text-red-500 font-bold mt-1">
                {error}
              </small>
            )}
          </label>
          <label htmlFor="" className="text-xs font-bold">
            Already have an account?{" "}
            <Link to="/login" className="text-[#ffbe00]">
              Login here!!!
            </Link>
          </label>
          <button className="btn btn-warning w-full my-3">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
