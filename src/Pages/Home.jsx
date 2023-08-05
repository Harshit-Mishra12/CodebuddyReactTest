import React from "react";

import { Box } from "@chakra-ui/react";
import MultiStepForm from "../Component/Register/MultiStepForm";
import Navbar from "../Component/Navbar";


const Home = () => {


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
