import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import LoginForm from "../components/LoginForm";
import TypographyH2 from "../components/Typography-h2";

function Login() {
  return (
    <Flex flexDirection={"column"} alignItems={"center"} gap={"64px"}>
      <Box>
        <TypographyH2>Login</TypographyH2>
      </Box>
      <Box width={["100%", "100%", "25%"]}>
        <LoginForm />
      </Box>
    </Flex>
  );
}

export default Login;
