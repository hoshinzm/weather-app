import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// ニュース記事を表示するコンポーネントの定義
export default Newskiji = ({ imageuri, title, subtext, onPress }) => {
  let data = new Date(subtext); // subtextを日付オブジェクトに変換

  // 年、月、日を取得
  let year = data.getFullYear();
  let month = data.getMonth() + 1;
  let day = data.getDate();

  let hiduke = year + "年" + month + "月" + day + "日"; // 年月日の形式で文字列を作成
  return (
    // ニュース記事全体がタップ可能なエリアになるTouchableOpacity
    // TouchableOpacityとonPressはセット
    <TouchableOpacity style={styles.box} onPress={onPress}>
      <View style={styles.moziBox}>
        {/* numberOfLines 表示する行数指定 */}
        <Text numberOfLines={3} style={styles.Text}>
          {title}
        </Text>
        {/* 日付を表示するTextコンポーネント */}
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
