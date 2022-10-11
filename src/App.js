import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Cards from "./components/Cards/Cards";
import Quiz from "./components/Quiz/Quiz";
import Stats from "./components/Stats/Stats";
import Error from "./Error/Error";
import Main from "./layout/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Cards></Cards>,
      },
      {
        path: "/quiz/:id",
        loader: async ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element: <Quiz></Quiz>,
      },
      {
        path: "/statistics",
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Stats></Stats>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
