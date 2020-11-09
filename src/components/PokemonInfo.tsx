import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  Text,
  Stack,
  Progress,
  Box,
} from "@chakra-ui/core";
import React from "react";

import {Pokemon} from "../types";

interface Props {
  pokemon: Pokemon;
}

const STATS_DICTIONARY: Record<keyof Pokemon["stats"], string> = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  spAttack: "Special Attack",
  spDef: "Special Defense",
  speed: "Speed",
  total: "Total",
};

const PokemonInfo: React.FC<Props> = ({pokemon}) => {
  return (
    <Tabs colorScheme={pokemon.types[0]} variant="soft-rounded">
      <TabList borderBottom={0} marginBottom={3}>
        <Tab>About</Tab>
        <Tab>Base Stats</Tab>
      </TabList>

      <TabPanels>
        <TabPanel paddingX={0}>
          <Stack spacing={3}>
            <table>
              <tbody>
                <tr>
                  <Text as="td" color="gray.500" width={32}>
                    Species
                  </Text>
                  <td>{pokemon.species}</td>
                </tr>
              </tbody>
            </table>
            <Heading fontSize="xl">Breeding</Heading>
            <table>
              <tbody>
                <tr>
                  <Text as="td" color="gray.500" width={32}>
                    Egg Cycle
                  </Text>
                  <td>{pokemon.types[0]}</td>
                </tr>
              </tbody>
            </table>
          </Stack>
        </TabPanel>
        <TabPanel paddingX={0}>
          <Box as="table" width="100%">
            <tbody>
              {Object.entries(pokemon.stats).map(([title, value]) => (
                <tr key={title}>
                  <Text as="td" color="gray.500" paddingY={1} width="40%">
                    {STATS_DICTIONARY[title as keyof Pokemon["stats"]]}
                  </Text>
                  <Text as="td" paddingY={1} width="15%">
                    {value}
                  </Text>
                  <Box as="td" paddingY={1} width="45%">
                    <Progress colorScheme={value >= 50 ? "green" : "red"} size="xs" value={value} />
                  </Box>
                </tr>
              ))}
            </tbody>
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default PokemonInfo;
