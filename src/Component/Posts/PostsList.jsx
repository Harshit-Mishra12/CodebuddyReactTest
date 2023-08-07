import { Box, SimpleGrid } from "@chakra-ui/react";
import React ,{useEffect,useState} from "react";
// import { posts as data} from "../../Assets/dummy";
import PostsCard from "./PostsCard";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../Redux/AppReducer/Action";

export const PostsList = () => {
  const { Posts} = useSelector(
    (store) => store.AppReducer
  );

  const [posts, setPosts] = useState([]);

  const dispatch=useDispatch();

  useEffect(() => {
    setPosts(Posts);
    },[Posts]);

  useEffect(() => {
  dispatch(getPosts());
  //eslint-disable-next-line
  },[]);

  // useEffect(()=>{
  //   setPosts(data);
  // },[]);
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
