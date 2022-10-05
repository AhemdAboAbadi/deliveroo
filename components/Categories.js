import { Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: 10,
        paddingHorizontal: 15,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category Card */}
      <CategoryCard
        imgURL="https://links.papareact.com/gn7"
        title="Testing 1"
      />
      <CategoryCard
        imgURL="https://links.papareact.com/gn7"
        title="Testing 2 "
      />
      <CategoryCard
        imgURL="https://links.papareact.com/gn7"
        title="Testing 3 "
      />
      <CategoryCard
        imgURL="https://links.papareact.com/gn7"
        title="Testing 3 "
      />
      <CategoryCard
        imgURL="https://links.papareact.com/gn7"
        title="Testing 3 "
      />
      <CategoryCard
        imgURL="https://links.papareact.com/gn7"
        title="Testing 3 "
      />
      {/* <Text>Categories Hello </Text> */}
    </ScrollView>
  );
};

export default Categories;
