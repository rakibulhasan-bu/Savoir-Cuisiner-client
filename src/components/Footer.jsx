// import React from 'react';

const Footer = () => {
  return (
    <div className="bg-creamBlack">
      <footer className="container mx-auto">
        <div className="md:flex-no-wrap container mx-auto flex flex-col flex-wrap px-5 py-10 md:flex-row md:items-center md:py-16 lg:items-start">
          <div className="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left">
            <a className="title-font flex items-center justify-center font-medium text-primary md:justify-start">
              <h4 className="pb-3 text-2xl italic">Savoir Cuisiner</h4>
            </a>
            <p className="mt-2 text-sm text-Gray">
              Savoir Cuisiner - Celebrating the Best of French Cuisine!
            </p>
            <p className="mt-2 text-sm text-Gray">
              14 Rue des Petits Champs, 75001 Paris, France.
            </p>
            <div className="mt-4">
              <span className="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
                <a className="cursor-pointer text-Gray hover:text-primary">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 cursor-pointer text-Gray hover:text-primary">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 cursor-pointer text-Gray hover:text-primary">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 cursor-pointer text-Gray hover:text-primary">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>

          <div className="-mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left">
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="title-font mb-6 text-sm font-medium uppercase tracking-widest text-primary">
                About
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="cursor-pointer text-Gray hover:text-primary">
                    Company
                  </a>
                </li>
                <li className="mt-3">
                  <a className="cursor-pointer text-Gray hover:text-primary">
                    Careers
                  </a>
                </li>
                <li className="mt-3">
                  <a className="cursor-pointer text-Gray hover:text-primary">
                    Blog
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="title-font mb-6 text-sm font-medium uppercase tracking-widest text-primary">
                Support
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="cursor-pointer text-Gray hover:text-primary">
                    Contact Support
                  </a>
                </li>
                <li className="mt-3">
                  <a className="cursor-pointer text-Gray hover:text-primary">
                    Help Resources
                  </a>
                </li>
                <li className="mt-3">
                  <a className="cursor-pointer text-Gray hover:text-primary">
                    Release Updates
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="title-font mb-6 text-sm font-medium uppercase tracking-widest text-primary">
                Platform
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="cursor-pointer text-Gray hover:text-primary">
                    Terms &amp; Privacy
                  </a>
                </li>
                <li className="mt-3">
                  <a className="cursor-pointer text-Gray hover:text-primary">
                    Pricing
                  </a>
                </li>
                <li className="mt-3">
                  <a className="cursor-pointer text-Gray hover:text-primary">
                    FAQ
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="title-font mb-6 text-sm font-medium uppercase tracking-widest text-primary">
                Contact
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="cursor-pointer text-Gray hover:text-primary">
                    Send a Message
                  </a>
                </li>
                <li className="mt-3">
                  <a className="cursor-pointer text-Gray hover:text-primary">
                    Request a Quote
                  </a>
                </li>
                <li className="mt-3">
                  <a className="cursor-pointer text-Gray hover:text-primary">
                    +123-456-7890
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-5 py-4">
          <p className="text-sm text-Gray xl:text-center">
            © 2023 All content on Savoir Cuisiner is protected by copyright law.
            All rights reserved by
            <span className="cursor-pointer text-primary"> Rakibul Hasan</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
