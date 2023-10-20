import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Footer from "./Footer";

const FirstScreen = () => {
  const DATA = [
    {
      id: 1,
      source: require("/assets/ca_nau_lau.png"),
      Title: "Ca nấu lẩu, nấu mì mini...",
      shop: "Devang",
    },
    {
      id: 2,
      source: require("/assets/ga_bo_toi.png"),
      Title: "1Kg khô gà bơ tỏi",
      shop: "LTD Food           ",
    },
    {
      id: 3,
      source: require("/assets/xa_can_cau.png"),
      Title: "Xe cần cầu đa năng",
      shop: "Thế giới đồ chơi",
    },
    {
      id: 4,
      source: require("/assets/do_choi_dang_mo_hinh.png"),
      Title: "Đồ chơi dạng mô hình",
      shop: "Thế giới đồ chơi",
    },
    {
      id: 5,
      source: require("/assets/lanh_dao_gian_don.png"),
      Title: "Lãnh đạo đơn giản",
      shop: "Minh Long Book",
    },
    {
      id: 6,
      source: require("/assets/hieu_long_con_tre.png"),
      Title: "Hiểu lòng trẻ con",
      shop: "Minh Long Book",
    },
    {
      id: 7,
      source: require("/assets/trump 1.png"),
      Title: "Donal Trump Thiên tài lãnh đạo",
      shop: "Minh Long Book",
    },
  ];

  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        marginBottom: 7,
        borderTopWidth: "0.1px",
        borderTopColor: "grey",
      }}
    >
      <Image style={styles.image} source={item.source}></Image>
      <View style={{ flexDirection: "column", marginLeft: 15 }}>
        <Text style={styles.name}>{item.Title}</Text>
        <Text style={styles.name}>Shop <Text style={{fontWeight:'bold'}} >{item.shop}</Text></Text>
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          item.id === 1 ? styles.specialButton : null,
          item.id === 7 ? styles.specialButton2 : null,
        ]}
      >
        <Text style={{ color: "white" }}>Chat</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <Text style={styles.Title}>
        Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chát với shop!
      </Text>
      <SafeAreaView>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 14,
    marginHorizontal: 30,
    marginVertical: 10,
  },
  image: {
    width: 80,
    height: 75,
  },
  name: {
    fontSize: 13,
    marginVertical: 7,
  },
  button: {
    backgroundColor: "red",
    width: 100,
    height: 40,
    marginLeft: 40,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  specialButton: {
    marginLeft: 25,
  },
  specialButton2: {
    marginLeft: -17,
  },
});
export default FirstScreen;
