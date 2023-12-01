import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import ErrorPage from "../components/ErrorPage/ErrorPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: ({params}) =>fetch('/data.json')
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

export default router;