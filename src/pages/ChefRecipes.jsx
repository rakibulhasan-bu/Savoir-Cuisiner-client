import { useLoaderData } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import LazyLoad from "react-lazy-load";

const ChefRecipes = () => {
  const singleChef = useLoaderData();
  const {
    likes,
    bio,
    bannerImage,
    name,
    numOfRecipes,
    profileImage,
    recipes,
    yearsOfExperience,
  } = singleChef;

  console.log(bannerImage);
  return (
    <section className="text-gray-600">
      <div className="container mx-auto px-5 py-8">
        <div className="mx-auto lg:w-11/12">
          <div className="mx-20 h-96 overflow-hidden rounded-lg">
            <LazyLoad>
              <img
                alt="content"
                className="h-full w-full object-cover object-top"
                src={bannerImage}
              />
            </LazyLoad>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row">
            <div className="text-center sm:w-1/3 sm:py-8 sm:pr-8">
              <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-gray-200">
                <LazyLoad className="h-full w-full">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src={profileImage}
                    alt=""
                  />
                </LazyLoad>
              </div>

              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="title-font mt-4 text-lg font-medium text-gray-900">
                  {name}
                </h2>
                <div className="mb-4 mt-2 h-1 w-12 rounded bg-amber-300"></div>
                <p className="text-base">{name} is a famous chef in france.</p>
                <div className="flex items-center justify-between gap-6">
                  <p className="text-base">
                    Numbers of recipes: {numOfRecipes}
                  </p>
                  <p className="text-base">Likes: {likes}</p>
                </div>
                <p className="text-base">
                  Years of experience: {yearsOfExperience}
                </p>
              </div>
            </div>
            <div className="mt-4 border-t border-gray-200 pt-4 text-center sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8 sm:text-left">
              <p className="mb-4 text-lg leading-relaxed">{bio}</p>
            </div>
          </div>
        </div>
      </div>

      {/* these is card upper section  */}
      <div id="recipes" className="container mx-auto px-5 pb-24">
        <div className="mb-20 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 md:text-5xl">
            {name}&apos;s delicious best recipes
          </h1>
        </div>

        <div className="-m-4 grid grid-cols-1 gap-16 md:grid-cols-2">
          {recipes &&
            recipes.map((singleRecipe) => (
              <RecipeCard key={singleRecipe.id} singleRecipe={singleRecipe} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ChefRecipes;
