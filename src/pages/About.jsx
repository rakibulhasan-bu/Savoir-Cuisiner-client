// import React from 'react';

const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto px-4 py-9 md:px-6 md:py-12 lg:px-20 lg:py-16">
      <div className="w-full lg:w-10/12">
        <h2 className="mt-2 w-full text-3xl font-bold leading-9 text-gray-800 lg:w-10/12 lg:text-4xl lg:leading-10 xl:w-11/12">
          Discover the journey behind our passion for culinary excellence
        </h2>
        <p className="mt-6 text-base font-normal leading-6 text-gray-600">
          At Savoir Cuisiner, we are dedicated to celebrating the rich history
          and culture of French cuisine. Our website is a go-to destination for
          anyone who is passionate about cooking, food culture, and exploring
          the culinary traditions of France.
        </p>
      </div>

      <div className="mt-12 sm:mt-10 lg:mt-10">
        <img
          className="h-80 w-full object-cover lg:block lg:h-[80vh]"
          src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1683219394/Rakibul_Hasan/restaurant_lajykx.jpg"
          alt="Group of people Chilling"
        />
      </div>

      <p className="mt-6 text-base font-normal leading-6 text-gray-600">
        At Savoir Cuisiner, we are proud to be a trusted resource for cooks of
        all skill levels. We believe that anyone can learn to cook delicious and
        authentic French dishes with the right guidance and inspiration, and we
        aim to provide that through our website. Whether youre looking for a
        quick and easy weeknight meal or a show-stopping dish for a special
        occasion, weve got you covered.
      </p>
      <div className="mt-16 flex flex-col justify-between gap-12 sm:mt-12 lg:mt-16 lg:flex-row lg:gap-8">
        <div className="w-full lg:w-6/12 xl:w-5/12">
          <h2 className="text-3xl font-bold leading-7 text-gray-800 lg:text-4xl lg:leading-9">
            Our Story
          </h2>
          <p className="mt-4 text-base font-normal leading-6 text-gray-600">
            Our team of experienced writers, chefs, and photographers is
            committed to bringing you the best of French cuisine. We believe
            that food is not just fuel for the body, but a reflection of our
            culture, history, and identity. Through our website, we aim to share
            our love for French food with readers all over the world, and
            inspire them to cook and explore the amazing variety of flavors and
            techniques that French cuisine has to offer.
          </p>
          <p className="mt-6 text-base font-normal leading-6 text-gray-600">
            We offer a wide range of recipes, from classic dishes to modern
            creations from some of Frances top culinary talents. Whether youre a
            beginner or a seasoned cook, we provide clear and concise
            instructions that make it easy to create delicious and authentic
            French dishes in your own kitchen. Our recipes are designed to be
            accessible and easy to follow, without sacrificing any of the rich
            and complex flavors that make French cuisine so special.
          </p>
        </div>
        <div className="w-full items-center lg:flex lg:w-1/2 ">
          <img
            className=" h-3/4 w-full sm:block "
            src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1683219392/Rakibul_Hasan/restaurant_banner_cd9a3f.jpg"
            alt="people discussing on board"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
