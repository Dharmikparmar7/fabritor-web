import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HtmlComponent from "./module-component";
import "./i18n";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Remote App</h1>
        <HtmlComponent />
      </div>
    ),
  },
]);

const App = () => <RouterProvider router={router} />;

ReactDOM.render(<App />, document.getElementById("root"));
