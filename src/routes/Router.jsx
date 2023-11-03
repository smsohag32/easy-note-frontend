import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
// import Overview from "../pages/Overview/Overview";
// import AddNote from "../pages/AddNote/AddNote";
// import AddContact from "../pages/AddContact/AddContact";
import Contacts from "../pages/Contacts/Contacts";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        // element: <Overview />,
        element: <Contacts />,
      },
      // {
      //   path: "/add-note",
      //   element: <AddNote />,
      // },
      // {
      //   path: "/add-contact",
      //   element: <AddContact />,
      // },
      // {
      //   path: "/contacts",
      //   element: <Contacts />,
      // },
    ],
  },
]);

export default router;
