import * as React from "react";
import {ChakraProvider, CSSReset} from "@chakra-ui/core";

import theme from "./theme";
import HomeScreen from "./screens/Home";

export const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <HomeScreen />
  </ChakraProvider>
);
