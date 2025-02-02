import { FlatList } from "react-native";
import prodcts from "@/assets/products.json";
import { ProductCard } from "@/components";

export default function HomeScreen() {
  return (
    <FlatList
      data={prodcts}
      renderItem={({ item }) => <ProductCard product={item} />}
    />
  );
}
