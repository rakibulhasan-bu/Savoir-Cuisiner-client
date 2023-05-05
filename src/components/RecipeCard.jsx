/* eslint-disable react/prop-types */
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FaHeart, FaStar } from "react-icons/fa";
const RecipeCard = ({ singleRecipe }) => {
  const { cooking_method, image, ingredients, name, price, rating } =
    singleRecipe;
  const [disable, setDisable] = useState(false);
  const handletoast = () => {
    setDisable(!disable);
    toast.success(
      disable
        ? "This recipe is removed to your favorite recipe list"
        : "This recipe is added to your favorite recipe list"
    );
  };
  return (
    <div className="relative flex h-[90vh] overflow-hidden rounded-3xl shadow-md hover:shadow-2xl">
      <img
        alt="food image"
        className="absolute inset-0 h-full w-full rounded-3xl bg-slate-500 object-cover object-center"
        src={image}
      />
      <div>
        <Toaster />
      </div>
      <div className="relative z-10 w-full rounded-3xl border border-primary bg-white px-6 py-6 opacity-0 hover:opacity-100">
        <div className="flex justify-between">
          <h1 className="mb-3 w-3/5 text-lg font-medium text-gray-900">
            {name}
          </h1>
          <h2 className="title-font mb-1 text-sm font-medium tracking-widest text-primary">
            ${price}
          </h2>
          <h2 className=" mb-1 flex  text-sm font-medium tracking-widest text-primary">
            {rating}
            <FaStar />
          </h2>
          <FaHeart
            onClick={handletoast}
            className={`cursor-pointer text-xl ${
              disable ? "text-red-500" : "text-gray-800"
            }`}
          />
        </div>
        <div>
          <h2 className="title-font mb-1 text-sm font-medium tracking-widest text-primary">
            Ingredients:
          </h2>
          <div className="grid list-decimal grid-cols-2 justify-between text-sm">
            {ingredients &&
              ingredients.map((singleIngradient, index) => (
                <li key={index}>{singleIngradient}</li>
              ))}
          </div>
        </div>

        <div>
          <h2 className="title-font mb-1 text-sm font-medium tracking-widest text-primary">
            Cooking method:
          </h2>
          <div className="text-sm">
            {cooking_method &&
              cooking_method.map((singleMethod, index) => (
                <li key={index}>{singleMethod}</li>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
