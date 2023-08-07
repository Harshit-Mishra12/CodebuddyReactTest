import React  from "react";
import Posts  from "../Component/Posts/Posts";
import { Box } from "@chakra-ui/react";
import Navbar from "../Component/Navbar";



const Post = () => {



  return (
    <>
      <Box margin={10} boxShadow="lg">
        <Navbar/>
        <Posts />
      </Box>
    </>
  );
};

export default Post;
