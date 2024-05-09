"use client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  semanticTokens: {
    colors: {
      blue100: "#2196f3"
    }
  }
});
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
