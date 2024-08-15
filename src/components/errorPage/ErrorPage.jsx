import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[100px]">
      <h1 className="text-yellow-400 font-bold text-[60px]">404</h1>
      <h3 className="text-bold text-[40px]">ERROR</h3>
      <Link to="/">
        <button className="btn btn-warning">Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
