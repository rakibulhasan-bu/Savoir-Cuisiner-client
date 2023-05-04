// import React from 'react';

const Testimornial = () => {
  return (
    <div className="container mx-auto px-5 py-2">
      <h1 className="title-font mb-12 text-center text-3xl font-medium text-gray-900">
        Testimonials
      </h1>
      <div className="-m-4 flex flex-wrap">
        <div className="w-full p-4 md:w-1/2">
          <div className="h-full rounded bg-gray-100 p-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="mb-4 block h-5 w-5 text-gray-400"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="mb-6 leading-relaxed">
              I stumbled upon this website while searching for unique and
              elegant recipes for a dinner party. I was blown away by the
              beautiful photography and the variety of dishes offered. The
              instructions were clear and easy to follow, and the results were
              absolutely delicious! The warm chocolate cake with hazelnut ice
              cream was a hit with my guests, and I can&apos;t wait to try more
              recipes from this site. Thank you for making me look like a pro in
              the kitchen!
            </p>
            <a className="inline-flex items-center">
              <img
                alt="testimonial"
                src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1683217680/Rakibul_Hasan/OIP_2_rbzjrs.jpg"
                className="h-12 w-12 flex-shrink-0 rounded-full object-cover object-center"
              />
              <span className="flex flex-grow flex-col pl-4">
                <span className="title-font font-medium text-gray-900">
                  Holden Caulfield
                </span>
                <span className="text-sm text-gray-500">Manager</span>
              </span>
            </a>
          </div>
        </div>
        <div className="w-full p-4 md:w-1/2">
          <div className="h-full rounded bg-gray-100 p-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="mb-4 block h-5 w-5 text-gray-400"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="mb-6 leading-relaxed">
              As a seafood lover, I was thrilled to find so many mouth-watering
              recipes featuring lobster, langoustine, and red mullet on this
              website. The lobster with curry and lemongrass was a standout
              dish, and the flavors were perfectly balanced. The recipe was
              straightforward and easy to follow, even for someone like me who
              doesn&apos;t consider themselves an expert cook. I appreciate the
              attention to detail and the use of high-quality ingredients in all
              of the recipes on this site. Highly recommended!
            </p>
            <a className="inline-flex items-center">
              <img
                alt="testimonial"
                src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1683217680/Rakibul_Hasan/OIP_4_tbtogy.jpg"
                className="h-12 w-12 flex-shrink-0 rounded-full object-cover object-center"
              />
              <span className="flex flex-grow flex-col pl-4">
                <span className="title-font font-medium text-gray-900">
                  Alper Kamu
                </span>
                <span className="text-sm text-gray-500">Blogger</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimornial;
