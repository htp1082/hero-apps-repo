import React from "react";
import googlePlay from "../../assets/google-play_6124997.png";
import appStore from "../../assets/app-store_831276.png";
import heroImg from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="mx-auto">
      <div className="text-4xl font-bold text-center mt-10">
        <h1>We build</h1>
        <h1>
          <span className="simple-gardient">Productive</span> Apps
        </h1>
      </div>

      <div className="text-center mt-5">
        <p>
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.{" "}
        </p>
        <p>
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>

        <div className="mt-5">
          <button className="btn">
            <img src={googlePlay} alt="" srcset="" className="w-5 h-5" />
            Play{" "}
            <a href="https://play.google.com/store/games" target="/">
              Google
            </a>
          </button>
          <button className="btn ml-5">
            <img src={appStore} alt="" srcset="" className="w-5 h-5" />
            <a href="https://www.apple.com/app-store/" target="/">
              App Store
            </a>
          </button>
        </div>

        <img className="mx-auto mt-5" src={heroImg} alt="" />

        <div className="gardient p-10">
          <h1 className="text-4xl font-bold mt-5 mb-5">
            Trusted by Millions, Built for You
          </h1>
          <div className="flex justify-around">
            <div>
              <p>Total Downloads</p>
              <h1 className="text-4xl mb-5 mt-5 font-extrabold">29.6 M</h1>
              <p>21% more than last month</p>
            </div>

            <div>
              <p>Total Reviews</p>
              <h1 className="text-4xl mb-5 mt-5 font-extrabold">906K</h1>
              <p>46% more than last month</p>
            </div>

            <div>
              <p>Active Apps</p>
              <h1 className="text-4xl mb-5 mt-5 font-extrabold">132+</h1>
              <p>31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
