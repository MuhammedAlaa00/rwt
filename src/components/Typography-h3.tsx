import { Heading } from "@chakra-ui/react";
import React from "react";

function TypographyH3({ children }: { children: React.ReactNode }) {
  return (
    <Heading as={"h3"} color={"#1A202C"} fontWeight={"bold"}>
      {children}
    </Heading>
  );
}

export default TypographyH3;
