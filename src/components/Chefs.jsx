import { useContext } from "react";
import { Context } from "../contextJs/ContextProvider";
import SingleChef from "./singleChef";

const Chefs = () => {
  const { chefsData } = useContext(Context);
  return (
    <section className="container mx-auto px-5 py-24">
      <div className="mb-20 flex w-full flex-wrap justify-between ">
        <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
          <h1 className="mb-2 text-2xl font-semibold text-creamBlack md:text-4xl">
            Discover the Culinary Wizards of France
          </h1>
          <div className="h-1 w-28 rounded bg-amber-400"></div>
        </div>
        <p className="w-full text-lg leading-relaxed text-gray-600 lg:w-1/2">
          Get to know the eight renowned chefs of France, who have made a name
          for themselves in the culinary world with their unique styles and
          signature dishes. Learn about their backgrounds, inspirations, and
          cooking philosophies.
        </p>
      </div>
      <div className="-m-4 grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {chefsData &&
          chefsData.map((singleChefData) => (
            <SingleChef
              key={singleChefData.id}
              singleChefData={singleChefData}
            />
          ))}
      </div>
    </section>
  );
};

export default Chefs;
