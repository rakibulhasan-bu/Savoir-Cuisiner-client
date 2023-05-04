/* eslint-disable react/prop-types */
const RecipeCard = ({ singleRecipe }) => {
  const { cooking_method, image, ingredients, name, price, rating } =
    singleRecipe;
  return (
    <div className="relative flex h-96 rounded-3xl shadow-md hover:shadow-2xl">
      <img
        alt="food image"
        className="absolute inset-0 h-full w-full rounded-3xl bg-slate-500 object-cover object-center"
        src={image}
      />
      <div className="relative z-10 w-full rounded-3xl border border-primary bg-white px-8 py-10 opacity-0 hover:opacity-100">
        <h2 className="title-font mb-1 text-sm font-medium tracking-widest text-indigo-500">
          THE SUBTITLE
        </h2>
        <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
          Alper Kamu
        </h1>
        <p className="leading-relaxed">
          Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
          microdosing tousled waistcoat.
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;
