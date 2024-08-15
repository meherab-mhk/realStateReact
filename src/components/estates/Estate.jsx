import AOS from "aos";
import "aos/dist/aos.css";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Estate = ({ estate }) => {
  AOS.init();
  const { id, estate_title, location, area, price, image } = estate;
  return (
    <div data-aos="fade-right">
      <div className="card card-compact lg:w-96 shadow-inner border">
        <figure>
          <img className="w-full h-[250px]" src={image} alt="property img" />
        </figure>
        <div className="card-body bg-gray-100 rounded-b-2xl">
          <h2 className="card-title">{estate_title}</h2>
          <p className="flex gap-2 items-center opacity-70">
            <FaLocationDot></FaLocationDot> {location}
          </p>
          <p className="font-bold">{price}</p>
          <p className="font-bold">Area:{area}</p>
          <div className="card-actions justify-end">
            <Link to={`estate/${id}`}>
              <button className="btn btn-sm btn-warning">View Property</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estate;
