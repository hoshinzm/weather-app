// ニュース一覧画面

import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import Newskiji from "../component/Newskiji";
import axios from "axios";
import { newsAPIKey } from "../env";

// manifestが利用できないため、env.jsからAPIKeyを取得する処理に変更
const URI = `https://newsapi.org/v2/top-headlines?country=jp&category=entertainment&apiKey=${newsAPIKey}`;

export default function NewsScreen({ navigation }) {
  const [news, setNews] = useState([]); // const [state本体, stateを変える関数] = useState(初期値)

  // useEffect:画面が表示されたら処理開始
  useEffect(() => {
    getNews();
  }, []);

  // ニュース情報を取得し、responseへ格納する
  const getNews = async () => {
    const response = await axios.get(URI);
    // ニュース情報をstateのnewsに格納する
    setNews(response.data.articles);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <Newskiji
            imageuri={item.urlToImage}
            title={item.title}
            subtext={item.publishedAt}
            onPress={() => navigation.navigate("詳細ページ")} //App.js内で指定しているnameを指定
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // alignItems、justifyContentは必ず親に指定する
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
