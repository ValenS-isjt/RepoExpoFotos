import { Image } from "expo-image";
import { ImageSourcePropType } from "react-native";
import styles from "./styles/ImageViewer.styles";

type Props = {
  imgSource: ImageSourcePropType;
};

export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} style={styles.image} />;
}
