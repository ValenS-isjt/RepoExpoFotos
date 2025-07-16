import { StyleSheet } from "react-native";
import Colors from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Fondo,
    alignItems: "center",
    justifyContent: "center",
  },

  imageContainer: {
    flex: 1,
    paddingTop: 20,
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },

  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },

  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});

export default styles;
