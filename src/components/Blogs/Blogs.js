import React from "react";

const Blogs = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mb-10 border-t border-b divide-y">
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <p
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                React Router
              </p>
              <p className="text-gray-600">11 Oct 2022</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <p
                aria-label="Article"
                className="inline-block text-slate-600 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  What is the purpose of React Router?
                </p>
              </p>
            </div>
            <p className="text-gray-500">
              React Router is a standard library for routing in React. It
              enables the navigation among views of various components in a
              React Application, allows changing the browser URL, and keeps the
              UI in sync with the URL. At its heart, React Router is a state
              container for the current location , or URL. It keeps track of the
              location and renders different Route s as it changes, and it also
              gives you tools to update the location using Link s and the
              history API.
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <p
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                React
              </p>
              <p className="text-gray-600">11 Oct 2022</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <p
                aria-label="Article"
                className="inline-block text-slate-600 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  How does Context API works?
                </p>
              </p>
            </div>
            <p className="text-gray-500">
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. React context works by exposing a
              ´context object´.This context object, has a `Provider` component
              that allows as many other components as possible below it who need
              access to context object changes, subscribe to it. This means that
              context changes can be subscribed to on the component hierarchy by
              consuming components who must be children of Provider components.
              It comes with a value prop, which is passed to the components down
              the tree that are descendants of the said Provider. This means
              that whenever the Provider props changes, these changes would also
              be propagated down the tree to every component subscribed to the
              Provider component, which would of course cause a re-render.
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <p
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                React Router
              </p>
              <p className="text-gray-600">11 Oct 2022</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <p
                aria-label="Article"
                className="inline-block text-slate-600 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  What is the useRef hook in React?
                </p>
              </p>
            </div>
            <p className="text-gray-500">
              The useRef is a hook that allows to directly create a reference to
              the DOM element in the functional component.The useRef returns a
              mutable ref object. This object has a property called .current.
              The value is persisted in the refContainer.current property. These
              values are accessed from the current property of the returned
              object. The .current property could be initialised to the passed
              argument initialValue e.g. useRef(initialValue). The object can
              persist a value for a full lifetime of the component.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
