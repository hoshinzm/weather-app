import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import WeatherItem from "../component/WeatherItem";
import axios from "axios";
import { weatherApiKey } from "../env";

// 各地域のAPI情報
const Hokkaido = {
  name: "北海道",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Asahikawa&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${weatherApiKey}`,
};
const Touhoku = {
  name: "東北",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Yamagata&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${weatherApiKey}`,
};
const Kantou = {
  name: "関東",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Tokyo&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${weatherApiKey}`,
};
const Hokuriku = {
  name: "北陸",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Nagano&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${weatherApiKey}`,
};
const Toukai = {
  name: "東海",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Nagoya&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${weatherApiKey}`,
};
const Kinnki = {
  name: "近畿",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Osaka&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${weatherApiKey}`,
};
const Tyugoku = {
  name: "中国",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Hiroshima&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${weatherApiKey}`,
};
const sikoku = {
  name: "四国",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Matsuyama&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${weatherApiKey}`,
};
const Kyusyu = {
  name: "九州",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Ozu&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${weatherApiKey}`,
};
const Okinawa = {
  name: "沖縄",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Okinawa&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${weatherApiKey}`,
};

// 各地域のAPI情報を配列に格納
const TotalUri = [
  Hokkaido,
  Touhoku,
  Kantou,
  Hokuriku,
  Toukai,
  Kinnki,
  Tyugoku,
  sikoku,
  Kyusyu,
  Okinawa,
];

export default WeatherScreen = () => {
  const [weather, setWeathers] = useState([]);

  useEffect(() => {
    TotalUri.forEach((info) => {
      getWeathers(info);
    });
  }, []);

  const getWeathers = async (info) => {
    const response = await axios.get(info.uri);
    const uriData = response.data.weather;
    uriData[0].name = info.name;
    // ...はJavaScriptのスプレッド構文
    setWeathers((weather) => [...weather, uriData[0]]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={weather}
        renderItem={({ item }) => (
          <WeatherItem
            description={item.description}
            icon={item.icon}
            name={item.name}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
