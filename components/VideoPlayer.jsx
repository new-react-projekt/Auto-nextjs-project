"use client";
import React from "react";

const VideoPlayer = () => {
  return (
    <section className="videoContainer">
      <div className="relative w-full h-120 overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/Ford-Mustang-GT500.mp4" type="video/mp4" />
        </video>
        <section className="videoitem">
          <h2 className=" text-amber-200 text-5xl font-bold flex flex-col items-center justify-center h-full ">
            we provide a <br /> Reliable & New Car for Sale
          </h2>
        </section>
      </div>
    </section>
  );
};

export default VideoPlayer;
