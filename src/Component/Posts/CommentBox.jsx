import React, { useState } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  Flex,
  Box,
} from "@chakra-ui/react";
import {  IoMdShare } from "react-icons/io";
import {  FaImages, FaSmile } from "react-icons/fa";


const CommentBox = () => {
  const [comment, setComment] = useState("");


  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleShare = () => {
    // Handle the share action (e.g., send the comment to a server)
    console.log("Sharing comment:", comment);
    setComment("");
  };

  const handleEmojiClick = () => {
    // Open emoji picker or perform other emoji-related actions
    console.log("Emoji picker clicked");
  };

  return (
    <Flex alignItems="center">
      <InputGroup size="sm">
        <Input
          placeholder="Add a comment..."
          value={comment}
          onChange={handleCommentChange}
          _focus={{
            boxShadow: "none", // Remove the focus highlighting
            borderColor: "gray.100", // Change the border color on focus
          }}
        />
        <InputRightElement width={"30%"}>
          <Flex w={"full"}>
            <Box flex={0.3} cursor="pointer" onClick={handleEmojiClick}>
              <FaSmile color="white.100" />
            </Box>
            <Box flex={0.3} cursor="pointer">
              <FaImages color="gray.100" />
            </Box>
            <Box flex={0.3} cursor="pointer" onClick={handleShare}>
              <IoMdShare color="gray.500" />
            </Box>
          </Flex>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default CommentBox;
