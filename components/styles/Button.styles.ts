import { StyleSheet } from "react-native";
import Colors from "../../app/styles/colors";

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
  buttonIcon: {
    paddingRight: 8,
  },
  primaryButtonContainer: {
    borderWidth: 4,
    borderColor: Colors.Secundario,
    borderRadius: 18,
  },
  primaryButton: {
    backgroundColor: "#fff",
  },
  primaryLabel: {
    color: Colors.Fondo,
  },
});

export default styles;
