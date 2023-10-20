import React from "react";
import { StyleSheet,View,Text,Image,Pressable } from "react-native";
import IconHome from "react-native-vector-icons/Octicons";
import Icon from "react-native-vector-icons/FontAwesome";

const Footer = () =>{
    return(
        <View style={{flexDirection:'row',backgroundColor:'#1ba9ff',height:'50px',position:'fixed',bottom:0}}>
            <Pressable>
                <Icon name='bars'
                    size={30}  style={{paddingRight:135,marginTop:8,marginHorizontal:10}}
                ></Icon>
            </Pressable>
           
            <Pressable>
            <IconHome name='home'
                    size={30}  style={{paddingRight:115,marginTop:8,marginHorizontal:10}}
                ></IconHome>
            </Pressable>
            <Pressable>
                <Image         source={require('/assets/back.png')}
        style={{ width: 30, height: 30,marginHorizontal:10 ,marginTop:7}}></Image>
            </Pressable>
        </View>
    )
}
export default Footer
