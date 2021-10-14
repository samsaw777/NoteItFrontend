import { useState } from "react";
import { css } from "@emotion/react";
import { BarLoader } from "react-spinners";

// Can be a string as well. Need to ensure each key-value pair ends with ;

const Userloading = () => {
  const [color, setColor] = useState("#3765FC");
  return (
    <div className="h-viewHeight flex justify-center items-center w-full bg-newchatbackground">
      <BarLoader color={color} size={150} />
    </div>
  );
};

export default Userloading;
