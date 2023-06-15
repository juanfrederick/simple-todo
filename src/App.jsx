import { useRoutes } from "react-router-dom";
import DoList from "./Pages/DoList";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  const route = useRoutes([
    { path: "/login", element: <Login /> },
    { path: "/", element: <DoList /> },
    { path: "signup", element: <Signup /> },
  ]);

  return route;
}

export default App;
