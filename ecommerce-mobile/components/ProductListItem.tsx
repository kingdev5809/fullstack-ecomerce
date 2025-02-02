import { Text, View } from "react-native";
import { Button, ButtonText } from "./ui";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}
export function ProductCard({ product }: ProductCardProps) {
  return (
    <View>
      <Text>{product.name}</Text>
      <Button variant="outline">
        <ButtonText>Buy</ButtonText>
      </Button>
    </View>
  );
}
