import {Stack, Text, Image, StackProps} from "@chakra-ui/core";
import React from "react";

import {Pokemon} from "../types";
import Badge from "../ui/feedback/Badge";

interface Props extends StackProps {
  pokemon: Pokemon;
}

const PokemonThumbnail: React.FC<Props> = ({pokemon: {id, image, name, types}, ...props}) => {
  return (
    <Stack
      backgroundColor={`${types[0]}.300`}
      borderRadius={12}
      padding={4}
      position="relative"
      spacing={3}
      {...props}
    >
      <Stack align="center" direction="row" justify="space-between">
        <Text color="white" fontSize="lg" fontWeight="600">
          {name}
        </Text>
        <Text color={`${types[0]}.600`} marginLeft="auto">
          #{id}
        </Text>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Stack>
          {types.map((type) => (
            <Badge key={type}>{type}</Badge>
          ))}
        </Stack>
        <Image height={16} src={image} width={16} />
      </Stack>
    </Stack>
  );
};

export default PokemonThumbnail;
