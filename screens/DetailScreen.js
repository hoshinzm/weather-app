import React from "react";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { StyleSheet } from "react-native";

export default DetailScreen = (props) => {
  const { route } = props;
  const { article } = route.params; // articleの中にニュース情報が入っている

  return <WebView style={styles.container} source={{ uri: article.url }} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
