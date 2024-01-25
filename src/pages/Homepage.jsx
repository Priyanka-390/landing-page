import React from "react";
import Herosec from "../components/Herosec";
import Hosting from "../components/Hosting";
import Mapsec from "../components/Mapsec";
import Readysec from "../components/Readysec";
import Website from "../components/Website";
import Awesome from "../components/Awesome";
import Footersec from "../components/Footersec";
import Real from "../components/Real";
import Backtop from "../components/Backtop";

const Homepage = () => {
  return (
    <div className="overflow-x-clip">
      <Herosec />
      <Hosting />
      <Mapsec />
      <Readysec />
      <Real/>
      <Website />
      <Awesome />
      <Footersec />
      <Backtop/>
    </div>
  );
};

export default Homepage;
