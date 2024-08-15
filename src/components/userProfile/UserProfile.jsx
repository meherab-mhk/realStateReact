import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../authProvider/AuthProvider";

const UserProfile = () => {
  const [success, setSuccess] = useState("");
  const { user, updateUserProfile } = useContext(AuthContext);
  console.log(user);

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    updateUserProfile(name, photoUrl).then(() => {
      setSuccess("Update successfully!!!");
    });
  };
  return (
    <div>
      <Helmet>
        <title>Imperial Estate|User Profile</title>
      </Helmet>
      <p className="text-center text-green-500">{success}</p>
      <div className="w-[340px] md:w-1/2 lg:w-1/3 mx-auto my-auto p-6 border shadow-inner rounded-3xl flex flex-col lg:flex-row gap-5 bg-gray-100">
        <div className="flex flex-col gap-3">
          <p className="font-bold text-sm">Profile Info:</p>
          <img
            className="w-20 h-20 rounded-xl border"
            src={user.photoURL}
            alt="user img"
          />
          <div>
            <h3 className="font-bold">
              Name:{user.displayName ? user.displayName : "User name not found"}
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-sm">Update profile:</p>
          <form onSubmit={handleUpdate}>
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
                <span className="label-text">Photo url</span>
              </div>
              <input
                type="text"
                name="photoUrl"
                placeholder="Type here"
                className="input input-bordered w-full"
                required
              />
            </label>
            <button className="btn btn-sm w-full btn-warning mt-3">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
