import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About.jsx";
import Project from "./components/Project.jsx";
import ProjectList from "./pages/ProjectList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
  },
  {
    path: "/about",
    element: <About />,
    // loader: rootLoader,
  },
  {
    path: "/projects",
    element: <ProjectList />,
  },
  {
    path: "/projects/:projectId",
    element: <Project />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
