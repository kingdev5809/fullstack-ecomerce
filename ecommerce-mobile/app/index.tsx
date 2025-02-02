import { FlatList } from "react-native";
import prodcts from "@/assets/products.json";
import { ProductCard } from "@/components";

export default function HomeScreen() {
  return (
    <FlatList
      data={prodcts}
      numColumns={2}
      contentContainerClassName="gap-2 max-w-[960px] mx-auto w-full"
      columnWrapperClassName="gap-2"
      renderItem={({ item }) => <ProductCard product={item} />}
    />
  );
}
