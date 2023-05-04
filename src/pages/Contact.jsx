// import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="body-font relative text-gray-600">
        <div className="container mx-auto flex flex-wrap px-5 py-24 sm:flex-nowrap">
          <div className="relative flex items-end justify-start overflow-hidden rounded-lg bg-gray-300 p-10 sm:mr-10 md:w-1/2 lg:w-3/5">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2795238.902747083!2d-0.49137046500741716!3d46.82940647897561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sfrance%20restaurants!5e0!3m2!1sen!2sus!4v1683209912160!5m2!1sen!2sus"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              // style={{filter= grayscale(1), contrast(1), opacity(0.4)}}
            ></iframe>
            <div className="relative flex flex-wrap rounded  py-6 shadow-md">
              <div className="px-6 lg:w-1/2">
                <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div className="mt-4 px-6 lg:mt-0 lg:w-1/2">
                <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">
                  EMAIL
                </h2>
                <a className="leading-relaxed text-indigo-500">
                  example@email.com
                </a>
                <h2 className="title-font mt-4 text-xs font-semibold tracking-widest text-gray-900">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex w-full flex-col  md:ml-auto md:mt-0 md:w-1/2 md:py-8 lg:w-1/3">
            <h2 className="title-font mb-1 text-xl font-medium text-gray-900">
              We want to know your feedback
            </h2>
            <p className="mb-5 leading-relaxed text-gray-600">
              Give your feedback and rating for future better service.
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="text-sm leading-7 text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="text-sm leading-7 text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="h-32 w-full resize-none rounded border border-gray-300 bg-white px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              ></textarea>
            </div>
            <button className="btn flex justify-center rounded border-0 px-6 py-2 text-center text-lg text-white focus:outline-none">
              <p>Submit</p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
