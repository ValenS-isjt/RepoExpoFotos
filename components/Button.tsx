import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable, Text, View } from "react-native";
import styles from "./styles/Button.styles";

type Props = {
  label: string;
  theme?: "primary" | "secondary";
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  if (theme === "primary") {
    return (
      <View style={[styles.buttonContainer, styles.primaryButtonContainer]}>
        <Pressable
          style={[styles.button, styles.primaryButton]}
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, styles.primaryLabel]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}
