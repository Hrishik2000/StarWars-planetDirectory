import Body from "./components/Body";
import ResidentsDetails from "./components/ResidentsDetails.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Routing
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/residents",

    element: <ResidentsDetails />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
