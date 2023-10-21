import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FirstScreen from "./src/component/FirstScreen";
import { Button, TouchableOpacity, Image, View, Text,TextInput } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import SecondScreen from "./src/component/SecondScreen";
import React from "react";
const stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          backgroundColor="#1BA9FF"
          options={({navigation}) => ({
            title: "Chat",
            headerLeft: () => (
              <TouchableOpacity >
                <Image
                  source={require("/assets/arrow.png")}
                  style={{ width: 35, height: 35, marginHorizontal: 20 }}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("SecondScreen")}>
                <Image
                  source={require("/assets/cart.png")}
                  style={{ width: 35, height: 35, marginHorizontal: 20 }}
                />
              </TouchableOpacity>
            ),
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontSize: 20,
            },
            headerStyle: {
              backgroundColor: "#1BA9FF",
              height: 50,
            },
          })}
        />
        <stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={() => ({
            title: null,
            headerStyle: {
              backgroundColor: "#1BA9FF",
              height: 50,
              
            },
            headerLeft: () => (
              <View style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={()=> navigation.navigate("FirstScreen")} >
                <Image
                  source={require("/assets/arrow.png")}
                  style={{ width: 35, height: 35, marginHorizontal: 30 }}
                />
                 </TouchableOpacity>

                <TextInput placeholder="Dây cáp USB" style={{backgroundColor:'#fff',marginLeft:-20,paddingLeft:40}} ></TextInput>
                <IconFontAwesome name="search" size={20} style={{marginLeft:-185,marginTop:10}}></IconFontAwesome>

              </View>
            ),
            headerRight: () => (
              <View style={{flexDirection:'row'}}>
                        <TouchableOpacity >
                <Image
                  source={require("/assets/cartadd.jpg")}
                  style={{ width: 35, height: 35}}
                />
 
              </TouchableOpacity>
              <TouchableOpacity >
                <IconFontAwesome name="ellipsis-h" size={20} color={'white'} style={{marginHorizontal:20,marginVertical:10}}></IconFontAwesome>
              </TouchableOpacity>
              </View>
            ),  
          })}
          ></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}
