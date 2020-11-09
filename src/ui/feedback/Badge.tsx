import {BoxProps, Box} from "@chakra-ui/core";
import React from "react";

const Badge: React.FC<BoxProps> = ({children, ...props}) => {
  return (
    <Box
      backgroundColor="rgba(255,255,255,0.2)"
      borderRadius={9999}
      color="white"
      fontSize="xs"
      fontWeight={600}
      paddingX={4}
      paddingY={1}
      textTransform="capitalize"
      width="fit-content"
      {...props}
    >
      {children}
    </Box>
  );
};

export default Badge;
