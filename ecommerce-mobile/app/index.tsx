import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Text>The Home Screen</Text>
      <Link href="/cart">
        <Button title="Go to Cart" />
      </Link>
      {/* <StatusBar style="dark" /> */}
    </View>
  );
}
