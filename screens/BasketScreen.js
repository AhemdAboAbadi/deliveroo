import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { removeFromBasket, selectBasketItems } from "../features/basketSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const BasketTotal = useSelector(selectBasketItems);
  const restaurant = useSelector(selectBasketItems);
  const items = useSelector(selectBasketItems);
  const navigate = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((result, item) => {
      (result[item.id] = result[item.id] || []).push(item);
      return result;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400 ">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigate.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1"> Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]"> Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => {
            return (
              <View
                key={key}
                className="flex-row items-center space-x-3 bg-white py-2 px-5"
              >
                <Text className="text-[#00CCBB]">{items.length} x</Text>
                <Image
                  source={{
                    uri:
                      urlFor(items[0]?.image).url() ||
                      "https://links.papareact.com/wru",
                  }}
                  className="h-7 w-7  p-4 rounded-full"
                />
                <Text className="flex-1">{items[0]?.name}</Text>

                <Text className="flex-1">
                  <Currency quantity={items[0]?.price} Currency="GBP" />
                </Text>
                <TouchableOpacity>
                  <Text
                    className="text-[#00CCBB] text-xs"
                    onPress={() => dispatch(removeFromBasket({ id: key }))}
                  >
                    {" "}
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-5">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={7} Currency="GBP" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">
              <Currency quantity={5.99} Currency="GBP" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className="font-extrabold">
              <Currency quantity={7 + 5.99} Currency="GBP" />
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigate.navigate("PreparingOrder")}
            className="rounded-lg bg-[#00CCBB] p-4"
          >
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
