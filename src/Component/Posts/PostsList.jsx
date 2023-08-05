import { Box, SimpleGrid } from "@chakra-ui/react";
import React ,{useEffect,useState} from "react";
import { posts as data} from "../../Assets/dummy";
import PostsCard from "./PostsCard";

export const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    setPosts(data);
  },[]);
  return (
    <Box>
      <SimpleGrid
        columns={{ base: 1,sm: 1, md: 3, lg: 3  }}
        spacingX="8"
        spacingY={8}
        w="100%"
        p="20px"
      >
        {posts.map((el,index) => (

              <PostsCard key={el.id} el={el} />

        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PostsList;
