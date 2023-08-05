import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Post from "../Pages/Post";



export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Post />} />
    </Routes>
  );
};
