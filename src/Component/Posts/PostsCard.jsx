import React from "react";
import {
  Box,
  Image,
  Text,
  HStack,
  Icon,
  Flex,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaHeart, FaComment, FaShareAlt } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";

import "../../Constants/index.css";
import ProfileIcon from "./ProfileIcon";
import CommentBox from "./CommentBox";

const PostsCard = ({ el }) => {
    //eslint-disable-next-line
  const { firstName, lastName, writeup, image, avatar } = el;

  const [isMobile] = useMediaQuery("(max-width: 768px)");
  var iconSize="";
  var iconTextSize="";
  if(isMobile)
  {
    iconSize=2;
    iconTextSize="6px";
  }
  else{
    iconSize=4;
    iconTextSize="8px";
  }

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      position={"relative"}
      cursor={"pointer"}
      padding={4}
    >
      <Flex flexDirection={"row"}>
       <ProfileIcon avatar={avatar}/>

        <VStack mx={2}  alignItems={'flex-start'}>
          <Text fontSize={"8px"} fontWeight={"bold"}>
            Harshit Mishra
          </Text>
          <Text fontSize={"8px"} color={"gray"} marginTop="-8px">
            {" "}
            12 th April at 02.00pm
          </Text>
        </VStack>

        <HStack></HStack>
      </Flex>
      <HStack my={2}>
        <Text fontSize={"8px"} textAlign="left">
          An Express Writers infographic suggests that your posts work best at
          40 characters or fewer, earning 86% more engagement than longer posts.
        </Text>
      </HStack>
      <HStack width={"100%"} height={"200px"}>
        <Image
          src={image}
          height={"100%"}
          width={"100%"}
          alt="logo"
          cursor="pointer"
        />
      </HStack>
      <Flex flexDirection={"row"} mt={4}>
        <Flex flex={0.25}>
          <HStack>
            <Icon
              as={FaComment}
              color={"gray.300"}
              boxSize={iconSize}
              cursor="pointer"
              //   onClick={() => handleRatingChange(num)}
            />

            <Text fontSize={iconTextSize}>25 Comments</Text>
          </HStack>
        </Flex>

        <Flex
          flex={0.25}
          justifyContent={"space-around"}
          //   backgroundColor={"red"}
        >
          <HStack>
            <Icon
              as={FaHeart}
              color={"gray.300"}
              boxSize={iconSize}
              cursor="pointer"

              //   onClick={() => handleRatingChange(num)}
            />

            <Text fontSize={iconTextSize}>120k Likes</Text>
          </HStack>
        </Flex>
        <Flex
          flex={0.25}
          justifyContent={"space-around"}
          //   backgroundColor={"red"}
        >
          <HStack>
            <Icon
              as={FaShareAlt}
              color={"gray.300"}
              boxSize={iconSize}
              cursor="pointer"
              //   onClick={() => handleRatingChange(num)}
            />

            <Text fontSize={iconTextSize}>231 share</Text>
          </HStack>
        </Flex>
        <Flex
          flex={0.25}
          justifyContent={"space-around"}
          //   backgroundColor={"red"}
        >
          <HStack>
            <Icon
              as={BsBookmark}
              color={"gray.300"}
              boxSize={iconSize}
              cursor="pointer"
              //   onClick={() => handleRatingChange(num)}
            />

            <Text fontSize={iconTextSize}>12 Saved</Text>
          </HStack>
        </Flex>
      </Flex>
      <Flex flexDirection={'row'} alignItems={'center'} mt={4}>
        <Box flex={0.1}>
       <ProfileIcon avatar={avatar}/>
       </Box>
        <Box flex={0.9} ml={1}>
        <CommentBox/>
        </Box>

      </Flex>
    </Box>
  );
};

export default PostsCard;
