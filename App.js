import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FirstScreen from "./src/component/FirstScreen";
import { Button, TouchableOpacity,Image,View,Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";



const stack = createStackNavigator()

export default function  App () {
    return(
    <NavigationContainer>
        <stack.Navigator>
        <stack.Screen  name="FirstScreen" component={FirstScreen} backgroundColor="#1BA9FF" 
 options={({  }) => ({
  title: 'Chat',
  headerLeft: () => (
    <TouchableOpacity>
      <Image
        source={require('/assets/arrow.png')}
        style={{ width: 35, height: 35 ,marginHorizontal:20 }}
      />
    </TouchableOpacity>
  ),
  headerRight: () => (
    <TouchableOpacity>
      <Image
        source={require('/assets/cart.png')}
        style={{ width: 35, height: 35,marginHorizontal:20 }}
      />
    </TouchableOpacity>
  ),
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontSize:20,
  },
  headerStyle: {
    backgroundColor: '#1BA9FF',
    height: 50,
  },
  
  
})}

       />
        </stack.Navigator>
    </NavigationContainer>
    );
};



