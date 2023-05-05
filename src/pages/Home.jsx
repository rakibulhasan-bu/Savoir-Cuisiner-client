// import React from "react";

import ServingComponent from "../components/ServingComponent";
import Testimonial from "../components/Testimonial";
import Chefs from "../components/chefs";

const Home = () => {
  return (
    <div>
      {/* banner section design here  */}
      <div className=" flex h-96 items-center justify-center bg-coverImg bg-cover bg-center text-white lg:h-[88vh] ">
        <div className="max-w-5xl space-y-6 text-center leading-tight">
          <h2 className="px-4 text-3xl font-bold text-Gray md:text-6xl lg:px-0">
            Discover the Best of French Cuisine with{" "}
            <span className="text-primary">Savoir Cuisiner</span>
          </h2>
          <p className=" text-sm text-Gray lg:px-16 lg:text-xl">
            At Savoir Cuisiner, we are passionate about French food culture and
            are dedicated to sharing the very best recipes and culinary
            traditions with our readers. Our website is a treasure trove of
            delicious recipes, fascinating insights, and helpful tips and tricks
            for cooks of all skill levels.
          </p>
          <div className="flex items-center justify-center pt-4">
            <a href="#chefs">
              <button className="btn">Let&apos;s Explore</button>
            </a>
          </div>
        </div>
      </div>

      {/* chefs section statrt here  */}
      <Chefs />
      {/* testimonial section here  */}
      <Testimonial />
      {/* stats section here  */}
      <ServingComponent />
    </div>
  );
};

export default Home;
