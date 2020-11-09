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
import {motion, useAnimation} from "framer-motion";
import {RiArrowLeftLine} from "react-icons/ri";

import {Pokemon} from "../types";
import Badge from "../ui/feedback/Badge";

import PokemonInfo from "./PokemonInfo";

interface Props extends Omit<DrawerProps, "children" | "isOpen" | "id"> {
  pokemon: Pokemon;
}

const PokemonDrawer: React.FC<Props> = ({onClose, pokemon}) => {
  const animation = useAnimation();

  React.useEffect(() => {
    async function animate() {
      await animation.start({x: 100, opacity: 0});
      await animation.start({x: 0, opacity: 1});
      await animation.start({rotateZ: -10});
      await animation.start({rotateZ: 10});
      await animation.start({rotateZ: 0});
    }

    animate();
  }, [animation]);

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
            <motion.div animate={animation} initial={{opacity: 0}} style={{zIndex: 1, originY: 1}}>
              <Image
                alignSelf="center"
                height={256}
                margin="auto"
                marginBottom={-3}
                maxWidth={256}
                src={pokemon.image}
                width="100%"
                zIndex={1}
              />
            </motion.div>
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
