import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row justify-center flex pb-3  items-center mx-4 space-x-2">
        <Image
          className="h-7 w-7 bg-gray-300  rounded-full p-4"
          source={{
            uri: "https://links.papareact.com/wru",
          }}
        />
        <View className="flex-1 ">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" className="" />
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-3 flex-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon
            size={20}
            color="#00CCBB"
            className="absolute top-3 left-3"
          />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon size={20} color="#00CCBB" />
      </View>

      {/* Body */}

      <ScrollView
        className="bg-gray-100 "
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* catagories */}

        <Categories />

        {/* Feather Rows */}
        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our partners s"
        />
        <FeaturedRow
          id="1234"
          title="Tasty Dicesserts"
          description="Everyone's been enjoying these juicy desserts"
        />
        <FeaturedRow
          id="12345"
          title="Offers near you!"
          description="Why not support your local resturaunts tonight!"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
