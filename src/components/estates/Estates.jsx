import "animate.css";
import Estate from "./Estate";
const Estates = ({ estates }) => {
  return (
    <div className="mt-10">
      <div className="mb-10">
        <h3 className="text-center font-bold text-3xl animate__animated animate__bounce">
          Estates Properties
        </h3>
        <p className="text-center opacity-70">
          We have best properties at best environment where nature talks.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {estates.map((estate, idx) => (
          <Estate key={idx} estate={estate}></Estate>
        ))}
      </div>
    </div>
  );
};

export default Estates;
