import {extendTheme} from "@chakra-ui/core";
import {theme} from "@chakra-ui/theme";

export default extendTheme({
  colors: {
    grass: theme.colors.green,
    electric: theme.colors.yellow,
    fire: theme.colors.orange,
    water: theme.colors.blue,
    psychic: theme.colors.purple,
    normal: theme.colors.gray,
  },
});
