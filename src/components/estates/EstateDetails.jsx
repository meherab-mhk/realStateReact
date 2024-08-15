import "animate.css";
import { Helmet } from "react-helmet-async";
import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";
const EstateDetails = () => {
  const estates = useLoaderData();
  const { id } = useParams();
  const estateId = parseInt(id);
  const estate = estates.find((estate) => estate.id === estateId);

  const {
    estate_title,
    segment_name,
    location,
    area,
    price,
    image,
    status,
    facilities,
    description,
  } = estate;

  return (
    <div className="mx-4 lg:w-[1180px] lg:mx-auto flex flex-col lg:flex-row gap-6 mt-10">
      <Helmet>
        <title>Imperial Estate|Estate Details</title>
      </Helmet>
      <div className="w-full lg:w-1/2">
        <div className="flex justify-between mb-3">
          <h3 className="font-bold text-3xl animate__animated animate__bounce">
            {estate_title}
          </h3>
          <p className="font-bold text-3xl text-[#ffbe00] animate__animated animate__bounce">
            {price}
          </p>
        </div>
        <div className="flex justify-between mb-3">
          <h3 className="opacity-70 flex gap-2 items-center">
            <FaLocationDot></FaLocationDot>
            {location}
          </h3>
          <p className="font-bold">Area:{area}</p>
        </div>
        <img className="rounded-3xl" src={image} alt="" />
      </div>
      <div className="">
        <h3 className="font-bold mb-3">Segment:{segment_name}</h3>
        <p className="font-bold mb-3">Status:{status}</p>
        <p className="font-bold mb-3">
          Facilities:
          {facilities.map((data, idx) => (
            <span key={idx} className="font-bold mr-3 text-[#ffbe00]">
              #{data}
            </span>
          ))}
        </p>
        <h3 className="font-bold text-2xl opacity-70 mb-3">Description</h3>
        <p className="opacity-80">{description}</p>
      </div>
    </div>
  );
};

export default EstateDetails;
