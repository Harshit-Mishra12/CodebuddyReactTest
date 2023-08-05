import { Box,  Image } from "@chakra-ui/react";
import React from "react";


export const ProfileIcon = ({avatar}) => {
console.log("avtar:",avatar)
  return (
    <>
      <Box
width={"30px"}
height={"30px"}
borderRadius={"50%"}
overflow="hidden"
>

  <Image
    src={avatar}
    height={"100%"}
    width={"100%"}
    alt="logo"
    cursor="pointer"
  />

</Box>
    </>
  );
};

export default ProfileIcon;
