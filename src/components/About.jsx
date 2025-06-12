import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px] md:text-[6rem]">
          Welcome to Zentry
        </h2>
        <AnimatedTitle
          title=" Disc<b>o</b>ver the world of gaming and technology with us"
          containerClass="mt-5 !text-black text-center"
        />
        <div className="about-subtext">
          <p>
            At Zentry, we are passionate about gaming and technology. Our
            mission is to provide you with the latest news, reviews, and
            insights into the gaming world. Whether you're a casual gamer or a
            hardcore enthusiast, we have something for everyone.
          </p>
          <p>
            Join us on this exciting journey as we explore the latest trends,
            innovations, and developments in the gaming industry. From in-depth
            game reviews to tech tutorials, Zentry is your go-to source for all
            things gaming and technology.
          </p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
