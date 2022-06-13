import { Box, Container, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCart from "../Components/BlogCart";
import { fetchBlogPost } from "../Redux/blogs/action";

const Articles = () => {
  const blogs = useSelector((store) => store.blogReducer.blogs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogPost());
  }, [blogs?.length, dispatch]);
  return (
    <Container maxW={"3xl"}>
      <Box textAlign="center" py={{ base: 2, md: 10 }}>
        <Heading>Trending</Heading>
      </Box>
      <Box>
        <Flex>
          {blogs.length &&
            blogs.map((product) => {
              return <BlogCart key={product.id} blog={product} />;
            })}
        </Flex>
      </Box>
    </Container>
  );
};

export default Articles;
