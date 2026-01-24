import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import downloadPic from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";
  import { ToastContainer, toast } from 'react-toastify';
import { addToInstallation } from "../../Urility/AddToDb";

const AppsDetails = () => {
  const data = useLoaderData();
  //   console.log("all Data", data);
  //   const arrayData = Array.isArray(data)? data: data.apps
  const { id } = useParams();
  const parsenId = parseInt(id);
  //   console.log("string", parsenId);
  //   const singlePageData = arrayData.find((singleApp) => singleApp.id === parsenId);
  //   console.log("singleData", singlePageData);
  const singlePage = data.find((singleData) => singleData.id === parsenId);
  const {
    title,
    image,
    downloads,
    ratingAvg,
    companyName,
    reviews,
    description,
  } = singlePage;

  const [install, setInstall] = useState(false);

  const handleBtn = () => {
    console.log("button is click");
    setInstall(true);
    toast("Installing successfully");
    addToInstallation();
  };
  return (
    <div className="p-10">
      <div className="flex gap-10">
        <img src={image} alt="" className="w-80 h-80 rounded-2xl" />
        <div className="w-full">
          <h1 className="text-3xl font-bold">{title}</h1>
          <div className="flex gap-3">
            <h2>Develop By:</h2>
            <p className="text-blue-500">{companyName}</p>
          </div>
          <div className="divider"></div>
          <div className="flex gap-14">
            <div>
              <img src={downloadPic} className="w-5 h-5 ml-6" />
              <p className="mt-2">Downloads</p>
              <h1 className="ml-2 font-extrabold text-2xl">{downloads}</h1>
            </div>

            <div>
              <img src={rating} className="w-5 h-5 ml-6" alt="" />
              <p className="mt-2">Rating</p>
              <h1 className="ml-2 font-extrabold text-2xl">{ratingAvg}</h1>
            </div>
            <div>
              <img src={review} className="w-5 h-5 ml-6" alt="" />
              <p className="mt-2">Review</p>
              <h1 className="font-extrabold text-2xl">{reviews}</h1>
            </div>
          </div>

          <button
            className="bg-green-400 p-4 rounded-2xl text-white font-extrabold mt-5 "
            disabled={install}
            onClick={handleBtn}
          >
            {install ? "Installed" : "Install Now"}
          </button>
        </div>
      </div>

      <div className="mt-5">
        <h1>Description:</h1>
        <p>{description}</p>
      </div>
              <ToastContainer />
    </div>
  );
};

export default AppsDetails;
