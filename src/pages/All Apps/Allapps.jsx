import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Apps from "../Apps/Apps";
import Nofound from "../No Found/Nofound";

const Allapps = () => {
  const allData = useLoaderData();

  const [search, setSearch] = useState("");

  const filterdApps = allData.filter((apps) =>
    apps.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <div>
        <div className="text-center mb-15 mt-15">
          <h1 className="font-bold text-4xl ">Our All Applications</h1>
          <p className="mt-5 text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex justify-between items-center m-10">
          <h2>({allData.length}) Apps Found</h2>
          <div>
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
              placeholder="Search apps"
              className="input"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 gap-5 ">
          {filterdApps.length > 0 ? (
            filterdApps.map((apps) => <Apps key={apps.id} apps={apps}></Apps>)
          ) : (
            <Nofound></Nofound>
          )}
        </div>
      </div>
    </div>
  );
};

export default Allapps;
