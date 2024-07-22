import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "green.50",
        color: "gray.800",
        fontWeight: "bold",
      },
    },
  },
});

export default theme;
