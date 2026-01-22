import React from "react";
import download from "../../assets/icon-downloads.png"
import rating from "../../assets/icon-ratings.png"

const Apps = ({ apps }) => {
  console.log(apps);
  const { title, image, downloads, ratingAvg } = apps;
  return (
    <div>
      <div className="card bg-base-70 w-80 shadow-sm">
        <figure className="px-4 pt-4">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body text-left">
          <h2 className=" text-left text-xl">{title}</h2>
          <div className="card-actions flex justify-between">
            <div className="flex bg-[#F1F5E8] p-2 rounded-xl gap-3">
              <img src={download} alt="" srcset="" className="w-5 h-5" />{" "}
              <p className="text-[#00D390]">{downloads}</p>
            </div>
            <div className="flex bg-[#FFF0E1] p-2 gap-3 rounded-xl">
              <img src={rating} alt="" srcset="" className="w-5 h-5" />{" "}
              {ratingAvg}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
