/* eslint-disable react/prop-types */
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useState } from "react";
import MyDocument from "./MyDocument";

const SingleBlog = ({ singleblog }) => {
  const [show, setShow] = useState(false);

  const { description, heading, image, shortParagraph } = singleblog;
  return (
    <div>
      <img src={image} className="h-80 w-full" />
      <div className="mb-8 mt-8 lg:mb-0">
        <h1 className="text-2xl font-semibold leading-7">{heading}</h1>

        {show ? (
          <div className="mt-2 indent-8 text-base leading-7 text-gray-600">
            {description}
          </div>
        ) : (
          <p className="mt-2 indent-8 text-base leading-7 text-gray-600">
            {shortParagraph}
          </p>
        )}

        <div className="mt-4 flex items-center justify-between">
          <p
            onClick={() => setShow(!show)}
            className="cursor-pointer text-base font-semibold text-indigo-700 underline"
          >
            {show ? <span>Read less</span> : <span>Read More</span>}
          </p>
          <PDFDownloadLink document={<MyDocument />} fileName="Blog post">
          {({ loading }) =>
            loading ? (
              <button className="btn py-1">Loading Document...</button>
            ) : (
              <button className="btn py-1">Download</button>
            )
          }
        </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
