import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards/Cards";
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
