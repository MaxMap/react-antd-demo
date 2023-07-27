import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider
} from "react-router-dom";
import RouterList from "@/router/index";
import Loading from '@/components/loading'
// import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <React.Suspense fallback={<Loading />}>
      <RouterProvider router={RouterList} />
    </React.Suspense>
  </React.StrictMode>
);
