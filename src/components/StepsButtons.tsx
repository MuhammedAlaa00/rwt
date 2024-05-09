import { useAdvertiseContext } from "@/providers/AdvertiseProvider";
import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

function StepsButtons({
  handleNextSteps,
  handlePrevSteps
}: {
  handleNextSteps: () => void;
  handlePrevSteps: () => void;
}) {
  return (
    <Flex flexDirection={"row-reverse"} gap={"24px"} mb={"64px"}>
      <Box>
        <Button
          bg={"blue100"}
          color={"#fff"}
          width={"200px"}
          height={"48px"}
          borderRadius={"12px"}
          _hover={{ bg: "blue100" }}
          _active={{ bg: "blue100" }}
          onClick={handleNextSteps}
        >
          Next
        </Button>
      </Box>
      <Box>
        <Button
          bg={"transparent"}
          color={"#000"}
          border={"1px solid #ddd"}
          width={"200px"}
          height={"48px"}
          borderRadius={"12px"}
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
          onClick={handlePrevSteps}
        >
          Previous
        </Button>
      </Box>
    </Flex>
  );
}

export default StepsButtons;
