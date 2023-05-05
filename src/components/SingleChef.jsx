/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const SingleChef = ({ singleChefData }) => {
  // eslint-disable-next-line react/prop-types
  const {
    id,
    likes,
    bio,
    name,
    numOfRecipes,
    profileImage,
    yearsOfExperience,
  } = singleChefData;
  // console.log(singleChefData);
  console.log(numOfRecipes, name, yearsOfExperience, likes);
  return (
    <div
      id="chefs"
      className="max-w-sm rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-2xl "
    >
      <LazyLoad>
        <img
          className="h-60 w-full rounded-t-lg"
          src={profileImage}
          alt="This is chef's image"
        />
      </LazyLoad>

      <div className="px-5 pb-6 pt-3">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-creamBlack ">
          {name}
        </h5>

        <p className="text-gray-600 ">
          {bio.slice(0, 115)} <span className="text-xl">...</span>{" "}
        </p>

        <div className="flex items-center justify-between py-2 pr-2 font-medium text-gray-600">
          <p>Recipe Number: {numOfRecipes}</p>
          <p>Likes: {likes}</p>
        </div>
        <p className="font-medium text-gray-600">
          Years of experience: {yearsOfExperience}
        </p>
        <div className="mt-auto flex justify-end pt-3">
          <Link
            to={`/chefs/${id}`}
            className="btn inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white"
          >
            View Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleChef;
