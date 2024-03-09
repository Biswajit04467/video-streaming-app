import Body from "./components/Body";
import Browse from "./components/Browse";
import Header from "./components/Header";
import { Outlet, createBrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
    {
      path: "/",
      element:<Body/>
    },
  {
    path:"/browse",
    element:<Browse/>
  }
  ]
  },
  
])

export default App;
