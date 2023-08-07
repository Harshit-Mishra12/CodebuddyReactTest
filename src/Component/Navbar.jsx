import {
  Box,
  HStack,
  Image,
  Text,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import profile from "../Assets/profile.jpeg";
import "../Constants/index.css";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./navbar.module.css";
import ProfileIcon from "./Posts/ProfileIcon";
import { useDispatch, useSelector } from "react-redux";

const NavCategory = [
  {
    id: 1,
    category_name:JSON.parse(localStorage.getItem("isAuth")) ? "Logout" : "SignUp",
    route_name: JSON.parse(localStorage.getItem("isAuth")) ? "logout" : "",
  },
  {
    id: 2,
    category_name: "Posts",
    route_name: "posts",
  },
];

export const Navbar = () => {
  //eslint-disable-next-line
  const dispatch=useDispatch();
  // const [type, setType] = useState(NavCategory);
  const { isAuth} = useSelector(
    (store) => store.AuthReducer
  );

  const location = useLocation();
  const navigate = useNavigate();
  const currentRoute = location.pathname.substring(1);
  const [routeName, setRouteName] = useState("");

  useEffect(() => {
    if (isAuth) {
      NavCategory[0].category_name = "Logout";
      NavCategory[0].route_name = "logout";
    }
    else{
      NavCategory[0].category_name = "SignUp";
      NavCategory[0].route_name = "";
    }
  }, [isAuth]);


  useEffect(() => {
    setRouteName(currentRoute);
  }, [currentRoute]);

  const [isMobile] = useMediaQuery("(max-width: 768px)");
  var display=!isMobile ? "inline" : "none";
  const handlenavigate=(el)=>{

    if(el.category_name === "Logout")
    {
      dispatch({ type: 'GET_LOGOUT'});
      navigate("/");
    }
    else{
      navigate("/".concat(el.route_name));
    }

  }

  return (
    <>
      <Box
        w={"100%"}
        boxShadow={"md"}
        position={"sticky"}
        top={0}
        zIndex={"20"}
        bgColor="rgba(255, 255, 255, 0.97)"
      >
        <Flex
          w={"100%"}
          m={"auto"}
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack spacing={"10px"} w={"70%"}>
            {/* logo */}
            <Box flex={0.3}>
              <HStack onClick={() => navigate("/")}>
                <Box w="50px" height="50px">
                  <Image
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl5fvgjFctVZ9nK6m4FFLBg05-zRUT-sa-L24OPm1VuA&s"
                    }
                    height={"100%"}
                    width={"100%"}
                    alt="logo"
                    fallbackSrc={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl5fvgjFctVZ9nK6m4FFLBg05-zRUT-sa-L24OPm1VuA&s"
                    }
                    cursor="pointer"
                  />
                </Box>
                <Text display={display} fontSize={"sm"} fontWeight={"bold"} cursor={"pointer"}>
                  CODEBUDDY
                </Text>
              </HStack>
            </Box>

            {/* category */}
            <Box
              flex={0.7}

            >
              <HStack spacing={"10px"}>
                {NavCategory?.map((el, index) => (
                  <Box
                    key={index}
                    _hover={{
                      borderBottom: "3px solid blue",
                    }}
                    borderBottom={
                      routeName === String(el.route_name)
                        ? "3px solid blue"
                        : "3px solid #ffffff"
                    }
                    cursor="pointer"
                    transition="border-bottom 0.3s ease-in-out" // Add transition property
                    onClick={() => handlenavigate(el) }
                  >
                    <Text className={styles.tabs}>{el.category_name}</Text>
                  </Box>
                ))}
              </HStack>
            </Box>
          </HStack>

          <HStack w={"30%"} justifyContent="flex-end">
            <Box mr={4}>
             <ProfileIcon avatar={profile}/>
            </Box>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
