"use client";
import React from "react";
import { Button, Grid, GridItem } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
function MainLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  return (
    <Grid
      templateAreas={`"header header" "main main"`}
      gridTemplateRows={"70px 1fr"}
      color={"#000"}
      gap="100px"
    >
      <GridItem
        bg="blue100"
        area={"header"}
        display={"flex"}
        justifyContent={"end"}
        alignItems={"center"}
      >
        {session && (
          <Button
            marginRight={"10px"}
            bg={"transparent"}
            color={"#fff"}
            _hover={{ bg: "transparent" }}
            onClick={() => signOut({ redirect: false })}
          >
            log out
          </Button>
        )}
      </GridItem>
      <GridItem area={"main"}>{children}</GridItem>
    </Grid>
  );
}
export default MainLayout;
