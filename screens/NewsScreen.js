// ニュース一覧画面

import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import Newskiji from "../component/Newskiji";
import axios from "axios"; // HTTPリクエストをするためのライブラリ
import { newsAPIKey } from "../env";

// manifestが利用できないため、env.jsからAPIKeyを取得する処理に変更
const URI = `https://newsapi.org/v2/top-headlines?country=jp&category=entertainment&apiKey=${newsAPIKey}`;

export default NewsScreen = ({ navigation }) => {
  const [news, setNews] = useState([]); // ニュース記事を保存するstate変数と、更新する関数を定義　const [state本体, stateを変える関数] = useState(初期値)

  // useEffect:画面が表示されたら処理開始
  useEffect(() => {
    getNews();
  }, []); // 空の依存配列を指定することで、初回レンダリング時のみ実行

  // ニュース情報を取得し、responseへ格納する
  const getNews = async () => {
    // 非同期関数
    const response = await axios.get(URI);
    // ニュース情報をstateのnewsに格納する
    setNews(response.data.articles);
  };

  // FlatList 配列情報を画面表示できるもの
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={news} // 表示するデータの配列指定
        renderItem={(
          { item } // 配列内の各データをどのように表示するのかを定義する関数
        ) => (
          <Newskiji
            imageuri={item.urlToImage}
            title={item.title}
            subtext={item.publishedAt}
            // 第一引数でどこに飛ぶのか、第二引数で詳細画面を表示するために必要な情報を設定
            onPress={() => navigation.navigate("詳細ページ", { article: item })} //App.js内で指定しているnameを指定
          />
        )}
        keyExtractor={(item, index) => index.toString()} // 各アイテムに一意のキーを割り当てるための関数。リストのアイテムが変更された際に判断できる
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // alignItems、justifyContentは必ず親に指定する
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
