import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { View } from "react-native";
import styles from "../styles/index.styles";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Elige una foto" />
        <Button label="Usa esta foto" />
      </View>
    </View>
  );
}
