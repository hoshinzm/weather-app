export default function WeatherScreen() {
    const [weather, setWeathers] = useState([]);
  
    useEffect(() => {
      //それぞれの地域ごとに天気情報を取得
      TotalUri.forEach((info) => {
        getWeathers(info);
      });
    }, []);
    //天気情報を取得
    const getWeathers = async (info) => {
      //APIで非同期処理を実行
      const response = await axios.get(info.uri);
      //取得したデータから天気情報を取得
      const uriData = response.data.weather;
      //天気情報に地域名を追加
      uriData[0].name = info.name;
      //weatherに天気情報・地域名を設定する
      setW