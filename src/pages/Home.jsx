// import React from "react";

import ServingComponent from "../components/ServingComponent";
import Testimonial from "../components/Testimonial";
import Chefs from "../components/chefs";

const Home = () => {
  return (
    <div>
      {/* banner section design here  */}
      <div className=" flex h-[88vh] items-center justify-center bg-coverImg bg-cover bg-center text-white ">
        <div className="max-w-5xl space-y-6 text-center leading-tight">
          <h2 className="text-4xl font-bold text-Gray md:text-6xl">
            Discover the Best of French Cuisine with{" "}
            <span className="text-primary">Savoir Cuisiner</span>
          </h2>
          <p className="px-16 text-xl text-Gray">
            At Savoir Cuisiner, we are passionate about French food culture and
            are dedicated to sharing the very best recipes and culinary
            traditions with our readers. Our website is a treasure trove of
            delicious recipes, fascinating insights, and helpful tips and tricks
            for cooks of all skill levels.
          </p>
          <div className="flex items-center justify-center pt-4">
            <button className="btn">Let&apos;s Explore</button>
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
