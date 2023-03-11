import React from "react";
import Navigation from "./Navigation";
import Bg_video from "../assets/bg-video.mp4";

const Header = () => {
  return (
    <header className="">
      <Navigation />
      <div className="">
        <div className="overflow-clip h-[35rem]">
          <video
            className="min-w-full "
            src={Bg_video}
            autoPlay
            preload="auto"
            muted
            loop
          />
        </div>
        <div className="absolute bottom-4 left-8 text-[#ebe0bf] w-[800px] text-5xl bg-black bg-opacity-50 rounded-md ">
          <h1>
            With our wide range of experience, we renovate & build everything
            from residential to commercial projects
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
