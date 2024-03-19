import { Provider } from "react-redux";
import Body from "./components/Body";
import Browse from "./components/Browse";
import Header from "./components/Header";
import { Outlet, createBrowserRouter } from 'react-router-dom'
import appStore from "./Redux/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/browse",
        element: <Browse />
      }
    ]
  },

])

export default App;
