import './App.css';
import Body from './components/Body.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
  },
  // {
  //   path: "/next",
  //   element: <Next/>,
  // }
    
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
