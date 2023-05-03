import { useLoaderData } from "react-router-dom";

const ChefRecipes = () => {
  const singleChefData = useLoaderData();
  return <div>chef recipes here{singleChefData.name}</div>;
};

export default ChefRecipes;
