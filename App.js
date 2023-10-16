import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FirstScreen from "./src/component/FirstScreen";
import { Button, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

const stack = createStackNavigator()

export default function  App () {
    return(
    <NavigationContainer>
        <stack.Navigator>
        <stack.Screen  name="FirstScreen" component={FirstScreen} 
        options={{
          title: 'My home',
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              Icon="back"
              color="black"
            />
          ),
          
        }}/>
        </stack.Navigator>
    </NavigationContainer>
    );
};



