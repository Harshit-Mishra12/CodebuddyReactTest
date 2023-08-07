import React, { useEffect } from "react";

import { Box } from "@chakra-ui/react";
import MultiStepForm from "../Component/Register/MultiStepForm";
import Navbar from "../Component/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate=useNavigate();
  const { isAuth} = useSelector(
    (store) => store.AuthReducer
  );

  useEffect(() => {
    console.log("checking auth value:", isAuth);

    if (isAuth) {
      navigate('/posts');
    }
  });


  return (
    <>
      <Box margin={10} boxShadow="lg">
         <Navbar />
         <MultiStepForm/>
      </Box>
    </>
  );
};

export default Home;
