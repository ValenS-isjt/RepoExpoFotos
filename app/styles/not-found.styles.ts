import { StyleSheet } from "react-native";
import Colors from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Fondo,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});

export default styles;
