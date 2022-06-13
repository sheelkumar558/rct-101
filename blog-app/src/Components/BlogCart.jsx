import React from "react";
import {
  Box,
  useColorModeValue,
  Image,
  Center,
  md,
  Stack,
  Text,
  Heading,
  Avatar,
} from "@chakra-ui/react";

const BlogCart = (blog) => {
  return (
    <div>
      <Center my={6}>
        <Box
          maxW={"445px"}
          w="full"
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={md}
          p={6}
          overflow={"hidden"}
        >
          <Box>
            <Image src={`${blog.thumbnail_pic}`} />
          </Box>
          <Stack>
            <Text>Heading</Text>
            <Heading>{blog.title}</Heading>
            <Text>{blog.discription}</Text>
          </Stack>
          <Stack>
            <Text>Blog</Text>
            <Avatar src={`blog.autor.profile.pic`} alt={"Author"}></Avatar>
          </Stack>
        </Box>
      </Center>
    </div>
  );
};

export default BlogCart;
