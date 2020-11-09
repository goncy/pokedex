import React from "react";
import {
  Drawer,
  Text,
  DrawerContent,
  DrawerOverlay,
  DrawerProps,
  Stack,
  Image,
  Heading,
} from "@chakra-ui/core";
import {Icon} from "@chakra-ui/core";
import {RiArrowLeftLine} from "react-icons/ri";

import {Pokemon} from "../types";
import Badge from "../ui/feedback/Badge";

import PokemonInfo from "./PokemonInfo";

interface Props extends Omit<DrawerProps, "children" | "isOpen" | "id"> {
  pokemon: Pokemon;
}

const PokemonDrawer: React.FC<Props> = ({onClose, pokemon}) => {
  return (
    <Drawer isOpen placement="right" size="lg" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent overflowY="auto">
          <Stack backgroundColor={`${pokemon.types[0]}.400`} color="white" padding={6} spacing={6}>
            <Stack isInline>
              <Icon as={RiArrowLeftLine} boxSize={6} onClick={onClose} />
            </Stack>
            <Stack spacing={3}>
              <Stack isInline alignItems="baseline" justifyContent="space-between">
                <Heading fontSize="3xl" fontWeight={800}>
                  {pokemon.name}
                </Heading>
                <Text fontWeight={800}>#{pokemon.id}</Text>
              </Stack>
              <Stack isInline>
                {pokemon.types.map((type) => (
                  <Badge key={type} fontSize="sm">
                    {type}
                  </Badge>
                ))}
              </Stack>
            </Stack>
            <Image
              alignSelf="center"
              marginBottom={-3}
              maxWidth="60vw"
              src={pokemon.image}
              zIndex={1}
            />
          </Stack>
          <Stack
            backgroundColor="white"
            borderRadius={24}
            marginTop={-12}
            padding={6}
            paddingTop={12}
          >
            <PokemonInfo pokemon={pokemon} />
          </Stack>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default PokemonDrawer;
