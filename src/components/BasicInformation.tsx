import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import SelectInput from "./SelectInput";
function BasicInformation() {
  const makes: { label: string; value: string }[] = [
    { label: "make1", value: "make1" },
    { label: "make2", value: "make2" },
    { label: "make3", value: "make3" }
  ];
  const models: { label: string; value: string }[] = [
    { label: "model1", value: "model1" },
    { label: "model2", value: "model2" },
    { label: "model3", value: "model3" }
  ];
  const currentYear = new Date().getFullYear();
  const years: { label: string; value: string }[] = [];
  for (let year = 2000; year <= currentYear; year++) {
    years.push({ label: year.toString(), value: year.toString() });
  }
  return (
    <Box
      boxShadow="xl"
      p="6"
      rounded="md"
      bg="white"
      width={["100%", "90%"]}
      m={"auto"}
    >
      <Flex
        gap={"16px"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        width={"100%"}
      >
        <SelectInput
          Options={makes}
          name="make"
          label="make"
          placeholder="select make"
        />
        <SelectInput
          Options={models}
          name="model"
          label="model"
          placeholder="select model"
        />
        <SelectInput
          Options={years}
          name="year"
          label="year"
          placeholder="select year"
        />
      </Flex>
    </Box>
  );
}
export default BasicInformation;
