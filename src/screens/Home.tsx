import * as React from "react";
import {Stack, Heading, SimpleGrid} from "@chakra-ui/core";
import {motion} from "framer-motion";

import PokemonThumbnail from "../components/PokemonThumbnail";
import {POKEMONS} from "../constants";
import {Pokemon} from "../types";
import PokemonDrawer from "../components/PokemonDrawer";

const HomeScreen: React.FC = () => {
  const [selected, setSelected] = React.useState<Pokemon | null>(null);

  return (
    <>
      <Stack padding={6} spacing={6}>
        <Heading fontWeight={800}>Pokedex</Heading>
        <SimpleGrid columns={2} gap={3}>
          {POKEMONS.map((pokemon, index) => (
            <motion.div
              key={pokemon.id}
              animate="visible"
              custom={index}
              initial="hidden"
              variants={{
                hidden: {opacity: 0, y: 100},
                visible: (index: number) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.25,
                  },
                }),
              }}
            >
              <PokemonThumbnail
                cursor="pointer"
                pokemon={pokemon}
                onClick={() => setSelected(pokemon)}
              />
            </motion.div>
          ))}
        </SimpleGrid>
      </Stack>
      {selected && <PokemonDrawer pokemon={selected} onClose={() => setSelected(null)} />}
    </>
  );
};

export default HomeScreen;
