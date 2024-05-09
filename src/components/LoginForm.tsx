// components/LoginForm.js
"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import TextInput from "./TextInput";
import { Box, Button, Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const LoginForm = () => {
  const schema = yup
    .object({
      email: yup.string().required(),
      password: yup.string().required()
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({
    defaultValues: {
      email: "",
      password: ""
    },
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: any) => {
    console.log(data);
    signIn("credentials", { ...watch(), redirect: true, callbackUrl: "/" });
  };
  const [passwordType, setPasswordType] = useState<string>("password");
  const handlePasswordType = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"20px"}
        width={["100%", "90%"]}
        m={"auto"}
      >
        <Box w={"100%"}>
          <TextInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            formErrorMessage={errors?.email?.message}
          />
        </Box>
        <Box w={"100%"}>
          <TextInput
            label="Password"
            type={passwordType}
            withIcon={true}
            onClick={handlePasswordType}
            placeholder="Enter your password"
            formErrorMessage={errors?.password?.message}
            {...register("password")}
          />
        </Box>
        <Box w={"100%"} textAlign={"center"}>
          <Button
            bg="blue100"
            color={"#fff"}
            size="md"
            width={"100%"}
            _hover={{ bg: "blue100" }}
            type="submit"
          >
            Log In
          </Button>
        </Box>
      </Flex>
    </form>
  );
};
export default LoginForm;
