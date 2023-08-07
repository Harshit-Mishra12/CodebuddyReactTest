import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import { PrivateRoute } from "./PrivateRoutes";
import Post from '../Pages/Post'



export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<PrivateRoute><Post/></PrivateRoute>} />
      <Route path="/logout" element={<Home />} />
    </Routes>
  );
};
