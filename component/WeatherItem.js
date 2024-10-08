import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// description: 天気の説明、icon: 天気アイコン、name: 都市名などを受け取る
export default WeatherItem = ({ description, icon, name }) => {
  return (
    <View style={styles.box}>
      <View style={styles.moziBox}>
        <Text style={styles.text}>{name}</Text>
      </View>

      <View style={styles.gazoBox}>
        <Image
          style={{ width: 95, height: 95 }}
          source={{ url: `http://openweathermap.org/img/wn/${icon}@2x.png` }} // iconから受け取ったアイコンIDを元にsourceで画像URLを指定
        />
        <Text style={styles.subText}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: "100%",
    borderColor: "lightblue",
    borderWidth: 1,
    flexDirection: "row",
  },

  gazoBox: {
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  moziBox: {
    flex: 1,
    padding: 35,
    justifyContent: "center",
  },

  text: {
    fontSize: 17,
  },

  subText: {
    fontSize: 14,
    color: "darkblue",
  },
});
