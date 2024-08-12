// 画面遷移をコントロールするファイル

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NewsScreen from "./screens/NewsScreen";
import DetailScreen from "./screens/DetailScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ニュース" component={NewsScreen} />
        <Stack.Screen name="詳細ページ" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
