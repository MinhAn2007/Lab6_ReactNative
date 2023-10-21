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
  
  const SecondScreen = () => {

  const DATA = [
    {
      id:1,
      image:require('/assets/giacchuyen 1.png'),      
    },
    {
      id:2,
      image:require('/assets/daynguon 1.png'),      
    },
    {
      id:3,
      image:require('/assets/dauchuyendoipsps2 1.png'),      
    },
    {
      id:4,
      image:require('/assets/dauchuyendoi 1.png'),      
    },
    {
      id:5,
      image:require('/assets/carbusbtops2 1.png'),      
    },
    {
      id:6,
      image:require('/assets/daucam 1.png'),      
    },


  ];
  
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Image style={styles.image} source={item.image}></Image>
      <View style={{marginHorizontal:15}}>
      <Text style={{fontSize:15}}>Cáp chuyển từ Cổng {'\n'}USB sang PS2...</Text>
      <Image source={require('/assets/Group 4.png')} style={{height:15,width:150,marginVertical:7}}></Image>
      <View style={{flexDirection:'row'}}>
      <Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>69.000đ</Text>
      <Text style={{fontSize:14,color:'grey',textDecorationLine:'line-through',marginHorizontal:20}}> -39%</Text>
      </View>
      </View>

    </View>
  )

    return (
      <View>
      <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()} 
          numColumns={2}>
        </FlatList>
        <Footer />
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    image: {
      width: 145,
      height: 85,
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      margin: 1,
      borderWidth: 1,
      borderColor: '#FFFFFF',
      borderRadius: 5,
      marginVertical:5,
      marginHorizontal:5,
    },

  });
  export default SecondScreen;
  