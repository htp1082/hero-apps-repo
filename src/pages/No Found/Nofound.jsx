import React from "react";
import notfound from "../../assets/App-Error.png";
import { useNavigate } from "react-router";

const Nofound = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex justify-center items-center w-screen">
      <div className="text-center">
        <img src={notfound} alt="Not Found" className="mx-auto" />
        <h1 className="text-3xl mt-3 text-center">OPPS!! APP NOT FOUND</h1>
        <p className="mt-2">
          The App you are requesting is not found on our system. Please try
          another app.
        </p>

        <button
          onClick={handleBack}
          className="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 "
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Nofound;
