import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Banner from "../banner/Banner";
import Estates from "../estates/Estates";

const Home = () => {
  const estates = useLoaderData();

  return (
    <div className="mx-4 lg:w-[1180px] lg:mx-auto">
      <Helmet>
        <title>Imperial Estate|Home Page</title>
      </Helmet>
      <Banner></Banner>
      <Estates estates={estates}></Estates>
    </div>
  );
};

export default Home;
