// 画面遷移をコントロールするファイル

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import NewsScreen from "./screens/NewsScreen";
import DetailScreen from "./screens/DetailScreen";
import WeatherScreen from "./screens/WeatherScreen";

//　画面遷移
const Stack = createStackNavigator();
//　タブで画面切り替え
const Tab = createBottomTabNavigator();

const NewsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ニュース" component={NewsScreen} />
      <Stack.Screen name="詳細ページ" component={DetailScreen} />
    </Stack.Navigator>
  );
};

const WeatherStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="天気予報" component={WeatherScreen} />
    </Stack.Navigator>
  );
};

const screenOption = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;
    //route.name タブの名前ごとにアイコンを設定
    if (route.name === "ニュース") {
      // iconNameに表示したい画像を設定
      iconName = "newspaper-o";
    } else if (route.name === "天気予報") {
      iconName = "sun-o";
    }
    return <FontAwesome name={iconName} size={size} color={color} />;
  },
});

export default App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen name="ニュース" component={NewsStack} />
        <Tab.Screen name="天気予報" component={WeatherStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
