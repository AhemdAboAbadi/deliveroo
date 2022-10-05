import { Text, TouchableOpacity, Image } from "react-native";

export default function CategoryCard({ imgURL, title }) {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{ uri: imgURL }} className="h-20 w-20" />
      <Text className="absolute bottom-1 left-1 text-white font-bold" >{title}</Text>
    </TouchableOpacity>
  );
}
