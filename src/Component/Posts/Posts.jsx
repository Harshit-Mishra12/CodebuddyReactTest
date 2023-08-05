import { Box, VStack, Flex } from "@chakra-ui/react";
import React from "react";
import PostsList from "./PostsList";

export const Posts = () => {

  return (
    <>
      <Flex direction="row">
        <VStack flex={1}>
          {/* <Box width={"100%"}>
            <HeadContent />
          </Box> */}
          <Box width={"100%"}>
            <PostsList />
          </Box>
        </VStack>

      </Flex>
    </>
  );
};

export default Posts;
