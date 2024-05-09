import { Heading } from "@chakra-ui/react";
import React from "react";

function TypographyH2({ children }: { children: React.ReactNode }) {
  return (
    <Heading as={"h2"} color={"#000"} fontWeight={"bold"}>
      {children}
    </Heading>
  );
}

export default TypographyH2;
