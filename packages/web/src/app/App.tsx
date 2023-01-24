import { Route, Routes } from "react-router-dom";

import { NavBar } from "./nav-bar/NavBar";
import Home from "./routes/home/Home";
import Settings from "./routes/settings/Settings";

import "./App.module.css";

export function App() {
  const routes = [
    {
      name: "Home",
      href: "/",
      element: <Home />,
      current: true,
    },
    {
      name: "Settings",
      href: "/settings",
      element: <Settings />,
      current: false,
    }
  ]

  return (
    <div className="mx-auto max-w-7xl bg-gray-50 pt-12 sm:pt-16">
      <div className="sm:block">
        <div className="border-b border-gray-200">
          <NavBar routes={routes} />
        </div>
      </div>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={`route-${index}-${route.name.toLocaleLowerCase()}`}
            path={route.href}
            element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
