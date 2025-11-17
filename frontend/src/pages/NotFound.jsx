import React from "react";
import notFoundImage from "../assets/404_NotFound.png";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center bg-slate-200 h-screen justify-center">
      <img
        className="inline-block w-[36rem]"
        src={notFoundImage}
        alt="Not Found"
      />
      <div className="flex items-center mt-4 text-lg">
        <h3>Bạn đã đi lạc.</h3>
        <a className="font-medium text-sky-600 ml-2 hover:underline" href="/">
          Quay về
        </a>
      </div>
    </div>
  );
};

export default NotFound;
