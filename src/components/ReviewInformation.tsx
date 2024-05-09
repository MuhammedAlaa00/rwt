import { Flex } from "@chakra-ui/react";
import React from "react";
import BasicInformation from "./BasicInformation";
import ImagesUpload from "./ImagesUpload";

function ReviewInformation() {
  return (
    <Flex flexDirection={"column"} gap={"48px"}>
      <BasicInformation />
      <ImagesUpload />
    </Flex>
  );
}

export default ReviewInformation;
