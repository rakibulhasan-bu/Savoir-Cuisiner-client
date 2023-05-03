// import React from 'react';

const About = () => {
  return (
    <div>
      <div className="2xl:container 2xl:mx-auto px-4 py-9 md:px-6 md:py-12 lg:px-20 lg:py-16">
        <div className="w-full lg:w-10/12">
          <p className="cursor-pointer text-sm font-normal leading-3 text-indigo-700 hover:text-indigo-800">
            About
          </p>
          <h2 className="mt-2 w-full text-3xl font-bold leading-9 text-gray-800 lg:w-10/12 lg:text-4xl lg:leading-10 xl:w-8/12">
            We are here to make great design accessible and delightfull for
            everyone
          </h2>
          <p className="mt-6 text-base font-normal leading-6 text-gray-600">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire,
          </p>
        </div>

        <div className="mt-12 sm:mt-10 lg:mt-14">
          <img
            className="hidden w-full lg:block"
            src="https://i.ibb.co/GvwJnvn/Group-736.png"
            alt="Group of people Chilling"
          />
          <img
            className="hidden w-full sm:block lg:hidden"
            src="https://i.ibb.co/5sZTmHq/Rectangle-116.png"
            alt="Group of people Chilling"
          />
          <img
            className="block w-full sm:hidden"
            src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png"
            alt="Group of people Chilling"
          />
        </div>

        <div className="mt-16 flex flex-col justify-between gap-12 sm:mt-12 lg:mt-16 lg:flex-row lg:gap-8">
          <div className="w-full lg:w-6/12 xl:w-5/12">
            <h2 className="text-3xl font-bold leading-7 text-gray-800 lg:text-4xl lg:leading-9">
              Our Story
            </h2>
            <p className="mt-4 text-base font-normal leading-6 text-gray-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire, and her liberties inviolate; and we will
              that it be thus observed; which is apparent from
            </p>
            <p className="mt-6 text-base font-normal leading-6 text-gray-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire, and her liberties inviolate; and we will
              that it be thus observed; which is apparent from
            </p>
          </div>
          <div className="w-full items-center lg:flex lg:w-1/2 ">
            <img
              className="hidden w-full lg:block"
              src="https://i.ibb.co/2kxWpNm/Group-740.png"
              alt="people discussing on board"
            />
            <img
              className="hidden h-3/4 w-full sm:block lg:hidden"
              src="https://i.ibb.co/ZLgK3NQ/Group-788.png"
              alt="people discussing on board"
            />
            <img
              className="block w-full sm:hidden"
              src="https://i.ibb.co/9g2R7Xr/Group-803.png"
              alt="people discussing on board"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
