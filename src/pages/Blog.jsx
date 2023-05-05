import { useLoaderData } from "react-router-dom";
import SingleBlog from "../components/SingleBlog";

// eslint-disable-next-line react-hooks/rules-of-hooks

const Blog = () => {
  const blogData = useLoaderData();
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="pt-0 text-center text-5xl font-semibold text-primary">
        Recent Blogs
      </h1>

      <div className="grid grid-cols-1 gap-16 px-4 pt-14 lg:grid-cols-2 xl:px-0">
        {blogData &&
          blogData.map((singleblog, index) => (
            <SingleBlog key={index} singleblog={singleblog} />
          ))}
      </div>
      {/* <div className="my-16 flex w-full items-center justify-center">
        <button className=" rounded border border-2 border-indigo-700 px-6 py-3 text-sm font-semibold text-indigo-700 hover:bg-gray-200 focus:outline-none md:text-lg lg:px-12 lg:py-6 lg:text-2xl xl:leading-4">
          Browse More
        </button>
      </div> */}
    </div>
  );
};

export default Blog;
