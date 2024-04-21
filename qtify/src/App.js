import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import DataProvider from "./context/DataProvider";
import AlbumSongs from "./pages/AlbumSongs";

//TODO: work on it's responsiveness and add error handling

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DataProvider>
        <Home />
      </DataProvider>
    ),
    children: [
      {
        index: true,
        element: <Songs />,
      },
      {
        path: "albums/:songId",
        element: <AlbumSongs />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
