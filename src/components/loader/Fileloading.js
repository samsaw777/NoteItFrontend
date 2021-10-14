import { useState } from "react";

import { ClipLoader } from "react-spinners";

// Can be a string as well. Need to ensure each key-value pair ends with ;

const Fileloading = () => {
  const [color, setColor] = useState("#3765FC");
  return (
    <div className="w-5 h-5 ml-auto mr-16 block">
      <ClipLoader color={color} size={150} />
    </div>
  );
};

export default Fileloading;
