import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();

  return (
    <div>
      <section className="flex items-center h-screen p-16 dark:bg-gray-900 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
              <span className="sr-only">Error</span>
              {status}
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-400">{statusText}</p>
            <Link to="/">
              <button
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900"
              >
                Back to homepage
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
