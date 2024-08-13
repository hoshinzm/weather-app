// ニュース記事を取得

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default Newskiji = ({ imageuri, title, subtext, onPress }) => {
  let data = new Date(subtext);
  let year = data.getFullYear();
  let month = data.getMonth();
  let day = data.getDate();
  let hiduke = year + "年" + month + "月" + day + "日";

  return (
    // TouchableOpacityとonPressはセット
    <TouchableOpacity style={styles.box} onPress={onPress}>
      <View style={styles.moziBox}>
        {/* numberOfLines 表示する行数指定 */}
        <Text numberOfLines={3} style={styles.Text}>
          {title}
        </Text>
        <Text style={styles.subText}>{hiduke}</Text>
      </View>
      <View style={styles.gazoBox}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: imageuri,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: "100%",
    borderColor: "lightblue",
    backgroundColor: "white",
    borderWidth: 1,
    flexDirection: "row", //flexDirection 横並びにする場合はrowを指定 デフォルトは縦になる
  },
  moziBox: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  gazoBox: {
    width: 100,
    backgroundColor: "gray",
  },
  Text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "black",
  },
});
