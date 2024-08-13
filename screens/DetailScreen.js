import React from "react";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { StyleSheet } from "react-native";

export default DetailScreen = (props) => {
  const { route } = props; // propsからrouteオブジェクトを
  const { article } = route.params; // route.paramから取得。articleの中にニュース情報が入っている
  // WebViewを使用して、article.urlに指定されたWebページを表示
  return <WebView style={styles.container} source={{ uri: article.url }} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
