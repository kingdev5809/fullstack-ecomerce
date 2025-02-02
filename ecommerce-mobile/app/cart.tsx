import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function CartScreen() {
  return (
    <View>
      <Text>Cart</Text>
      <Link href="/">
        <Button title="Go to Home" />
      </Link>
    </View>
  );
}
